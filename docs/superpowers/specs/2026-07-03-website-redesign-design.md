# Evermorrow Labs Website Redesign

## Overview

Complete redesign of evermorrowlabs.com from a sci-fi gaming aesthetic to an editorial luxury direction. The site communicates the studio's ambition through typographic craft and restraint rather than game visuals (which don't exist yet).

## Aesthetic Direction

Editorial luxury meets ink-wash craft. A warm parchment canvas with black ink typography and crimson accents. The feeling is a beautifully printed invitation from a studio that builds worlds.

### Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Canvas | `#FFF8F1` | Page background |
| Ink | `#0A0A0A` | Primary text, display type |
| Crimson | `#8B1A1A` | Accent — links, highlights, hover states |
| Muted | `#6B5E53` | Secondary/body text |
| Border | `#E8E0D8` | Hairline dividers |

### Typography

- **Display:** Cormorant Garamond (weight 300–400) at monumental scale. Thin, editorial, confident.
- **Body:** Inter (weight 400) for readable body text.
- **Scale:** Base 18px, display clamp(4rem, 8vw, 8rem). Line-height 1.7 for body.
- **Tracking:** -0.02em on display type for editorial density.

### Animation Principles

- Scroll-triggered fade-ups: 300ms ease-out, staggered 50ms between elements.
- Ink canvas: continuous subtle animation at ~30fps, respects `prefers-reduced-motion`.
- No custom cursor. No hover-only interactions. No blocking animations.
- All transitions use `transform` and `opacity` only (no layout-triggering properties).

## Site Structure

Three sections only: Hero, Vision, Footer.

### Hero

- Full viewport height (`100dvh`).
- **Top bar:** Logo mark (left), "Contact" text link (right). No navbar.
- **Center:** "Evermorrow Labs" in display serif, massive scale. Below it: "Building a thousand connected virtual worlds." in body sans, muted color.
- **Background:** HTML5 Canvas rendering organic ink-in-water forms — dark flowing shapes on the parchment background, slowly morphing. Text reads clearly on top.
- **Bottom:** Subtle scroll indicator (animated thin chevron or line).
- **Mobile:** Display type scales down via `clamp()`. Canvas remains but at reduced complexity. Scroll indicator hidden if viewport is short.

### Vision

- 120px+ top padding. Left-aligned, max-width 700px, centered on page.
- Confident copy (no hedging language):

> The VR platform just hit its inflection point. Social gaming now drives over 70% of all headset playtime. We're building the connected ecosystem where that playtime lives — seamlessly linked worlds where millions of players socialize, compete, and explore without ever breaking immersion.

- First sentence optionally pulled out as a display quote in serif.
- Fade-up on scroll entry (Intersection Observer).
- No images, no cards. Typography and whitespace only.

### Footer

- Hairline border top (`border-color: #E8E0D8`).
- Single row (desktop) or compact stack (mobile): Logo, email (ojas@evermorrowlabs.com), LinkedIn icon, copyright "2025 Evermorrow Labs Private Limited".
- Muted warm-gray text. Minimal.

## Technical Implementation

### Approach

Clean slate rewrite. Remove all existing components (Hero, Games, About, ScrollText, MarqueeLogos, Footer, cursor system). Keep Vite + React shell, package.json, vite.config.js, public/CNAME, deployment config.

### File Structure

```
src/
  main.jsx          (entry, unchanged)
  App.jsx           (simplified — renders three sections)
  index.css         (global styles, CSS variables, font imports)
  components/
    Hero.jsx        (hero section + canvas)
    Vision.jsx      (vision statement)
    Footer.jsx      (minimal footer)
    InkCanvas.jsx   (canvas generative art component)
```

### Ink Canvas (Generative Art)

- Vanilla HTML5 Canvas, no external libraries.
- Algorithm: Perlin/simplex noise-based flow field driving "ink particles" that diffuse organically.
- Dark ink color (`#0A0A0A` at low opacity, ~0.03–0.08) accumulating on the warm canvas.
- Runs at ~30fps via `requestAnimationFrame`, throttled.
- Canvas sized to hero viewport, resizes on window resize (debounced).
- `prefers-reduced-motion`: falls back to a static pre-rendered noise texture or disables animation entirely.
- Performance budget: <5% CPU on modern hardware. Particle count scales with viewport size (fewer on mobile).

### Responsive Strategy

- Single-column layout throughout — naturally responsive.
- Fluid typography: `clamp()` for display sizes.
- Breakpoints only where needed (footer row→stack at ~640px).
- `min-height: 100dvh` for hero (not `100vh`, avoids mobile address bar issues).
- Touch targets: contact link and footer links meet 44px minimum.

### Dependencies

- No new dependencies. Vanilla Canvas API for generative art. CSS transitions for scroll animations (or minimal Intersection Observer JS).
- Google Fonts: Cormorant Garamond + Inter (loaded via `@import` in CSS with `font-display: swap`).

### Accessibility

- Contrast: Ink on Canvas = ~19:1 (exceeds 4.5:1). Muted on Canvas = ~5.2:1 (passes AA). Crimson on Canvas = ~7.8:1 (passes AA).
- Canvas element gets `aria-hidden="true"` (decorative).
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`.
- Focus states: crimson outline on interactive elements.
- `prefers-reduced-motion` respected for all animations.
- Skip-to-content link (visually hidden until focused).

### Performance

- No heavy libraries (Three.js, GSAP, etc.).
- Canvas is the only render-intensive element, throttled and scaled to device capability.
- Fonts preloaded for critical display text. `font-display: swap` prevents FOIT.
- Total bundle should remain <50KB gzipped (React + tiny app code).

### Deployment

- Existing GitHub Pages deployment via CNAME stays unchanged.
- Build: `npm run build` (Vite).
- No changes to CI/CD or hosting.

## What We're Removing

- Custom cursor system (all cursor CSS and JS)
- Orbitron / Bayon / FormulaCondensed fonts
- Games component and placeholder cards
- MarqueeLogos component
- ScrollText component
- BrowseButton component
- All public assets except: CNAME, favicon.ico, evermorrow.png (logo — may redesign later)
- Background image (bg.png)
- All SVG button assets

## Success Criteria

- Loads in <2s on 3G connection.
- Feels premium and intentional — communicates "serious studio" not "indie side project."
- Works flawlessly on mobile without horizontal scroll or layout shifts.
- Generative canvas runs smoothly without fan spin on M1 MacBook or modern phone.
- Passes WCAG AA contrast on all text.
