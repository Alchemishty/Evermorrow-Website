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
