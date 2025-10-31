import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      icon: '📄',
      title: 'Project Proposal',
      description: 'Proposal presentation and the proposal report submission.',
      marks: '12%',
      active: false
    },
    {
      icon: '📊',
      title: 'Progress Presentation 1',
      description: '50% progress presentation of the research project.',
      marks: '15%',
      active: false
    },
    {
      icon: '📈',
      title: 'Progress Presentation 2',
      description: '90% progress presentation of the research project.',
      marks: '18%',
      active: false
    },
    {
      icon: '🎯',
      title: 'Research Paper',
      description: 'Submission of the research paper for review.',
      marks: '10%',
      active: false
    },
    {
      icon: '📋',
      title: 'Final Report',
      description: 'Final report submission and evaluation.',
      marks: '19%',
      active: false
    },
    {
      icon: '👥',
      title: 'Final Presentation and VIVA',
      description: 'Final presentation and Viva With Demonstration.',
      marks: '20%',
      active: true
    }
  ];

  return (
    <section id="milestones" className="milestones">
      <div className="container">
        <div className="section-title">
          <h2>Milestones</h2>
        </div>
        <div className="milestones-grid">
          {milestones.map((milestone, index) => (
            <div key={index} className={`milestone-card ${milestone.active ? 'active' : ''}`}>
              <div className="milestone-icon">{milestone.icon}</div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
              <div className="milestone-marks">Marks Allocated: {milestone.marks}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
