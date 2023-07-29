<script lang="ts">
  import { resources, resourceJobs, unitsCreated, interactableResourceObjects } from "../../stores";

  $: getUnitCountOnResource = (resourceName:string) => {
    let resourceJobNames = $resourceJobs.filter((obj) => obj.resourceName === resourceName).map((obj) => obj.name)
    let jobIdsOfInteractableResourceObjects:`${string}-${string}-${string}-${string}-${string}`|string[] = $interactableResourceObjects.filter((obj) => resourceJobNames.includes(obj.name)).map((obj) => obj.id)
    let unitsCreatedOnResource = $unitsCreated.filter((unit) => unit.name === "villager" && jobIdsOfInteractableResourceObjects.includes(unit.jobId) && unit.ready)
    return unitsCreatedOnResource ? unitsCreatedOnResource.length : 0
  }
</script>

<div class="flex gap-3">
  {#each $resources as resource(resource.name)}
    <div class="flex gap-1.5">
      <div class="relative">
        <img src="{resource.icon}" alt="{resource.name}" class="icon rounded-md" />
        <span class="absolute bottom-0 right-0 text-xs bg-black text-white px-1 rounded-sm">{getUnitCountOnResource(resource.name)}</span>
      </div>
      {resource.amount}
    </div>
  {/each}
</div>