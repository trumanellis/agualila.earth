<section id="moisture" data-component="MoistureManagement">
    <h1>Interior Moisture Management</h1>

    <p>Natural buildings with breathable walls and living roofs require active moisture management. Without it, winter condensation leads to mold and accelerated decay.</p>

    <CalloutBox variant="danger" title="Condensation Risk in Winter">
        <p>Occupancy generates 2-4 kg of water vapor daily (breathing, cooking, bathing). In an unheated or minimally-heated off-grid structure, this moisture condenses on cold surfaces — especially north-facing walls and the underside of the roof.</p>
    </CalloutBox>

    <h2 id="ventilation-requirements">Ventilation Requirements</h2>
    <ul>
        <li><strong>Continuous background ventilation:</strong> Install trickle vents in at least 2 windows (opposite walls for cross-flow). Target 0.5 air changes per hour minimum.</li>
        <li><strong>Extract ventilation:</strong> Bathroom and kitchen areas need extract fans vented to exterior — do not rely on passive ventilation alone.</li>
        <li><strong>Winter protocol:</strong> Open windows briefly (5-10 minutes) each morning to flush humid air, then close to retain heat.</li>
    </ul>

    <h2 id="humidity-targets">Target Humidity Levels</h2>

    <table>
        <thead>
            <tr>
                <th>Season</th>
                <th>Target RH</th>
                <th>Action if Exceeded</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Summer</td>
                <td>40-60%</td>
                <td>Ensure ventilation if above 60%</td>
            </tr>
            <tr>
                <td>Winter (heated)</td>
                <td>40-55%</td>
                <td>Increase ventilation; check for leaks</td>
            </tr>
            <tr>
                <td>Winter (unheated)</td>
                <td>50-65%</td>
                <td>If sustained above 65%, add dehumidifier or heat source</td>
            </tr>
        </tbody>
    </table>

    <CalloutBox variant="tip" title="Monitor Regularly">
        <p>A simple digital hygrometer (under &euro;10) placed on the north wall will alert you before condensation becomes a problem. If relative humidity consistently exceeds targets, increase ventilation before adding heat.</p>
    </CalloutBox>
</section>

<script>
import CalloutBox from '$lib/components/ui/CalloutBox.svelte';
</script>
