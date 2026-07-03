# Evermorrow Labs Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current sci-fi gaming site with a premium editorial design — warm parchment canvas, ink typography, organic generative canvas art, three minimal sections.

**Architecture:** Clean slate rewrite of all components within the existing Vite + React shell. No new npm dependencies. Generative art uses vanilla HTML5 Canvas. Animations use CSS transitions + Intersection Observer.

**Tech Stack:** Vite 5, React 18, vanilla CSS (no Tailwind), HTML5 Canvas API, Google Fonts (Cormorant Garamond + Inter).

## Global Constraints

- No new npm dependencies. Everything ships with React + Vite.
- Palette tokens: Canvas `#FFF8F1`, Ink `#0A0A0A`, Crimson `#8B1A1A`, Muted `#6B5E53`, Border `#E8E0D8`.
- Typography: Cormorant Garamond (display, weight 300), Inter (body, weight 400). Loaded via Google Fonts `@import` with `font-display: swap`.
- All animations use `transform` and `opacity` only. Respect `prefers-reduced-motion`.
- Responsive: fluid `clamp()` typography, single-column layout, `min-height: 100dvh` for hero.
- Accessibility: semantic HTML, `aria-hidden` on decorative canvas, 44px touch targets, visible focus states.
- Keep: `public/CNAME`, `public/favicon.ico`, `package.json`, `vite.config.js`, `.git`, deployment scripts.

---

### Task 1: Strip old code and set up new foundation

**Files:**
- Rewrite: `index.html`
- Rewrite: `src/index.css`
- Rewrite: `src/App.jsx`
- Delete: `src/components/` (entire directory)
- Delete: `loader.css`
- Delete from `public/`: all files EXCEPT `CNAME`, `favicon.ico`, `evermorrow.png`

**Produces:**
- Clean `index.html` with no loader, proper meta tags
- CSS variables and global styles in `src/index.css`
- Minimal `App.jsx` shell that renders placeholder text
- The app runs with `npm run dev` showing warm parchment background + placeholder

- [ ] **Step 1: Delete old component files and unused public assets**

```bash
rm -rf src/components
rm loader.css
cd public && rm -f arrow-down.svg arrow-up-right.svg bg.png browseButton.svg connectButton.svg evermorrowFull.png footerInput.svg footerTop.svg FormulaCondensed-Bold.otf gameCardMask.svg godOfWar.png grid.png openSteam.svg revealing.png subscribeButton.svg vrGuy.png witcher.png
rm -rf public/icons public/logos public/wishlist public/about.png
```

- [ ] **Step 2: Rewrite index.html**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Evermorrow Labs — Building a thousand connected virtual worlds." />
    <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    <title>Evermorrow Labs</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 3: Rewrite src/index.css with design tokens and global styles**

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=Inter:wght@400;500&display=swap');

:root {
  --color-canvas: #FFF8F1;
  --color-ink: #0A0A0A;
  --color-crimson: #8B1A1A;
  --color-muted: #6B5E53;
  --color-border: #E8E0D8;

  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Inter', sans-serif;

  --size-display: clamp(3.5rem, 8vw, 8rem);
  --size-body: 1.125rem;
  --size-small: 0.875rem;

  --leading-body: 1.7;
  --tracking-display: -0.02em;

  --space-section: clamp(6rem, 12vh, 10rem);
  --space-page-x: clamp(1.5rem, 5vw, 3rem);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--size-body);
  line-height: var(--leading-body);
  color: var(--color-ink);
  background-color: var(--color-canvas);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--color-crimson);
  text-decoration: none;
  transition: opacity 200ms ease-out;
}

a:hover {
  opacity: 0.7;
}

a:focus-visible {
  outline: 2px solid var(--color-crimson);
  outline-offset: 3px;
  border-radius: 2px;
}

::selection {
  background: var(--color-crimson);
  color: var(--color-canvas);
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 1rem;
  padding: 0.5rem 1rem;
  background: var(--color-ink);
  color: var(--color-canvas);
  font-size: var(--size-small);
  z-index: 100;
  border-radius: 0 0 4px 4px;
}

