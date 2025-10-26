import React from 'react';
import { FaFilePowerpoint, FaUsers } from 'react-icons/fa';

const Milestones = () => {
  const milestones = [
    {
      title: 'Project Proposal',
      description: 'Proposal presentation and the proposal report submission.',
      marks: '12%',
      link: 'https://drive.google.com/drive/folders/15KJsr7eJ0KLNxtGiTH2LYiCyOS79FQ4e?usp=sharing'
    },
    {
      title: 'Progress Presentation 1',
      description: '50% progress presentation of the research project.',
      marks: '15%',
      link: 'https://docs.google.com/presentation/d/19aCqz5B-_S92o-WBgt5OMZghjG8prHTF/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    },
    {
      title: 'Progress Presentation 2',
      description: '90% progress presentation of the research project.',
      marks: '18%',
      link: 'https://docs.google.com/presentation/d/11HCjAQovPsHxu8XpAnbsG7d-VivOoRXk/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    },
    {
      title: 'Demonstration',
      description: 'Submission and presentation of the camera-ready research poster.',
      marks: '10%',
      link: 'https://drive.google.com/drive/folders/1SK_ssWBfCcG2NLryjzY_n6Z4ktoUiVlr?usp=sharing'
    },
    {
      title: 'Final Assessment',
      description: 'Submission of final reports and the final presentation of the research.',
      marks: '10%',
      link: 'https://docs.google.com/presentation/d/1c3-0HY_1hUnvwbUfc0HBy0mBOJ8WVkJi/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    },
    {
      title: 'Viva',
      description: 'Final viva of the research Commerclization Video with an User Testing and Research Team Member.',
      marks: '10%',
      link: 'https://drive.google.com/drive/folders/1kqiaOKZekJ9Zmjh43ZfUMZcK9bEJfJHe?usp=sharing',
      icon: 'users'
    }
  ];

  return (
    <section id="milestones" className="milestones">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2>Milestones</h2>
          </div>

          <div className="row">
            {milestones.map((milestone, index) => (
              <div className="col-xl-4 mt-4" key={index}>
                <div className="icon-box">
                  <div className="icon">
                    {milestone.icon === 'users' ? <FaUsers /> : <FaFilePowerpoint />}
                  </div>
                  <h4>
                    <a href={milestone.link} target="_blank" rel="noopener noreferrer">
                      {milestone.title}
                    </a>
                  </h4>
                  <p>{milestone.description}</p>
                  <br />
                  <p>Marks Allocated : {milestone.marks}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
