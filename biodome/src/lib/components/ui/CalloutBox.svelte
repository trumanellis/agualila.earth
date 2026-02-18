<script>
  let { variant = 'warning', title = '', children } = $props();
</script>

<div class="{variant}-box">
  {#if title}
    <div class="callout-title">{title}</div>
  {/if}
  {@render children()}
</div>
