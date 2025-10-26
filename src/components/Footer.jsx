import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaArrowUp, FaTwitter, FaFacebookF, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <h3>Audio Sight</h3>
                <p>
                  SLIIT Malabe Campus,
                  <br />
                  New Kandy Rd,
                  <br />
                  Malabe, SriLanka
                  <br />
                  <br />
                  <strong>Phone:</strong> +94 77 5338 747
                  <br />
                  <strong>Email:</strong> audiosightofficial@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <FaChevronRight /> <a href="#hero">Home</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#about">About us</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#scope">Scope</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Documents</h4>
                <ul>
                  <li>
                    <FaChevronRight /> <a href="#documents">Documentation</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#presentations">Presentations</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <FaChevronRight /> <a href="#milestones">Milestones</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#banner">Banner</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#ourteam">Our Team</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Contact US</h4>
                <ul>
                  <li>
                    <FaChevronRight /> <a href="#">audiosightofficial@gmail.com</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#">+94 77 5338 747</a>
                  </li>
                  <li>
                    <FaChevronRight /> <a href="#">SLIIT Malabe Campus</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright <strong><span>AudioSight</span> 2023 </strong>. All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <a className="twitter">
              <FaTwitter />
            </a>
            <a className="facebook">
              <FaFacebookF />
            </a>
            <a className="instagram">
              <FaInstagram />
            </a>
            <a href="https://github.com/ThiroshMadhusha" target="_blank" rel="noopener noreferrer" className="github">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/thirosh-madhusha/" target="_blank" rel="noopener noreferrer" className="linkedin">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center active"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
        >
          <FaArrowUp />
        </a>
      )}
    </>
  );
};

export default Footer;
