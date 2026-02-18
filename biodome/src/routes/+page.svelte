<script>
  import { onMount } from 'svelte';
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import Harvesting from '$lib/components/techniques/Harvesting.svelte';
  import Materials from '$lib/components/techniques/Materials.svelte';
  import Treatment from '$lib/components/techniques/Treatment.svelte';
  import Structural from '$lib/components/techniques/Structural.svelte';
  import WallsStrawClay from '$lib/components/techniques/WallsStrawClay.svelte';
  import FireSafety from '$lib/components/techniques/FireSafety.svelte';
  import LivingRoof from '$lib/components/techniques/LivingRoof.svelte';
  import Finishing from '$lib/components/techniques/Finishing.svelte';
  import MoistureManagement from '$lib/components/techniques/MoistureManagement.svelte';

  const galleryImages = [
    { src: '/assets/Colony.png', alt: 'BioDome Colony', featured: true },
    { src: '/assets/LiveRoom.png', alt: 'Living Room Interior' },
    { src: '/assets/LiveEdge.png', alt: 'Live Edge Design' },
    { src: '/assets/LifePod.png', alt: 'Life Pod Concept', featured: true },
    { src: '/assets/SolarCap.png', alt: 'Solar Cap Design' },
    { src: '/assets/hobbiton.png', alt: 'Hobbiton-style Dome' },
    { src: '/assets/stonegloo.png', alt: 'Stone Igloo Design' },
    { src: '/assets/DeepLiving.png', alt: 'Deep Living Space' },
    { src: '/assets/Integrated.png', alt: 'Integrated Design' },
    { src: '/assets/EarthDome.png', alt: 'Earth Dome' },
    { src: '/assets/LazyLiving.png', alt: 'Lazy Living Design' },
    { src: '/assets/MountainTop.png', alt: 'Mountain Top Location' },
    { src: '/assets/MultiGenerational.png', alt: 'Multi-Generational Home' },
    { src: '/assets/ReadingNook.png', alt: 'Reading Nook' },
    { src: '/assets/RemoteLife.png', alt: 'Remote Living' },
    { src: '/assets/SeparateAlcoves.png', alt: 'Separate Alcoves Design' },
  ];

  let lightboxOpen = $state(false);
  let currentIndex = $state(0);

  function openLightbox(index) {
    currentIndex = index;
    lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox(event) {
    if (event && event.target !== event.currentTarget) return;
    lightboxOpen = false;
    document.body.style.overflow = '';
  }

  function navigateLightbox(direction) {
    currentIndex = (currentIndex + direction + galleryImages.length) % galleryImages.length;
  }

  onMount(() => {
    function handleKey(e) {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  });

  const sections = [
    { id: 'vision', label: 'Vision' },
    { id: 'open-source', label: 'Open Source' },
    { id: 'story', label: 'The Story', children: [
      { id: 'story', label: 'Silent Invasion' },
      { id: 'two-problems', label: 'Two Problems, One Dome' },
      { id: 'design-origins', label: 'Design Origins' },
    ]},
    { id: 'harvesting', label: 'Harvesting', children: [
      { id: 'cut-stump', label: 'Cut-Stump Method' },
      { id: 'methods-comparison', label: 'Methods Comparison' },
      { id: 'herbicide-details', label: 'Herbicide Details' },
      { id: 'env-profile', label: 'Environmental Profile' },
    ]},
    { id: 'materials', label: 'Materials', children: [
      { id: 'tools-checklist', label: 'Tools Checklist' },
    ]},
    { id: 'treatment', label: 'Treatment', children: [
      { id: 'treatment', label: '6-Step Protocol' },
      { id: 'soaking-trough', label: 'Soaking Trough' },
    ]},
    { id: 'structural', label: 'Structural', children: [
      { id: 'design-loads', label: 'Design Loads' },
      { id: 'connection-notes', label: 'Connections' },
    ]},
    { id: 'walls', label: 'Walls', children: [
      { id: 'why-straw-clay', label: 'Why Straw-Clay?' },
      { id: 'wall-recipe', label: 'The Recipe' },
      { id: 'packing', label: 'Packing & Drying' },
    ]},
    { id: 'living-roof', label: 'Living Roof' },
    { id: 'finishing', label: 'Finishing' },
    { id: 'moisture', label: 'Moisture Management' },
    { id: 'designs', label: 'Designs' },
    { id: 'fire', label: 'Fire Safety', children: [
      { id: 'native-restoration', label: 'Native Restoration' },
      { id: 'defensible-zones', label: 'Defensible Zones' },
    ]},
    { id: 'ecosystem', label: 'Ecosystem' },
    { id: 'maintenance', label: 'Maintenance' },
  ];
</script>

<svelte:head>
  <title>Regenerative BioDome — Open Source Architecture From Invasive Trees</title>
  <meta property="og:title" content="Regenerative BioDome — Open Source Architecture From Invasive Trees">
  <meta property="og:description" content="Open source architecture: free designs for building fire-resistant homes from invasive eucalyptus while healing Portuguese watersheds. Complete build guides with 3D models.">
  <meta property="og:image" content="/assets/Colony.png">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
</svelte:head>

<Sidebar brand="Regenerative BioDome" {sections} footerLinks={[{ href: '../', label: '\u2190 Agua Lila' }]} />

<!-- Hero Section -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-label">Open Source Architecture</div>
    <h1 class="hero-title">Turn Invasive Trees Into<br>Fire-Resistant Homes</h1>
    <p class="hero-subtitle">Designs for building with eucalyptus while healing Portuguese watersheds. Complete offline-friendly build guides with 3D models.</p>
    <div class="hero-badge">Free to use &middot; Adapt to your climate &middot; Share what you learn</div>

    <div class="hero-stats">
      <div class="hero-stat">
        <span class="hero-stat-value">2 Designs</span>
        <span class="hero-stat-label">One Philosophy</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-value">&euro;3-8k</span>
        <span class="hero-stat-label">Total Cost</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-value">50+ yr</span>
        <span class="hero-stat-label">Maintained</span>
      </div>
      <div class="hero-stat">
        <span class="hero-stat-value">50-200</span>
        <span class="hero-stat-label">Trees Removed</span>
      </div>
    </div>
  </div>
</section>

<!-- Gallery -->
<section class="hero-gallery">
  <div class="gallery-inner">
    <div class="gallery-grid">
      {#each galleryImages as image, i}
        <div
          class="gallery-item"
          class:featured={image.featured}
          onclick={() => openLightbox(i)}
          role="button"
          tabindex="0"
          onkeydown={(e) => { if (e.key === 'Enter') openLightbox(i); }}
        >
          <img src={image.src} alt={image.alt} loading="lazy">
        </div>
      {/each}
    </div>
    <p class="gallery-caption">The Regenerative BioDome: a vision for fire-resistant homes built from invasive eucalyptus</p>
  </div>
</section>

<!-- Lightbox -->
{#if lightboxOpen}
<div class="lightbox active" onclick={closeLightbox} onkeydown={(e) => { if (e.key === 'Escape') closeLightbox(); }} role="dialog" aria-modal="true" aria-label="Image gallery lightbox" tabindex="-1">
  <button class="lightbox-close" onclick={() => { lightboxOpen = false; document.body.style.overflow = ''; }}>&times;</button>
  <button class="lightbox-nav lightbox-prev" onclick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}>&lsaquo;</button>
  <img src={galleryImages[currentIndex].src} alt={galleryImages[currentIndex].alt}>
  <button class="lightbox-nav lightbox-next" onclick={(e) => { e.stopPropagation(); navigateLightbox(1); }}>&rsaquo;</button>
</div>
{/if}

<!-- The Vision -->
<section class="vision" id="vision">
  <div class="vision-content">
    <div class="section-label">The Vision</div>
    <h2 class="section-title">What If Removal Created Value?</h2>
    <p style="font-size: 1.1rem; color: var(--text-mid); line-height: 1.7;">What if the act of removing invasive species produced something valuable? What if watershed healing could be economically viable? What if "waste" biomass became functional architecture?</p>

    <div class="vision-grid">
      <div class="vision-item">
        <span class="vision-number">1</span>
        <h3>Heal the Land</h3>
        <p>Remove 50-200 invasive trees, returning thousands of liters of water daily to the watershed while eliminating major wildfire fuel.</p>
      </div>
      <div class="vision-item">
        <span class="vision-number">2</span>
        <h3>Build From Waste</h3>
        <p>Transform removed eucalyptus into a permanent, fire-resistant structure using natural materials—light straw-clay walls, living roof, zero concrete.</p>
      </div>
      <div class="vision-item">
        <span class="vision-number">3</span>
        <h3>Enable Regeneration</h3>
        <p>Create space for native forest recovery—cork oaks, stone pines, wild olive—restoring biodiversity and ecosystem function.</p>
      </div>
      <div class="vision-item">
        <span class="vision-number">4</span>
        <h3>Open the Knowledge</h3>
        <p>Every measurement, technique, and mistake documented. Freely available, forkable, translatable. Architecture returned to the people who need it.</p>
      </div>
    </div>
  </div>
</section>

<!-- Open Source Architecture -->
<section class="story" id="open-source" style="padding-bottom: 0;">
  <div class="story-content">
    <div class="story-callout insight">
      <div class="story-callout-title">Open Source Architecture</div>
      <p>Architecture has always been open source. Vernacular builders shared techniques freely — cob, thatch, wattle, adobe — refined across generations by everyone who needed shelter. The enclosure of building knowledge behind professional licenses and proprietary systems is the anomaly, not the norm.</p>
      <p style="margin-top: 1rem;">This project returns to that tradition. Every design, technique, and specification here is published under <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener"><strong>Creative Commons BY-SA 4.0</strong></a> — free to use, adapt, and redistribute. The techniques are modular: use the wattle dome without the living roof, the straw-clay walls without the gabion foundation, the fire safety protocols without the dome. Take what works for your climate, your species, your context.</p>
      <p style="margin-top: 1rem;">The designs are examples. The techniques are universal.</p>
    </div>
  </div>
</section>

<!-- Status Notice -->
<section class="story" style="padding-bottom: 0;">
  <div class="design-notice">
    <p class="notice-label">Design Concept in Development</p>
    <p class="notice-text">This guide documents a vision we're actively developing at <a href="../">Agua Lila</a>. The designs, techniques, and specifications are based on research and traditional building methods — but they haven't been fully tested yet. We're currently building our first proof-of-concept structures. Use this guide as inspiration and research, not as proven building instructions.</p>
  </div>
</section>

<!-- The Story -->
<section class="story" id="story">
  <div class="story-content">
    <div class="section-label">Why This Matters</div>
    <h2>The Silent Invasion</h2>

    <p>I know at least three people who have lost their homes to fire season in this part of Portugal.</p>

    <p>It never used to be this way, but invasives have a way of becoming permanent additions to an ecosystem, and we've got to learn how to live in harmony with them.</p>

    <p>The problem with eucalyptus — or <em>fire trees</em>, as they're known in their native Australia — is that they have no natural predators here. Their resinous tissue repels all but the cuddly koala, and we've got none of those around to make a dent. Across <strong>26% of Portuguese forests</strong>, over 800,000 hectares have been conquered by <em>Eucalyptus globulus</em>. The ground beneath them is bare. Nothing grows. Where there should be cork oaks, stone pines, and strawberry trees humming with life, there is silence.</p>

    <div class="story-callout problem">
      <div class="story-callout-title">The Eucalyptus Problem</div>
      <ul>
        <li>Drinks <strong>20-30 liters of water per day</strong> (stolen from the watershed)</li>
        <li>Releases allelopathic chemicals that poison other plants</li>
        <li>Drops volatile oil-rich bark that turns landscapes into tinderboxes</li>
        <li>Acidifies soil and destroys beneficial microbes</li>
        <li>Creates biological deserts where rich ecosystems once thrived</li>
      </ul>
    </div>

    <p>Every fire season leaves behind charred stone ruins of homes that used to be, homes that need rebuilding. And the rebuilding of a charred home can quickly bankrupt a family. Where are they going to stay during the multi-year process? Whole families stuck together in a cold camper trying to survive wet winters while they rebuild with expensive and toxic manmade materials.</p>

    <h2 id="two-problems">Two Problems, One Dome</h2>

    <p>But there's another predator afoot with an insatiable appetite that just needs to develop a taste for eucalyptus flesh. The widespread fires are in part responsible for this herbivore's arrival — every fire season creates demand for rebuilding.</p>

    <p>If only we could solve two problems with one dome. How do we unleash the insatiable predator of home construction against the very trees that are destroying our homes? And how do we selectively target their young so that they stop coming back?</p>

    <p><strong>The solution exists already in the heart of the problem.</strong></p>

    <p>We find a way to construct quick, easy, and cheap structures from young flexible eucalyptus poles — in a way that doesn't resist the euc's natural tendency to twist as it dries. Enter the <strong>Regenerative BioDome</strong>.</p>

    <div class="story-callout insight">
      <div class="story-callout-title">This Project Is</div>
      <p><strong>90% ecological restoration, 10% building project.</strong> You're not just constructing a home. You're healing a watershed, preventing wildfires, enabling native forest regeneration, and demonstrating that restoration can create real value.</p>
    </div>

    <h2 id="design-origins">How This Design Was Born</h2>

    <p>The idea came to me in the wake of a visit from my in-laws, during which they taught us how to build a wattle fence around our garden to keep the wild boars away. We built the whole thing for free, entirely from locally sourced invasive tree poles, and then interplanted it with wisteria and passion fruit vines to replace it when it rots away in five years.</p>

    <div class="story-pair">
      <figure>
        <img src="/assets/How to Build a Wattle Fence.png" alt="Wattle fence construction diagram">
        <figcaption>The wattle technique: vertical stakes with branches woven between them</figcaption>
      </figure>
      <figure>
        <img src="/assets/20250928_111124.jpg" alt="Wattle fence built from eucalyptus poles at Agua Lila">
        <figcaption>Our wattle fence — built for free from locally sourced invasive poles</figcaption>
      </figure>
    </div>

    <p>I started to play with the design by directing the poles at 45 degrees instead of 90. The structure became stronger, more dynamic. From here, it was a small step to imagine this trellis wrapping back on itself to create a giant inverted wicker basket dome.</p>

    <p>And when you weave a basket, you want the young flexible ones: 1-5 years old, because they will bend easily into place and then dry in mutually supported tension. The dome will shift over time as each euc dries and twists individually, but there's a ton of flex to the whole structure — so no big deal.</p>

    <figure class="story-figure">
      <img src="/assets/e4b2ae113a7819bda93b51ff4e46c09ca263a141c079e0c3e5ed203ad3901f11.png" alt="Eucalyptus lattice dome framework">
      <figcaption>The leap: from fence to dome — angled poles create a self-supporting lattice</figcaption>
    </figure>

    <p>But how do we make this more useful than a shade pergola? Wouldn't it be cool if we could let the light in but keep rain out? Wrap the whole thing in greenhouse plastic and lash it down with rope. That'll keep it dry on the inside — the first step towards living off-grid. Add a simple door cut in one of the arches, and we've got a greenhouse that will keep things dry.</p>

    <p>Now let's progressively make a few longevity improvements. The first and biggest step is getting the feet dry — getting those euc poles out of the dirt. So we begin with a gabion cage footprint for the walls: a metal cage filled with medium-sized stones. Anchoring the pole ends in the middle of this cage significantly improves the lifetime of the structure. Treat the surfaces with borax, wrap them in greenhouse plastic, and suddenly this thing starts looking pretty feasible as more than just a greenhouse.</p>
  </div>
</section>

<!-- Build Chapters: Technique Components -->
<section class="story">
  <div class="story-content">
    <hr class="story-divider">
    <Harvesting />
    <hr class="story-divider">
    <Materials />
    <hr class="story-divider">
    <Treatment />
    <hr class="story-divider">
    <Structural />
    <hr class="story-divider">
    <WallsStrawClay />

    <hr class="story-divider">

    <LivingRoof />

    <hr class="story-divider">

    <Finishing />

    <h3>Water System</h3>

    <ul>
      <li><strong>Rainwater harvesting:</strong> Living roof + gutters &rarr; storage tanks</li>
      <li><strong>Storage:</strong> 10,000-15,000L recommended</li>
      <li><strong>Treatment:</strong> First-flush diverter, filtration, UV sterilization</li>
      <li><strong>Backup sources:</strong> Spring, well, or trucked delivery for dry periods</li>
    </ul>

    <MoistureManagement />

  </div>
</section>

<!-- Design Selection -->
<section class="designs" id="designs">
  <div class="designs-header">
    <div class="section-label">Choose Your Design</div>
    <h2 class="section-title">Every Design Heals the Land</h2>
    <p class="section-subtitle">Each design removes invasive eucalyptus and creates fire-resistant housing. Choose based on your site, budget, and needs.</p>
  </div>

  <div class="design-grid">
    <!-- Standard BioDome -->
    <article class="design-card">
      <img src="/assets/StandardBioDomeRendering1.png" alt="Standard BioDome exterior rendering">
      <div class="design-card-content">
        <div class="design-card-header">
          <h3 class="design-name">Standard BioDome</h3>
          <span class="design-badge">Flagship</span>
        </div>
        <p class="design-tagline">28m&sup2; wattle dome — two-person build</p>
        <div class="design-stats">
          <div class="design-stat">
            <span class="design-stat-value">28m&sup2;</span>
            <span class="design-stat-label">Floor Area</span>
          </div>
          <div class="design-stat">
            <span class="design-stat-value">&euro;3-5k</span>
            <span class="design-stat-label">Budget</span>
          </div>
          <div class="design-stat">
            <span class="design-stat-value">50-100</span>
            <span class="design-stat-label">Trees</span>
          </div>
        </div>
        <div class="design-links">
          <a href="standard-biodome-guide" class="design-link primary">Build Guide</a>
          <a href="biodome_viewer.html" class="design-link secondary">3D Model</a>
        </div>
      </div>
    </article>

    <!-- Earth Sheltered SolarPod -->
    <article class="design-card">
      <img src="/assets/EarthShelteredRendering1.png" alt="Earth Sheltered SolarPod built into hillside">
      <div class="design-card-content">
        <div class="design-card-header">
          <h3 class="design-name">Earth Sheltered SolarPod</h3>
          <span class="design-badge">Hillside</span>
        </div>
        <p class="design-tagline">30m&sup2; earth-sheltered structure — Da Vinci bridge rafters, passive cooling</p>
        <div class="design-stats">
          <div class="design-stat">
            <span class="design-stat-value">30m&sup2;</span>
            <span class="design-stat-label">Sheltered Area</span>
          </div>
          <div class="design-stat">
            <span class="design-stat-value">5 &times; 6m</span>
            <span class="design-stat-label">Footprint</span>
          </div>
          <div class="design-stat">
            <span class="design-stat-value">3m</span>
            <span class="design-stat-label">Cut Depth</span>
          </div>
        </div>
        <div class="design-links">
          <a href="earth-sheltered-solarpod-guide" class="design-link primary">Build Guide</a>
          <a href="earth_sheltered_viewer.html" class="design-link secondary">3D Model</a>
        </div>
      </div>
    </article>
  </div>
</section>

<!-- Fire Safety (technique component) -->
<section class="story">
  <div class="story-content">
    <hr class="story-divider">
    <FireSafety />

    <hr class="story-divider">

    <!-- Ecosystem Monitoring (landing-page-specific) -->
    <h2 id="ecosystem">Ecosystem Monitoring</h2>

    <p>Your BioDome is part of a larger restoration project. Document the recovery:</p>

    <ul>
      <li><strong>Eucalyptus eradication:</strong> Stump survival rate by treatment method</li>
      <li><strong>Native regeneration:</strong> Species appearing, coverage increasing</li>
      <li><strong>Water recovery:</strong> Spring flow, well levels, soil moisture</li>
      <li><strong>Biodiversity:</strong> Bird counts, insect diversity, mammal sightings</li>
    </ul>

    <div class="story-callout insight">
      <div class="story-callout-title">Share Your Data</div>
      <p>Your observations contribute to restoration science. Share with ICNF (Portuguese forest authority), Quercus (environmental NGO), or local universities.</p>
    </div>

    <figure class="story-figure">
      <img src="/assets/greendomes.png" alt="Multiple BioDomes integrated into restored native forest landscape" loading="lazy">
      <figcaption>The long-term vision: BioDomes disappearing into restored native forest</figcaption>
    </figure>

    <hr class="story-divider">

    <!-- Maintenance Schedule (landing-page-specific) -->
    <h2 id="maintenance">Maintenance Schedule</h2>

    <h3>Quality Control Checkpoints</h3>

    <p>Use these measurements to verify your build is within acceptable limits.</p>

    <table>
      <thead><tr><th>Checkpoint</th><th>When</th><th>Acceptable</th><th>Action if Exceeded</th></tr></thead>
      <tbody>
      <tr><td>Post plumb</td><td>After setting</td><td>&le; 10mm over 3m</td><td>Re-seat post; add wedges at base</td></tr>
      <tr><td>Ring beam level</td><td>Before loading</td><td>&le; 15mm around circle</td><td>Shim post tops; re-cut notches</td></tr>
      <tr><td>Roof center gap</td><td>After tower removal</td><td>Tips within 20mm</td><td>Add compression ring; adjust wire</td></tr>
      <tr><td>Post settlement</td><td>Years 1, 3, 5</td><td>&le; 15mm total</td><td>Investigate drainage; shim</td></tr>
      <tr><td>Wire lashing</td><td>Annual</td><td>No slack; sings when plucked</td><td>Re-tension or replace</td></tr>
      <tr><td>Pole moisture</td><td>Before assembly</td><td>&le; 20% (pin meter)</td><td>Continue drying; do not install</td></tr>
      <tr><td>Interior humidity</td><td>Winter occupancy</td><td>&le; 65% sustained</td><td>Increase ventilation; dehumidifier</td></tr>
      </tbody>
    </table>

    <h3>Seasonal Tasks</h3>

    <h4>Spring (March-May)</h4>
    <ul>
      <li>Full structural inspection (use tolerance table above)</li>
      <li>Check all spike connections for loosening</li>
      <li>Repair winter damage to render</li>
      <li>Plant natives in restoration areas</li>
    </ul>

    <h4>Summer (June-August)</h4>
    <ul>
      <li>Maximum fire vigilance</li>
      <li>Maintain defensible space weekly</li>
      <li>Water living roof if extended drought</li>
      <li>Monitor fire danger daily</li>
    </ul>

    <h4>Autumn (September-November)</h4>
    <ul>
      <li>Apply limewash touch-ups</li>
      <li>Clean gutters and water system</li>
      <li>Prepare for wet season</li>
      <li>Assess restoration progress</li>
    </ul>

    <h4>Winter (December-February)</h4>
    <ul>
      <li>Monitor for leaks</li>
      <li>Check drainage function</li>
      <li>Plan next year's improvements</li>
      <li>Document ecosystem recovery</li>
    </ul>

  </div>
</section>

<!-- CTA -->
<section class="cta">
  <h2>Ready to Build?</h2>
  <p>Choose a design above to access its complete build guide. Each guide works offline and can be printed as a PDF—perfect for the building site.</p>
  <a href="#designs" class="hero-cta">Choose Your Design</a>
</section>

<!-- Footer -->
<footer>
  <p class="footer-quote">"The best time to plant a forest was 20 years ago. The second best time is now."</p>
  <p>Build the forest you want to see. Start with a home made from the trees that shouldn't be there.</p>
  <p class="footer-osa">Open Source Architecture</p>
  <p class="version">Version 1.0 — January 2026 — <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener">Creative Commons BY-SA 4.0</a> — <a href="https://github.com/AguaLila/biodome" target="_blank" rel="noopener">Source</a></p>
</footer>

<style>
  :root {
    --forest-dark: #1a2e1a;
    --forest-mid: #2d4a2d;
    --forest-light: #4a6e4a;
    --earth-warm: #c9a227;
    --earth-rust: #b85c38;
    --cream: #faf8f5;
    --cream-dark: #f0ebe3;
    --text-dark: #2a2a2a;
    --text-mid: #555;
  }

  /* Hero */
  .hero {
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(165deg, var(--forest-dark) 0%, #0d1a0d 100%);
    padding: 60px 30px;
    text-align: center;
  }

  .hero-content { max-width: 900px; }

  .hero-label {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.35em;
    text-transform: uppercase;
    color: var(--earth-warm);
    margin-bottom: 24px;
  }

  .hero-title {
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 700;
    color: var(--cream);
    line-height: 1.15;
    margin-bottom: 28px;
  }

  .hero-subtitle {
    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
    font-style: italic;
    color: rgba(250, 248, 245, 0.75);
    margin: 0 auto 40px;
    line-height: 1.6;
  }

  .hero-cta {
    display: inline-block;
    padding: 16px 40px;
    background: var(--earth-warm);
    color: var(--forest-dark);
    text-decoration: none;
    font-size: 1.05rem;
    font-weight: 600;
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .hero-cta:hover { background: #d9b237; transform: translateY(-2px); }

  .hero-stats {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
    padding-top: 48px;
    margin-top: 40px;
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .hero-stat { text-align: center; }
  .hero-stat-value { font-size: 2.5rem; font-weight: 700; display: block; color: var(--cream); line-height: 1.2; }
  .hero-stat-label { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(250, 248, 245, 0.5); margin-top: 4px; }

  .hero-badge {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    color: rgba(250, 248, 245, 0.5);
    margin-bottom: 40px;
  }

  .footer-osa {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--forest-mid);
    margin-top: 20px;
    margin-bottom: 4px;
  }

  /* Design Notice */
  .design-notice { max-width: 760px; margin: 0 auto 2rem; padding: 20px 24px; background: #fff8e6; border: 1px solid #e6c200; border-left: 4px solid #e6c200; border-radius: 6px; }
  .notice-label { font-weight: 700; color: #8a7000; margin-bottom: 6px; font-size: 0.9rem; }
  .notice-text { font-size: 0.95rem; color: var(--text-dark); line-height: 1.6; }
  .notice-text a { color: var(--forest-mid); }

  /* Gallery */
  .hero-gallery { background: linear-gradient(165deg, var(--forest-dark) 0%, #0d1a0d 100%); padding: 0 30px 80px; }
  .gallery-inner { max-width: 1200px; margin: 0 auto; }
  .gallery-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .gallery-item { position: relative; overflow: hidden; border-radius: 8px; aspect-ratio: 4/3; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
  .gallery-item:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25); z-index: 10; }
  .gallery-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
  .gallery-item:hover img { transform: scale(1.05); }
  .gallery-item::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(26, 46, 26, 0.4) 0%, transparent 50%); opacity: 0; transition: opacity 0.3s ease; }
  .gallery-item:hover::after { opacity: 1; }
  .gallery-caption { text-align: center; margin-top: 1.25rem; color: rgba(250, 248, 245, 0.5); font-style: italic; font-size: 1rem; }
  .gallery-item.featured { grid-column: span 2; grid-row: span 2; aspect-ratio: auto; }

  @media (max-width: 900px) {
    .gallery-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .gallery-item.featured { grid-column: span 2; grid-row: span 1; }
  }
  @media (max-width: 600px) {
    .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .gallery-item.featured { grid-column: span 2; }
    .hero-gallery { padding: 0 15px 60px; }
  }

  /* Lightbox */
  .lightbox { position: fixed; inset: 0; background: rgba(0, 0, 0, 0.95); z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 2rem; }
  .lightbox img { max-width: 90vw; max-height: 90vh; object-fit: contain; border-radius: 8px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); }
  .lightbox-close { position: absolute; top: 1.5rem; right: 1.5rem; background: none; border: none; color: white; font-size: 2.5rem; cursor: pointer; opacity: 0.7; transition: opacity 0.2s; line-height: 1; }
  .lightbox-close:hover { opacity: 1; }
  .lightbox-nav { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255, 255, 255, 0.15); border: none; color: white; font-size: 2rem; width: 50px; height: 50px; border-radius: 50%; cursor: pointer; transition: background 0.2s; }
  .lightbox-nav:hover { background: rgba(255, 255, 255, 0.25); }
  .lightbox-prev { left: 1.5rem; }
  .lightbox-next { right: 1.5rem; }

  /* Story Section */
  .story { background: var(--cream); padding: 80px 30px; }
  .story-content { max-width: 760px; margin: 0 auto; }
  .story-content > p { font-size: 1.1rem; line-height: 1.8; color: var(--text-dark); margin-bottom: 1.5rem; }
  .story-content h2 { font-size: clamp(1.6rem, 3.5vw, 2.2rem); color: var(--forest-dark); margin-top: 3rem; margin-bottom: 1rem; line-height: 1.3; }
  .story-content h2:first-of-type { margin-top: 0; }

  .story-callout { padding: 24px 28px; border-radius: 8px; margin: 2rem 0; border-left: 4px solid; }
  .story-callout.problem { background: #fff8e6; border-color: #e6c200; }
  .story-callout.insight { background: #e8f5e9; border-color: #4caf50; }
  .story-callout.danger { background: #ffebee; border-color: #ef5350; }
  .story-callout strong { color: var(--forest-dark); }
  .story-callout ul { margin: 0.75rem 0 0; padding-left: 1.5rem; }
  .story-callout li { margin-bottom: 0.4rem; }
  .story-callout ul:last-child { margin-bottom: 0; }
  .story-callout-title { font-weight: 700; margin-bottom: 8px; color: var(--forest-dark); }

  .story-figure { margin: 2.5rem 0; text-align: center; }
  .story-figure img { max-width: 100%; height: auto; border-radius: 8px; }
  .story-figure figcaption { margin-top: 0.75rem; font-size: 0.9rem; font-style: italic; color: var(--text-mid); }

  .story-pair { display: grid; grid-template-columns: 1fr; gap: 32px; margin: 2.5rem 0; }
  .story-pair figure { margin: 0; text-align: center; }
  .story-pair img { width: 100%; height: auto; border-radius: 8px; }
  .story-pair figcaption { margin-top: 0.5rem; font-size: 0.85rem; font-style: italic; color: var(--text-mid); }

  .story-content h3 { font-size: 1.35rem; color: var(--forest-dark); margin-top: 2rem; margin-bottom: 0.75rem; line-height: 1.3; }
  .story-content h4 { font-size: 1.1rem; color: var(--forest-dark); margin-top: 1.5rem; margin-bottom: 0.5rem; }
  .story-content ul, .story-content ol { margin-bottom: 1.5rem; padding-left: 1.5rem; }
  .story-content li { margin-bottom: 0.5rem; }
  .story-content table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.95rem; }
  .story-content th, .story-content td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #ddd; }
  .story-content th { background: var(--forest-dark); color: white; font-weight: 600; }
  .story-content tr:nth-child(even) { background: var(--cream-dark); }

  .process-step { display: flex; gap: 20px; margin: 1.5rem 0; align-items: flex-start; }
  .step-number { width: 36px; height: 36px; background: var(--forest-dark); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.9rem; flex-shrink: 0; }
  .step-content h4 { margin-top: 0; margin-bottom: 0.5rem; }

  .story-divider { border: none; border-top: 2px solid var(--forest-mid); margin: 4rem 0 3rem; }

  @media (max-width: 768px) {
    .story { padding: 60px 20px; }
    .story-pair { grid-template-columns: 1fr; }
    .story-content table { font-size: 0.85rem; }
    .story-content th, .story-content td { padding: 8px 10px; }
  }

  /* Design Selection */
  .designs { background: var(--cream-dark); padding: 80px 30px; }
  .designs-header { text-align: center; max-width: 700px; margin: 0 auto 60px; }
  .section-label { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.3em; text-transform: uppercase; color: var(--earth-rust); margin-bottom: 12px; }
  .section-title { font-size: clamp(2rem, 4vw, 2.8rem); color: var(--forest-dark); margin-bottom: 16px; }
  .section-subtitle { font-size: 1.1rem; color: var(--text-mid); line-height: 1.6; }

  .design-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 32px; max-width: 1200px; margin: 0 auto; }
  .design-card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); transition: transform 0.3s, box-shadow 0.3s; }
  .design-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.12); }
  .design-card img { width: 100%; height: 200px; object-fit: cover; }
  .design-card-content { padding: 28px; }
  .design-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
  .design-name { font-size: 1.5rem; font-weight: 700; color: var(--forest-dark); }
  .design-badge { background: var(--forest-mid); color: white; padding: 4px 10px; border-radius: 4px; font-size: 0.75rem; font-weight: 600; }
  .design-tagline { font-style: italic; color: var(--text-mid); margin-bottom: 16px; }
  .design-stats { display: flex; gap: 24px; margin-bottom: 20px; padding: 16px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; }
  .design-stat { text-align: center; }
  .design-stat-value { font-size: 1.4rem; font-weight: 700; color: var(--forest-dark); display: block; }
  .design-stat-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-mid); }
  .design-links { display: flex; gap: 12px; flex-wrap: wrap; }
  .design-link { flex: 1; min-width: 120px; padding: 12px 16px; text-align: center; text-decoration: none; border-radius: 6px; font-size: 0.9rem; font-weight: 600; transition: all 0.2s; }
  .design-link.primary { background: var(--earth-warm); color: var(--forest-dark); }
  .design-link.primary:hover { background: #d9b237; }
  .design-link.secondary { background: var(--cream-dark); color: var(--forest-dark); border: 1px solid #ddd; }
  .design-link.secondary:hover { background: #e8e3db; }

  /* The Vision */
  .vision { background: var(--cream); padding: 80px 30px; }
  .vision-content { max-width: 900px; margin: 0 auto; }
  .vision-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; margin-top: 50px; }
  .vision-item { position: relative; padding-left: 50px; }
  .vision-number { position: absolute; left: 0; top: -8px; font-size: 3rem; font-weight: 700; color: var(--earth-warm); opacity: 0.3; line-height: 1; }
  .vision-item h3 { font-size: 1.4rem; color: var(--forest-dark); margin-bottom: 12px; }
  .vision-item p { font-size: 1rem; line-height: 1.7; color: var(--text-mid); }

  /* CTA Section */
  .cta { background: linear-gradient(135deg, var(--forest-mid) 0%, var(--forest-dark) 100%); padding: 80px 30px; text-align: center; color: var(--cream); }
  .cta h2 { font-size: clamp(2rem, 4vw, 2.5rem); margin-bottom: 20px; }
  .cta p { font-size: 1.15rem; color: rgba(250, 248, 245, 0.8); max-width: 600px; margin: 0 auto 36px; line-height: 1.7; }

  /* Footer */
  footer { background: var(--cream-dark); padding: 50px 30px; text-align: center; border-top: 1px solid #ddd; }
  .footer-quote { font-size: 1.5rem; font-style: italic; color: var(--forest-dark); margin-bottom: 16px; max-width: 700px; margin-left: auto; margin-right: auto; }
  footer p { color: var(--text-mid); font-size: 0.95rem; }
  footer .version { margin-top: 8px; font-size: 0.85rem; opacity: 0.6; }
  footer .version a { color: var(--forest-mid); text-decoration: none; }
  footer .version a:hover { text-decoration: underline; }

  /* Mobile */
  @media (max-width: 768px) {
    .hero { padding: 60px 20px 50px; min-height: 70vh; }
    .story, .designs, .vision, .cta { padding: 60px 20px; }
    .design-grid { grid-template-columns: 1fr; }
    .design-stats { gap: 16px; }
    .design-links { flex-direction: column; }
    .design-link { min-width: 100%; }
    .vision-grid { grid-template-columns: 1fr; gap: 30px; }
  }

  /* Print */
  @media print {
    :global(body) { margin-left: 0; }
    :global(.sidebar), :global(.sidebar-toggle) { display: none; }
  }
</style>
