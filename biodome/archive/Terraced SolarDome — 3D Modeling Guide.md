# Terraced SolarDome — 3D Modeling Guide

A step-by-step guide for 3D modelers to accurately recreate the Terraced SolarDome structure. This guide follows the same construction order as the Design Guide, ensuring architectural accuracy.

---

## Overview

**Software Compatibility:** Blender, Three.js, SketchUp, Rhino, or any 3D modeling software

**Coordinate System:**
- Y-axis = Up (height)
- X-axis = East-West
- Z-axis = North-South (positive Z = South, toward viewer)
- Origin (0, 0, 0) = Center of terrace wall at ground level

**Scale:** 1 unit = 1 meter (real-world scale)

---

## Quick Reference: Key Dimensions

| Component | Value |
|-----------|-------|
| Foundation inner radius | 4.5m |
| Foundation width | 0.7m |
| Foundation total height | 1.0m |
| Wall height (ground level) | 3.0m |
| Wall thickness | 0.35–0.45m |
| Vertical posts | 16 poles, 0.15m diameter |
| Reciprocal frame rafters | 14 poles, 0.175m diameter |
| Peak height | 6.5m |
| Cupola opening | 1.5m diameter |
| Solar panels | 25 total (E:7, S:11, W:7) |
| Panel dimensions | 1.1m × 1.75m |

---

## Part One: Scene Setup

### Step 1.1: Create Ground Plane and Terraces

The structure sits on a lower terrace with a retaining wall behind it leading to an upper terrace.

**Lower Terrace (Ground Level):**
```
Geometry: Plane
Position: (0, 0, 10)
Size: 35m × 25m
Rotation: -90° on X-axis (horizontal)
Color: #4a6b4a (dark green-brown)
```

**Upper Terrace (Behind Wall):**
```
Geometry: Plane
Position: (0, 3.0, -9)
Size: 35m × 18m
Rotation: -90° on X-axis (horizontal)
Color: #3d5c3d (darker green)
```

### Step 1.2: Create Terrace Retaining Wall

The terrace wall is granite/stone with a slight inward batter (lean).

**Terrace Wall:**
```
Geometry: Extruded trapezoid (cross-section)
Position: Centered at Z = 0
Length: 16m (along X-axis)
Height: 3.0m
Bottom thickness: 0.8m
Top thickness: 0.56m (8% batter = 0.24m reduction)
Color: #6b7b6b (granite gray)
```

**Modeling Tip:** Create a 2D trapezoid shape, then extrude along the X-axis for 16m. The batter creates structural stability and authentic dry-stone wall appearance.

---

## Part Two: Foundation (Chapter 5)

### Step 2.1: Gabion Foundation Ring

The foundation is a semicircular gabion cage filled with stone, anchored to the terrace wall at both ends.

**Foundation Parameters:**
```
Shape: Semicircular arc (180°)
Inner radius: 4.5m
Outer radius: 5.2m (inner + 0.7m width)
Total height: 1.0m
Position: Starts at Y = 0, extends up to Y = 1.0
Center point: (0, 0, 0.45) — offset from terrace wall
Arc direction: Opens toward south (positive Z)
```

**Geometry Construction:**
1. Create a 2D arc shape (semicircle) with inner and outer radius
2. Extrude upward 1.0m
3. Position so the arc ends meet the terrace wall

**Material:**
```
Color: #7a7a72 (stone gray)
Roughness: 0.9
Transparency: Optional 0.7 opacity to show stones
```

### Step 2.2: Foundation Detail (Optional)

For higher detail, add visible stone texture:
- Add noise/displacement to surface
- Or scatter small box/sphere primitives inside to simulate stones
- Wire mesh overlay (thin cylinders in grid pattern)

---

## Part Three: Walls (Chapter 6)

### Step 3.1: Wall Mass (Light Straw-Clay)

The walls follow the semicircular footprint, 3.0m tall on the ground level.

