<section id="structural" data-component="Structural">
    <h1>Structural Design Values (Central Portugal)</h1>

    <p>These design values apply to Central Portugal (approximately 39-41°N latitude). If building elsewhere, consult local Eurocode national annexes.</p>

    <h2 id="design-loads">Design Loads</h2>

    <table>
      <thead>
        <tr>
            <th>Parameter</th>
            <th>Value</th>
            <th>Reference</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>Basic wind velocity (v<sub>b</sub>)</td>
            <td>27 m/s</td>
            <td>EN 1991-1-4, Zone A</td>
        </tr>
        <tr>
            <td>Reference wind pressure (q<sub>b</sub>)</td>
            <td>0.46 kN/m²</td>
            <td>q<sub>b</sub> = 0.5 × ρ × v<sub>b</sub>²</td>
        </tr>
        <tr>
            <td>Design wind pressure (exposed site)</td>
            <td>1.0-1.2 kN/m²</td>
            <td>Including exposure coefficients</td>
        </tr>
        <tr>
            <td>Snow load</td>
            <td>Negligible (0.3 kN/m² max)</td>
            <td>EN 1991-1-3, Zone Z1, &lt;400m</td>
        </tr>
        <tr>
            <td>Seismic zone</td>
            <td>1.3-2.3 (low-moderate)</td>
            <td>EN 1998-1 Portugal Annex</td>
        </tr>
        <tr>
            <td>Frost depth</td>
            <td>10-20cm</td>
            <td>Mediterranean climate</td>
        </tr>
        <tr>
            <td>Typical soil bearing capacity</td>
            <td>100-200 kN/m²</td>
            <td>Granitic soils common to region</td>
        </tr>
      </tbody>
    </table>

    <h2>Eucalyptus Structural Properties</h2>

    <table>
      <thead>
        <tr>
            <th>Species</th>
            <th>Bending Strength (f<sub>m,k</sub>)</th>
            <th>Density</th>
            <th>Suitability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td><em>E. globulus</em> (Blue Gum)</td>
            <td>25-35 MPa</td>
            <td>850 kg/m³</td>
            <td><strong>Preferred</strong> for rafters</td>
        </tr>
        <tr>
            <td><em>E. grandis</em> (Flooded Gum)</td>
            <td>25-30 MPa</td>
            <td>650 kg/m³</td>
            <td><strong>Preferred</strong> for rafters</td>
        </tr>
        <tr>
            <td><em>E. camaldulensis</em> (River Red Gum)</td>
            <td>15-25 MPa (variable)</td>
            <td>900 kg/m³</td>
            <td>Posts only, <strong>avoid for rafters</strong></td>
        </tr>
      </tbody>
    </table>

    <CalloutBox variant="warning" title="Rafter Sizing Check">
        <p>For the Standard BioDome roof (4.5m effective span, 1.5 kN/m² design load), a 15cm diameter rafter experiences approximately <strong>30 MPa bending stress</strong>. <strong>Do not use poles smaller than 15cm butt diameter for main rafters.</strong></p>
    </CalloutBox>

    <h2 id="connection-notes">Connection Design Notes</h2>

    <p><strong>Spike selection:</strong> Use 316 stainless steel for all primary structural connections. Eucalyptus heartwood is acidic and accelerates galvanized steel corrosion.</p>

    <p><strong>Notch requirement:</strong> At rafter overlaps, cut a 25-30mm deep saddle notch into the supporting rafter. The notch provides mechanical interlock.</p>

    <p><strong>Wire lashing:</strong> Galvanized wire lashing provides redundancy but is secondary to the spike and notch. Inspect annually for first 5 years.</p>

    <figure class="figure">
        <img src="/assets/render-shared-ch6-saddle-notch.svg" alt="Section view of saddle notch at rafter overlap showing 25-30mm notch cut into supporting rafter, spike placement through overlap, and galvanized wire lashing detail">
        <figcaption>Saddle notch detail: 25-30mm notch provides mechanical interlock</figcaption>
    </figure>

    <h2>Foundation Notes</h2>

    <p>The gabion ring foundation is substantially oversized for bearing capacity. This is intentional—the gabion serves primarily as a drainage layer, leveling base, and moisture break.</p>

    <p><strong>Frost heave:</strong> Not a significant concern in Central Portugal. The 30cm below-grade depth is adequate.</p>

    <p><strong>Capillary break:</strong> Add an HDPE slip sheet or gravel drainage layer beneath the ring beam to prevent moisture wicking into post bases.</p>
</section>

<script>
import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
</script>
