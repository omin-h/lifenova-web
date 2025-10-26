import React from 'react';
import { BsSlideshow } from 'react-icons/bs';
import { FaHandPointRight } from 'react-icons/fa';

const Presentations = () => {
  const presentations = [
    {
      title: 'Proposal Presentation',
      description: 'Click to View the Proposal Presentation',
      link: 'https://docs.google.com/presentation/d/1kJ52o5IJa5fPPbAYUGj94oBzkFfh-1j_/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    },
    {
      title: 'Progress Presentation I',
      description: 'Click to View the Progress Presentation I - 50% Completion',
      link: 'https://docs.google.com/presentation/d/19aCqz5B-_S92o-WBgt5OMZghjG8prHTF/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    },
    {
      title: 'Progress Presentation II',
      description: 'Click to View the Progress Presentation II - 90% Completion',
      link: 'https://docs.google.com/presentation/d/11HCjAQovPsHxu8XpAnbsG7d-VivOoRXk/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    },
    {
      title: 'Final Presentation',
      description: 'Click to View the Final Presentation- 100% Completion',
      link: 'https://docs.google.com/presentation/d/1c3-0HY_1hUnvwbUfc0HBy0mBOJ8WVkJi/edit?usp=sharing&ouid=116023111303352942051&rtpof=true&sd=true'
    }
  ];

  return (
    <section id="presentations" className="presentations">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative"></div>

          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <div className="section-title">
              <h2>Presentations</h2>
              <p>View Our Presentations Here</p>
            </div>

            {presentations.map((presentation, index) => (
              <div className="icon-box" key={index}>
                <div className="icon">
                  <BsSlideshow />
                </div>
                <h4 className="title">
                  <a href={presentation.link} target="_blank" rel="noopener noreferrer">
                    <FaHandPointRight className="me-2" />
                    {presentation.title}
                  </a>
                </h4>
                <p className="description">{presentation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentations;
