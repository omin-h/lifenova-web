import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <header id="header" className={`fixed-top ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container d-flex align-items-center">
        <a href="/" className="logo me-auto">
          <img src="/assets/img/logo.png" alt="AudioSight" className="img-fluid" />
        </a>

        <nav id="navbar" className={`navbar order-last order-lg-0 ${mobileNavActive ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link className="nav-link scrollto" to="hero" smooth={true} duration={500} onClick={closeMobileNav}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="about" smooth={true} duration={500} onClick={closeMobileNav}>
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="scope" smooth={true} duration={500} onClick={closeMobileNav}>
                Scope
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="milestones" smooth={true} duration={500} onClick={closeMobileNav}>
                Milestones
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="documents" smooth={true} duration={500} onClick={closeMobileNav}>
                Documentation
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="presentations" smooth={true} duration={500} onClick={closeMobileNav}>
                Presentations
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="banner" smooth={true} duration={500} onClick={closeMobileNav}>
                Banner
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="ourteam" smooth={true} duration={500} onClick={closeMobileNav}>
                Our Team
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" to="contact" smooth={true} duration={500} onClick={closeMobileNav}>
                Contact
              </Link>
            </li>
          </ul>
          {mobileNavActive ? (
            <FaTimes className="mobile-nav-toggle" onClick={toggleMobileNav} />
          ) : (
            <FaBars className="mobile-nav-toggle" onClick={toggleMobileNav} />
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
