<script lang="ts">
  import { onMount } from "svelte";
  import { resourceJobs, unitsCreated, updateUnitsCreatedStatus, addUnitCreatedAssignedJob, interactableResourceObjects} from "../../stores";

  // Periodically check for villagers ready to work
  onMount(() => {
    setInterval(() => {
      const villagersNewlyReadyToWork = $unitsCreated.filter((unit) => unit.name === "villager" && !unit.ready && new Date().setSeconds(new Date().getSeconds() + 0) >= unit.timeWhenReady).map((unit) => unit.id);
      console.log(villagersNewlyReadyToWork)
      if(villagersNewlyReadyToWork.length) {
        console.log('store')
        updateUnitsCreatedStatus(villagersNewlyReadyToWork)
      }
    }, 588.23529411)
  })
</script>

<h1 class="text-xl mb-2">Assign Job</h1>

<div class="flex flex-wrap gap-1.5">
  {#each $resourceJobs as job(job.name)}
    <button on:click={() => addUnitCreatedAssignedJob(job.name)}>
      <img class="icon rounded-md" src="{job.icon}" alt="{job.name}" />
    </button>
  {/each}
</div>