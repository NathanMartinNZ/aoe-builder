<script lang="ts">
  import { unitsCreated, unitsAvailable } from "../../stores";

  function getUnitIcon(unitName:string) {
    let unit = $unitsAvailable.find((unit:any) => unit.name === unitName)
    return unit ? unit.icon : ''
  }
</script>

<h1 class="text-xl mb-2">Units</h1>

<div class="flex flex-wrap gap-1.5 mb-4">
  {#each $unitsCreated as unit(unit.id)}
    <div>
      <img src="{getUnitIcon(unit.name)}" alt="{unit.name}" title="{unit.name}" class="icon rounded-md" />
      {unit.ready}
    </div>
  {/each}
</div>