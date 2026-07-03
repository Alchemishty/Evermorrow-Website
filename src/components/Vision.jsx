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
