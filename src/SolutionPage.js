import React from 'react';

const SolutionPage = () => {
  return (
    <div style={{ display: 'flex' }}>      
      {/* Left Column */}
      <div style={{ flex: 1, padding: '20px' }}>
        <img
          src="https://placekitten.com/300/200" 
          alt="Placeholder"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
       {/* Right Column */}
      <div style={{ flex: 2, padding: '20px' }}>
        <h1 className='big-heading-text'>We’re cooking</h1>
        <h2>Building a first of it’s kind free to use ecosystem of immersive experiences.</h2>
        {/* <p>
        At Evermorrow, we believe the future of XR will be a plethora of democratised and accessible immersive experiences with no barrier to entry for any headset owner.<br/> 

<br/>These experiences are designed to ensure enjoyment with a vast diversity of interaction, you could dive deep to the Mariana Trench, walk on the moon or just shoot at stuff. <br/>

<br/>And guess what, they’re all linked - portal yourself anywhere you wish!
        </p> */}
      </div>
    </div>
  );
};

export default SolutionPage;
