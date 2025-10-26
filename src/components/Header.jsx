import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'scope', 'milestones', 'documentation', 'presentations', 'banner', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <h1>LifeNova</h1>
        <nav>
          <a 
            href="#home" 
            className={activeSection === 'home' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === 'about' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
          >
            About
          </a>
          <a 
            href="#scope" 
            className={activeSection === 'scope' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('scope'); }}
          >
            Scope
          </a>
          <a 
            href="#milestones" 
            className={activeSection === 'milestones' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('milestones'); }}
          >
            Milestones
          </a>
          <a 
            href="#documentation" 
            className={activeSection === 'documentation' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('documentation'); }}
          >
            Documentation
          </a>
          <a 
            href="#presentations" 
            className={activeSection === 'presentations' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('presentations'); }}
          >
            Presentations
          </a>
          <a 
            href="#banner" 
            className={activeSection === 'banner' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('banner'); }}
          >
            Banner
          </a>
          <a 
            href="#team" 
            className={activeSection === 'team' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}
          >
            Our Team
          </a>
          <a 
            href="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
