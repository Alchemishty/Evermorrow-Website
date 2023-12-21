import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all'; 

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.to(textElement, {
      backgroundSize: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: textElement,
        start: 'center 80%',
        end: 'center 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <h1 className="small-bold-text">WE ARE<span>BUILDING FOR</span></h1>
      <h1 className="big-bold-text">EVERMORROW<span>THE DAY</span></h1>
      <h1 className="big-bold-text">LABS<span>AFTER</span></h1>
    </div>
  );
};

export default HomePage;