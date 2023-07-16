<script lang="ts">
  import { unitsCreated } from "../../stores";
</script>

<h1>Units</h1>

{#each $unitsCreated as unit(unit.id)}
  <div>
    {unit.name}
    {unit.jobId}
    {unit.ready}
  </div>
{/each}