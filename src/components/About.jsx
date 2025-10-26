import React from 'react';

const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container-fluid">
        <div className="section-title">
          <h2>About the Project</h2>
          <p>Read our research domain details here</p>
        </div>
        <div className="row">
          <div className="col-xl-5 col-lg-6 image-box d-flex justify-content-center align-items-stretch position-relative">
            <img src="/assets/img/about-image.jpg" alt="Visually Impaired Person" className="img-fluid" />
          </div>
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
            <h3>
              Enhancing Accessibility for the visually impaired by introducing a new app called
              "LifeNova" to the Community.
            </h3>

            <p>
              Our project focuses on revolutionizing accessibility for the visually impaired community
              through the utilization of the LifeNova App. We have chosen this application for its
              remarkable capabilities in Sinhala Optical Character Recognition (OCR), Sinhala Text to
              Speech Synthesis (TTS), Sinhala Voice Navigation, and Sinhala Object Detection and Image
              Identification.
            </p>

            <p>
              In the Sinhala OCR scenario, the app swiftly converts captured text into audible content,
              allowing users to access written information effortlessly. The Sinhala TTS feature empowers
              visually impaired individuals to explore story books and educational materials. The Sinhala
              Voice Navigation function provides essential guidance in unfamiliar environments, while the
              Sinhala Object Detection and Image Identification features make everyday tasks more
              manageable. This project is a step towards making the world more inclusive, granting the
              visually impaired community equal access to information and a newfound sense of
              independence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
