import React from 'react';

const SolutionPage = () => {
  return (
    <div style={{ display: 'flex' }}>      
      {/* Left Column */}
      <div className="image-container" style={{ flex: 1, padding: '20px' }}>
        <img
          src="https://imagizer.imageshack.com/img922/5610/QHbTNG.jpg" 
          alt="Placeholder"
          style={{ width: '100%', height: '100%', borderRadius: "20px" }}
        />
      </div>
       {/* Right Column */}
      <div style={{ flex: 2, padding: '20px' }}>
        <h1 className='big-heading-text solution'>We’re cooking</h1>
        <br/>
        <h2>Building a first of it’s kind free to use ecosystem of immersive experiences.</h2>
        <br/>
        <p>
        At Evermorrow, we believe the future of XR will be a plethora of democratised and accessible immersive experiences with no barrier to entry for any headset owner.<br/> 

<br/>These experiences are designed to ensure enjoyment with a vast diversity of interaction, you could dive deep to the Mariana Trench, walk on the moon or just shoot at stuff. <br/>
        </p>
      </div>
    </div>
  );
};

export default SolutionPage;
