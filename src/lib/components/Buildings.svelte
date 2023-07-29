<script lang="ts">
  import { buildingsCreated, buildingsAvailable } from "../../stores";

  function getBuildingIcon(buildingName:string) {
    let building = $buildingsAvailable.find((building:any) => building.name === buildingName)
    return building ? building.icon : ''
  }
</script>

<h1 class="text-xl mb-2">Buildings</h1>

<div class="flex flex-wrap gap-1.5">
  {#each $buildingsCreated as building(building.id)}
    <img src="{getBuildingIcon(building.name)}" alt="{building.name}" title="{building.name}" class="icon rounded-md" />
  {/each}
</div>