.skip-link:focus {
  top: 0;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 4: Rewrite src/App.jsx as minimal shell**

```jsx
function App() {
  return (
    <>
      <a className="skip-link" href="#vision">Skip to content</a>
      <main>
        <section style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--size-display)' }}>
            Evermorrow Labs
          </h1>
        </section>
      </main>
    </>
  );
}

export default App;
```

- [ ] **Step 5: Verify the app runs**

```bash
cd /Users/adarsh/Desktop/Evermorrow-Website && npm run dev
```

Expected: Browser shows warm parchment background with "Evermorrow Labs" in Cormorant Garamond, centered. No errors in console.

- [ ] **Step 6: Verify build succeeds**

```bash
npm run build
```

Expected: Clean build, no warnings about missing files.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: strip old site, set up new design foundation

Remove all old components, loader, and unused assets.
Establish design tokens, palette, and typography system."
```

---

### Task 2: Ink Canvas generative art component

**Files:**
- Create: `src/components/InkCanvas.jsx`

**Produces:**
- `<InkCanvas />` component: full-size canvas rendering organic ink-diffusion animation
- Exported as default from `src/components/InkCanvas.jsx`
- Props: none (self-contained, reads viewport size internally)
- Respects `prefers-reduced-motion` (renders single static frame then stops)
- Uses `requestAnimationFrame`, throttled to ~30fps

- [ ] **Step 1: Create src/components/InkCanvas.jsx**

```jsx
import { useEffect, useRef } from 'react';

const PARTICLE_DENSITY = 0.00015;
const INK_OPACITY = 0.04;
const NOISE_SCALE = 0.003;
const SPEED = 0.8;

function pseudoNoise(x, y, t) {
  const a = Math.sin(x * 0.01 + t * 0.3) * Math.cos(y * 0.012 - t * 0.2);
  const b = Math.sin((x + y) * 0.008 + t * 0.15) * Math.cos(x * 0.005 - t * 0.25);
  const c = Math.sin(x * 0.006 - y * 0.009 + t * 0.1);
  return (a + b + c) / 3;
}

export default function InkCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    }

    function initParticles() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = Math.floor(w * h * PARTICLE_DENSITY);
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        age: Math.random() * 200,
      }));
    }

    function draw() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const particles = particlesRef.current;
      timeRef.current += 0.01;
      const t = timeRef.current;

      ctx.fillStyle = `rgba(10, 10, 10, ${INK_OPACITY})`;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const angle = pseudoNoise(p.x * NOISE_SCALE, p.y * NOISE_SCALE, t) * Math.PI * 2;
        p.x += Math.cos(angle) * SPEED;
        p.y += Math.sin(angle) * SPEED;
        p.age++;

        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h || p.age > 300) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.age = 0;
        }

        const fadeIn = Math.min(p.age / 30, 1);
        const fadeOut = Math.max((300 - p.age) / 100, 0);
        const alpha = fadeIn * fadeOut;

        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
    }

    function loop() {
      draw();
      animRef.current = requestAnimationFrame(loop);
    }

    resize();

    if (reducedMotion) {
      for (let i = 0; i < 120; i++) draw();
    } else {
      loop();
    }

    const onResize = () => {
      cancelAnimationFrame(animRef.current);
      resize();
      if (!reducedMotion) loop();
    };

    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(onResize, 200);
    };

    window.addEventListener('resize', debouncedResize);

    return () => {
      cancelAnimationFrame(animRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
```

- [ ] **Step 2: Quick smoke test**

Temporarily render `<InkCanvas />` inside the App shell to verify it animates:

```jsx
import InkCanvas from './components/InkCanvas';

function App() {
  return (
    <section style={{ position: 'relative', minHeight: '100dvh' }}>
      <InkCanvas />
    </section>
  );
}

export default App;
```

Run `npm run dev`. Expected: dark ink particles flowing organically on parchment background. Smooth, no jank.

- [ ] **Step 3: Commit**

```bash
git add src/components/InkCanvas.jsx
git commit -m "feat: add ink-in-water generative canvas component

Flow-field particle system with organic diffusion.
Respects prefers-reduced-motion, debounced resize, ~30fps."
```

---

### Task 3: Hero section

**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/Hero.css`

**Consumes:**
- `<InkCanvas />` from `src/components/InkCanvas.jsx`

**Produces:**
- `<Hero />` component: full-viewport hero with logo, contact link, title, subtitle, scroll indicator
- Exported as default from `src/components/Hero.jsx`

- [ ] **Step 1: Create src/components/Hero.css**

```css
.hero {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--space-page-x);
  overflow: hidden;
}

.hero__topbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem var(--space-page-x);
  z-index: 2;
}

.hero__logo {
  height: 2.5rem;
  width: auto;
}

.hero__contact {
  font-family: var(--font-body);
  font-size: var(--size-small);
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.5rem 0;
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--size-display);
  font-weight: 300;
  letter-spacing: var(--tracking-display);
  line-height: 1.1;
  color: var(--color-ink);
}

.hero__subtitle {
  margin-top: 1.5rem;
  font-size: var(--size-body);
  color: var(--color-muted);
  font-weight: 400;
}

.hero__scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.hero__scroll-line {
  width: 1px;
  height: 2.5rem;
  background: var(--color-muted);
  opacity: 0.5;
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(1); }
  50% { opacity: 0.7; transform: scaleY(1.3); transform-origin: top; }
}

@media (max-width: 640px) {
  .hero__logo {
    height: 2rem;
  }

  .hero__subtitle {
    font-size: var(--size-small);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll-line {
    animation: none;
    opacity: 0.5;
  }
}
```

- [ ] **Step 2: Create src/components/Hero.jsx**

```jsx
import InkCanvas from './InkCanvas';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <InkCanvas />
      <header className="hero__topbar">
        <img
          className="hero__logo"
          src="/evermorrow.png"
          alt="Evermorrow Labs logo"
        />
        <a
          className="hero__contact"
          href="mailto:ojas@evermorrowlabs.com"
        >
          Contact
        </a>
      </header>
      <div className="hero__content">
        <h1 className="hero__title">Evermorrow Labs</h1>
        <p className="hero__subtitle">Building a thousand connected virtual worlds.</p>
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify visually**

Run `npm run dev`. Expected: Full-viewport hero with ink canvas animating behind, logo top-left, "Contact" top-right, monumental thin serif title centered, subtitle below, pulsing scroll line at bottom.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.css
git commit -m "feat: add Hero section with ink canvas and editorial typography"
```

---

### Task 4: Vision section with scroll-triggered animation

**Files:**
- Create: `src/components/Vision.jsx`
- Create: `src/components/Vision.css`

**Produces:**
- `<Vision />` component: left-aligned vision statement with fade-up on scroll entry
- Exported as default from `src/components/Vision.jsx`

- [ ] **Step 1: Create src/components/Vision.css**

```css
.vision {
  padding: var(--space-section) var(--space-page-x);
  display: flex;
  justify-content: center;
}

.vision__inner {
  max-width: 700px;
  width: 100%;
}

.vision__pull-quote {
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 300;
  line-height: 1.4;
  color: var(--color-ink);
  letter-spacing: var(--tracking-display);
  margin-bottom: 2.5rem;
}

.vision__body {
  color: var(--color-muted);
  font-size: var(--size-body);
  line-height: var(--leading-body);
}

.vision__fade {
  opacity: 0;
  transform: translateY(2rem);
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}

.vision__fade--visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .vision__fade {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

- [ ] **Step 2: Create src/components/Vision.jsx**

```jsx
import { useEffect, useRef, useState } from 'react';
import './Vision.css';

export default function Vision() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="vision" id="vision" ref={ref}>
      <div className={`vision__inner vision__fade ${visible ? 'vision__fade--visible' : ''}`}>
        <p className="vision__pull-quote">
          The VR platform just hit its inflection point.
        </p>
        <p className="vision__body">
          Social gaming now drives over 70% of all headset playtime. We're building the connected ecosystem where that playtime lives — seamlessly linked worlds where millions of players socialize, compete, and explore without ever breaking immersion.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify visually**

Run `npm run dev`. Scroll past the hero. Expected: Vision text fades up smoothly on entry. Pull quote in thin serif, body in muted sans.

- [ ] **Step 4: Commit**

```bash
git add src/components/Vision.jsx src/components/Vision.css
git commit -m "feat: add Vision section with scroll-triggered fade animation"
```

---

### Task 5: Footer and final App assembly

**Files:**
- Create: `src/components/Footer.jsx`
- Create: `src/components/Footer.css`
- Rewrite: `src/App.jsx` (final version)

**Consumes:**
- `<Hero />` from `src/components/Hero.jsx`
- `<Vision />` from `src/components/Vision.jsx`

**Produces:**
- `<Footer />` component: minimal footer with logo, email, LinkedIn, copyright
- Final `App.jsx` composing all three sections

- [ ] **Step 1: Create src/components/Footer.css**

```css
.footer {
  border-top: 1px solid var(--color-border);
  padding: 3rem var(--space-page-x);
}

.footer__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.footer__left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.footer__logo {
  height: 1.8rem;
  width: auto;
  opacity: 0.7;
}

.footer__email {
  font-size: var(--size-small);
  color: var(--color-muted);
}

.footer__right {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.footer__social-link {
  color: var(--color-muted);
  font-size: var(--size-small);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer__copyright {
  font-size: var(--size-small);
  color: var(--color-muted);
  opacity: 0.6;
}

@media (max-width: 640px) {
  .footer__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .footer__right {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
}
```

- [ ] **Step 2: Create src/components/Footer.jsx**

```jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__left">
          <img
            className="footer__logo"
            src="/evermorrow.png"
            alt="Evermorrow Labs"
          />
          <a className="footer__email" href="mailto:ojas@evermorrowlabs.com">
            ojas@evermorrowlabs.com
          </a>
        </div>
        <div className="footer__right">
          <a
            className="footer__social-link"
            href="https://www.linkedin.com/company/evermorrow-labs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer__copyright">
            &copy; 2025 Evermorrow Labs Private Limited
          </span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Rewrite src/App.jsx (final)**

```jsx
import Hero from './components/Hero';
import Vision from './components/Vision';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <>
      <a className="skip-link" href="#vision">Skip to content</a>
      <main>
        <Hero />
        <Vision />
      </main>
      <Footer />
    </>
  );
}

