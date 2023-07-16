import { writable } from 'svelte/store';

const population = writable({
	current: 3,
	limit: 5
});

const resources = writable([
	{ name: 'food', amount: 200 },
	{ name: 'wood', amount: 200 },
	{ name: 'gold', amount: 100 },
	{ name: 'stone', amount: 200 }
]);

const resourceJobs = writable([
	{
		name: 'sheep',
		resourceName: 'food',
		resourceRatePerSec: 0.9,
		totalResourceAvailable: 100,
		villagerCarryCapacity: 10,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/5/5a/Sheep_aoe2DE.png'
	}
]);

const interactableResourceObjects = writable([
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100
	}
]);

const unitsAvailable = writable([
	{
		name: 'villager',
		cost: [{ name: 'food', amount: 50 }],
		ttb: 25,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/6/68/MaleVillDE.jpg'
	}
]);

const unitsCreated = writable([
	{
		id: crypto.randomUUID(),
		name: 'villager',
		jobId: '',
		resourcesGathered: 0,
		ready: true,
		timeWhenReady: new Date().setSeconds(new Date().getSeconds() + 0)
	},
	{
		id: crypto.randomUUID(),
		name: 'villager',
		jobId: '',
		resourcesGathered: 0,
		ready: true,
		timeWhenReady: new Date().setSeconds(new Date().getSeconds() + 0)
	},
	{
		id: crypto.randomUUID(),
		name: 'villager',
		jobId: '',
		resourcesGathered: 0,
		ready: true,
		timeWhenReady: new Date().setSeconds(new Date().getSeconds() + 0)
	}
]);

const createUnit = (unitName: string) => {
	unitsCreated.update((currentUnitsCreated) => {
		let newUnit: any;
		let resourceRequirementsMet = true;

		// Get unit details
		let unitsCreatedCopy = [...currentUnitsCreated];
		let unitDetails: any;
		let unsubscribeUnits = unitsAvailable.subscribe((arr) => {
			const foundUnit = arr.find((unit) => unit.name === unitName);
			unitDetails = foundUnit;
		});
		unsubscribeUnits();

		// Return original unitsCreated array if no unit details were found
		if (!unitDetails) {
			return currentUnitsCreated;
		}

		// Check if population limit is hit
		let populationLimitHit = false;
		let unsubscribePopulation = population.subscribe((obj) => {
			if (obj.current === obj.limit) {
				populationLimitHit = true;
			}
		});
		unsubscribePopulation();

		// Return original unitsCreated array if population limit is hit
		if (populationLimitHit) {
			return currentUnitsCreated;
		}

		// Check if there are enough resources then update relevant resource amounts
		resources.update((currentResources) => {
			let resourcesCopy: any;
			// Check resource requirements
			resourcesCopy = [...currentResources];
			unitDetails?.cost.forEach((cost: { name: string; amount: number }) => {
				resourcesCopy.forEach((resource: any) => {
					if (resource.name === cost.name) {
						if (resource.amount - cost.amount >= 0) {
							resource.amount = resource.amount - cost.amount;
						} else {
							resourceRequirementsMet = false;
						}
					}
				});
			});
			return resourcesCopy;
		});

		// Return original unitsCreated array if resource requirements not met
		if (!resourceRequirementsMet) {
			return currentUnitsCreated;
		}

		// Increment current population count
		population.update((currentPopulation) => {
			return {
				current: currentPopulation.current + 1,
				limit: currentPopulation.limit
			};
		});

		console.log(populationLimitHit);

		let date = new Date();
		newUnit = {
			id: crypto.randomUUID(),
			name: unitDetails.name,
			jobId: '',
			resourcesGathered: 0,
			ready: false,
			timeWhenReady: date.setSeconds(date.getSeconds() + unitDetails.ttb)
		};
		unitsCreatedCopy.push(newUnit);

		return unitsCreatedCopy;
	});
};

const updateUnitsCreatedStatus = (unitIds: string[]) => {
	unitsCreated.update((currentUnitsCreated) => {
		let currentUnitsCreatedCopy = [...currentUnitsCreated];

		unitIds.forEach((unitId) => {
			let unitToUpdate = currentUnitsCreatedCopy.find((unit) => unit.id === unitId);
			if (unitToUpdate) {
				unitToUpdate.ready = true;
			}
		});

		return currentUnitsCreated;
	});
};

const addUnitCreatedAssignedJob = (job: string) => {
	unitsCreated.update((currentUnitsCreated) => {
		let currentUnitsCreatedCopy = [...currentUnitsCreated];
		let unitCreatedReadyForWork = currentUnitsCreatedCopy.find(
			(unit) => unit.name === 'villager' && unit.jobId === '' && unit.ready
		);
		// Assign resource job
		if (unitCreatedReadyForWork) {
			// Update resource jobId for unitCreatedReadyForWork
			let resourceJob: any;
			let unsubscribeInteractableResourceObjects = interactableResourceObjects.subscribe((arr) => {
				const foundResourceJob = arr.find((obj) => obj.name === job);
				resourceJob = foundResourceJob;
			});
			unsubscribeInteractableResourceObjects();
			unitCreatedReadyForWork.jobId = resourceJob.id;
		}
		// TODO: Assign building job

		return currentUnitsCreated;
	});
};

const gameTick = writable(0, () => {
	let interval = setInterval(() => {
		// Increment game timer by 1 second
		gameTick.update((value) => value + 1);

		// Increment villager's resourcesGathered value
		let interactableResourceObjectsArr: any;
		let unsubscribeInteractableResourceObjects = interactableResourceObjects.subscribe(
			(arr: any) => {
				interactableResourceObjectsArr = arr;
			}
		);
		unsubscribeInteractableResourceObjects();

		let resourceJobsArr: any;
		let unsubscribeResourceJobs = resourceJobs.subscribe((arr: any) => {
			resourceJobsArr = arr;
		});
		unsubscribeResourceJobs();

		unitsCreated.update((currentUnitsCreated) => {
			let unitsCreatedCopy = [...currentUnitsCreated];
			// Loop over unitsCreated
			unitsCreatedCopy.forEach((unitCreated) => {
				// Loop over resourceJobs to find match
				interactableResourceObjectsArr.forEach((job: any) => {
					const resourceJobDetails = resourceJobsArr.find(
						(resourceJob: any) => resourceJob.name === job.name
					);
					// Increment resourcesGathered with the resourceRatePerSec
					if (unitCreated.jobId === job.id) {
						unitCreated.resourcesGathered =
							unitCreated.resourcesGathered + resourceJobDetails.resourceRatePerSec;
					}
					// If resourcesGathered is over the storage limit, deposit into resources and reset resourcesGathered to 0
					if (unitCreated.resourcesGathered >= resourceJobDetails.villagerCarryCapacity) {
						resources.update((currentResources) => {
							// Increment resource amount
							let resourcesCopy = [...currentResources];
							let resource = resourcesCopy.find(
								(resource) => resource.name === resourceJobDetails.resourceName
							);

							if (resource) {
								// Increment resource amount
								resource.amount = resource.amount + Math.floor(unitCreated.resourcesGathered);

								// Set resourcesGathered to 0
								unitCreated.resourcesGathered = 0;
							}

							return resourcesCopy;
						});
					}
				});
			});

			return unitsCreatedCopy;
		});
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});

export {
	gameTick,
	population,
	resources,
	resourceJobs,
	interactableResourceObjects,
	unitsAvailable,
	createUnit,
	unitsCreated,
	updateUnitsCreatedStatus,
	addUnitCreatedAssignedJob
};
