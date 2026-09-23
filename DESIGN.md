# Design System: Mugaashra Bridal Studio

## 1. Visual Theme & Atmosphere
An editorial luxury sanctuary of South Indian bridal artistry. The visual density is calibrated to **Art Gallery Airy (4/10)**, prioritizing expansive breathing room, generous section gutters, and high-impact photographic moments over cluttered data. 

Layout variance is **Offset Asymmetric (7/10)**: it avoids repetitive card grids in favor of asymmetric split-screens, sticky editorial lookbook panels, and staggered narrative cards. Motion is **Cinematic Choreography (7/10)**, featuring ambient Madurai Malli jasmine and rose petal physics, fine cosmetic powder diffusion, and weighted exponential ease curves (`cubic-bezier(0.16, 1, 0.3, 1)`). The atmosphere is warm, serene, heirloom, and uncompromisingly premium.

---

## 2. Color Palette & Roles
The palette is rooted in historic temple architecture, raw Kanjeevaram silk hues, and soft cosmetic pigments. Pure black (`#000000`) and neon gradients are strictly banned.

* **Warm Atelier Canvas** (`#FAFAF8`) — Primary light background surface for editorial reading.
* **Studio Pure White** (`#FFFFFF`) — Card containers, elevated surfaces, and form backdrops.
* **Midnight Charcoal Noir** (`#181514`) — Deep Zinc-950 depth used for hero covers, mobile drawer, and high-contrast night surfaces.
* **Deep Umber Ink** (`#222222`) — Primary text; warm charcoal with 90% body tint for gentle contrast.
* **Warm Sand Accent** (`#B58A69`) — Signature metallic gold accent for CTAs, active highlights, and borders.
* **Heritage Sandal Gold** (`#C5A078`) — High-contrast accent for dark-mode labels, logos, and badges.
* **Temptu Sand Pigment** (`#E2C4A8`) — Soft luminous highlight on dark surfaces.
* **Sacred Muhurtham Crimson** (`#8B0000`) — Deep heritage maroon motif; strictly reserved for cultural accent touches and light surfaces.
* **Whisper Border** (`rgba(34, 34, 34, 0.12)`) — 1px architectural dividers and hair-thin card outlines.

---

## 3. Typography Rules
A disciplined pairing of an editorial high-contrast serif with a clean, geometric sans-serif.

* **Display & Headings:** `Cormorant Garamond` (Serif). Scaled via fluid mathematical clamps (`clamp(2.25rem, 1.37rem + 3.76vw, 4.75rem)`). Track-tight (-0.015em), warm, and dignified. Never screaming or oversized.
* **Eyebrows & Navigation:** `Montserrat` (Sans-Serif). All-caps with generous letter-spacing (`tracking-[2px]` to `tracking-[3px]`), medium to bold weight (`500`–`700`). Acts as architectural punctuation.
* **Body Copy:** `Cormorant Garamond` with relaxed leading (`line-height: 1.65`–`1.85`), maximum 65–75 characters per measure, rendered in deep umber (`rgba(34, 34, 34, 0.90)`).
* **Banned Fonts:** `Inter`, generic system sans-serifs, and system serifs (`Times New Roman`, `Georgia`, `Garamond`).

---

## 4. Component Stylings
* **Buttons & CTAs:** Flat, tactile, and grounded. Features an active touch compression (`active:scale-[0.98]`). Primary actions use solid accent gold fill (`#B58A69`) with dark ink text; secondary actions use transparent ghost borders. No outer neon halos or fake glowing drop shadows.
* **Cards & Containers:** Elevation is conveyed through razor-thin 1px borders (`border-[var(--color-border)]`) and feather-soft shadows (`shadow-xs` / `shadow-sm`). Card borders never exceed 1px. Radii remain strictly minimal (`rounded-xs` / `rounded-sm`), avoiding toy-like oversized rounded corners.
* **Forms & Fields:** Explicit labels positioned above inputs, minimal bottom-border underlines with smooth accent focus transitions (`border-b`, `focus:border-[var(--color-accent-text)]`), and accessible live feedback regions (`role="status"`). No gimmicky floating labels.
* **Accordions & Tabs:** Semantic `role="tablist"` and `aria-controls` bindings with fluid 45-degree rotational toggles on plus icons.

---

## 5. Layout Principles
* **Spatial Zones:** Clean spatial separation between text and visual assets. Elements never collide or overlap haphazardly.
* **Hero Architecture:** Cinematic split view on desktop with full-bleed imagery and subtle gradient scrim; dedicated mobile frame (`aspect-[768/1366]`) with gentle portrait breathe animation. Zero centered hero templates.
* **Lookbook Scroll Architecture:** Split 62%/38% layout on desktop combining a continuous vertical image stream with a sticky editorial briefing panel featuring dynamic ghost numerals.
* **Single Column Collapse:** Strict collapse to single-column layout below 768px (`md:` breakpoint).
* **Mathematical Fluid Scaling:** Spacing, typography, and section paddings scale proportionally via `clamp()` equations between 375px and 1440px viewports.
* **Touch Targets:** All interactive triggers, links, and buttons maintain a minimum 44×44px hit target.

---

## 6. Motion & Interaction
* **Motion Philosophy:** Natural, organic, and physically grounded.
* **Physics & Timing:** Premium exponential ease (`cubic-bezier(0.16, 1, 0.3, 1)`) for UI reveals and page transitions; linear spring fallback (`linear(0, 1.08 15%, 0.95 45%, 1.02 70%, 1 100%)`).
* **Atmospheric Particulate Simulation:** HTML5 Canvas particle systems simulating authentic Madurai Malli jasmine buds and velvet rose petals drifting in an ambient breeze, paused automatically off-screen and under reduced-motion settings.
* **Cosmetic Powder Burst:** Interactive micro-burst on pointer press simulating 45% atomized translucent cosmetic face powder with real aerodynamic drag.
* **Accessibility Override:** Full support for `prefers-reduced-motion: reduce`, disabling heavy spatial transforms while preserving functional 0.15s state transitions for interactive controls.

---

## 7. Anti-Patterns (Banned AI Tells)
* ❌ **No `Inter` font** — Enforces distinctive `Cormorant Garamond` + `Montserrat` identity.
* ❌ **No pure black (`#000000`)** — Warm midnight charcoal (`#181514`) grounds all dark surfaces.
* ❌ **No neon / AI purple or cyan glows** — Strict adherence to natural gold, sandal, umber, and terracotta tones.
* ❌ **No repetitive 3-equal card grids** — Replaced with asymmetric sticky split-screens and alternating hero showcases.
* ❌ **No fabricated metrics or placeholder statistics** ("99.9% Uptime", "10,000+ happy clients", "124ms SLA"). All data reflects real studio policies (10 years of craft, 1-bride-per-date exclusivity, Tamil wedding season timetables).
* ❌ **No fake names or corporate placeholders** ("John Doe", "Acme", "Nexus"). Uses verified founder identity (Lead Master Artist Shwetha Mohan) and authentic client accounts.
* ❌ **No AI copywriting clichés** ("Elevate your beauty", "Unleash next-gen bridal"). Copy uses real atelier craftsmanship language (48-hour Kanjeevaram pre-pleating, 16-hour homam sweatproof airbrush, Temptu Pro silicone mist).
* ❌ **No filler navigation hints** ("Scroll to explore", bouncing chevrons, floating mouse icons).
