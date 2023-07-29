<script lang="ts">
  import "../../app.css"
  import Timer from "$lib/components/Timer.svelte";
  import Population from "$lib/components/Population.svelte";
  import Resources from "$lib/components/Resources.svelte";
  import Idle from "$lib/components/Idle.svelte";
  import Create from "$lib/components/Create.svelte";
  import AssignJob from "$lib/components/AssignJob.svelte";
  import Units from "$lib/components/Units.svelte";
  import Buildings from "$lib/components/Buildings.svelte";
</script>

<div class="container mx-auto flex flex-col">
  <div class="container flex gap-6 mb-6">
    <Resources />
    <Population />
    <Timer />
  </div>
  
  <div class="flex">
    <div class="container flex-1">
      <Idle />
      <Create />
      <AssignJob />
    </div>
  
    <div class="container flex-1">
      <Units />
      <Buildings />
    </div>
  </div>
</div>