import React from 'react';
import {FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ background: '#000', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <p>&copy; Evermorrow Labs. All rights reserved.</p>
      <div>
          <FaLinkedin style={{ marginRight: '30px', color: '#fff' }} />
          <FaTwitter style={{ marginRight: '30px', color: '#fff' }} />
          <FaInstagram style={{ color: '#fff' }} />
        </div>
    </footer>
  );
};

export default Footer;