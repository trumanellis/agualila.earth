<script>
  let { title = '', description = '', links = [], backLink = null } = $props();
</script>

<div class="cross-links">
  {#if title}
    <h3>{title}</h3>
  {/if}
  {#if description}
    <p>{description}</p>
  {/if}
  <ul>
    {#each links as link}
      <li><a href={link.href}>{link.label}</a>{#if link.note} — {link.note}{/if}</li>
    {/each}
  </ul>
  {#if backLink}
    <p style="margin-top: 12px;"><a href={backLink.href}>&larr; {backLink.label}</a></p>
  {/if}
</div>
