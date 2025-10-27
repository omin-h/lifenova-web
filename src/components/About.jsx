import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container-fluid">
        <div className="section-title">
          <h2>About the Project</h2>
          <p>Read our research domain details here</p>
        </div>
        <div className="row justify-content-center">
         
          <div className="col-xl-8 col-lg-10 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3 className="text-center">
              Enhancing Accessibility for the visually impaired by introducing a new app called
              "LifeNova" to the Community.
            </h3>

            <p>
              LifeNova – Voice-Enabled Intelligent Diary System for Enhancing Productivity and Accessibility of Visually Impaired Professionals is an assistive research project designed to improve daily productivity, learning, and well-being for visually impaired individuals.
            </p>

            <p>
              The system integrates voice-based interaction with intelligent automation to support users in managing their personal and professional lives more independently. It combines multiple AI-powered components, including Personalized Learning Goal Generation, Stress Detection, Context-Aware Task Prioritization, and Smart Scheduling, all accessible through a fully voice-controlled mobile interface.
            </p>

            <p>
              By analyzing user speech, behavior, and contextual data, LifeNova intelligently adapts schedules, tasks, and learning recommendations to each user’s needs, helping them stay organized, reduce stress, and continuously develop their skills.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
