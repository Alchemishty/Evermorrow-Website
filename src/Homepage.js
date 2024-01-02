import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const [animateFirst, setAnimateFirst] = useState(false);
  const [animateSecond, setAnimateSecond] = useState(false);
  const [animateThird, setAnimateThird] = useState(false);

  const playAnimation = () => {
    setTimeout(() => {
      setAnimateFirst(true);
  
      setTimeout(() => {
        setAnimateSecond(true);
  
        setTimeout(() => {
          setAnimateThird(true);
  
          setTimeout(() => {
            setAnimateFirst(false);
            setAnimateSecond(false);
            setAnimateThird(false);
            
            playAnimation();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    if (isSmallScreen) {
      playAnimation();
    } 

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);

  const containerStyle = {
    backgroundImage: 'url("https://imagizer.imageshack.com/img924/5421/YwqxLl.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center 120px',
    backgroundRepeat: 'no-repeat',
  };

  const imageStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className={`small-bold-text ${animateFirst ? 'animate' : ''}`}>WE ARE<span>BUILDING FOR</span></h1>
      <h1 className={`big-bold-text ${animateSecond ? 'animate' : ''}`}>EVERMORROW<span>THE DAY</span></h1>
      <h1 className={`big-bold-text ${animateThird ? 'animate' : ''}`}>LABS<span>AFTER</span></h1>
      { isSmallScreen ? 
      <img src="https://imagizer.imageshack.com/img923/9590/qyzGa7.png" alt="Logo" style={imageStyle} />
      : null }  
      </div>
  );
};

export default HomePage;