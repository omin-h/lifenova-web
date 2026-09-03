import React from 'react';

const Milestones = () => {
  const milestones = [
    {
      icon: '📄',
      title: 'Project Proposal',
      description: 'Proposal presentation and the comprehensive proposal report submission.',
      marks: '12%',
      completed: true,
      active: false
    },
    {
      icon: '📊',
      title: 'Progress Presentation 1',
      description: '50% progress presentation demonstrating initial model architectures.',
      marks: '15%',
      completed: true,
      active: false
    },
    {
      icon: '📈',
      title: 'Progress Presentation 2',
      description: '90% progress presentation with integrated end-to-end prototype.',
      marks: '18%',
      completed: true,
      active: false
    },
    {
      icon: '🎯',
      title: 'Research Paper',
      description: 'Submission of IEEE format research paper and study findings.',
      marks: '10%',
      completed: true,
      active: false
    },
    {
      icon: '📋',
      title: 'Final Report',
      description: 'Comprehensive final research report and individual documentation submission.',
      marks: '19%',
      completed: true,
      active: false
    },
    {
      icon: '👥',
      title: 'Final Presentation & VIVA',
      description: 'Final presentation and viva voce with full system demonstration.',
      marks: '20%',
      completed: false,
      active: true
    }
  ];

  return (
    <section id="milestones" className="milestones">
      <div className="container">
        <div className="section-title">
          <h2>Project Milestones</h2>
          <p>Key Project Timeline and Academic Evaluation Marks</p>
        </div>
        <div className="milestones-grid">
          {milestones.map((milestone, index) => (
            <div key={index} className={`milestone-card ${milestone.active ? 'active' : ''}`}>
              <div className="milestone-header">
                <div className="milestone-icon">{milestone.icon}</div>
                <span className={`milestone-status-badge ${milestone.active ? 'status-active' : 'status-completed'}`}>
                  {milestone.active ? '⚡ Current Stage' : '✓ Completed'}
                </span>
              </div>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
              <div className="milestone-footer">
                <span className="marks-label">Marks Weightage</span>
                <span className="marks-value">{milestone.marks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
