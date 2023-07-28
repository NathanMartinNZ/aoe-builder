import { writable, type Writable } from 'svelte/store';

const population = writable({
	current: 3,
	limit: 5
});

const resources = writable([
	{
		name: 'food',
		amount: 200,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/5/5f/Aoe2de_food.png'
	},
	{
		name: 'wood',
		amount: 200,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/8/84/Aoe2de_wood.png'
	},
	{
		name: 'gold',
		amount: 100,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/4/49/Aoe2de_gold.png'
	},
	{
		name: 'stone',
		amount: 200,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/7/7d/Aoe2de_stone.png'
	}
]);

const buildingsAvailable = writable([
	{
		name: 'house',
		cost: [{ name: 'wood', amount: 25 }],
		populationIncrease: 5,
		ttb: 25,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/3/37/House_aoe2DE.png'
	},
	{
		name: 'lumber_camp',
		cost: [{ name: 'wood', amount: 100 }],
		populationIncrease: 0,
		ttb: 35,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/2/28/Lumber_camp_aoe2de.png',
		depotResourceObject: 'trees'
	},
	{
		name: 'gold_mining_camp',
		cost: [{ name: 'wood', amount: 100 }],
		populationIncrease: 0,
		ttb: 35,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/3/32/Mining_camp_aoe2de.png',
		depotResourceObject: 'gold_ore'
	},
	{
		name: 'stone_mining_camp',
		cost: [{ name: 'wood', amount: 100 }],
		populationIncrease: 0,
		ttb: 35,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/3/32/Mining_camp_aoe2de.png',
		depotResourceObject: 'stone_ore'
	}
]);

const buildingJobObjects: Writable<{ id: string; name: string; completionTime: number }[]> =
	writable([]);

const buildingsCreated: Writable<{ id: string; name: string; icon: string }[]> = writable([]);

const resourceJobs = writable([
	{
		name: 'sheep',
		resourceName: 'food',
		resourceRatePerSec: 0.33,
		resourceRatePerSecWithoutDepotBuilding: 0.33,
		totalResourceAvailable: 100,
		villagerCarryCapacity: 10,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/5/5a/Sheep_aoe2DE.png'
	},
	{
		name: 'trees',
		resourceName: 'wood',
		resourceRatePerSec: 0.39,
		resourceRatePerSecWithoutDepotBuilding: 0.2,
		totalResourceAvailable: 5000,
		villagerCarryCapacity: 10,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/c/c7/Trees_aoe2de.png'
	},
	{
		name: 'gold_ore',
		resourceName: 'gold',
		resourceRatePerSec: 0.38,
		resourceRatePerSecWithoutDepotBuilding: 0.19,
		totalResourceAvailable: 5000,
		villagerCarryCapacity: 10,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/4/49/Aoe2de_gold.png'
	},
	{
		name: 'stone_ore',
		resourceName: 'stone',
		resourceRatePerSec: 0.36,
		resourceRatePerSecWithoutDepotBuilding: 0.18,
		totalResourceAvailable: 5000,
		villagerCarryCapacity: 10,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/7/7d/Aoe2de_stone.png'
	}
]);

