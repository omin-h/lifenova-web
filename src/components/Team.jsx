import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Samantha Rajapaksha',
      role: 'SUPERVISOR',
      position: 'Head of Department',
      email: 'samantha.r@sliit.lk',
      faculty: 'FACULTY OF COMPUTING DEPARTMENT OF INFORMATION TECHNOLOGY',
      image: 'static/images/supervisor.png',
      supervisor: true
    },
    {
      name: 'Ms. Aparna Jayawardena',
      role: 'Co-SUPERVISOR',
      position: 'Assistant Lecturer',
      email: 'aparna.j@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: 'static/images/co-supervisor.png',
      supervisor: true
    },
    {
      name: 'Hemapriya K. K. V. O. D.',
      role: 'TEAM Leader',
      studentId: 'IT21801372',
      email: 'it21801372@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: 'static/images/member1.png',
      supervisor: false
    },
    {
      name: 'Anuruddhika S.K.D.',
      role: 'TEAM Member',
      studentId: 'IT21099090',
      email: 'it21099090@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: 'static/images/member2.png',
      supervisor: false
    },
    {
      name: 'Idamewaththa I.W.S.M.B.',
      role: 'TEAM Member',
      studentId: 'IT21258930',
      email: 'it21258930@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: 'static/images/member3.png',
      supervisor: false
    },
    {
      name: 'Herath H.M.D.P.',
      role: 'TEAM Member',
      studentId: 'IT21389542',
      email: 'it21389542@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: 'static/images/member4.png',
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
