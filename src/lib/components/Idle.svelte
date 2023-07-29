<script lang="ts">
  import { unitsCreated } from "../../stores";

  // Filter on villagers that don't have an assigned job and are ready to work
  $: villagersNotAssigned = $unitsCreated.filter((unit) => unit.name === "villager" && unit.jobId === '' && unit.ready)
</script>

<h1 class="text-xl mb-4 {villagersNotAssigned.length ? "text-orange-700" : "text-green-700"}">Idle ({villagersNotAssigned.length})</h1>