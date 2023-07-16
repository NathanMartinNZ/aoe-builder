<script lang="ts">
  import { onMount } from "svelte";
  import { jobs, unitsCreated, updateUnitsCreatedStatus } from "../../stores";

  // Periodically check for villagers ready to work
  onMount(() => {
    setInterval(() => {
      const villagersNewlyReadyToWork = $unitsCreated.filter((unit) => unit.name === "villager" && !unit.ready && new Date().setSeconds(new Date().getSeconds() + 0) >= unit.timeWhenReady).map((unit) => unit.id);
      console.log(villagersNewlyReadyToWork)
      if(villagersNewlyReadyToWork.length) {
        console.log('store')
        updateUnitsCreatedStatus(villagersNewlyReadyToWork)
      }
    }, 1000)
  })

  // Filter on villagers that don't have an assigned job and are ready to work
  $: villagersNotAssigned = $unitsCreated.filter((unit) => unit.name === "villager" && unit.job === null && unit.ready)
</script>

<h1>Assign Job</h1>

{#each $jobs as job(job.name)}
  <button on:click={() => console.log(job.name)}>
    <img src="{job.icon}" alt="{job.name}" />
    <span>{villagersNotAssigned.length}</span>
  </button>
{/each}

<button on:click={() => console.log(villagersNotAssigned)}>test</button>