# Água Lila Website — Image Guide

Place all images in the `images/` folder next to `index.html`.

## Required Images

### Hero & Section Backgrounds

| Filename | Section | Size | Description |
|----------|---------|------|-------------|
| `hero-canyon.jpg` | Hero | 2400×1600+ | Dramatic canyon/mountain landscape. Used at 30% opacity with slow zoom. Landscape orientation, keep key content centered. |
| `canyon-valley.jpg` | Land split | 1600×1200+ | The valley itself — aerial or vantage point showing the terrain. |
| `gift-hands.jpg` | Economy split | 1200×1600+ | Hands offering, receiving, or working together. Portrait orientation works well here. |

### Gallery Images

| Filename | Size | Description |
|----------|------|-------------|
| `gallery-canyon-wide.jpg` | 1600×800 (2:1) | Wide canyon panorama or landscape vista |
| `gallery-waterfall.jpg` | 800×800 (1:1) | Waterfall close-up or medium shot |
| `gallery-pool.jpg` | 800×800 (1:1) | Natural swimming pool |
| `gallery-terraces.jpg` | 800×800 (1:1) | Planted terraces or food forest rows |
| `gallery-forest.jpg` | 800×800 (1:1) | Forest regeneration, native trees |
| `gallery-stream.jpg` | 800×1600 (1:2) | Vertical stream or water feature (tall image) |
| `gallery-mist.jpg` | 800×800 (1:1) | Morning mist, atmospheric shot |
| `gallery-stone.jpg` | 800×800 (1:1) | Stone walls, paths, or natural rock |
| `gallery-panorama.jpg` | 1600×800 (2:1) | Wide landscape, perhaps sunset/sunrise |

## Technical Notes

- **Format**: JPG or WebP
- **Resolution**: Gallery squares at 800px work well; wide images at 1600px
- **Optimization**: Compress before deploying (squoosh.app, tinypng.com)
- **Hero image**: 30% opacity, slow zoom — dramatic/moody images work best

## Folder Structure

```
agua-lila/
├── index.html
├── biodome-guide.html
└── images/
    ├── hero-canyon.jpg
    ├── canyon-valley.jpg
    ├── gift-hands.jpg
    ├── gallery-canyon-wide.jpg
    ├── gallery-waterfall.jpg
    ├── gallery-pool.jpg
    ├── gallery-terraces.jpg
    ├── gallery-forest.jpg
    ├── gallery-stream.jpg
    ├── gallery-mist.jpg
    ├── gallery-stone.jpg
    └── gallery-panorama.jpg
```

## Removing Placeholders

Once images are added, remove the placeholder styling:

1. Delete the CSS section marked `/* Placeholder styling - remove this section once images are added */`
2. Remove the `placeholder` class and `data-image` attribute from each element
3. Delete the `.hero-placeholder` div from the hero section
4. Add `background-image: url('images/filename.jpg')` to each gallery item

Example gallery item after adding images:
```html
<div class="gallery-item gallery-item-wide fade-up" style="background-image: url('images/gallery-canyon-wide.jpg');"></div>
```
