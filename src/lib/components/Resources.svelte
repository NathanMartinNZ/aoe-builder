<script lang="ts">
  import { resources } from "../../stores";
</script>

<div class="flex gap-3">
  {#each $resources as resource(resource.name)}
    <div class="flex gap-1.5">
      <img src="{resource.icon}" alt="{resource.name}" class="icon" />
      {resource.amount}
    </div>
  {/each}
</div>