<section id="living-roof" data-component="LivingRoof">
    <h1>Living Roof</h1>

    <p>The living roof is what makes the BioDome truly fire-resistant and thermally regulated. A layer of growing plants and soil on top of the roof structure absorbs heat, holds moisture, and blends the structure into the landscape.</p>

    <ProcessStep number={1} title="Sheathing">
        <p>Cork board or dense wood fiber board over purlins.</p>
    </ProcessStep>

    <ProcessStep number={2} title="Waterproofing">
        <p>EPDM pond liner (1mm minimum) fully lapped and sealed.</p>
    </ProcessStep>

    <ProcessStep number={3} title="Root Barrier">
        <p>Drainage mat + filter fabric to prevent roots from penetrating the waterproof membrane.</p>
    </ProcessStep>

    <ProcessStep number={4} title="Growing Medium">
        <p>10-15cm lightweight substrate (pumice/perlite/compost mix).</p>
    </ProcessStep>

    <ProcessStep number={5} title="Planting">
        <p>Sedums, native succulents, drought-tolerant groundcovers.</p>
    </ProcessStep>

    <figure class="figure">
        <img src="/assets/hobbiton.png" alt="BioDome with mature living roof blending into hillside landscape" loading="lazy">
        <figcaption>The living roof matures over time, blending the structure into the landscape</figcaption>
    </figure>

    <h2 id="central-opening">Central Opening Waterproofing</h2>

    <p>The ~1m diameter central opening is the lowest point of the dome apex. Without proper detailing, water from the living roof drains toward this opening.</p>

    <ul>
        <li><strong>Raised curb:</strong> Install a 150mm high curb around the opening using cork or treated timber. EPDM membrane wraps up and over this curb.</li>
        <li><strong>Metal flashing collar:</strong> A pre-formed aluminum or stainless steel collar (1.2m outer diameter) sits atop the curb with a 45&deg; drip lip directing water outward.</li>
        <li><strong>Drainage relief:</strong> Cut 4 small notches (25mm wide &times; 10mm deep) in the curb at cardinal points to allow trapped water to escape to the main roof drainage layer.</li>
        <li><strong>Skylight or cap:</strong> The opening should be sealed with a glazed dome, operable hatch, or removable weatherproof cap. Do not leave open to weather.</li>
    </ul>

    <h2 id="overflow-protection">Roof Overflow Protection</h2>

    <p>Living roofs can retain significant water during intense winter storms. If the drainage mat capacity is exceeded, water must have an escape path.</p>

    <ul>
        <li><strong>Overflow scuppers:</strong> Install 2-4 overflow outlets (75mm diameter PVC pipe through EPDM, sealed with rubber boot) at the low points of the roof perimeter.</li>
        <li><strong>Outlet height:</strong> Set scupper inlet 50mm above normal drainage layer level — water only exits when drainage is overwhelmed.</li>
        <li><strong>Discharge:</strong> Direct overflow away from foundation via splash blocks or gravel drainage strip.</li>
    </ul>
</section>

<script>
import ProcessStep from '$lib/components/ui/ProcessStep.svelte';
</script>
