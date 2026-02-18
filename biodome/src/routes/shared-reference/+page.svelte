<script>
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import GuideHeader from '$lib/components/layout/GuideHeader.svelte';
  import GuideFooter from '$lib/components/layout/GuideFooter.svelte';
  import CrossLinks from '$lib/components/layout/CrossLinks.svelte';
  import Harvesting from '$lib/components/techniques/Harvesting.svelte';
  import Materials from '$lib/components/techniques/Materials.svelte';
  import Treatment from '$lib/components/techniques/Treatment.svelte';
  import WallsStrawClay from '$lib/components/techniques/WallsStrawClay.svelte';
  import FireSafety from '$lib/components/techniques/FireSafety.svelte';
  import Structural from '$lib/components/techniques/Structural.svelte';
  import LivingRoof from '$lib/components/techniques/LivingRoof.svelte';
  import Finishing from '$lib/components/techniques/Finishing.svelte';
  import MoistureManagement from '$lib/components/techniques/MoistureManagement.svelte';

  const sidebarSections = [
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
      { id: 'soaking-trough', label: 'Soaking Trough' },
    ]},
    { id: 'walls', label: 'Walls', children: [
      { id: 'why-straw-clay', label: 'Why Straw-Clay?' },
      { id: 'wall-recipe', label: 'The Recipe' },
      { id: 'packing', label: 'Packing & Drying' },
    ]},
    { id: 'fire', label: 'Fire Safety', children: [
      { id: 'native-restoration', label: 'Native Restoration' },
      { id: 'defensible-zones', label: 'Defensible Zones' },
    ]},
    { id: 'living-roof', label: 'Living Roof', children: [
      { id: 'central-opening', label: 'Central Opening' },
      { id: 'overflow-protection', label: 'Overflow Protection' },
    ]},
    { id: 'finishing', label: 'Finishing', children: [
      { id: 'lime-render', label: 'Lime Render' },
      { id: 'openings', label: 'Windows & Doors' },
      { id: 'floor-options', label: 'Floor Options' },
    ]},
    { id: 'moisture', label: 'Moisture Management', children: [
      { id: 'ventilation-requirements', label: 'Ventilation' },
      { id: 'humidity-targets', label: 'Humidity Targets' },
    ]},
    { id: 'structural', label: 'Structural', children: [
      { id: 'design-loads', label: 'Design Loads' },
      { id: 'connection-notes', label: 'Connections' },
    ]},
  ];
</script>

<svelte:head>
  <title>BioDome Shared Reference — Universal Techniques</title>
  <meta property="og:title" content="BioDome Shared Reference — Universal Building Techniques">
  <meta property="og:description" content="Master these universal techniques before starting your BioDome build: harvesting, treatment, walls, fire safety, and structural design.">
  <meta property="og:type" content="article">
</svelte:head>

<Sidebar
  brand="Shared Reference"
  brandHref="/"
  sections={sidebarSections}
  footerLinks={[
    { href: '/standard-biodome-guide', label: 'Standard BioDome' },
    { href: '/earth-sheltered-solarpod-guide', label: 'Earth Sheltered SolarPod' }
  ]}
/>

<GuideHeader
  title="BioDome Shared Reference"
  tagline="Universal techniques that apply to all BioDome designs. Master these first, then proceed to your chosen design guide."
/>

<main class="container">
  <CrossLinks
    title="Design-Specific Guides"
    description="After mastering these universal techniques, proceed to your chosen guide:"
    links={[
      { href: '/standard-biodome-guide', label: 'Standard BioDome', note: '28m² circular wattle dome' },
      { href: '/earth-sheltered-solarpod-guide', label: 'Earth Sheltered SolarPod', note: '30m² earth-sheltered structure' }
    ]}
  />

  <Harvesting />
  <Materials />
  <Treatment />
  <WallsStrawClay />
  <FireSafety />
  <LivingRoof />
  <Finishing />
  <MoistureManagement />
  <Structural />

  <CrossLinks
    title="Now Choose Your Design"
    description="You've mastered the universal techniques. Proceed to your chosen guide:"
    links={[
      { href: '/standard-biodome-guide', label: 'Standard BioDome', note: '28m² circular wattle dome' },
      { href: '/earth-sheltered-solarpod-guide', label: 'Earth Sheltered SolarPod', note: '30m² earth-sheltered structure' }
    ]}
  />
</main>

<GuideFooter
  title="BioDome Shared Reference — Universal Techniques"
  version="Version 1.0 — January 2026"
/>