export default App;
```

- [ ] **Step 4: Full visual verification**

Run `npm run dev`. Walk through the entire site:
- Hero fills viewport, ink canvas animates, title/subtitle readable, contact link works
- Scroll reveals Vision with fade-up animation
- Footer shows at bottom with email and LinkedIn links functional
- No horizontal scroll at any viewport width
- Check at 375px width (mobile) — everything stacks cleanly

- [ ] **Step 5: Build verification**

```bash
npm run build
```

Expected: Clean build, no errors, no warnings about missing assets.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Footer and assemble final site

Complete three-section site: Hero with ink canvas,
Vision with scroll animation, minimal Footer.
Redesign complete — editorial luxury aesthetic."
```

---

### Task 6: Polish and performance audit

**Files:**
- Modify: `src/components/InkCanvas.jsx` (if perf adjustments needed)
- Modify: `src/components/Hero.css` (if spacing tweaks needed)
- Modify: `src/components/Vision.css` (if spacing tweaks needed)

**Produces:**
- Final polished site passing all quality checks

- [ ] **Step 1: Mobile test at 375px**

Open dev tools, set viewport to 375px width. Verify:
- No horizontal overflow
- Title scales down readably (should be ~3.5rem)
- Contact link has adequate touch target (44px)
- Footer stacks cleanly
- Canvas doesn't cause scroll jank

- [ ] **Step 2: Performance check**

Open Lighthouse in Chrome DevTools, run Performance audit on mobile preset. Targets:
- Performance score > 90
- No CLS issues
- Canvas doesn't spike CPU in Performance timeline

- [ ] **Step 3: Accessibility check**

Run Lighthouse Accessibility audit. Verify:
- Score > 95
- All images have alt text
- Color contrast passes AA
- Skip link functions correctly
- Focus states visible on tab-through

- [ ] **Step 4: Reduced motion test**

In dev tools, enable "Emulate prefers-reduced-motion: reduce". Verify:
- Canvas shows static ink texture (no animation)
- Scroll indicator doesn't pulse
- Vision section appears without fade animation

- [ ] **Step 5: Final commit (if any fixes were needed)**

```bash
git add -A
git commit -m "fix: polish pass — mobile, perf, a11y adjustments"
```

---
