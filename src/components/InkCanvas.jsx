import { useEffect, useRef } from 'react';

const BLOB_COUNT = 5;
const COLORS = [
  { r: 139, g: 26, b: 26 },   // crimson
  { r: 180, g: 120, b: 80 },  // warm amber
  { r: 60, g: 40, b: 30 },    // dark umber
  { r: 160, g: 90, b: 60 },   // sienna
  { r: 100, g: 60, b: 80 },   // muted plum
];

export default function InkCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const blobsRef = useRef([]);
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
      initBlobs();
    }

    function initBlobs() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      blobsRef.current = Array.from({ length: BLOB_COUNT }, (_, i) => ({
        x: w * (0.2 + Math.random() * 0.6),
        y: h * (0.2 + Math.random() * 0.6),
        radius: Math.max(w, h) * (0.3 + Math.random() * 0.25),
        color: COLORS[i % COLORS.length],
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speedX: 0.15 + Math.random() * 0.1,
        speedY: 0.12 + Math.random() * 0.1,
        driftX: w * (0.15 + Math.random() * 0.1),
        driftY: h * (0.15 + Math.random() * 0.1),
      }));
    }

    function draw() {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      timeRef.current += 0.003;
      const t = timeRef.current;

      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#FFF8F1';
      ctx.fillRect(0, 0, w, h);

      ctx.globalCompositeOperation = 'multiply';

      for (const blob of blobsRef.current) {
        const x = blob.x + Math.sin(t * blob.speedX + blob.phaseX) * blob.driftX;
        const y = blob.y + Math.cos(t * blob.speedY + blob.phaseY) * blob.driftY;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, blob.radius);
        const { r, g, b } = blob.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.12)`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, 0.06)`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
    }

    function loop() {
      draw();
      animRef.current = requestAnimationFrame(loop);
    }

    resize();

    if (reducedMotion) {
      draw();
    } else {
      loop();
    }

    let resizeTimer;
    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(animRef.current);
        resize();
        if (!reducedMotion) loop();
      }, 200);
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
