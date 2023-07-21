<script lang="ts">
  import { unitsAvailable, createUnit, unitsCreated } from "../../stores";
</script>

<h1>Create</h1>

{#each $unitsAvailable as unit(unit.name)}
  <button on:click={() => createUnit(unit.name)}>
    <img class="icon" src="{unit.icon}" alt="{unit.name}" />
  </button>
{/each}

<button on:click={() => console.log($unitsCreated)}>Test</button>