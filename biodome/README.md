# Regenerative BioDome Project

A unified, interactive website for the Regenerative BioDome project — turning invasive eucalyptus trees into fire-resistant, off-grid homes while healing watersheds and enabling native forest recovery.

## Project Structure

```
biodome/
├── index.html                          # Landing page (narrative-driven)
├── nav-component.html                  # Shared navigation component
├── viewer-enhancements.js              # 3D viewer enhancement module
├── README.md                           # This file
│
├── The Regenerative BioDome — Complete Build Guide.html
├── biodome_viewer.html                 # Standard BioDome 3D viewer
│
├── The Terraced BioDome — Design Guide.html
├── biodome_terraced_viewer.html        # Terraced BioDome 3D viewer
│
├── The Regenerative Solar Pod — Design Guide.html
├── biodome_solar_viewer.html           # Solar Pod 3D viewer
│
└── sonnet/                             # Images and assets
    ├── eucalyptus_dome_greenhouse.png
    ├── construction_phases_1-10.png
    ├── construction_phases_11-18.png
    └── maintenance_reference_guide.png
```

## Features

### Landing Page (index.html)
- **Narrative Arc**: Problem → Vision → Three Paths → Action
- **Scroll Animations**: Reveal effects on scroll
- **Three Path Cards**: Interactive cards for Standard, Terraced, and Solar Pod variations
- **Distinctive Typography**: Libre Baskerville + Crimson Text
- **Organic Color Palette**: Forest greens, earth tones, warm accents
- **Responsive**: Works on desktop and mobile

### Shared Navigation Component
- **Unified Navigation**: Consistent across all pages
- **Dropdown Menus**: Guide + Viewer links for each variation
- **Mobile Responsive**: Hamburger menu with slide-in drawer
- **Active State**: Highlights current page
- **Easy Integration**: Copy/paste component into existing pages

### 3D Viewer Enhancements
- **Construction Animation**: Step-by-step build sequence
- **Exploded View**: Vertical and radial separation of layers
- **Annotation Mode**: Interactive labels with component info
- **Camera Presets**: Perspective, Top, Section Cut views
- **Timeline Scrubber**: Manual control of construction progress

## How to Use

### 1. Deploy to GitHub Pages

Since this is a pure static site:

1. Push the entire `biodome/` directory to your GitHub repository
2. Go to repository Settings → Pages
3. Set source to "Deploy from a branch"
4. Select your branch (usually `main` or `master`)
5. Set folder to `/biodome` (or `/` if biodome is root)
6. Save

Your site will be live at: `https://username.github.io/repository/`

### 2. Add Navigation to Existing Pages

To add the unified navigation to existing guide pages:

1. Open `nav-component.html`
2. Copy the `<style>` section into the `<head>` of your page
3. Copy the `<nav>` HTML right after the opening `<body>` tag
4. Copy the `<script>` section before the closing `</body>` tag

**Example integration:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Your Page</title>

    <!-- Your existing styles -->
    <style>
        /* ... */
    </style>

    <!-- ADD NAVIGATION STYLES HERE -->
    <style>
        /* Copy from nav-component.html */
    </style>
</head>
<body>

    <!-- ADD NAVIGATION HTML HERE -->
    <nav class="biodome-nav">
        <!-- Copy from nav-component.html -->
    </nav>

    <!-- Your existing content -->
    <main>
        <!-- ... -->
    </main>

    <!-- ADD NAVIGATION SCRIPT HERE -->
    <script>
        // Copy from nav-component.html
    </script>
