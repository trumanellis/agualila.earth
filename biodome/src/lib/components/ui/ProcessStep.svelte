<script>
  let { number, title = '', children } = $props();
</script>

<div class="process-step">
  <div class="step-number">{number}</div>
  <div class="step-content">
    {#if title}
      <h4>{title}</h4>
    {/if}
    {@render children()}
  </div>
</div>
