import React from 'react';

const ProblemPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Left Column */}
      <div style={{ flex: 2, padding: '20px' }}>
        <h1 className='big-heading-text'>Your VR experience should be seamless, boundless and accessible.</h1>
        <br/><br/>
        <h2>It isn’t. You bought a headset, now what?</h2>
        {/* <p>
        With a majority of experiences, games heftily priced and their number limited, headset usage shows a significant drop after the first 2 weeks. <br/>

        <br/>With such a large retention issue, app discoverability problems and a library magnitudes smaller than PC or mobile, it’s no wonder that almost all kinds of initial interactions and experiences are exhausted in this timeframe.
        </p> */}
      </div>
      {/* Right Column */}
      <div style={{ flex: 1, padding: '20px' }}>
        <img
          src="https://placekitten.com/300/200" 
          alt="Placeholder"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default ProblemPage;
