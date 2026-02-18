<section id="walls" data-component="WallsStrawClay">
    <h1>Wall Infill: Light Straw-Clay</h1>

    <h2 id="why-straw-clay">Why Light Straw-Clay?</h2>

    <p>Traditional cob (dense clay-sand-straw mixture) presents challenges when used as infill between eucalyptus poles that shrink 5-8% as they dry.</p>

    <CalloutBox variant="tip" title="The Problem with Cob Infill">
        <p>Cob is rigid and heavy (~1,800 kg/m³). When eucalyptus poles shrink and shift during drying, cob cracks at the pole junctions—sometimes severely.</p>
    </CalloutBox>

    <p><strong>Light straw-clay</strong> solves this by reversing the ratio: instead of clay with straw reinforcement, it's straw with clay coating. The result is a lightweight (~400 kg/m³), flexible infill that:</p>

    <ul>
        <li><strong>Absorbs frame movement</strong> internally rather than cracking</li>
        <li><strong>Dries faster</strong> (4-6 weeks vs 2-3 months for cob)</li>
        <li><strong>Easier to repair</strong> (stuff more straw into gaps)</li>
        <li><strong>More forgiving to mix</strong> (less skill required)</li>
        <li><strong>Reduces load on frame</strong> (1/4 the weight of cob)</li>
    </ul>

    <h2 id="wall-recipe">The Recipe</h2>

    <table>
      <thead>
        <tr>
            <th>Ingredient</th>
            <th>Description</th>
            <th>Purpose</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Straw</td>
            <td>Loose, long-fiber (wheat, rye, or rice straw)</td>
            <td>Bulk material—creates insulation and structure</td>
        </tr>
        <tr>
            <td>Clay slip</td>
            <td>Clay + water to thick cream/yogurt consistency</td>
            <td>Coating—binds straw, provides fire resistance</td>
        </tr>
      </tbody>
    </table>

    <p><strong>No sand.</strong> Unlike cob, light straw-clay uses pure clay slip without aggregate.</p>

    <h2>Making Clay Slip</h2>

    <ProcessStep number={1} title="Soak Clay Overnight">
        <p>Put clay soil in a container, cover with water. Let sit 12-24 hours to fully hydrate.</p>
    </ProcessStep>

    <ProcessStep number={2} title="Mix to Yogurt Consistency">
        <p>Stir vigorously. Add water until the slip coats your hand and drips off slowly—like thick yogurt.</p>
    </ProcessStep>

    <ProcessStep number={3} title="Strain if Needed">
        <p>If your clay soil has stones, strain through a coarse screen.</p>
    </ProcessStep>

    <h2>Coating the Straw</h2>

    <ProcessStep number={1} title="Toss Straw in Slip">
        <p>Work in manageable batches. Toss loose straw into slip and turn until all fibers are lightly coated. The straw should glisten but not drip.</p>
    </ProcessStep>

    <ProcessStep number={2} title="Don't Saturate">
        <p>More slip is NOT better. Saturated straw takes longer to dry and loses insulation value.</p>
    </ProcessStep>

    <h2 id="packing">Packing the Wall Cavity</h2>

    <ol>
        <li>Work between wattle poles in 15-20cm lifts</li>
        <li>Pack coated straw firmly into the cavity</li>
        <li>Tamp with a flat board or your fist</li>
        <li>Don't over-compress (you want insulation value)</li>
        <li>Continue until cavity is filled to the next wattle level</li>
        <li>Final wall thickness: 35-45cm</li>
    </ol>

    <figure class="figure">
        <img src="/assets/render-shared-ch4-wall-section.svg" alt="Plan view cross-section of wall cavity showing exterior lime render, wattle poles, straw-clay infill with springy texture, interior render, total thickness 35-45cm">
        <figcaption>Wall cavity cross-section: straw-clay infill between wattle poles</figcaption>
    </figure>

    <CalloutBox variant="warning" title="Tamping Technique">
        <p>Tamp firmly but not aggressively. The packed wall should feel springy, not solid.</p>
    </CalloutBox>

    <h2>Drying Time</h2>

    <ul>
        <li><strong>Per 15cm depth:</strong> 1-2 weeks to dry through</li>
        <li><strong>Total wall drying:</strong> 4-6 weeks</li>
        <li><strong>Test for dryness:</strong> Push a thin stick into the wall—if it comes out damp, keep waiting</li>
        <li><strong>Good ventilation:</strong> Essential during drying</li>
    </ul>

    <h2>Fire Resistance</h2>

    <p>Clay-coated straw is fire-resistant—the clay coating prevents the straw from igniting easily. In fire tests, light straw-clay chars on the surface but doesn't sustain flame.</p>

    <h2>Repairs</h2>

    <ul>
        <li><strong>Small gaps from settling:</strong> Stuff with more clay-coated straw</li>
        <li><strong>Gaps at pole junctions:</strong> Pack additional straw around poles after they've finished shrinking (typically after first year)</li>
        <li><strong>Cracks in render:</strong> Standard lime render repair</li>
    </ul>
</section>

<script>
import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
import ProcessStep from '$lib/components/ui/ProcessStep.svelte';
</script>
