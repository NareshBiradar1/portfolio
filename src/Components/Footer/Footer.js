import React from 'react';
import './Footer.css'; 
import { FaHeart, FaStar } from 'react-icons/fa'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>Made by Naresh Biradar</span>
        <div className="icon-container">
        <a href="#" className="icon-link" style={{ color: 'red' }}>
            <FaHeart className="icon" />
        </a>
        <a href="#" className="icon-link" style={{ color: 'gold' }}>
            <FaStar className="icon" />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
