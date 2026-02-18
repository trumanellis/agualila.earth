<script>
  let { items = [] } = $props();
</script>

<nav class="toc">
  <h3>Table of Contents</h3>
  <ol>
    {#each items as item}
      <li><a href="#{item.id}">{item.label}</a></li>
    {/each}
  </ol>
</nav>
