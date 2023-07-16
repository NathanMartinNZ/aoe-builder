import { writable } from 'svelte/store';

const resources = writable([
	{ name: 'food', amount: 200 },
	{ name: 'wood', amount: 200 },
	{ name: 'gold', amount: 100 },
	{ name: 'stone', amount: 200 }
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
		income: null,
		incomeGenerationStartTime: new Date().setSeconds(new Date().getSeconds() + 0)
	}
]);

const createUnit = (unitName: string) => {
	unitsCreated.update((currentUnitsCreated) => {
		let resourceRequirementsMet = true;
		// Get unit details
		let unitsCreatedCopy = [...currentUnitsCreated];
		let newUnit: any;
		let unitDetails: any;
		let unsubscribe = unitsAvailable.subscribe((arr) => {
			const foundUnit = arr.find((unit) => unit.name === unitName);
			unitDetails = foundUnit;
		});
		unsubscribe();

		// Check if there are enough resources then update relevant resource amounts
		resources.update((currentResources) => {
			let resourcesCopy = [...currentResources];
			unitDetails?.cost.forEach((cost: { name: string; amount: number }) => {
				resourcesCopy.forEach((resource) => {
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

		// Update unit amount if resources requirements are met
		if (unitDetails && resourceRequirementsMet) {
			let date = new Date();
			newUnit = {
				id: crypto.randomUUID(),
				name: unitDetails.name,
				income: null,
				incomeGenerationStartTime: date.setSeconds(date.getSeconds() + unitDetails.ttb)
			};
			// Push new unit to array
			unitsCreatedCopy.push(newUnit);
		}
		return unitsCreatedCopy;
	});
};

export { resources, unitsAvailable, createUnit, unitsCreated };