**Wall Arc Parameters:**
```
Shape: Semicircular arc (180°)
Inner radius: 4.1m (inside face)
Outer radius: 4.5m (matches foundation inner edge)
Thickness: 0.4m
Height: 3.0m
Base Y position: 1.0m (sits on foundation)
Top Y position: 4.0m
```

**Geometry Construction:**
1. Create semicircular arc shape (same as foundation but smaller width)
2. Extrude upward 3.0m
3. Position on top of foundation

**Material:**
```
Color: #e8dcc8 (warm cream/straw)
Roughness: 0.85
Transparency: 0.35 opacity (to see structure inside)
```

### Step 3.2: Vertical Posts (Eucalyptus)

16 vertical poles support the wall structure, evenly spaced around the semicircle.

**Post Parameters:**
```
Count: 17 posts (including both end posts)
Diameter: 0.15m (radius 0.075m)
Height: 3.0m
Placement radius: 4.3m (center of wall thickness)
Spacing: Every 11.25° around the semicircle (180° / 16)
```

**Geometry:**
```
For each post (i = 0 to 16):
    angle = (i / 16) × π  // 0 to π radians
    x = 4.3 × cos(angle)
    z = 4.3 × sin(angle) + 0.45  // offset from wall
    y_base = 1.0  // on foundation
    y_top = 4.0   // top of wall
```

**Material:**
```
Color: #8b5a2b (eucalyptus brown)
Roughness: 0.7
Slight taper: Bottom radius 0.076m, top radius 0.074m
```

### Step 3.3: Horizontal Bracing Poles

Horizontal poles connect adjacent vertical posts at multiple levels.

**Bracing Parameters:**
```
Levels: 7 heights — Y = 1.5, 1.9, 2.3, 2.7, 3.1, 3.5, 3.9
Diameter: 0.06m (radius 0.03m)
Count per level: 16 segments (between adjacent posts)
```

**Geometry Construction:**
For each level and each pair of adjacent posts:
1. Calculate start and end positions from post locations
2. Create cylinder oriented between the two points
3. Use "look at" rotation to align cylinder axis

**Material:**
```
Color: #b8860b (golden brown)
Roughness: 0.7
```

---

## Part Four: Windows (Chapter 6)

### Step 4.1: Gothic Arched Windows

4 Gothic windows are positioned around the curved face of the structure.

**Window Parameters:**
```
Count: 4 windows
Width: 1.0m
Height (to arch start): 1.25m
Arch peak height: 0.35m above arch start
Total height: 1.6m (including arch)
Placement radius: 4.55m (on outer wall face)
Angular positions: 45°, 75.6°, 104.4°, 135° (from X-axis)
Base Y: 1.6m (above foundation)
```

**Gothic Arch Shape Construction:**
1. Start with rectangle 1.0m wide × 1.25m tall
2. Add pointed arch at top:
   - Left curve: quadratic bezier from (-0.5, 1.25) through (-0.25, 1.45) to (0, 1.6)
   - Right curve: quadratic bezier from (0.5, 1.25) through (0.25, 1.45) to (0, 1.6)

**Glass Material:**
```
Color: #88ccee (sky blue)
Transparency: 0.45 opacity
Roughness: 0.0
Transmission: 0.6 (for physically-based rendering)
```

### Step 4.2: Window Frames (Eucalyptus)

**Frame Parameters:**
```
Frame thickness: 0.08m
Frame depth: 0.06m
```

Create frame by:
1. Duplicate gothic shape
2. Scale up slightly for outer boundary
3. Subtract inner gothic shape (boolean difference)
4. Extrude 0.06m for depth

**Material:**
```
Color: #8b5a2b (eucalyptus brown)
Roughness: 0.7
```

### Step 4.3: Entry Door

**Door Parameters:**
```
Width: 1.0m
Height: 2.1m
Position: Centered on south face (angle = 90°, at π/2)
Radius: 4.4m from center
Y base: 1.0m (floor level)
```

**Material:**
```
Door panel: #5c4033 (dark wood)
Frame: #8b5a2b (eucalyptus)
Frame thickness: 0.075m
```

