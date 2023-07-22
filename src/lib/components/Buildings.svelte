<script lang="ts">
  import { buildingsCreated } from "../../stores";
</script>

<h1>Buildings</h1>

{#each $buildingsCreated as building(building.id)}
  <div>
    {building.name}
  </div>
{/each}