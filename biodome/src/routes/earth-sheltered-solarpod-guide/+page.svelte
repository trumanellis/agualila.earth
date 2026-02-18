<script>
  import Sidebar from '$lib/components/layout/Sidebar.svelte';
  import GuideHeader from '$lib/components/layout/GuideHeader.svelte';
  import GuideFooter from '$lib/components/layout/GuideFooter.svelte';
  import CrossLinks from '$lib/components/layout/CrossLinks.svelte';
  import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
  import StatsGrid from '$lib/components/ui/StatsGrid.svelte';
  import Harvesting from '$lib/components/techniques/Harvesting.svelte';
  import Materials from '$lib/components/techniques/Materials.svelte';
  import Treatment from '$lib/components/techniques/Treatment.svelte';
  import Structural from '$lib/components/techniques/Structural.svelte';
  import LivingRoof from '$lib/components/techniques/LivingRoof.svelte';
  import FireSafety from '$lib/components/techniques/FireSafety.svelte';
  import Finishing from '$lib/components/techniques/Finishing.svelte';
  import MoistureManagement from '$lib/components/techniques/MoistureManagement.svelte';

  const sidebarSections = [
    { id: 'overview', label: 'Overview' },
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
    { id: 'structural', label: 'Structural', children: [
      { id: 'design-loads', label: 'Design Loads' },
      { id: 'connection-notes', label: 'Connections' },
    ]},
    { id: 'excavation', label: 'Excavation' },
    { id: 'foundation', label: 'Foundation' },
    { id: 'frame', label: 'Frame' },
    { id: 'roof', label: 'Roof' },
    { id: 'shell', label: 'Shell' },
    { id: 'solar', label: 'Solar & Roof' },
    { id: 'living-roof', label: 'Living Roof', children: [
      { id: 'central-opening', label: 'Central Opening' },
      { id: 'overflow-protection', label: 'Overflow Protection' },
    ]},
    { id: 'openings', label: 'Openings' },
    { id: 'finishing', label: 'Finishing', children: [
      { id: 'lime-render', label: 'Lime Render' },
      { id: 'openings', label: 'Windows & Doors' },
      { id: 'floor-options', label: 'Floor Options' },
    ]},
    { id: 'interior', label: 'Interior' },
    { id: 'bom', label: 'Materials' },
    { id: 'phases', label: 'Phases' },
    { id: 'floor-plan', label: 'Floor Plan' },
    { id: 'fire', label: 'Fire Safety', children: [
      { id: 'native-restoration', label: 'Native Restoration' },
      { id: 'defensible-zones', label: 'Defensible Zones' },
    ]},
    { id: 'moisture', label: 'Moisture Management', children: [
      { id: 'ventilation-requirements', label: 'Ventilation' },
      { id: 'humidity-targets', label: 'Humidity Targets' },
    ]},
    { id: 'maintenance', label: 'Maintenance' },
  ];
</script>

<svelte:head>
  <title>Earth Sheltered SolarPod — Build Guide (30m²)</title>
  <meta property="og:title" content="Earth Sheltered SolarPod — 30m² Earth-Sheltered Build Guide">
  <meta property="og:description" content="Complete build guide for a 30m² earth-sheltered structure with Da Vinci bridge rafters.">
  <meta property="og:image" content="/assets/EarthShelteredRendering1.png">
  <meta property="og:type" content="article">
</svelte:head>

<Sidebar
  brand="Earth Sheltered SolarPod"
  brandHref="/"
  sections={sidebarSections}
  footerLinks={[
    { href: '/shared-reference', label: 'Shared Reference' },
    { href: '/standard-biodome-guide', label: 'Standard BioDome' }
  ]}
/>

<GuideHeader
  title="Earth Sheltered SolarPod"
  tagline="30m² earth-sheltered structure — cut into the hillside, roofed with Da Vinci bridge rafters"
  viewerUrl="/earth_sheltered_viewer.html"
  stats={[
    { value: '30m²', label: 'Sheltered Area' },
    { value: '5 × 6m', label: 'Footprint' },
    { value: '3m', label: 'Cut Depth' },
    { value: '22m²', label: 'Earth-Contact' }
  ]}
/>

