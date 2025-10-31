import React from 'react';
import twitterIcon from '../assets/social-media-icons/twitter.png';
import facebookIcon from '../assets/social-media-icons/facebook.png';
import instagramIcon from '../assets/social-media-icons/instagram.png';
import linkedinIcon from '../assets/social-media-icons/linkedin.png';
import supervisorImg from '../assets/img/supervisor.png';
import coSupervisorImg from '../assets/img/co-supervisor.png';
import member1Img from '../assets/img/member1.png';
import member2Img from '../assets/img/member2.png';
import member3Img from '../assets/img/member3.png';
import member4Img from '../assets/img/member4.png';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Samantha Rajapaksha',
      role: 'SUPERVISOR',
      position: 'Head of Department',
      email: 'samantha.r@sliit.lk',
      faculty: 'FACULTY OF COMPUTING DEPARTMENT OF INFORMATION TECHNOLOGY',
      image: supervisorImg,
      supervisor: true
    },
    {
      name: 'Ms. Aparna Jayawardena',
      role: 'Co-SUPERVISOR',
      position: 'Assistant Lecturer',
      email: 'aparna.j@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: coSupervisorImg,
      supervisor: true
    },
    {
      name: 'Hemapriya K. K. V. O. D.',
      role: 'TEAM Leader',
      studentId: 'IT21801372',
      email: 'omindulnath@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: member1Img,
      supervisor: false
    },
    {
      name: 'Herath H.M.D.P.',
      role: 'TEAM Member',
      studentId: 'IT21389542',
      email: 'dunalherath23@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: member2Img,
      supervisor: false
    },
    {
      name: 'Idamewaththa I.W.S.M.B.',
      role: 'TEAM Member',
      studentId: 'IT21258930',
      email: 'sachiramihidul@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: member3Img,
      supervisor: false
    },
    {
      name: 'Anuruddhika S.K.D.',
      role: 'TEAM Member',
      studentId: 'IT21099090',
      email: 'danuruddika20@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: member4Img,
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
                <p className="email">
                  <a href={`mailto:${member.email}`} style={{ color: '#16a085', textDecoration: 'none' }}>
                    {member.email}
                  </a>
                </p>
                <p className="faculty">{member.faculty}</p>
                <div className="social-links">
                  <span className="social-icon">
                    <img src={twitterIcon} alt="Twitter" />
                  </span>
                  <span className="social-icon">
                    <img src={facebookIcon} alt="Facebook" />
                  </span>
                  <span className="social-icon">
                    <img src={instagramIcon} alt="Instagram" />
                  </span>
                  <span className="social-icon">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </span>
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
