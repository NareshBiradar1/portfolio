import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Made by Naresh Biradar</span>
        <div className="icon-container">
          {/* Add your preferred icon component or image here */}
          <img src="your-icon.png" alt="Icon" className="icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