<div class="viewer-embed-wrapper">
  <iframe class="viewer-embed" src="/earth_sheltered_viewer.html" loading="lazy" title="Interactive 3D model of the Earth Sheltered SolarPod"></iframe>
  <a href="/earth_sheltered_viewer.html" class="viewer-fullscreen">Open Fullscreen</a>
</div>

<main class="container">

  <Harvesting />
  <Materials />
  <Treatment />
  <Structural />

  <!-- Section 1: Design Overview -->
  <section id="overview">
    <h1>Design Overview</h1>

    <p>The Earth Sheltered SolarPod is a 5&times;6m rectangular earth-sheltered structure. Unlike the Standard BioDome's circular dome, this design is cut 3 meters into a hillside, using the earth itself as thermal mass and fire protection. The rectangular footprint integrates naturally with hillside contours, creating a 30m&sup2; sheltered space that breathes with the land.</p>

    <p>Twenty-two square meters of wall surface are banked against the hillside, providing passive cooling in summer and warmth retention in winter. The 3m cut depth puts the rear wall entirely below grade. This is not a bunker — the south-facing front is fully open with a glazed door and windows, bringing light deep into the interior. The earth-contact walls stabilize interior temperature year-round, reducing heating and cooling needs to near zero.</p>

    <p>The SolarPod's signature innovation is its roof: Leonardo da Vinci's self-supporting bridge principle, adapted as A-frame gable rafters. In the Codex Atlanticus (1480s), da Vinci sketched a bridge where interlocking beams hold together through geometry alone, no fasteners required. Here, that same principle creates A-frame rafter pairs spanning the 5m width. Each pair interlocks with its neighbors across the rectangular span, forming a strong gable roof without a ridge beam or central support. Where the Standard BioDome uses full-span arches for a dome, the SolarPod translates the interlocking principle into A-frame pairs spanning a rectangle.</p>

    <p>The hillside cut is retained with gabion walls — stone-filled wire cages that serve dual purpose. They hold back the earth and provide the structure's rear and side foundations. The front gabion course anchors the wattle wall frame and door threshold. The gabions create a stable bearing surface for the eucalyptus pole frame, while allowing subsurface water to drain freely through the stone fill.</p>

    <p>The A-frame gable creates an ideal south-facing slope for solar panel mounting. Unlike a dome (which has no flat surface facing south), the SolarPod's geometry was designed with solar harvest in mind. The north-facing slope carries the living roof — a sedum and native grass layer providing thermal mass, fire resistance, and visual integration with the hillside. The south-facing slope mounts photovoltaic panels, angled to capture maximum sun throughout the year.</p>

    <p>The material palette mirrors the Standard BioDome: eucalyptus poles for the frame, wattle weave for wall structure, light straw-clay for insulation, EPDM membrane for waterproofing, lime-earth render for exterior finish, burlap mesh for reinforcement. The key additions are the gabion retaining walls and the solar-ready roof structure. The eucalyptus poles are harvested from invasive stands, treated with borax solution, and assembled green (freshly cut). As the poles dry in place, they shrink and lock together, creating a structure that tightens over time.</p>

    <p>The SolarPod is a marriage of ancient building techniques and modern passive design. The earth-sheltered concept has protected humans for millennia — from Neolithic pit-houses to prairie soddies to Icelandic turf homes. The da Vinci bridge principle is Renaissance geometry. The straw-clay and wattle techniques are medieval. The solar integration and EPDM waterproofing are 21st century. Together, they create a structure that is simple to build, cheap to heat, and nearly invisible from the hillside above.</p>

    <StatsGrid stats={[
      { value: '5 × 6m', label: 'Footprint' },
      { value: '30m²', label: 'Sheltered Area' },
      { value: '22m²', label: 'Earth-Contact Walls' },
      { value: '3m', label: 'Cut Depth' },
      { value: '2m', label: 'Cut Height' },
      { value: 'A-frame', label: 'Roof Type' }
    ]} />

    <h3>Key Specifications</h3>
    <ul>
      <li><strong>Shape:</strong> Rectangular earth-sheltered structure with A-frame gable roof</li>
      <li><strong>Floor area:</strong> 30m&sup2; (comparable to a small cabin)</li>
      <li><strong>Earth-contact:</strong> 22m&sup2; of walls banked into hillside</li>
      <li><strong>Roof:</strong> Da Vinci bridge rafters with EPDM membrane, living roof on north slope, solar panels on south slope</li>
      <li><strong>Exterior:</strong> Lime-earth render on exposed front wall, earth-banked sides and rear</li>
      <li><strong>Crew:</strong> 2-4 people for entire build</li>
      <li><strong>Trees removed:</strong> 60-120 eucalyptus saplings and young trees</li>
      <li><strong>Build time:</strong> ~5-7 weeks in summer (longer in winter)</li>
      <li><strong>Lifespan:</strong> 30-40 years with maintenance</li>
    </ul>

    <h3>Thermal Performance</h3>
    <p>Earth-sheltered construction provides exceptional thermal stability. The earth maintains a nearly constant temperature of 12-16&deg;C year-round at 2-3m depth, moderating interior conditions without mechanical systems.</p>

    <table>
      <thead>
        <tr><th>Season</th><th>Outdoor Range</th><th>Interior Range</th><th>Effect</th></tr>
      </thead>
      <tbody>
        <tr><td>Summer</td><td>25-35&deg;C</td><td>18-22&deg;C</td><td>Earth cools interior by 5-10&deg;C</td></tr>
        <tr><td>Winter</td><td>0-10&deg;C</td><td>12-16&deg;C</td><td>Earth warms interior by 8-12&deg;C</td></tr>
        <tr><td>Spring/Fall</td><td>10-20&deg;C</td><td>14-18&deg;C</td><td>Stable comfort zone</td></tr>
      </tbody>
    </table>

    <CalloutBox variant="tip" title="Why Earth-Sheltered?">
      <p>Three meters of earth provides thermal mass equivalent to 40cm of concrete. It buffers temperature swings, filters air pollutants, provides wildfire protection, and creates acoustic insulation. The hillside integration also reduces visual impact and protects the structure from wind.</p>
    </CalloutBox>
  </section>

  <!-- Section 2: Excavation -->
  <section id="excavation">
    <h1>Site Excavation &amp; Retaining</h1>
    <p>This section covers site selection criteria, slope angle requirements, excavation method for the 3m deep &times; 5m wide cut, drainage behind gabion walls, and soil storage for the living roof.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Site selection: south-facing slope, 15-30&deg; angle, stable soil (clay/loam preferred)</li>
      <li>Excavation dimensions: 3m deep &times; 5m wide &times; 6m long cut</li>
      <li>Cut profile: vertical rear wall, stepped sides for gabion courses</li>
      <li>Drainage design: geotextile wrap, perforated pipe at base of gabion walls</li>
      <li>Soil storage: stockpile topsoil for living roof substrate</li>
      <li>Compaction and grading: level floor, proper drainage fall</li>
    </ul>
  </section>

  <!-- Section 3: Foundation -->
  <section id="foundation">
    <h1>Foundation: Gabion Perimeter</h1>
    <p>This section covers gabion cage dimensions, stone fill requirements, integration with the retaining wall, front foundation course, and pole anchor points.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Gabion cage sizing: 1m &times; 0.5m &times; 0.5m units (or custom to fit cut profile)</li>
      <li>Stone fill: 10-20cm local granite or schist, hand-placed at corners and edges</li>
      <li>Retaining wall integration: stepped courses following hillside cut</li>
      <li>Front foundation: single gabion course at south face, anchors wattle wall frame</li>
      <li>Pole anchor points: flat stone caps on gabion units, 40cm spacing</li>
      <li>Drainage pipe routing: 100mm perforated HDPE at base of rear and side walls</li>
    </ul>
  </section>

  <!-- Section 4: Wall Framework -->
  <section id="frame">
    <h1>Wall Framework: Wattle Basket</h1>
    <p>This section covers eucalyptus pole selection, vertical post spacing, wattle weave pattern, integration with the gabion base, and connection to roof rafters.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Vertical posts: 8-10cm diameter eucalyptus, 2.5m height, 40cm spacing</li>
      <li>Horizontal weavers: 3-5cm diameter, woven between verticals</li>
      <li>Wattle basket structure: creates cavity for straw-clay insulation</li>
      <li>Integration with gabion base: posts set into stone fill, wedged tight</li>
      <li>Top plate connection: horizontal beam ties posts, receives roof rafters</li>
      <li>Corner posts: heavier gauge (10-12cm), anchored deep into gabion</li>
    </ul>
  </section>

  <!-- Section 5: Roof -->
  <section id="roof">
    <h1>Roof: Da Vinci Bridge Rafters</h1>
    <p>This section covers A-frame rafter pairs, interlocking beam geometry, rafter sizing for the 5m span, purlin layout, and connection to the wall plate.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Da Vinci bridge principle: interlocking A-frame pairs, no central ridge beam</li>
      <li>Rafter sizing: 10-12cm diameter eucalyptus, 3.5m length per rafter</li>
      <li>Interlocking geometry: notched laps where rafters cross, locked by gravity and compression</li>
      <li>Purlin layout: 5-7cm diameter horizontal poles, 50cm spacing, support EPDM deck</li>
      <li>Connection to wall plate: rafter feet notched over plate, pegged with hardwood dowels</li>
      <li>Gable ends: infilled with wattle weave or fixed glazing</li>
    </ul>
  </section>

  <!-- Section 6: Shell -->
  <section id="shell">
    <h1>Shell: Straw-Clay &amp; EPDM</h1>
    <p>This section covers light straw-clay mix for walls, EPDM membrane application, burlap mesh reinforcement, lime-earth render, and waterproofing at the earth-contact junction.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Light straw-clay mix: 12:1 straw-to-clay ratio, hand-packed into wattle basket</li>
      <li>Wall thickness: 30-40cm, provides R-20 to R-25 insulation</li>
      <li>EPDM membrane: 1.2mm thickness, applied over purlin deck with 30cm overlaps</li>
      <li>Burlap mesh reinforcement: laid over EPDM, receives lime-earth render</li>
      <li>Lime-earth render: 3:1 sand-to-lime, troweled in two coats</li>
      <li>Earth-contact waterproofing: EPDM wraps down into gabion fill, sealed with bentonite clay</li>
    </ul>
  </section>

  <!-- Section 7: Solar -->
  <section id="solar">
    <h1>Living Roof &amp; Solar Array</h1>
    <p>This section covers the living roof on the north-facing slope (substrate depth, plant selection), solar panel mounting on the south-facing slope, structural load considerations, and wiring penetrations.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Living roof substrate: 15-20cm depth, lightweight aggregate mix (perlite, compost, sand)</li>
      <li>Plant selection: sedum species, native grasses, low-maintenance perennials</li>
      <li>North slope coverage: full living roof for thermal mass and fire resistance</li>
      <li>Solar panel mounting: aluminum rail system on south slope, 35&deg; tilt angle</li>
      <li>Structural load: roof designed for 200 kg/m&sup2; (living roof + snow + wind)</li>
      <li>Wiring penetrations: conduit through gable end, sealed with EPDM boot</li>
    </ul>
  </section>

  <LivingRoof />

  <!-- Section 8: Openings -->
  <section id="openings">
    <h1>Openings: Door &amp; Windows</h1>
    <p>This section covers the south-facing glazed door, window placement for cross-ventilation, chestnut frames with precision joinery, and weathersealing at the earth-contact boundary.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>South-facing door: 2m &times; 0.9m, double-glazed insulated unit, chestnut frame</li>
      <li>Window placement: two 1m &times; 0.8m windows flanking door for cross-ventilation</li>
      <li>Chestnut joinery: mortise-and-tenon frames, wedged tight, finished with linseed oil</li>
      <li>Weathersealing: EPDM gaskets at frame perimeter, lime-earth caulk at wattle junction</li>
      <li>Earth-contact transition: frames set proud of earth-banked walls, no buried wood</li>
      <li>Hardware: stainless steel hinges, passive vents for humidity control</li>
    </ul>
  </section>

  <Finishing />

  <!-- Section 9: Interior -->
  <section id="interior">
    <h1>Interior Finish</h1>
    <p>This section covers limewash on interior walls, floor finish options, thermal mass floor, and built-in furniture from eucalyptus.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Limewash: white or earth-pigmented, three coats for breathable finish</li>
      <li>Floor options: rammed earth, concrete slab, stone pavers</li>
      <li>Thermal mass floor: dark-colored surface to absorb solar gain from south windows</li>
      <li>Built-in furniture: eucalyptus pole benches, shelving, loft platform</li>
      <li>Moisture management: passive venting, humidity-buffering lime finish</li>
    </ul>
  </section>

  <!-- Section 10: BOM -->
  <section id="bom">
    <h1>Bill of Materials</h1>
    <p>This section provides a complete materials list with quantities, sourcing notes, and cost estimates.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Eucalyptus poles: quantities by diameter and length</li>
      <li>Gabion materials: wire cages, geotextile, stone fill, drainage pipe</li>
      <li>Insulation: straw bales, clay, burlap mesh</li>
      <li>Waterproofing: EPDM membrane, seam tape, fasteners</li>
      <li>Finishes: lime, sand, earth pigments</li>
      <li>Openings: door and window units, hardware</li>
      <li>Solar system: panels, inverter, batteries, wiring</li>
      <li>Living roof: substrate mix, plants</li>
    </ul>
  </section>

  <!-- Section 11: Phases -->
  <section id="phases">
    <h1>Construction Phases</h1>
    <p>This section provides a phase breakdown with timeline, crew requirements, tool list, and critical path.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Phase 1: Site excavation and gabion foundation (2 weeks)</li>
      <li>Phase 2: Wall frame and roof rafters (2 weeks)</li>
      <li>Phase 3: Wattle weave and straw-clay insulation (1.5 weeks)</li>
      <li>Phase 4: EPDM membrane and exterior render (1 week)</li>
      <li>Phase 5: Living roof and solar installation (1 week)</li>
      <li>Phase 6: Openings and interior finish (1 week)</li>
      <li>Tool list: excavator, wire cutters, chainsaw, tampers, scaffolding</li>
      <li>Critical path: excavation &rarr; gabions &rarr; frame &rarr; roof &rarr; shell</li>
    </ul>
  </section>

  <!-- Section 12: Floor Plan -->
  <section id="floor-plan">
    <h1>Floor Plan</h1>
    <p>This section provides 5&times;6m layout options, furniture placement, storage, and utilities routing.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Layout zones: entry/kitchen (south), sleeping (north), living (center)</li>
      <li>Furniture placement: built-in benches along earth-contact walls</li>
      <li>Storage: shelving and cupboards integrated into frame</li>
      <li>Utilities: water supply, greywater drainage, electrical from solar</li>
      <li>Heating: rocket mass heater or wood stove (optional)</li>
    </ul>
  </section>

  <FireSafety />
  <MoistureManagement />

  <!-- Section 13: Maintenance -->
  <section id="maintenance">
    <h1>Maintenance</h1>
    <p>This section covers seasonal checks, earth-contact wall inspection, living roof care, solar panel maintenance, and EPDM inspection schedule.</p>
    <p class="stub">Section under development. Check back soon.</p>
    <h3>Key Topics</h3>
    <ul>
      <li>Seasonal checks: spring (drainage inspection), summer (living roof weeding), fall (gutter cleaning), winter (snow load monitoring)</li>
      <li>Earth-contact walls: annual check for moisture intrusion, re-seal EPDM junctions as needed</li>
      <li>Living roof care: monthly weeding in first year, annual fertilizing, replant bare spots</li>
      <li>Solar panel maintenance: quarterly cleaning, annual electrical inspection</li>
      <li>EPDM inspection: biannual visual check for tears or lifted seams, repair with patch tape</li>
      <li>Expected repairs: re-render exterior every 5-7 years, replace EPDM after 25-30 years</li>
    </ul>
  </section>

  <CrossLinks
    title="Other Designs"
    links={[
      { href: '/standard-biodome-guide', label: 'Standard BioDome', note: '28m² circular wattle dome' }
    ]}
    backLink={{ href: '/', label: 'Back to Design Selection' }}
  />

</main>

<GuideFooter
  title="Earth Sheltered SolarPod — Build Guide"
  version="Version 1.0 — February 2026"
/>
