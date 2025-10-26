import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Prof. Koliya Pulasinghe',
      role: 'SUPERVISOR',
      position: 'Senior Professor',
      email: 'koliya.p@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/supervisor.jpg',
      supervisor: true
    },
    {
      name: 'Ms. Poorna Panduwawala',
      role: 'Co-SUPERVISOR',
      position: 'Assistant Lecturer',
      email: 'poorna.p@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/co-supervisor.jpg',
      supervisor: true
    },
    {
      name: 'Jayathunga T.M.',
      role: 'TEAM Leader',
      studentId: 'IT20146238',
      email: 'thiroshmadhusha0520@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team-leader.jpg',
      supervisor: false
    },
    {
      name: 'Semini J.P.D.L.',
      role: 'TEAM Member',
      studentId: 'IT20241346',
      email: 'dulmilaknaasewmz9811@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team-member.jpg',
      supervisor: false
    }
  ];

  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
        </div>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className={`team-card ${member.supervisor ? 'supervisor' : ''}`}>
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                {member.position && <p className="position">{member.position}</p>}
                {member.studentId && <p className="student-id">{member.studentId}</p>}
                <p className="email">{member.email}</p>
                <p className="faculty">{member.faculty}</p>
                <div className="social-links">
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">📘</a>
                  <a href="#" className="social-icon">📷</a>
                  <a href="#" className="social-icon">💼</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
