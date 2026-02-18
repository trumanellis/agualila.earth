<script>
  let { title = 'BioDome Build Guide', version = '' } = $props();
</script>

<footer>
  <p>{title}</p>
  {#if version}
    <p>{version} — <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons BY-SA 4.0</a></p>
  {/if}
</footer>
