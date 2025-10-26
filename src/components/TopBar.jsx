import React from 'react';
import { FaEnvelope, FaPhone, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
      <div className="container d-flex justify-content-between">
        <div className="contact-info d-flex align-items-center">
          <FaEnvelope className="me-2" />
          <a href="mailto:audiosightofficial@gmail.com">audiosightofficial@gmail.com</a>
          <FaPhone className="ms-3 me-2" />
          +94 775338747
        </div>
        <div className="d-none d-lg-flex social-links align-items-center">
          <a href="#" className="twitter"><FaTwitter /></a>
          <a href="#" className="facebook"><FaFacebookF /></a>
          <a href="#" className="instagram"><FaInstagram /></a>
          <a href="#" className="linkedin"><FaLinkedinIn /></a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
