<script>
  let { title, tagline = '', viewerUrl = '', stats = [] } = $props();
</script>

<header class="header">
  <h1>{title}</h1>
  {#if tagline}
    <p class="tagline">{tagline}</p>
  {/if}
  <div style="margin-bottom: 24px; display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
    {#if viewerUrl}
      <a href={viewerUrl} class="download-btn" style="text-decoration: none;">Explore 3D Model</a>
    {/if}
    <button class="download-btn" onclick={() => window.print()} style="background: transparent; color: rgba(255,255,255,0.7); border: 2px solid rgba(255,255,255,0.3);">Download as PDF</button>
  </div>
  {#if stats.length > 0}
    <div class="header-stats">
      {#each stats as stat}
        <div class="stat">
          <span class="stat-value">{stat.value}</span>
          <span class="stat-label">{stat.label}</span>
        </div>
      {/each}
    </div>
  {/if}
</header>
