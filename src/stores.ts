import { writable } from 'svelte/store';

const resources = writable([
	{ name: 'food', amount: 200 },
	{ name: 'wood', amount: 200 },
	{ name: 'gold', amount: 100 },
	{ name: 'stone', amount: 200 }
]);

const units = writable([
	{
		name: 'villager',
		cost: [{ name: 'food', amount: 50 }],
		ttb: 25,
		icon: 'https://static.wikia.nocookie.net/ageofempires/images/6/68/MaleVillDE.jpg',
		amountCreated: 3
	}
]);

const createUnit = (unitName: string) => {
	units.update((currentUnits) => {
		let resourceRequirementsMet = true;
		// Get unit
		let unitsCopy = [...currentUnits];
		let unit = unitsCopy.find((unit) => unit.name === unitName);

		// Check if there are enough resources then update relevant resources
		resources.update((currentResources) => {
			let resourcesCopy = [...currentResources];
			unit?.cost.forEach((cost) => {
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
		if (unit && resourceRequirementsMet) {
			unit.amountCreated = unit.amountCreated + 1;
		}
		return unitsCopy;
	});
};

export { resources, units, createUnit };
