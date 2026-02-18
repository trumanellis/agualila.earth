<script>
  import { onMount } from 'svelte';

  let { brand = '', brandHref = '', sections = [], footerLinks = [] } = $props();
  let mobileOpen = $state(false);
  let activeId = $state('');

  function toggleMobile() {
    mobileOpen = !mobileOpen;
  }

  function closeMobile() {
    mobileOpen = false;
  }

  onMount(() => {
    document.body.style.marginLeft = '260px';

    const sectionEls = sections.flatMap(s => {
      const ids = [s.id];
      if (s.children) ids.push(...s.children.map(c => c.id));
      return ids;
    }).map(id => document.getElementById(id)).filter(Boolean);

    function onScroll() {
      let current = '';
      for (const el of sectionEls) {
        if (el.getBoundingClientRect().top <= 120) {
          current = el.id;
        }
      }
      activeId = current;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      document.body.style.marginLeft = '';
      window.removeEventListener('scroll', onScroll);
    };
  });
</script>

<button class="sidebar-toggle" class:open={mobileOpen} aria-label="Toggle navigation" onclick={toggleMobile}>
  <span></span><span></span><span></span>
</button>
<div class="sidebar-overlay" class:open={mobileOpen} onclick={closeMobile} role="presentation"></div>

<nav class="sidebar" class:open={mobileOpen}>
  {#if brandHref}
    <a href={brandHref} class="sidebar-brand">&larr; {brand}</a>
  {:else}
    <div class="sidebar-brand" style="cursor: default;">{brand}</div>
  {/if}
  <div class="sidebar-label">Contents</div>
  <div class="sidebar-outline">
    {#each sections as section}
      {#if section.children && section.children.length > 0}
        <details open={activeId === section.id || section.children.some(c => c.id === activeId)}>
          <summary
            class:active={activeId === section.id}
            onclick={(e) => { e.preventDefault(); document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' }); closeMobile(); }}
          >{section.label}</summary>
          <ul class="sidebar-sub">
            {#each section.children as child}
              <li><a href="#{child.id}" class:active={activeId === child.id} onclick={closeMobile}>{child.label}</a></li>
            {/each}
          </ul>
        </details>
      {:else}
        <a href="#{section.id}" class="sidebar-link" class:active={activeId === section.id} onclick={closeMobile}>{section.label}</a>
      {/if}
    {/each}
  </div>

  {#if footerLinks.length > 0}
    <div class="sidebar-footer">
      {#each footerLinks as link}
        <a href={link.href}>{link.label}</a>
      {/each}
    </div>
  {/if}
</nav>
