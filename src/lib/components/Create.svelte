<script lang="ts">
  import { unitsAvailable, createUnit, unitsCreated, buildingsAvailable, addUnitCreatedAssignedJob, buildingsCreated, buildingJobObjects, interactableResourceObjects } from "../../stores";
</script>

<h1 class="text-xl mb-2">Create</h1>

<div class="flex flex-wrap gap-1.5 mb-4">
  {#each $unitsAvailable as unit(unit.name)}
    <button on:click={() => createUnit(unit.name)}>
      <img class="icon rounded-md" src="{unit.icon}" alt="{unit.name}" />
    </button>
  {/each}
  
  {#each $buildingsAvailable as building(building.name)}
    <button on:click={() => addUnitCreatedAssignedJob(building.name)}>
      <img class="icon rounded-md" src="{building.icon}" alt="{building.name}" />
    </button>
  {/each}
</div>