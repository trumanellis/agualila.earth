/**
 * BioDome 3D Viewer Enhancement Module
 *
 * Adds interactive features to the existing Three.js viewers:
 * - Construction sequence animation
 * - Exploded view mode
 * - Annotation mode with component info
 * - Camera presets (Front, Top, Section Cut)
 *
 * Usage:
 * 1. Import this module in your viewer HTML
 * 2. Initialize with: const viewer = new BioDomeViewer(scene, camera, controls, components);
 * 3. Call viewer.init() to set up controls
 */

export class BioDomeViewer {
    constructor(scene, camera, controls, components) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        this.components = components; // Object containing all mesh groups

        this.animationState = {
            isAnimating: false,
            currentStep: 0,
            totalSteps: 8,
            progress: 0
        };

        this.viewState = {
            isExploded: false,
            showAnnotations: false,
            currentPreset: null
        };

        // Store original positions for exploded view
        this.originalPositions = new Map();
        this.annotations = [];

        // Animation timing
        this.stepDuration = 1500; // ms per construction step
    }

    /**
     * Initialize the viewer enhancements
     */
    init() {
        this.createUI();
        this.setupComponentData();
        this.setupAnnotations();
        this.setupEventListeners();
        this.storeOriginalPositions();
    }

    /**
     * Create UI controls for viewer features
     */
    createUI() {
        const controlsHTML = `
            <div id="viewer-controls" style="
                position: absolute;
                bottom: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(0,0,0,0.85);
                padding: 20px 24px;
                border-radius: 12px;
                display: flex;
                gap: 12px;
                align-items: center;
                z-index: 200;
                box-shadow: 0 4px 20px rgba(0,0,0,0.5);
            ">
                <!-- Camera Presets -->
                <div style="display: flex; gap: 8px; padding-right: 16px; border-right: 1px solid #444;">
                    <button class="viewer-btn" id="preset-perspective" title="Perspective View">
                        📐 Perspective
                    </button>
                    <button class="viewer-btn" id="preset-top" title="Top View">
                        ⬇️ Top
                    </button>
                    <button class="viewer-btn" id="preset-section" title="Section Cut">
                        ✂️ Section
                    </button>
                </div>

                <!-- Animation Controls -->
                <div style="display: flex; gap: 8px; padding-right: 16px; border-right: 1px solid #444;">
                    <button class="viewer-btn" id="btn-play-construction" title="Play Construction Sequence">
                        ▶️ Build
                    </button>
                    <button class="viewer-btn" id="btn-reset-construction" title="Reset Construction" style="display:none;">
                        ⏮️ Reset
                    </button>
                </div>

                <!-- View Modes -->
                <div style="display: flex; gap: 8px; padding-right: 16px; border-right: 1px solid #444;">
                    <button class="viewer-btn" id="btn-explode" title="Exploded View">
                        💥 Explode
                    </button>
                    <button class="viewer-btn" id="btn-annotate" title="Show Annotations">
                        📍 Annotate
                    </button>
                </div>

                <!-- Construction Timeline -->
                <div id="construction-timeline" style="display: none; flex-direction: column; gap: 8px; min-width: 300px;">
                    <div style="color: #7cb342; font-size: 0.85rem; font-weight: 600;">
                        Construction Progress
                    </div>
                    <input type="range" id="timeline-slider" min="0" max="8" value="8" step="1"
                        style="width: 100%; cursor: pointer;">
                    <div id="timeline-label" style="color: #aaa; font-size: 0.75rem; text-align: center;">
                        Complete Structure
                    </div>
                </div>
            </div>

            <style>
                .viewer-btn {
                    background: #444;
                    color: white;
                    border: 1px solid #666;
                    padding: 8px 14px;
                    border-radius: 6px;
                    font-size: 0.85rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    font-weight: 500;
                }

                .viewer-btn:hover {
                    background: #555;
                    border-color: #7cb342;
                    transform: translateY(-1px);
                }

                .viewer-btn:active {
                    transform: translateY(0);
                }

                .viewer-btn.active {
                    background: #7cb342;
                    border-color: #7cb342;
                    color: white;
                }

                #timeline-slider {
                    -webkit-appearance: none;
                    appearance: none;
                    height: 6px;
                    background: #333;
                    outline: none;
                    border-radius: 3px;
                }

                #timeline-slider::-webkit-slider-thumb {
                    -webkit-appearance: none;
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    background: #7cb342;
                    cursor: pointer;
                    border-radius: 50%;
                }

                #timeline-slider::-moz-range-thumb {
                    width: 16px;
                    height: 16px;
                    background: #7cb342;
                    cursor: pointer;
                    border-radius: 50%;
                    border: none;
                }
            </style>
        `;

        document.body.insertAdjacentHTML('beforeend', controlsHTML);
    }

    /**
     * Define construction steps and component visibility
     */
    setupComponentData() {
        // Define which components are visible at each construction step
        this.constructionSteps = [
            {
                name: 'Site Preparation',
                components: ['ground'],
                description: 'Clear and level the building site'
            },
            {
                name: 'Foundation',
                components: ['ground', 'foundation'],
                description: 'Gabion ring foundation with granite fill'
            },
            {
                name: 'Vertical Posts',
                components: ['ground', 'foundation', 'verticalPoles'],
                description: 'Treated eucalyptus vertical posts'
            },
            {
                name: 'Horizontal Wattles',
                components: ['ground', 'foundation', 'verticalPoles', 'horizontalPoles'],
                description: 'Woven horizontal poles for light straw-clay infill'
            },
            {
                name: 'Light Straw-Clay Walls',
                components: ['ground', 'foundation', 'verticalPoles', 'horizontalPoles', 'walls', 'floor'],
                description: 'Clay-coated straw infill'
            },
            {
                name: 'Ring Beam',
                components: ['ground', 'foundation', 'verticalPoles', 'horizontalPoles', 'walls', 'floor', 'ringBeam'],
                description: 'Ring beam locks wall tops together'
            },
            {
                name: 'Roof Structure',
                components: ['ground', 'foundation', 'verticalPoles', 'horizontalPoles', 'walls', 'floor', 'ringBeam', 'rafters', 'purlins'],
                description: 'Roof frame and purlins'
            },
            {
                name: 'Living Roof & Finishing',
                components: ['ground', 'foundation', 'verticalPoles', 'horizontalPoles', 'walls', 'floor', 'ringBeam', 'rafters', 'purlins', 'roof', 'cupola', 'windows', 'door'],
                description: 'Living roof, cupola, windows, and door'
            },
            {
                name: 'Complete',
                components: 'all',
                description: 'Finished BioDome ready for habitation'
            }
        ];
    }

    /**
     * Setup annotation data for interactive labels
     */
    setupAnnotations() {
        this.annotationData = [
            {
                component: 'foundation',
                position: { x: 4.5, y: 0.25, z: 0 },
                title: 'Gabion Foundation',
                description: 'Granite-filled wire cages provide drainage, thermal mass, and earthquake resistance without concrete.',
                specs: 'Outer ⌀10m × Inner ⌀8.8m × H 0.5m'
            },
            {
                component: 'walls',
                position: { x: 0, y: 1.5, z: 4.5 },
                title: 'Light Straw-Clay Walls',
                description: 'Clay-coated straw provides excellent insulation and accommodates frame movement without cracking.',
                specs: 'Clay slip + loose straw • 40cm thick'
            },
            {
                component: 'ringBeam',
                position: { x: 4.0, y: 3.0, z: 0 },
                title: 'Ring Beam',
                description: 'Interlocking poles lock wall tops together under load.',
                specs: '24 poles × ~1.8m each × ⌀12-14cm'
            },
            {
                component: 'rafters',
                position: { x: 2.5, y: 3.5, z: 2.5 },
                title: 'Roof Structure',
                description: 'Self-supporting rafter structure. No center post needed.',
                specs: '12 rafters × ⌀15-18cm × 150cm overhang'
            },
            {
                component: 'roof',
                position: { x: 0, y: 4.2, z: 0 },
                title: 'Living Roof',
                description: 'Sedums and native succulents provide fire resistance, thermal mass, and habitat.',
                specs: '10-15cm substrate • ~80kg/m² saturated'
            }
        ];
    }

    /**
     * Store original positions of all components for exploded view
     */
    storeOriginalPositions() {
        this.scene.traverse((object) => {
            if (object.isMesh) {
                this.originalPositions.set(object.uuid, {
                    position: object.position.clone(),
                    scale: object.scale.clone()
                });
            }
        });
    }

    /**
     * Setup event listeners for UI controls
     */
    setupEventListeners() {
        // Camera presets
        document.getElementById('preset-perspective')?.addEventListener('click', () => {
            this.setCameraPreset('perspective');
        });

        document.getElementById('preset-top')?.addEventListener('click', () => {
            this.setCameraPreset('top');
        });

        document.getElementById('preset-section')?.addEventListener('click', () => {
            this.setCameraPreset('section');
        });

        // Construction animation
        document.getElementById('btn-play-construction')?.addEventListener('click', () => {
            this.playConstructionSequence();
        });

        document.getElementById('btn-reset-construction')?.addEventListener('click', () => {
            this.resetConstruction();
        });

        // Timeline slider
        document.getElementById('timeline-slider')?.addEventListener('input', (e) => {
            this.setConstructionStep(parseInt(e.target.value));
        });

        // Exploded view
        document.getElementById('btn-explode')?.addEventListener('click', () => {
            this.toggleExplodedView();
        });

        // Annotations
        document.getElementById('btn-annotate')?.addEventListener('click', () => {
            this.toggleAnnotations();
        });
    }

    /**
     * Set camera to a preset view
     */
    setCameraPreset(preset) {
        const duration = 1000; // Animation duration in ms
        const startPos = this.camera.position.clone();
        const startTarget = this.controls.target.clone();
        let endPos, endTarget;

        switch(preset) {
            case 'perspective':
                endPos = { x: 12, y: 8, z: 12 };
                endTarget = { x: 0, y: 1.5, z: 0 };
                break;
            case 'top':
                endPos = { x: 0, y: 15, z: 0 };
                endTarget = { x: 0, y: 0, z: 0 };
                break;
            case 'section':
                endPos = { x: 0, y: 3, z: 12 };
                endTarget = { x: 0, y: 2, z: 0 };
                break;
        }

        // Animate camera movement
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = this.easeInOutCubic(progress);

            this.camera.position.x = startPos.x + (endPos.x - startPos.x) * eased;
            this.camera.position.y = startPos.y + (endPos.y - startPos.y) * eased;
            this.camera.position.z = startPos.z + (endPos.z - startPos.z) * eased;

            this.controls.target.x = startTarget.x + (endTarget.x - startTarget.x) * eased;
            this.controls.target.y = startTarget.y + (endTarget.y - startTarget.y) * eased;
            this.controls.target.z = startTarget.z + (endTarget.z - startTarget.z) * eased;

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        animate();
        this.viewState.currentPreset = preset;
    }

    /**
     * Play construction sequence animation
     */
    async playConstructionSequence() {
        const playBtn = document.getElementById('btn-play-construction');
        const resetBtn = document.getElementById('btn-reset-construction');
        const timeline = document.getElementById('construction-timeline');

        playBtn.style.display = 'none';
        resetBtn.style.display = 'block';
        timeline.style.display = 'flex';

        this.animationState.isAnimating = true;

        for (let step = 0; step < this.constructionSteps.length; step++) {
            this.setConstructionStep(step);
            document.getElementById('timeline-slider').value = step;

            await this.sleep(this.stepDuration);

            if (!this.animationState.isAnimating) break;
        }

        this.animationState.isAnimating = false;
    }

    /**
     * Set construction step (show/hide components)
     */
    setConstructionStep(step) {
        const stepData = this.constructionSteps[step];
        const label = document.getElementById('timeline-label');

        if (label) {
            label.textContent = `Step ${step + 1}: ${stepData.name}`;
        }

        // Hide all components first
        this.scene.traverse((object) => {
            if (object.isMesh && object.userData.component) {
                object.visible = false;
            }
        });

        // Show components for this step
        const visibleComponents = stepData.components === 'all'
            ? 'all'
            : stepData.components;

        this.scene.traverse((object) => {
            if (object.isMesh && object.userData.component) {
                if (visibleComponents === 'all') {
                    object.visible = true;
                } else if (visibleComponents.includes(object.userData.component)) {
                    object.visible = true;
                }
            }
        });

        this.animationState.currentStep = step;
    }

    /**
     * Reset construction to complete state
     */
    resetConstruction() {
        const playBtn = document.getElementById('btn-play-construction');
        const resetBtn = document.getElementById('btn-reset-construction');
        const timeline = document.getElementById('construction-timeline');

        playBtn.style.display = 'block';
        resetBtn.style.display = 'none';
        timeline.style.display = 'none';

        this.animationState.isAnimating = false;

        // Show all components
        this.scene.traverse((object) => {
            if (object.isMesh && object.userData.component) {
                object.visible = true;
            }
        });
    }

    /**
     * Toggle exploded view
     */
    toggleExplodedView() {
        const btn = document.getElementById('btn-explode');
        this.viewState.isExploded = !this.viewState.isExploded;

        if (this.viewState.isExploded) {
            btn.classList.add('active');
            this.explodeView();
        } else {
            btn.classList.remove('active');
            this.collapseView();
        }
    }

    /**
     * Explode view - separate components vertically and radially
     */
    explodeView() {
        const explodeFactors = {
            foundation: { y: -0.5, radial: 0 },
            walls: { y: 0, radial: 0.3 },
            ringBeam: { y: 0.5, radial: 0.2 },
            rafters: { y: 1.0, radial: 0.4 },
            roof: { y: 1.5, radial: 0 },
            cupola: { y: 2.0, radial: 0 }
        };

        this.scene.traverse((object) => {
            if (object.isMesh && this.originalPositions.has(object.uuid)) {
                const original = this.originalPositions.get(object.uuid);
                const component = object.userData.component;
                const factor = explodeFactors[component] || { y: 0, radial: 0 };

                // Vertical offset
                object.position.y = original.position.y + factor.y;

                // Radial offset
                if (factor.radial > 0) {
                    const angle = Math.atan2(original.position.z, original.position.x);
                    const radius = Math.sqrt(original.position.x ** 2 + original.position.z ** 2);
                    const newRadius = radius * (1 + factor.radial);
                    object.position.x = newRadius * Math.cos(angle);
                    object.position.z = newRadius * Math.sin(angle);
                }
            }
        });
    }

    /**
     * Collapse view - return to original positions
     */
    collapseView() {
        this.scene.traverse((object) => {
            if (object.isMesh && this.originalPositions.has(object.uuid)) {
                const original = this.originalPositions.get(object.uuid);
                object.position.copy(original.position);
            }
        });
    }

    /**
     * Toggle annotation mode
     */
    toggleAnnotations() {
        const btn = document.getElementById('btn-annotate');
        this.viewState.showAnnotations = !this.viewState.showAnnotations;

        if (this.viewState.showAnnotations) {
            btn.classList.add('active');
            this.showAnnotations();
        } else {
            btn.classList.remove('active');
            this.hideAnnotations();
        }
    }

    /**
     * Show annotation labels
     */
    showAnnotations() {
        // Create annotation HTML elements
        this.annotationData.forEach((data, index) => {
            const el = document.createElement('div');
            el.className = 'annotation-label';
            el.innerHTML = `
                <div class="annotation-marker">📍</div>
                <div class="annotation-popup">
                    <h4>${data.title}</h4>
                    <p>${data.description}</p>
                    <code>${data.specs}</code>
                </div>
            `;
            el.setAttribute('data-annotation-id', index);
            document.body.appendChild(el);
            this.annotations.push(el);
        });

        // Add CSS for annotations
        if (!document.getElementById('annotation-styles')) {
            const style = document.createElement('style');
            style.id = 'annotation-styles';
            style.textContent = `
                .annotation-label {
                    position: absolute;
                    cursor: pointer;
                    z-index: 150;
                }
                .annotation-marker {
                    font-size: 1.5rem;
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
                    transition: transform 0.2s ease;
                }
                .annotation-label:hover .annotation-marker {
                    transform: scale(1.2);
                }
                .annotation-popup {
                    position: absolute;
                    left: 30px;
                    top: -20px;
                    background: rgba(0,0,0,0.9);
                    color: white;
                    padding: 12px 16px;
                    border-radius: 8px;
                    min-width: 250px;
                    opacity: 0;
                    pointer-events: none;
                    transition: opacity 0.3s ease;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                }
                .annotation-label:hover .annotation-popup {
                    opacity: 1;
                }
                .annotation-popup h4 {
                    font-size: 1rem;
                    margin-bottom: 6px;
                    color: #7cb342;
                }
                .annotation-popup p {
                    font-size: 0.85rem;
                    line-height: 1.5;
                    margin-bottom: 8px;
                }
                .annotation-popup code {
                    display: block;
                    font-size: 0.75rem;
                    color: #aaa;
                    font-family: monospace;
                }
            `;
            document.head.appendChild(style);
        }

        // Update annotation positions in animation loop
        this.updateAnnotationPositions();
    }

    /**
     * Hide annotations
     */
    hideAnnotations() {
        this.annotations.forEach(el => el.remove());
        this.annotations = [];
    }

    /**
     * Update annotation screen positions (call in render loop)
     */
    updateAnnotationPositions() {
        if (!this.viewState.showAnnotations) return;

        this.annotationData.forEach((data, index) => {
            const el = this.annotations[index];
            if (!el) return;

            const vector = new THREE.Vector3(data.position.x, data.position.y, data.position.z);
            vector.project(this.camera);

            const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
            const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;

            el.style.left = x + 'px';
            el.style.top = y + 'px';
        });

        requestAnimationFrame(() => this.updateAnnotationPositions());
    }

    /**
     * Utility functions
     */
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

// Export for use in viewer HTML files
export default BioDomeViewer;
