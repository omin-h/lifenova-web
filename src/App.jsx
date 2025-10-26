import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const videos = ['/videos/2.mp4', '/videos/4.mp4'];

  useEffect(() => {
    const videoElement = document.querySelector('.video-background');
    
    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideo]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>LifeNova</h1>
          <nav>
            <a 
              href="#home" 
              className={activeSection === 'home' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a 
              href="#scope" 
              className={activeSection === 'scope' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('scope'); }}
            >
              Scope
            </a>
            <a 
              href="#milestones" 
              className={activeSection === 'milestones' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('milestones'); }}
            >
              Milestones
            </a>
            <a 
              href="#documentation" 
              className={activeSection === 'documentation' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('documentation'); }}
            >
              Documentation
            </a>
            <a 
              href="#presentations" 
              className={activeSection === 'presentations' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('presentations'); }}
            >
              Presentations
            </a>
            <a 
              href="#banner" 
              className={activeSection === 'banner' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('banner'); }}
            >
              Banner
            </a>
            <a 
              href="#team" 
              className={activeSection === 'team' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}
            >
              Our Team
            </a>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <video key={currentVideo} className="video-background" autoPlay muted>
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1>Welcome To <span>LifeNova</span></h1>
            <p>SMART Diary - Your Intelligent Personal Journal</p>
            <a href="#about" className="cta-button">Read More</a>
          </div>
        </section>

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

        <section id="scope" className="scope">
          <div className="container">
            <div className="section-title">
              <h2>Research Project Scope</h2>
              <p>Read our research domain details here</p>
            </div>
            <div className="row gy-4">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a className="nav-link active" href="#literature">
                      <h5>📚 Literature Survey</h5>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gap">
                      <h5>🔍 Research Gap</h5>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#problem">
                      <h5>❓ Research Problem</h5>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#objectives">
                      <h5>🎯 Objectives</h5>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#methodology">
                      <h5>⚙️ Methodology</h5>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tools">
                      <h5>🛠️ Tools & Technologies</h5>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="tab-content">
                  <div className="tab-pane active">
                    <h3>Research Objectives</h3>
                    <div className="objectives-content">
                      <h4>Main Objective</h4>
                      <p>
                        Our research goals are aimed at providing a comprehensive solution to enhance accessibility
                        for visually impaired individuals. We aim to improve OCR and TTS technologies, particularly
                        for Sinhala language processing.
                      </p>
                      <h4>Sub Objectives</h4>
                      <ul>
                        <li>Develop Sinhala Optical Character Recognition (OCR)</li>
                        <li>Create Sinhala Text-to-Speech (TTS) Synthesizer</li>
                        <li>Implement Sinhala Voice Navigation System</li>
                        <li>Build Sinhala Object Detection capabilities</li>
                        <li>Design Sinhala Image Identification system</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="milestones" className="milestones">
          <div className="container">
            <div className="section-title">
              <h2>Milestones</h2>
            </div>
            <div className="milestones-grid">
              <div className="milestone-card">
                <div className="milestone-icon">📄</div>
                <h3>Project Proposal</h3>
                <p>Proposal presentation and the proposal report submission.</p>
                <div className="milestone-marks">Marks Allocated: 12%</div>
              </div>
              <div className="milestone-card active">
                <div className="milestone-icon">📊</div>
                <h3>Progress Presentation 1</h3>
                <p>50% progress presentation of the research project.</p>
                <div className="milestone-marks">Marks Allocated: 15%</div>
              </div>
              <div className="milestone-card">
                <div className="milestone-icon">📈</div>
                <h3>Progress Presentation 2</h3>
                <p>90% progress presentation of the research project.</p>
                <div className="milestone-marks">Marks Allocated: 18%</div>
              </div>
              <div className="milestone-card">
                <div className="milestone-icon">🎯</div>
                <h3>Demonstration</h3>
                <p>Final demonstration of the working system.</p>
                <div className="milestone-marks">Marks Allocated: 20%</div>
              </div>
              <div className="milestone-card">
                <div className="milestone-icon">📋</div>
                <h3>Final Assessment</h3>
                <p>Final report submission and evaluation.</p>
                <div className="milestone-marks">Marks Allocated: 25%</div>
              </div>
              <div className="milestone-card">
                <div className="milestone-icon">👥</div>
                <h3>Viva</h3>
                <p>Final viva voce presentation and defense.</p>
                <div className="milestone-marks">Marks Allocated: 10%</div>
              </div>
            </div>
          </div>
        </section>

        <section id="documentation" className="documentation">
          <div className="container">
            <div className="section-title">
              <h2>Documentation</h2>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <ul className="doc-nav">
                  <li className="doc-nav-item active">Project Charter</li>
                  <li className="doc-nav-item">Proposal Document</li>
                  <li className="doc-nav-item">Research Logbook</li>
                  <li className="doc-nav-item">Status Document I</li>
                  <li className="doc-nav-item">Status Document II</li>
                  <li className="doc-nav-item">Final Report</li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div className="doc-content">
                  <h3>Project Charter</h3>
                  <p>Click Here to View the Project Charter Document</p>
                  <a href="#" className="doc-link">📄 2023-198_Project_Charter</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="presentations" className="presentations">
          <div className="container">
            <div className="section-title">
              <h2>Presentations</h2>
              <p>View Our Presentations Here</p>
            </div>
            <div className="row">
              <div className="col-lg-6 presentation-image">
                <img src="/assets/img/presentation.jpg" alt="Presentations" className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <div className="presentation-list">
                  <div className="presentation-item">
                    <div className="presentation-icon">🖥️</div>
                    <div className="presentation-content">
                      <h4>📌 Proposal Presentation</h4>
                      <p>Click to View the Proposal Presentation</p>
                    </div>
                  </div>
                  <div className="presentation-item">
                    <div className="presentation-icon">🖥️</div>
                    <div className="presentation-content">
                      <h4>📌 Progress Presentation I</h4>
                      <p>Click to View the Progress Presentation I - 50% Completion</p>
                    </div>
                  </div>
                  <div className="presentation-item">
                    <div className="presentation-icon">🖥️</div>
                    <div className="presentation-content">
                      <h4>📌 Progress Presentation II</h4>
                      <p>Click to View the Progress Presentation II - 90% Completion</p>
                    </div>
                  </div>
                  <div className="presentation-item">
                    <div className="presentation-icon">🖥️</div>
                    <div className="presentation-content">
                      <h4>📌 Final Presentation</h4>
                      <p>Click to View the Final Presentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner" className="banner">
          <div className="container">
            <div className="section-title">
              <h2>Banner</h2>
            </div>
            <div className="banner-image">
              <img src="/assets/img/research-banner.jpg" alt="Research Banner" className="img-fluid" />
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container">
            <div className="section-title">
              <h2>Our Team</h2>
            </div>
            <div className="team-grid">
              <div className="team-card supervisor">
                <div className="team-image">
                  <img src="/assets/img/supervisor.jpg" alt="Supervisor" />
                </div>
                <div className="team-info">
                  <h3>Prof. Koliya Pulasinghe</h3>
                  <p className="role">SUPERVISOR</p>
                  <p className="position">Senior Professor</p>
                  <p className="email">koliya.p@sliit.lk</p>
                  <p className="faculty">FACULTY OF COMPUTING | INFORMATION TECHNOLOGY</p>
                  <div className="social-links">
                    <a href="#" className="social-icon">🐦</a>
                    <a href="#" className="social-icon">📘</a>
                    <a href="#" className="social-icon">📷</a>
                    <a href="#" className="social-icon">💼</a>
                  </div>
                </div>
              </div>
              <div className="team-card supervisor">
                <div className="team-image">
                  <img src="/assets/img/co-supervisor.jpg" alt="Co-Supervisor" />
                </div>
                <div className="team-info">
                  <h3>Ms. Poorna Panduwawala</h3>
                  <p className="role">Co-SUPERVISOR</p>
                  <p className="position">Assistant Lecturer</p>
                  <p className="email">poorna.p@sliit.lk</p>
                  <p className="faculty">FACULTY OF COMPUTING | INFORMATION TECHNOLOGY</p>
                  <div className="social-links">
                    <a href="#" className="social-icon">🐦</a>
                    <a href="#" className="social-icon">📘</a>
                    <a href="#" className="social-icon">📷</a>
                    <a href="#" className="social-icon">💼</a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/assets/img/team-leader.jpg" alt="Team Leader" />
                </div>
                <div className="team-info">
                  <h3>Jayathunga T.M.</h3>
                  <p className="role">TEAM Leader</p>
                  <p className="student-id">IT20146238</p>
                  <p className="email">thiroshmadhusha0520@gmail.com</p>
                  <p className="faculty">FACULTY OF COMPUTING | INFORMATION TECHNOLOGY</p>
                  <div className="social-links">
                    <a href="#" className="social-icon">🐦</a>
                    <a href="#" className="social-icon">📘</a>
                    <a href="#" className="social-icon">📷</a>
                    <a href="#" className="social-icon">💼</a>
                  </div>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image">
                  <img src="/assets/img/team-member.jpg" alt="Team Member" />
                </div>
                <div className="team-info">
                  <h3>Semini J.P.D.L.</h3>
                  <p className="role">TEAM Member</p>
                  <p className="student-id">IT20241346</p>
                  <p className="email">dulmilaknaasewmz9811@gmail.com</p>
                  <p className="faculty">FACULTY OF COMPUTING | INFORMATION TECHNOLOGY</p>
                  <div className="social-links">
                    <a href="#" className="social-icon">🐦</a>
                    <a href="#" className="social-icon">📘</a>
                    <a href="#" className="social-icon">📷</a>
                    <a href="#" className="social-icon">💼</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="map-container">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128413!2d79.97036097499749!3d6.914682993083788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1234567890"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info">
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-content">
                      <h4>Location:</h4>
                      <p>SLIIT Malabe Campus, New Kandy Rd, Malabe, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">✉️</div>
                    <div className="info-content">
                      <h4>Email:</h4>
                      <p>lifenovaofficial@gmail.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-content">
                      <h4>Phone:</h4>
                      <p>+94 77 5338 747</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 LifeNova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
