import React from 'react';

const Footer = () => {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 onClick={scrollTo('home')} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/favicon.svg" alt="LifeNova Logo" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
              LifeNova
            </h3>
            <p className="footer-desc">
              Voice-Enabled Intelligent Diary System for Enhancing Productivity and Accessibility of Visually Impaired Professionals.
            </p>
            <div className="footer-badges">
              <span className="footer-badge">SLIIT Faculty of Computing</span>
              <span className="footer-badge">Department of Information Technology</span>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home" onClick={scrollTo('home')}>Home</a></li>
              <li><a href="#about" onClick={scrollTo('about')}>About Research</a></li>
              <li><a href="#scope" onClick={scrollTo('scope')}>Research Scope</a></li>
              <li><a href="#milestones" onClick={scrollTo('milestones')}>Project Milestones</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Resources</h4>
            <ul>
              <li><a href="#documentation" onClick={scrollTo('documentation')}>Project Documents</a></li>
              <li><a href="#presentations" onClick={scrollTo('presentations')}>Presentations & Demos</a></li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/15JLhh8I9mqXbwRdOsKCGbEZmv48xHaMY/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  📄 Research Paper (PDF) ↗
                </a>
              </li>
              <li><a href="#team" onClick={scrollTo('team')}>Research Team</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 LifeNova Research Project. Sri Lanka Institute of Information Technology (SLIIT). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
