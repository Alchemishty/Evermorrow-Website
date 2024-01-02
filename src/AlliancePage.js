import React from 'react';

const AlliancePage = () => {
  return (
    <div style={{ display: 'flex', height: "100%" }}>      
      {/* Left Column */}
      <div style={{ flex: 2, padding: '20px' }}>
        <h1 className='big-heading-text alliance'>VR Devs Assemble!</h1>
        <br/>
        <h2>Nothing short of a call to arms</h2>
        <br/>
        <p>
        The future we’re building isn’t going to happen alone on the back of a single studio. To all VR Devs out there working on amazing projects, the doors to the Evermorrow mesh are today and forevermore open. 
        </p>
      </div>
       {/* Right Column */}
       <div className="image-container" style={{ flex: 1, padding: '20px' }}>
       <img
          src="https://imagizer.imageshack.com/img922/3996/SQ8wTe.jpg" 
          alt="Placeholder"
          style={{ width: '100%', height: '100%', borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default AlliancePage;
