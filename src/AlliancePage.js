import React from 'react';

const AlliancePage = () => {
  return (
    <div style={{ display: 'flex' }}>      
      {/* Left Column */}
      <div style={{ flex: 2, padding: '20px' }}>
        <h1 className='big-heading-text'>VR Devs Assemble!</h1>
        <h2>Nothing short of a call to arms</h2>
        <p>
        The future we’re building isn’t going to happen alone on the back of a single studio. To all VR Devs out there working on amazing projects, the doors to the Evermorrow mesh are today and forevermore open. 
        </p>
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

export default AlliancePage;
