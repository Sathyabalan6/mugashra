# Design System Master File — Mugashra Bridal Artistry

> **LOGIC:** When building or modifying a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Mugashra Artistry  
**Genre:** Editorial Luxury Atelier  
**Location:** Chennai, Tamil Nadu, India  
**Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Payload CMS 3  

---

## Global Design Tokens

### Color Palette

| Token | Hex / Value | Role | Contrast Ratio |
|---|---|---|---|
| `--color-bg` | `#FAFAF8` | Canvas / Warm Linen Paper | Base canvas |
| `--color-bg-white` | `#FFFFFF` | Card surfaces & Elevated sections | Clean contrast |
| `--color-text` | `#222222` | Primary Headlines & Bold Copy | 15.2:1 (AAA) |
| `--color-text-body` | `rgba(34, 34, 34, 0.90)` | Reading Copy & Paragraphs | 13.8:1 (AAA) |
| `--color-muted` | `rgba(34, 34, 34, 0.70)` | Captions, Metadata & Subtitles | 4.8:1 (AA compliant) |
| `--color-border` | `rgba(34, 34, 34, 0.12)` | Hairline Rules & Frame Borders | Subtle 1px divider |
| `--color-border-subtle` | `rgba(34, 34, 34, 0.06)` | Secondary card containers | Soft delineation |
| `--color-accent` | `#B58A69` | Sand Bronze Gold (Borders & CTA Buttons) | Warm brand accent |
| `--color-accent-text` | `#8C5E3A` | High-contrast Bronze Gold (Text & Eyebrows) | 4.7:1 (AA compliant) |
| `--color-accent-hover` | `#9B7050` | Interactive Hover State | Rich Bronze |

---

## Typography Hierarchy

- **Editorial Serif (Headings & Luxury Statements):** `Lora` via `next/font/google` (`--font-serif-luxury`)
- **Geometric Sans (Navigation, Eyebrows, Labels & CTAs):** `Inter` via `next/font/google` (`--font-inter`)
- **Scale:**
  - Hero Display: `font-serif text-3xl sm:text-7xl lg:text-[92px] leading-[1.04] tracking-[0.04em]`
  - Section Titles: `font-serif text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em]`
  - Eyebrows: `font-sans text-[11px] uppercase tracking-[2.5px] font-semibold text-[var(--color-accent-text)]`
  - Body Copy: `font-serif text-sm sm:text-base leading-[1.85] text-[var(--color-text-body)] font-light`
  - Captions & Citations: `font-serif italic text-xs sm:text-sm text-[var(--color-muted)]`

---

## Component Standards

### Buttons & Interactive Affordances
- **Minimum Target Area:** `min-h-[44px]` and `min-w-[44px]` for mobile touch compliance.
- **Hover & Focus:** Smooth `transition-colors duration-300` without layout-shifting transforms.
- **Focus Rings:** `:focus-visible { outline: 2px solid var(--color-accent-text); outline-offset: 2px; }`

### Modals & Dialogs
- **Backdrop:** `#181514/90 backdrop-blur-md`
- **A11y:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, `Escape` key close handler, focus management.

---

## Anti-Patterns (Forbidden)

- ❌ **No Emoji as UI Icons** — Always use inline SVG vector line icons.
- ❌ **No Side-Tab Accent Borders** (`border-l-2`) — Use clean typography hierarchy or full hairline borders.
- ❌ **No Pulsing Bracket Headings (`{ HEADING }`)** — Keep display typography roman and dignified.
- ❌ **No Hardcoded Arbitrary Hexes** — Always reference CSS variables (`var(--color-accent)`, etc.).
- ❌ **No Unrestricted Infinite Animations** — Respect `@media (prefers-reduced-motion: reduce)`.

---

## Pre-Delivery Checklist

- [x] Text contrast passes WCAG AA (≥ 4.5:1 for normal text, ≥ 3:1 for large display).
- [x] All clickable elements have `min-h-[44px]` touch targets.
- [x] Zero horizontal scroll across 320px, 375px, 768px, 1024px, 1440px.
- [x] Images use `next/image` with responsive `sizes` and `priority` on LCP heroes.
- [x] Forms have `aria-live="polite"` feedback regions for screen reader announcements.
