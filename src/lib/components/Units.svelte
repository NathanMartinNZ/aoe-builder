<script lang="ts">
  import { unitsCreated, unitsAvailable, interactableResourceObjects, resourceJobs, buildingJobObjects, buildingsAvailable } from "../../stores";

  // Filter on units that don't have an assigned job and are ready to work
  $: unitsCreatedAndReady = $unitsCreated.filter((unit) => unit.name === "villager" && unit.ready)

  function getUnitIcon(unitName:string) {
    let unit = $unitsAvailable.find((unit:any) => unit.name === unitName)
    return unit ? unit.icon : ''
  }

  $: getUnitJobDetails = (jobId:string) => {
    let job:any
    let interactableResourceObject = $interactableResourceObjects.find((obj) => obj.id === jobId)
    if(interactableResourceObject) {
      job = $resourceJobs.find((obj) => obj.name === interactableResourceObject?.name)
    } else {
      let buildingJobObject = $buildingJobObjects.find((obj) => obj.id === jobId)
      if(buildingJobObject) {
        job = $buildingsAvailable.find((obj) => obj.name === buildingJobObject?.name)
      }
    }
    return job ? [job] : []
  }
</script>

<h1 class="text-xl mb-2">Units</h1>

<div class="flex flex-wrap gap-1.5 mb-4">
  {#each unitsCreatedAndReady as unit(unit.id)}
    <div class="relative">
      <img src="{getUnitIcon(unit.name)}" alt="{unit.name}" title="{unit.name}" class="icon rounded-md" />
      {#each getUnitJobDetails(unit.jobId) as jobDetails}
        <img src="{jobDetails.icon}" alt="{jobDetails.name}" title="{jobDetails.name}" class="icon-mini rounded-md absolute bottom-0 right-0" />
      {/each}
    </div>
  {/each}
</div>