</body>
</html>
```

### 3. Add Viewer Enhancements

To add interactive features to the 3D viewers:

1. **Tag your meshes with component names** in the viewer HTML:
   ```javascript
   // When creating meshes, add userData
   foundation.userData.component = 'foundation';
   walls.userData.component = 'walls';
   rafters.userData.component = 'rafters';
   // etc.
   ```

2. **Import the enhancement module**:
   ```html
   <script type="module">
       import * as THREE from 'three';
       import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
       import BioDomeViewer from './viewer-enhancements.js';

       // Your existing Three.js setup...
       const scene = new THREE.Scene();
       const camera = new THREE.PerspectiveCamera(...);
       const controls = new OrbitControls(camera, renderer.domElement);

       // Initialize viewer enhancements
       const viewer = new BioDomeViewer(scene, camera, controls);
       viewer.init();

       // Your animation loop...
   </script>
   ```

3. **Customize construction steps** in `viewer-enhancements.js`:
   - Edit the `setupComponentData()` method
   - Define which components are visible at each step
   - Adjust timing and animation parameters

## Design System

### Colors
```css
--forest-dark: #1a2e1a;    /* Primary dark green */
--forest-mid: #2d4a2d;     /* Navigation, accents */
--forest-light: #4a6e4a;   /* Hover states */
--earth-warm: #c9a227;     /* Gold accent, CTAs */
--earth-rust: #b85c38;     /* Warning, problem section */
--cream: #faf8f5;          /* Background */
--cream-dark: #f0ebe3;     /* Alternate background */
--text-dark: #2a2a2a;      /* Primary text */
--text-mid: #555;          /* Secondary text */
```

### Typography
- **Display**: Libre Baskerville (bold, serif, distinctive)
- **Body**: Crimson Text (readable, elegant serif)
- **Mono**: System monospace for code/specs

### Spacing Scale
- Small: 8px, 12px, 16px
- Medium: 24px, 32px, 40px
- Large: 48px, 60px, 80px
- XLarge: 100px, 120px

### Animation Timing
- Fast: 0.2s (hovers, small transitions)
- Medium: 0.3s-0.4s (dropdowns, modals)
- Slow: 0.8s-1.2s (scroll reveals, page loads)

## Content Strategy

### Narrative Flow

1. **Hero**: Immediate emotional hook
   - "Turn Invasive Trees Into Fire-Resistant Homes"
   - Focus on transformation and possibility

2. **The Problem**: Establish urgency
   - Eucalyptus crisis statistics
   - Ecological and fire danger
   - Personal, vivid language

3. **The Vision**: Present solution
   - Three benefits (Heal, Build, Enable)
   - Positive, hopeful tone
   - Concrete outcomes

4. **Three Paths**: Enable choice
   - Standard, Terraced, Solar Pod
   - Clear differentiation
   - Direct links to guides and viewers

5. **Call to Action**: Inspire movement
   - "Start Your Restoration Project"
   - Reinforce dual purpose (building + healing)

### Design Philosophy

**Bold, Not Brutal**: The design is confident and distinctive without being aggressive. We avoid:
- Generic SaaS gradients
- Overused sans-serifs (Inter, Roboto)
- Cookie-cutter layouts
- Purple gradient AI slop

**Context-Specific Character**: This is about:
- Land healing (organic, earth-toned)
- Traditional building (serif typography, classic proportions)
- Radical ecology (bold accents, unexpected structure)
- Portuguese context (Mediterranean warmth)

**Intentional Restraint**: Not every element needs animation. We focus on:
- High-impact moments (hero entrance, scroll reveals)
- Functional interactions (navigation, 3D controls)
- Purposeful motion (camera presets, construction sequence)

## Browser Compatibility

### Minimum Requirements
- Modern browsers with ES6 module support
- WebGL for 3D viewers
- CSS Grid and Flexbox

### Tested On
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Fallbacks
- Navigation works without JavaScript (links functional)
- Content readable without CSS (semantic HTML)
- 3D viewers require WebGL (graceful degradation message)

## Performance Considerations

### Loading Strategy
1. Critical CSS inline in `<head>`
2. Fonts preconnected (Google Fonts)
3. Images lazy-loaded where possible
4. Three.js loaded via CDN (unpkg.com)

### 3D Viewer Optimization
- Use `THREE.PCFSoftShadowMap` for quality/performance balance
- Limit shadow map size (2048×2048)
- Use lower poly counts for complex structures
- Enable damping on OrbitControls (smooth interaction)

### Mobile Optimization
- Responsive typography (clamp for fluid scaling)
- Hamburger navigation below 968px
- Simplified animations on mobile
- Touch-friendly hit targets (44px minimum)

## Accessibility

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Landmark regions (nav, main, footer)
- Descriptive link text

### Keyboard Navigation
- All interactive elements keyboard-accessible
- Focus visible (browsers default or custom)
- Tab order logical

### Screen Readers
- ARIA labels on icon buttons
- Alt text on images (when implemented)
- Skip links for long navigation

### Color Contrast
- Text: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- Interactive elements: Clear visual states

## Future Enhancements

### Potential Additions
1. **Image Gallery**: Construction photos, completed projects
2. **Materials Calculator**: Input site dimensions, get materials list
3. **Community Submissions**: User-built BioDomes showcase
4. **Video Embeds**: Construction timelapses, technique demos
5. **Multilingual**: Portuguese, Spanish translations
6. **Download PDFs**: Offline versions of guides
7. **AR Preview**: View BioDome on your property (WebXR)

### Technical Improvements
1. **Service Worker**: Offline functionality
2. **Progressive Web App**: Installable on mobile
3. **Image Optimization**: WebP with fallbacks
4. **Critical CSS Extraction**: Further performance gains
5. **Analytics**: Privacy-respecting usage tracking

## License

Creative Commons BY-SA 4.0

- **Attribution**: Credit original authors
- **Share-Alike**: Derivative works must use same license
- **Commercial Use**: Allowed
- **Modifications**: Allowed

## Contributing

This is an open-source ecological restoration project. Contributions welcome:

1. Fork the repository
2. Create feature branch
3. Make improvements
4. Test on multiple devices/browsers
5. Submit pull request with description

**Priority areas:**
- Translation to Portuguese/Spanish
- Real-world build photos
- Construction technique videos
- Materials sourcing guides by region
- Cost tracking from actual builds

## Credits

**Design & Development**: Claude (Anthropic) + Human Collaboration
**Concept**: Regenerative building from invasive species removal
**Inspiration**: Light straw-clay building, Da Vinci bridge structures, permaculture principles

---

**Build the forest you want to see. Start with a home made from the trees that shouldn't be there.**
