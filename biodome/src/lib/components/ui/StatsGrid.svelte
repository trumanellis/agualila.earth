<script>
  let { stats = [] } = $props();
</script>

<div class="stats-grid">
  {#each stats as stat}
    <div class="stat-card">
      <div class="stat-card-value">{stat.value}</div>
      <div class="stat-card-label">{stat.label}</div>
    </div>
  {/each}
</div>
