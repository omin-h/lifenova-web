import React from 'react';

const Presentations = () => {
  const presentations = [
    {
      icon: '🖥️',
      title: 'Proposal Presentation',
      description: 'Click to View the Proposal Presentation'
    },
    {
      icon: '🖥️',
      title: 'Progress Presentation I',
      description: 'Click to View the Progress Presentation I - 50% Completion'
    },
    {
      icon: '🖥️',
      title: 'Progress Presentation II',
      description: 'Click to View the Progress Presentation II - 90% Completion'
    },
    {
      icon: '🖥️',
      title: 'Final Presentation',
      description: 'Click to View the Final Presentation'
    }
  ];

  return (
    <section id="presentations" className="presentations">
      <div className="container">
        <div className="section-title">
          <h2>Presentations</h2>
          <p>View Our Presentations Here</p>
        </div>
        <div className="row">
          <div className="col-lg-6 presentation-image">
            <img src="src/assets/img/presentation.jpg" alt="Presentations" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="presentation-list">
              {presentations.map((presentation, index) => (
                <div key={index} className="presentation-item">
                  <div className="presentation-icon">{presentation.icon}</div>
                  <div className="presentation-content">
                    <h4>📌 {presentation.title}</h4>
                    <p>{presentation.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
