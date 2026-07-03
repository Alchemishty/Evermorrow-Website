import { useEffect, useRef, useState } from 'react';
import InkCanvas from './components/InkCanvas';
import './index.css';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onScroll() {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollProgress(progress);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Three phases across 0-1 scroll progress:
  // 0.0–0.35: Hero visible, fading out
  // 0.25–0.7: Vision fading in, visible, fading out
  // 0.6–1.0: Sign-off fading in, stays
  const heroOpacity = Math.max(0, 1 - scrollProgress / 0.35);
  const visionIn = Math.min(1, Math.max(0, (scrollProgress - 0.2) / 0.15));
  const visionOut = Math.max(0, 1 - Math.max(0, (scrollProgress - 0.6) / 0.2));
  const visionOpacity = Math.min(visionIn, visionOut);
  const signoffOpacity = Math.min(1, Math.max(0, (scrollProgress - 0.65) / 0.2));

  return (
    <>
      <a className="skip-link" href="#vision">Skip to content</a>

      {/* Scroll spacer — drives the animation */}
      <div style={{ height: '400vh', background: 'var(--color-canvas)' }} />

      {/* Fixed viewport frame */}
      <div className="frame">
        <InkCanvas />

        <header className="frame__topbar">
          <img
            className="frame__logo"
            src="/evermorrow.png"
            alt="Evermorrow Labs logo"
          />
        </header>

        {/* Hero */}
        <div
          className="frame__content"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${scrollProgress * -40}px)`,
            pointerEvents: heroOpacity < 0.1 ? 'none' : 'auto',
          }}
        >
          <h1 className="frame__title">Evermorrow Labs</h1>
          <p className="frame__subtitle">Building a thousand connected virtual worlds.</p>
        </div>

        {/* Vision */}
        <div
          className="frame__content"
          id="vision"
          style={{
            opacity: visionOpacity,
            transform: `translateY(${(1 - visionIn) * 30}px)`,
            pointerEvents: visionOpacity < 0.1 ? 'none' : 'auto',
          }}
        >
          <p className="frame__pull-quote">
            The VR platform just hit its inflection point.
          </p>
          <p className="frame__body">
            Social gaming now drives over 70% of all headset playtime. We're building the connected ecosystem where that playtime lives. Seamlessly linked worlds where millions of players socialize, compete, and explore without ever breaking immersion.
          </p>
        </div>

        {/* Sign-off */}
        <div
          className="frame__content frame__signoff"
          style={{
            opacity: signoffOpacity,
            pointerEvents: signoffOpacity < 0.1 ? 'none' : 'auto',
          }}
        >
          <a className="frame__signoff-email" href="mailto:ojas@evermorrowlabs.com">
            ojas@evermorrowlabs.com
          </a>
        </div>

        {/* Scroll indicator — only visible at top */}
        <div
          className="frame__scroll"
          aria-hidden="true"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 8) }}
        >
          <span className="frame__scroll-line" />
        </div>
      </div>
    </>
  );
}

export default App;
