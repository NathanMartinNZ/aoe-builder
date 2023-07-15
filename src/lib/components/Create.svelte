<script lang="ts">
  import { units, createUnit } from "../../stores";

  function handleCreateUnit() {

  }
</script>

<h1>Create</h1>

{#each $units as unit(unit.name)}
  <button on:click={() => createUnit(unit.name)}>
    <img src="{unit.icon}" alt="{unit.name}" />
  </button>
{/each}

<button on:click={() => console.log($units)}>Test</button>