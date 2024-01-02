import React from 'react';

const ProblemPage = () => {
  return (
    <div style={{ display: 'flex', height: "100%" }}>
      {/* Left Column */}
      <div style={{ flex: 2, padding: '20px' }}>
        <h1 className='big-heading-text problem'>Your VR experience should be limitless</h1>
        <br/><br/>
        <h2>It isn’t. You bought a headset, now what?</h2>
        <br/><br/>
        <p>
        With a majority of experiences, games heftily priced and their number limited, headset usage shows a significant drop after the first 2 weeks. <br/>

        <br/>With such a large retention issue, app discoverability problems and a library magnitudes smaller than PC or mobile, it’s no wonder that almost all kinds of initial interactions and experiences are exhausted in this timeframe.
        </p>
      </div>
      {/* Right Column */}
      <div className="image-container" style={{ flex: 1, padding: '20px' }}>
        <img
          src="https://imagizer.imageshack.com/img924/8186/nWox60.jpg"
          alt="Look at infinity"
          style={{ width: '100%', height: '100%', borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default ProblemPage;
