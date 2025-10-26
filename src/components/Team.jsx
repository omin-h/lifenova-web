import React from 'react';
import { RiTwitterFill, RiFacebookFill, RiInstagramFill, RiLinkedinBoxFill } from 'react-icons/ri';

const Team = () => {
  const teamMembers = [
    {
      name: 'Prof. Koliya Pulasinghe',
      role: 'SUPERVISOR',
      title: 'Senior Professor',
      email: 'koliya.p@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team/supervisor.png',
      linkedin: 'https://www.linkedin.com/in/koliyapulasinghe/'
    },
    {
      name: 'Ms. Poorna Panduwawala',
      role: 'Co-SUPERVISOR',
      title: 'Assistant Lecturer',
      email: 'poorna.p@sliit.lk',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team/cosupervisor.png',
      linkedin: 'https://www.linkedin.com/in/poorna-panduwawala-386a73189/'
    },
    {
      name: 'Jayathunga T.M.',
      role: 'TEAM Leader',
      id: 'IT20146238',
      email: 'thiroshmadhusha0520@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team/member.jpg',
      linkedin: 'https://www.linkedin.com/in/thirosh-madhusha/'
    },
    {
      name: 'Semini J.P.D.L.',
      role: 'TEAM Member',
      id: 'IT20241346',
      email: 'dulmilaknasewmz9811@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team/dulmi.jpg',
      linkedin: 'https://www.linkedin.com/in/thirosh-madhusha/'
    },
    {
      name: 'Godakanda P.G.S.',
      role: 'TEAM Member',
      id: 'IT20129712',
      email: 'sajeewagodakanda@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team/sajeewa.jpg',
      linkedin: 'https://www.linkedin.com/in/sajeewa-godakanda-4ba77a1a4/'
    },
    {
      name: 'Bhagya H.D.M.',
      role: 'TEAM MEMBER',
      id: 'IT20254520',
      email: 'madushihd@gmail.com',
      faculty: 'FACULTY OF COMPUTING | INFORMATION TECHNOLOGY',
      image: '/assets/img/team/madushi.jpg',
      linkedin: 'https://www.linkedin.com/in/madushi-bhagya-aa4750221/'
    }
  ];

  return (
    <section id="ourteam" className="ourteam">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className={`col-lg-6 ${index > 1 ? 'mt-4' : ''}`} key={index}>
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  {member.title && <p>{member.title}</p>}
                  {member.id && <p>{member.id}</p>}
                  <p>{member.email}</p>
                  <p>{member.faculty}</p>
                  <div className="social">
                    <a href="#">
                      <RiTwitterFill />
                    </a>
                    <a href="#">
                      <RiFacebookFill />
                    </a>
                    <a href="#">
                      <RiInstagramFill />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <RiLinkedinBoxFill />
                    </a>
                  </div>
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