---

## Part Five: Reciprocal Frame (Chapter 7)

### Step 5.1: Ring Beam

A continuous ring beam sits atop the walls, supporting the rafters.

**Ring Beam Parameters:**
```
Shape: Semicircular arc following wall top
Radius: 4.4m
Y position: 4.2m (just above wall top at 4.0m)
Pole diameter: 0.14m (slightly smaller than rafters)
Segments: 28 short cylinders forming the arc
```

**Geometry:**
Create 28 cylinder segments, each spanning ~6.4° of arc, connected end-to-end.

**Material:**
```
Color: #8b4513 (darker brown)
Roughness: 0.6
```

### Step 5.2: Primary Rafters (Reciprocal Structure)

The heart of the design: 15 rafters radiating from the ring beam to a central point, each resting on its neighbor.

**Rafter Parameters:**
```
Count: 15 rafters (spanning the semicircle)
Diameter: 0.175m (17.5cm average)
Start radius: 6.0m (with 1.5m overhang beyond walls)
Start Y: 4.2m (at ring beam)
End point: Near center, Y = 6.5m (peak height)
Angular spacing: 12° apart (180° / 15)
```

**Geometry Construction:**
For each rafter (i = 0 to 14):
```
angle = (i / 14) × π
start_x = 6.0 × cos(angle)
start_z = 6.0 × sin(angle) + 0.45
start_y = 4.2

end_x = start_x × 0.02  // converge to near-center
end_z = 0.4  // near terrace wall
end_y = 6.5

// Create cylinder between start and end points
// Use slight taper: base 0.095m radius, tip 0.077m radius
```

**Material:**
```
Color: #cd853f (peru/tan)
Roughness: 0.6
```

### Step 5.3: Purlins (Secondary Rafters)

Horizontal rings at different heights connecting the primary rafters.

**Purlin Parameters:**
```
Heights: Y = 4.7, 5.1, 5.5, 5.9 (4 levels)
Diameter: 0.08m
At each height, radius decreases as you go higher
```

**Geometry:**
For each height level:
1. Calculate radius based on interpolation between eave and peak
2. Create segmented arc of small cylinders
3. Follow the curved profile of the roof

---

## Part Six: Upper Level (Sleeping Pods)

### Step 6.1: Upper Floor Platform

The upper level sits at terrace wall height, providing sleeping pod space.

**Floor Parameters:**
```
Shape: Semicircular
Radius: 4.35m
Y position: 3.0m (terrace wall height)
Thickness: 0.15m (floor boards)
```

**Material:**
```
Color: #d4a574 (light wood)
Roughness: 0.85
Transparency: 0.6 opacity
```

### Step 6.2: Pod Partition Walls

Low walls (1.2m) divide the upper level into sleeping compartments.

**Partition Parameters:**
```
Shape: Semicircular arc (thinner than ground walls)
Inner radius: 4.05m
Outer radius: 4.35m
Height: 1.2m
Y base: 3.0m
```

**Material:**
```
Same as ground walls: #e8dcc8
Transparency: 0.35 opacity
```

### Step 6.3: Upper Level Posts

Shorter posts continue from the upper floor to support the frame.

**Post Parameters:**
```
Count: 13 posts
Diameter: 0.12m
Height: 2.0m
Placement radius: 4.15m
Y base: 3.0m
Y top: 5.0m
```

---

## Part Seven: Roof and Cupola (Chapter 8)

### Step 7.1: Living Roof Surface

The roof follows the curved profile from eaves to peak.

**Roof Geometry:**
Create a surface mesh connecting:
- Outer edge: Arc at radius 6.1m, Y = 4.35m (eaves with overhang)
- Inner edge: Arc at radius 0.85m, Y = 6.4m (cupola opening)

**Construction:**
1. Create two semicircular arcs (outer at eaves, inner at cupola)
2. Loft or bridge between them
3. Add slight curvature (convex upward) for visual appeal

