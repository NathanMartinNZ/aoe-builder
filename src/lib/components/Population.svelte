<script lang="ts">
  import { population } from "../../stores";
</script>

<div class="flex gap-1.5">
  <img src="https://static.wikia.nocookie.net/ageofempires/images/3/3d/Aoe2de_population.png" alt="population" class="icon rounded-md" />
  <p>{$population.current}/{$population.limit}</p>
</div>