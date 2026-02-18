<section id="harvesting" data-component="Harvesting">
    <h1>Eucalyptus Harvesting &amp; Eradication</h1>

    <CalloutBox variant="danger" title="Critical Understanding">
        <p>This is an <strong>eradication project</strong>. The goal is to <strong>permanently kill</strong> the eucalyptus trees and enable native forest recovery. Every stump must be treated to prevent regrowth.</p>
    </CalloutBox>

    <h2 id="cut-stump">Cut-Stump Treatment (95-98% Success)</h2>

    <p>This is the gold standard for eucalyptus eradication:</p>

    <ProcessStep number={1} title="Cut at Ground Level">
        <p>Fell the tree as close to ground as possible using a chainsaw. Make the cut clean and horizontal.</p>
    </ProcessStep>

    <ProcessStep number={2} title="Treat Stump Immediately">
        <p><strong>Within 15 minutes:</strong> Apply 25-50% glyphosate solution or 15-25% triclopyr solution to the entire cut surface. Eucalyptus tissue seals quickly—apply before the stump calluses over.</p>
        <p><strong>Application methods by terrain:</strong></p>
        <ul>
            <li><strong>Squeeze bottle with flip-top (recommended for slopes):</strong> 500ml bottle clips to belt. One-handed operation.</li>
            <li><strong>Gel formulation:</strong> Triclopyr gel won't spill, clings to vertical cuts, works in light rain.</li>
            <li><strong>Dauber bottle:</strong> Built-in sponge applicator. Good for small stumps.</li>
            <li><strong>Paintbrush + jar:</strong> Flat terrain only. Spill hazard on slopes.</li>
        </ul>
    </ProcessStep>

    <figure class="figure">
        <img src="/assets/render-shared-ch1-cut-stump.svg" alt="Top-down view of freshly cut eucalyptus stump showing cambium ring where herbicide should be applied, with squeeze bottle and 15-minute timing indicator">
        <figcaption>Apply herbicide to the cambium ring within 15 minutes of cutting</figcaption>
    </figure>

    <ProcessStep number={3} title="Harvest Poles While Fresh">
        <p>During the 1-2 week window while the wood is still workable, harvest poles from the freshly fallen tree. Young poles (2-7 year growth) are ideal for building.</p>
    </ProcessStep>

    <ProcessStep number={4} title="Monitor for Resprouting">
        <p>Check all treated stumps monthly for 12-18 months. Immediately cut and treat any resprouting shoots.</p>
    </ProcessStep>

    <h3 id="methods-comparison">Comparison Table of All Methods</h3>

    <table>
      <thead>
        <tr>
            <th>Method</th>
            <th>Success Rate</th>
            <th>Cost/Tree</th>
            <th>Pros</th>
            <th>Cons</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Cut + Glyphosate Stump</td>
            <td>95-98%</td>
            <td>€0.50-2</td>
            <td>Highest success, fast, uses tree for building</td>
            <td>Requires immediate herbicide application</td>
        </tr>
        <tr>
            <td>Cut + Triclopyr Stump</td>
            <td>95-98%</td>
            <td>€1-3</td>
            <td>Works in wet conditions, excellent success</td>
            <td>More expensive than glyphosate</td>
        </tr>
        <tr>
            <td>Triclopyr Gel (RTU)</td>
            <td>95-98%</td>
            <td>€2-4</td>
            <td>Won't spill, clings to cuts, works in rain</td>
            <td>Most expensive per stump</td>
        </tr>
        <tr>
            <td>Physical Removal</td>
            <td>100%</td>
            <td>€20+</td>
            <td>Complete removal, no regrowth possible</td>
            <td>Labor-intensive, requires machinery</td>
        </tr>
        <tr>
            <td>Cut Only (No Treatment)</td>
            <td>5-10%</td>
            <td>€0</td>
            <td>Cheap, fast</td>
            <td>High regrowth, builds denser stump sprouts</td>
        </tr>
      </tbody>
    </table>

    <h3 id="herbicide-details">Herbicide Details</h3>

    <h4>Glyphosate (Non-selective)</h4>
    <ul>
        <li>Concentration for stump treatment: 25-50%</li>
        <li>How it works: Absorbed through freshly cut wood, translocates to roots</li>
        <li>Cost: €3-8 per liter (concentrated)</li>
        <li>Weathering: Rain-resistant after 1-2 hours</li>
    </ul>

    <h4>Triclopyr (Selective for woody plants)</h4>
    <ul>
        <li>Concentration for stump treatment: 15-25%</li>
        <li>How it works: Acts like plant hormone causing uncontrolled growth</li>
        <li>Cost: €8-15 per liter (concentrated)</li>
        <li>Weathering: Works even in wet conditions</li>
    </ul>

    <h3 id="env-profile">Environmental Profile &amp; Breakdown</h3>

    <h4>Glyphosate</h4>
    <table>
      <thead>
        <tr>
            <th>Property</th>
            <th>Value</th>
            <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Soil half-life</td>
            <td>2-197 days (avg 47 days)</td>
            <td>Highly variable by soil type</td>
        </tr>
        <tr>
            <td>Water half-life</td>
            <td>7-14 days</td>
            <td>Biodegrades relatively quickly</td>
        </tr>
        <tr>
            <td>Binding</td>
            <td>Strong to soil particles</td>
            <td>Low leaching risk when applied to stumps</td>
        </tr>
        <tr>
            <td>Breakdown products</td>
            <td>AMPA (aminomethylphosphonic acid)</td>
            <td>Also biodegrades, similar timeline</td>
        </tr>
      </tbody>
    </table>

    <h4>Triclopyr</h4>
    <table>
      <thead>
        <tr>
            <th>Property</th>
            <th>Value</th>
            <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Soil half-life</td>
            <td>8-46 days (avg 30 days)</td>
            <td>Faster breakdown than glyphosate</td>
        </tr>
        <tr>
            <td>Water half-life</td>
            <td>&lt;1 day (rapid photolysis)</td>
            <td>Very short persistence in water</td>
        </tr>
        <tr>
            <td>Binding</td>
            <td>Moderate</td>
            <td>Can leach in sandy soils</td>
        </tr>
        <tr>
            <td>Breakdown products</td>
            <td>TCP (trichloropyridinol)</td>
            <td>Biodegrades within weeks</td>
        </tr>
      </tbody>
    </table>

    <h4>Why Stump Treatment is Lower Impact than Broadcast Spraying</h4>
    <ul>
        <li>Application is targeted to cut surface only (~50-100ml per stump)</li>
        <li>No drift to non-target plants</li>
        <li>Herbicide translocates into root system (contained)</li>
        <li>Soil contact is minimal compared to foliar application</li>
        <li>Total herbicide used: ~5-10L for entire project vs. hundreds of liters for broadcast</li>
    </ul>

    <h4>Buffer Zone Recommendations</h4>
    <ul>
        <li>10m from watercourses (streams, springs, ponds)</li>
        <li>5m from wells or water collection points</li>
        <li>Avoid application if rain expected within 2 hours</li>
    </ul>

    <CalloutBox variant="tip" title="The Ecological Tradeoff">
        <p>One-time targeted herbicide use enables permanent eucalyptus eradication. Without treatment, stumps resprout aggressively—requiring repeated cutting for 5-10 years or continuous herbicide applications. The net environmental impact of successful eradication (restored watershed, eliminated fire risk, native forest recovery) far outweighs the transient soil impact of a single stump treatment.</p>
    </CalloutBox>

    <h3>Safety Protocols</h3>

    <CalloutBox variant="warning" title="Personal Protective Equipment">
        <ul>
            <li>Gloves: Nitrile or latex (herbicides absorb through skin)</li>
            <li>Eye protection: Safety glasses or goggles</li>
            <li>Skin coverage: Long sleeves, long pants</li>
            <li>Footwear: Closed-toe boots</li>
        </ul>
    </CalloutBox>

    <h3>Timing and Weather</h3>
    <ul>
        <li><strong>Best season:</strong> Late spring through autumn (trees actively growing)</li>
        <li><strong>Avoid:</strong> Heavy rain within 2 hours, extreme heat</li>
        <li><strong>Application time:</strong> Early morning or evening</li>
        <li><strong>Dry period needed:</strong> At least 1-2 hours after application</li>
    </ul>
</section>

<script>
import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
import ProcessStep from '$lib/components/ui/ProcessStep.svelte';
</script>