**Material:**
```
Color: #4a7c3a (living roof green)
Roughness: 0.9
Transparency: 0.5 opacity
```

### Step 7.2: Central Cupola

A glazed dome at the apex for ventilation and light.

**Cupola Parameters:**
```
Position: (0, 6.6, 0.4)
Diameter: 1.5m
Shape: Hemisphere (dome)
Ring at base: Torus, radius 0.75m, tube radius 0.05m
```

**Cupola Struts:**
```
Count: 8 struts in spiral pattern
Diameter: 0.05m
Connect from ring edge to converging center
```

**Cupola Glass:**
```
Geometry: Half-sphere, radius 0.85m
Color: #88ccee
Transparency: 0.4 opacity
Transmission: 0.7
```

---

## Part Eight: Solar Panels (Chapter 9)

### Step 8.1: Panel Dimensions

All panels use the same dimensions:
```
Width: 1.1m
Height: 1.75m
Depth: 0.05m
```

### Step 8.2: East Section (Morning Sun)

**East Panel Parameters:**
```
Count: 7 panels
Angular range: 0° to 60° (from positive X-axis)
Placement: On roof surface, following contour
Tilt: 30° from horizontal, facing east
```

**Positioning:**
```
For each panel (i = 0 to 6):
    t = 0.35 + (i % 3) × 0.15  // vary height position
    angle = (i + 0.5) / 7 × (π / 3)  // 0 to 60°

    radius = 6.0 × (1 - t × 0.5)
    x = radius × cos(angle)
    z = radius × sin(angle) + 0.45 × (1 - t × 0.5)
    y = 4.2 + t × (6.5 - 4.2)

    // Orient facing outward
```

### Step 8.3: South Section (Primary Array)

**South Panel Parameters:**
```
Count: 11 panels
Angular range: 60° to 120°
Placement: Largest section, most uniform spacing
Tilt: 30° from horizontal, facing south
```

### Step 8.4: West Section (Afternoon Sun)

**West Panel Parameters:**
```
Count: 7 panels
Angular range: 120° to 180°
Placement: Mirror of east section
Tilt: 30° from horizontal, facing west
```

**Panel Material:**
```
Color: #1a237e (deep blue)
Roughness: 0.15
Metalness: 0.5
Slight reflectivity for photovoltaic appearance
```

---

## Part Nine: IR Heating Orb (Chapter 10)

### Step 9.1: Orb Sphere

**Orb Parameters:**
```
Position: (0, 5.0, 2.0)  // suspended in communal space
Radius: 0.22m
```

**Material:**
```
Color: #ff6b35 (warm orange)
Roughness: 0.3
Emissive: #ff6b35 at 0.7 intensity (glowing effect)
```

### Step 9.2: Suspension Cables

**Cable Parameters:**
```
Count: 3 cables
Positions: X offsets of -0.12, 0, +0.12
Length: 1.4m (to ceiling)
Diameter: 0.024m
```

**Material:**
```
Color: #222222 (dark metal)
```

### Step 9.3: Orb Glow (Lighting)

Add a point light at the orb position:
```
Position: Same as orb
Color: #ff6b35
Intensity: 0.9
Range: 10m
Cast shadows: Optional
```

---

## Part Ten: Finishing Details

### Step 10.1: Ground Floor

**Floor Parameters:**
```
Shape: Semicircular
Radius: 4.0m (inside wall line)
Y position: 1.02m (just above foundation)
```

**Material:**
```
Color: #b8734a (terracotta/clay)
Roughness: 0.85
```

### Step 10.2: Lighting Setup

**Sun Light:**
```
Type: Directional
Position: (12, 18, 12)
Color: #fff5e6 (warm daylight)
Intensity: 1.3
Cast shadows: Yes
```

**Fill Light:**
```
Type: Directional
Position: (-8, 5, -8)
Color: #87ceeb (sky blue)
Intensity: 0.25
Cast shadows: No
```

