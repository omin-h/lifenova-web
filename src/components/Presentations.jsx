import React from 'react';
import presentationImg from '../assets/img/presentation.jpg';

const Presentations = () => {
  const presentations = [
    {
      icon: '🖥️',
      title: 'Proposal Presentation',
      description: 'Project proposal defense and architecture overview slide deck.',
      link: 'https://drive.google.com/file/d/1A6o83HFU9v9OQfl8-n4s8ad7KlHlhFKJ/view?usp=sharing'
    },
    {
      icon: '📊',
      title: 'Progress Presentation I',
      description: '50% progress review covering dataset prep and baseline model results.',
      link: 'https://drive.google.com/file/d/1FonxpEzelW5scO3fgJAz086H0jt7pELj/view?usp=sharing'
    },
    {
      icon: '📈',
      title: 'Progress Presentation II',
      description: '90% completion demonstration with multi-modal stress detection & WCFDA.',
      link: 'https://drive.google.com/file/d/18M1fJEDXwhtQMevBsbb4XLjmHNJK97AW/view?usp=sharing'
    },
    {
      icon: '🎯',
      title: 'Final Presentation & VIVA',
      description: 'Final academic defense with live user demonstration and results.',
      link: 'https://drive.google.com/file/d/1bWCqQr2A5K5-LCydpaUKlywWFQP7qXYx/view?usp=sharing'
    }
  ];

  return (
    <section id="presentations" className="presentations">
      <div className="container">
        <div className="section-title">
          <h2>Project Presentations</h2>
          <p>Evaluation Slide Decks & Academic Defenses</p>
        </div>

        <div className="presentations-wrapper">
          {/* Left Column: Compact Presentation Image */}
          <div className="presentation-image-box">
            <img src={presentationImg} alt="LifeNova Project Presentations" />
          </div>

          {/* Right Column: Presentation Resource Cards */}
          <div className="presentation-list-box">
            {presentations.map((presentation, index) => (
              <a 
                key={index} 
                href={presentation.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="presentation-item"
              >
                <div className="presentation-icon">{presentation.icon}</div>
                <div className="presentation-content">
                  <h4>{presentation.title}</h4>
                  <p>{presentation.description}</p>
                </div>
                <span className="presentation-btn-badge">
                  View Slides ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
