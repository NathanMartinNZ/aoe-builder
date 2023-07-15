<script lang="ts">
  import { resources } from "../../stores";
</script>

<h1>Resources</h1>

{#each $resources as resource(resource.name)}
  <div>
    {resource.name}
    {resource.amount}
  </div>
{/each}