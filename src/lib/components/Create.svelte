<script lang="ts">
  import { unitsAvailable, createUnit, unitsCreated, buildingsAvailable, addUnitCreatedAssignedJob, buildingsCreated, buildingJobObjects, interactableResourceObjects } from "../../stores";
</script>

<h1>Create</h1>

{#each $unitsAvailable as unit(unit.name)}
  <button on:click={() => createUnit(unit.name)}>
    <img class="icon" src="{unit.icon}" alt="{unit.name}" />
  </button>
{/each}

{#each $buildingsAvailable as building(building.name)}
  <button on:click={() => addUnitCreatedAssignedJob(building.name)}>
    <img class="icon" src="{building.icon}" alt="{building.name}" />
  </button>
{/each}

<button on:click={() => console.log($unitsCreated)}>units</button>
<button on:click={() => console.log($buildingsCreated)}>buildings</button>

<button on:click={() => console.log($interactableResourceObjects)}>unit objects</button>
<button on:click={() => console.log($buildingJobObjects)}>building objects</button>