**Ambient Light:**
```
Type: Ambient/hemisphere
Color: #ffffff
Intensity: 0.35
```

### Step 10.3: Camera Positions

**Default View (South-East perspective):**
```
Position: (14, 10, 18)
Target: (0, 2.5, 3)
FOV: 50°
```

**Interior View:**
```
Position: (0, 2.5, 3)
Target: (0, 5, 0)
FOV: 75°
```

**Aerial View:**
```
Position: (0, 20, 15)
Target: (0, 3, 0)
FOV: 45°
```

---

## Color Palette Reference

| Component | Hex Color | RGB |
|-----------|-----------|-----|
| Gabion foundation | #7a7a72 | (122, 122, 114) |
| Straw-clay walls | #e8dcc8 | (232, 220, 200) |
| Eucalyptus vertical | #8b5a2b | (139, 90, 43) |
| Eucalyptus horizontal | #b8860b | (184, 134, 11) |
| Rafters | #cd853f | (205, 133, 63) |
| Ring beam | #8b4513 | (139, 69, 19) |
| Living roof | #4a7c3a | (74, 124, 58) |
| Solar panels | #1a237e | (26, 35, 126) |
| Window glass | #88ccee | (136, 204, 238) |
| IR orb | #ff6b35 | (255, 107, 53) |
| Floor | #b8734a | (184, 115, 74) |
| Upper floor | #d4a574 | (212, 165, 116) |
| Door | #5c4033 | (92, 64, 51) |
| Granite wall | #6b7b6b | (107, 123, 107) |
| Lower terrace | #4a6b4a | (74, 107, 74) |
| Upper terrace | #3d5c3d | (61, 92, 61) |
| Straw bale (sleeping pod) | #d4b896 | (212, 184, 150) |
| Pod roof (green) | #4a7c59 | (74, 124, 89) |
| Pod floor | #8b7355 | (139, 115, 85) |
| Ladder (eucalyptus) | #8b5a2b | (139, 90, 43) |

---

## Chapter 11: Sleeping Pods (Upper Terrace)

Two hobbit-hole style sleeping compartments built INTO the upper terrace. Based on Solar Pod sleeping loft specifications.

### Pod Chambers

**Specifications:**
| Property | Value |
|----------|-------|
| Number of pods | 2 compartments |
| Pod width | 2.1m each |
| Pod depth | 2.5m (into terrace) |
| Ceiling height | 2.0m |
| Floor level | Y = 3.0m (terrace level) |
| Spacing between pods | 0.3m |
| Total floor area | ~11m² (2 × 5.3m²) |

**Wall Construction:**
- Material: Straw bale (R-30 insulation)
- Thickness: 450mm (0.45m)
- Side walls and back wall fully enclosed
- Front opens toward dome interior

**Geometry:**
| Element | Geometry Type | Dimensions |
|---------|---------------|------------|
| Floor | Box | (podWidth - 0.1) × 0.1 × (podDepth - 0.2) |
| Side walls | Box | 0.45 × 2.0 × 2.5 |
| Back wall | Box | 2.1 × 2.0 × 0.45 |
| Green roof | Box | (podWidth + 0.2) × 0.3 × (podDepth + 0.3) |

**Positioning:**
```
totalWidth = (2 × 2.1) + 0.3 = 4.5m
startX = -totalWidth / 2 = -2.25m

Pod 1 center: X = -2.25 + 1.05 = -1.2m
Pod 2 center: X = -2.25 + 2.1 + 0.3 + 1.05 = 1.2m

Z position (all elements): -podDepth / 2 = -1.25m (behind terrace wall)
```

### Entry Openings

**Entry Frame:**
| Property | Value |
|----------|-------|
| Width | 0.9m |
| Height | 1.2m |
| Frame thickness | 0.15m |
| Position Z | 0.1m (at terrace wall face) |
| Material | Eucalyptus (same as window frames) |