const interactableResourceObjects = writable([
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'sheep',
		remainingResources: 100,
		hasDepotBuilding: true
	},
	{
		id: crypto.randomUUID(),
		name: 'trees',
		remainingResources: 5000,
		hasDepotBuilding: false
	},
	{
		id: crypto.randomUUID(),
		name: 'gold_ore',
		remainingResources: 5000,
		hasDepotBuilding: false
	},
	{
		id: crypto.randomUUID(),
		name: 'stone_ore',
		remainingResources: 5000,
		hasDepotBuilding: false
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

const createBuilding = (buildingName: string) => {
	buildingsCreated.update((currentBuildingsCreated) => {
		let buildingsCreatedCopy = [...currentBuildingsCreated];
		let newBuilding;

		// Get building details
		let buildingDetails: any;
		let unsubscribeBuildings = buildingsAvailable.subscribe((arr) => {
			const foundBuilding = arr.find((building) => building.name === buildingName);
			buildingDetails = foundBuilding;
		});
		unsubscribeBuildings();

		newBuilding = {
			id: crypto.randomUUID(),
			name: buildingDetails.name,
			icon: buildingDetails.icon
		};
		buildingsCreatedCopy.push(newBuilding);

		// Set interactableResourceObject hasDepotBuilding to true if resource depot building
		interactableResourceObjects.update((currentInteractableResourceObjects) => {
			let interactableResourceObjectsCopy = [...currentInteractableResourceObjects];
			let interactableResourceObject = interactableResourceObjectsCopy.find(
				(obj) => obj.name === buildingDetails.depotResourceObject
			);
			if (interactableResourceObject && !interactableResourceObject.hasDepotBuilding) {
				interactableResourceObject.hasDepotBuilding = true;
			}
			return interactableResourceObjectsCopy;
		});

		// Increment population if applicable
		population.update((currentPopulation) => {
			let populationCopy = currentPopulation;
			populationCopy.limit += buildingDetails.populationIncrease;
			return populationCopy;
		});

		return buildingsCreatedCopy;
	});
};

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

		// Calculate addtional seconds needed to create unit from building
		let date = new Date();
		let queue = unitsCreatedCopy.filter(
			(unitCreated) => unitCreated.name === unitDetails.name && !unitCreated.ready
		);
		if (queue.length) {
			let lastToCreateTime = Math.max(...queue.map((q) => q.timeWhenReady));
			date = new Date(lastToCreateTime);
			console.log(queue, lastToCreateTime);
		}

		// Create new unit
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

		// Continue if unit is available
		if (unitCreatedReadyForWork) {
			// Assign resource job
			// Update resource jobId for unitCreatedReadyForWork
			let resourceJob: any;
			let unsubscribeInteractableResourceObjects = interactableResourceObjects.subscribe((arr) => {
				const foundResourceJob = arr.find((obj) => obj.name === job);
				resourceJob = foundResourceJob;
			});
			unsubscribeInteractableResourceObjects();
			if (resourceJob) {
				unitCreatedReadyForWork.jobId = resourceJob.id;
				return currentUnitsCreated;
			}

			// Assign building job
			// Get building details
			let buildingDetails: any;
			let unsubscribeBuildings = buildingsAvailable.subscribe((arr) => {
				const foundBuilding = arr.find((building) => building.name === job);
				buildingDetails = foundBuilding;
			});
			unsubscribeBuildings();

			// Stop if no building details found
			if (!buildingDetails) {
				return currentUnitsCreated;
			}

			// Create buildingJobObject
			let newBuildingJobObjectId = crypto.randomUUID();
			buildingJobObjects.update((currentBuildingJobObjects) => {
				let buildJobObjectsCopy = [...currentBuildingJobObjects];
				buildJobObjectsCopy.push({
					id: newBuildingJobObjectId,
					name: job,
					completionTime: new Date().setSeconds(new Date().getSeconds() + buildingDetails.ttb)
				});
				return buildJobObjectsCopy;
			});

			// Check if there are enough resources then update relevant resource amounts
			let resourceRequirementsMet = true;
			resources.update((currentResources) => {
				let resourcesCopy: any;
				// Check resource requirements
				resourcesCopy = [...currentResources];
				buildingDetails?.cost.forEach((cost: { name: string; amount: number }) => {
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

			// Assign job if resource requirements are met
			if (resourceRequirementsMet) {
				unitCreatedReadyForWork.jobId = newBuildingJobObjectId;
			}
		}

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
					// Find job object for unitCreated
					if (unitCreated.jobId === job.id) {
						// Check if job has a depot building (meaning faster resource gathering)
						if (job.hasDepotBuilding) {
							// Increment resourcesGathered with the resourceRatePerSec
							unitCreated.resourcesGathered =
								unitCreated.resourcesGathered + resourceJobDetails.resourceRatePerSec;
						} else {
							// Increment resourcesGathered with the resourceRatePerSecWithoutDepotBuilding
							unitCreated.resourcesGathered =
								unitCreated.resourcesGathered +
								resourceJobDetails.resourceRatePerSecWithoutDepotBuilding;
						}
						// Decrement remainingResources with the resourceRatePerSec
						job.remainingResources = job.remainingResources - resourceJobDetails.resourceRatePerSec;
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
					// If resources depleted from object, unassign jobs and delete object from interactableResourceObjects
					if (job.remainingResources <= 0) {
						console.log(job.id, 'depleted resources');
						// Unassign from job
						const unitsAssignedToDepletedJob = unitsCreatedCopy.filter(
							(unit) => unit.jobId === job.id
						);
						console.log(unitsAssignedToDepletedJob);
						unitsAssignedToDepletedJob.forEach((u) => (u.jobId = ''));
						// Delete object
						interactableResourceObjects.update((currentInteractableResourceObjects) => {
							let interactableResourceObjectsCopy = [...currentInteractableResourceObjects];
							return interactableResourceObjectsCopy.filter(
								(interactableResourceObject) => interactableResourceObject.id !== job.id
							);
						});
					}
				});
			});

			return unitsCreatedCopy;
		});

		// Create buildings that have just been finished
		buildingJobObjects.update((currentBuildingObjects) => {
			let buildingObjectsCopy = [...currentBuildingObjects];
			let finishedBuildings = buildingObjectsCopy.filter(
				(building) => building.completionTime <= new Date().setSeconds(new Date().getSeconds() + 0)
			);

			// Create building(s)
			finishedBuildings.forEach((finishedBuilding) => {
				createBuilding(finishedBuilding.name);
				// Unassign units from building job
				unitsCreated.update((currentUnitsCreated) => {
					let unitsCreatedCopy = [...currentUnitsCreated];
					let unitsCreatedAssignedBuildingJob = unitsCreatedCopy.filter(
						(unitCreated) => unitCreated.jobId === finishedBuilding.id
					);
					unitsCreatedAssignedBuildingJob.forEach(
						(unitCreatedAssignedBuilding) => (unitCreatedAssignedBuilding.jobId = '')
					);
					return unitsCreatedCopy;
				});
			});

			let remainingBuildings = buildingObjectsCopy.filter(
				(building) => building.completionTime > new Date().setSeconds(new Date().getSeconds() + 0)
			);

			return remainingBuildings;
		});
	}, 588.23529411);

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
	addUnitCreatedAssignedJob,
	buildingsAvailable,
	buildingsCreated,
	buildingJobObjects
};
