import React from 'react';

const Presentations = () => {
  const presentations = [
    {
      icon: '🖥️',
      title: 'Proposal Presentation',
      description: 'Click to View the Proposal Presentation',
      link: 'https://docs.google.com/presentation/d/1J3iNbjzTDqzbfIRpFAZPaQgmrQymKdfw/edit?usp=drive_link&ouid=104117928198051178525&rtpof=true&sd=true'
    },
    {
      icon: '🖥️',
      title: 'Progress Presentation I',
      description: 'Click to View the Progress Presentation I - 50% Completion',
      link: 'https://docs.google.com/presentation/d/1s5za3F2q4VcWOE5FKQQlliuh2IrHjF3h/edit?usp=drive_link&ouid=104117928198051178525&rtpof=true&sd=true'
    },
    {
      icon: '🖥️',
      title: 'Progress Presentation II',
      description: 'Click to View the Progress Presentation II - 90% Completion',
      link: 'https://drive.google.com/file/d/18M1fJEDXwhtQMevBsbb4XLjmHNJK97AW/view?usp=drive_link'
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
            <img src="static/images/presentation.jpg" alt="Presentations" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <div className="presentation-list">
              {presentations.map((presentation, index) => (
                <div key={index} className="presentation-item">
                  <div className="presentation-icon">{presentation.icon}</div>
                  <div className="presentation-content">
                    {presentation.link ? (
                      <a href={presentation.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h4>📌 {presentation.title}</h4>
                        <p>{presentation.description}</p>
                      </a>
                    ) : (
                      <>
                        <h4>📌 {presentation.title}</h4>
                        <p>{presentation.description}</p>
                      </>
                    )}
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