**Small Window:**
| Property | Value |
|----------|-------|
| Width | 0.5m |
| Height | 0.6m |
| Position Y | floorY + (podHeight × 0.6) = 4.2m |
| Position Z | 0.15m |
| Material | Glass (same as Gothic windows) |

### Ladder Access

Eucalyptus ladder from dome interior to sleeping pod level.

**Specifications:**
| Property | Value |
|----------|-------|
| Width | 0.5m |
| Height | 2.8m |
| Angle | 60° from vertical |
| Number of rungs | 8 |
| Rung spacing | ~0.35m |

**Rail Geometry:**
- Type: Cylinder
- Radius: 0.04m (top) to 0.05m (bottom)
- Length: 2.8 / cos(30°) ≈ 3.23m
- Position X: ±0.25m (for two rails)
- Position Y: 3.0 - 1.4 = 1.6m
- Position Z: structureOffset - 0.5m
- Rotation X: -60° (leaning toward terrace)

**Rung Geometry:**
- Type: Cylinder
- Radius: 0.025m (top) to 0.03m (bottom)
- Length: 0.6m
- Rotation Z: 90°
- Distributed evenly along ladder

---

## Build Order Checklist

Follow this order to match the Design Guide construction sequence:

- [ ] **Phase 1:** Terrain (lower terrace, upper terrace, retaining wall)
- [ ] **Phase 2:** Foundation (gabion ring)
- [ ] **Phase 3:** Walls (straw-clay mass)
- [ ] **Phase 4:** Wall structure (vertical posts, horizontal bracing)
- [ ] **Phase 5:** Windows (Gothic arched, 4 units)
- [ ] **Phase 6:** Door (main entry)
- [ ] **Phase 7:** Ring beam
- [ ] **Phase 8:** Reciprocal frame (primary rafters)
- [ ] **Phase 9:** Purlins (secondary rafters)
- [ ] **Phase 10:** Upper level (floor platform, partition walls, posts)
- [ ] **Phase 11:** Roof surface (living roof)
- [ ] **Phase 12:** Cupola (ring, struts, glass dome)
- [ ] **Phase 13:** Solar panels (east section)
- [ ] **Phase 14:** Solar panels (south section)
- [ ] **Phase 15:** Solar panels (west section)
- [ ] **Phase 16:** IR heating orb
- [ ] **Phase 17:** Sleeping pods (two chambers in upper terrace)
- [ ] **Phase 18:** Ladder access (eucalyptus ladder to sleeping pods)
- [ ] **Phase 19:** Ground floor
- [ ] **Phase 20:** Lighting and camera setup

---

## Animation Suggestions

For animated build sequences:

1. **Progressive reveal:** Hide all objects initially, then show each phase with a 0.4–0.5 second delay
2. **Grow from ground:** Animate Y-scale from 0 to 1 for each component
3. **Fade in:** Animate opacity from 0 to final value
4. **Construction labels:** Display phase name during each build step

---

## Verification Checklist

After completing the model, verify against Design Guide specs:

| Spec | Target | Check |
|------|--------|-------|
| Total floor area | 61–81m² | ☐ |
| Peak height | 6–7m | ☐ |
| Foundation radius | 4–5m | ☐ |
| Wall thickness | 35–45cm | ☐ |
| Vertical posts | ~16 | ☐ |
| Rafters | 12–16 | ☐ |
| Cupola opening | 1–2m | ☐ |
| Solar panels | 24–28 total | ☐ |
| East panels | 6–8 | ☐ |
| South panels | 10–12 | ☐ |
| West panels | 6–8 | ☐ |
| Panel tilt | 25–35° | ☐ |
| Windows | 3–4 Gothic | ☐ |
| Door | 1.0m × 2.1m | ☐ |
| Sleeping pods | 2 chambers | ☐ |
| Pod dimensions | 2.1m × 2.5m × 2.0m | ☐ |
| Sleeping pod area | ~11m² total | ☐ |
| Ladder rungs | 8 | ☐ |

---

*This guide corresponds to "The Terraced SolarDome — Design Guide" Version 1.0, January 2026*
