import React, { useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const Scope = () => {
  const [activeTab, setActiveTab] = useState('tab-1');

  const tabs = [
    { id: 'tab-1', title: 'Literature Survey' },
    { id: 'tab-2', title: 'Research Gap' },
    { id: 'tab-3', title: 'Research Problem' },
    { id: 'tab-4', title: 'Objectives' },
    { id: 'tab-5', title: 'Methodology' },
    { id: 'tab-6', title: 'Tools & Technologies' }
  ];

  return (
    <section id="scope" className="scope">
      <div className="container">
        <div className="section-title">
          <h2>Research Project Scope</h2>
          <p>Read our research domain details here</p>
        </div>
        <div className="row gy-4">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              {tabs.map((tab) => (
                <li className="nav-item" key={tab.id}>
                  <a
                    className={`nav-link ${activeTab === tab.id ? 'active show' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    href={`#${tab.id}`}
                  >
                    <h5>
                      <FaHandPointRight className="me-2" /> {tab.title}
                    </h5>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              {/* Literature Survey */}
              <div className={`tab-pane ${activeTab === 'tab-1' ? 'active show' : ''}`} id="tab-1">
                <div className="row gy-4">
                  <h3>Literature Survey</h3>
                  <div className="col-lg-8 text-center order-1 order-lg-2">
                    <img src="/assets/img/blind3.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-12 details order-2 order-lg-1">
                    <p>
                      Mobile-based Sinhala book readers have emerged as critical tools for enhancing the
                      educational accessibility of visually impaired students in Sri Lanka. This area of
                      research underscores the importance of addressing several key aspects.
                    </p>
                    <p>
                      Firstly, the limited support for the Sinhala language in existing solutions raises
                      questions about the comprehensive language support required for visually impaired
                      students. Secondly, user-centered design and accessibility features are vital, with
                      potential research gaps in usability and accessibility improvements.
                    </p>
                    <p className="fst-italic">
                      The need for customization and adaptability to cater to diverse learning needs
                    </p>
                    <p className="fst-italic">The reading preferences</p>
                    <p className="fst-italic">
                      The comprehension levels of visually impaired students highlights another significant
                      research area
                    </p>
                    <p>
                      Affordability and accessibility of mobile devices for this user group is another vital
                      aspect that warrants investigation, with a focus on making these devices more
                      cost-effective and widely available. Furthermore, research gaps exist in evaluating
                      the impact of mobile-based Sinhala book readers on learning outcomes and their
                      seamless integration into the educational curriculum.
                    </p>
                    <p>
                      The legal and ethical issues concerning digital rights management and copyright need
                      to be addressed, while exploring emerging technologies, such as AI and machine
                      learning, for enhancing the functionality and accessibility of these readers
                      represents a promising avenue for future research.
                    </p>
                    <p>
                      Improving Sinhala book reader design for visually impaired students requires
                      understanding long-term user feedback and usage patterns.
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Gap */}
              <div className={`tab-pane ${activeTab === 'tab-2' ? 'active show' : ''}`} id="tab-2">
                <div className="row gy-4">
                  <h3>Research Gap</h3>
                  <div className="col-lg-12 details order-2 order-lg-1">
                    <p>
                      There is a significant research gap in the field of Mobile Base Sinhala Book Readers
                      for Visually Impaired Students. Specifically, there is a lack of comprehensive
                      user-centered design and usability studies.
                    </p>
                    <p>1. Sinhala Optical Character Recognition (OCR)</p>
                    <p className="fst-italic">
                      * One possible research gap in the OCR component is the need for a more accurate and
                      efficient OCR engine specifically designed for the Sinhala language.
                    </p>
                    <p>2. Sinhala Text-to-Speech (TTS) Synthesizer</p>
                    <p className="fst-italic">
                      * Without the speech of an outside person, Sinhala text converts into clear speech and
                      makes it easy for visually impaired students to here.
                    </p>
                    <p>3. Sinhala Object Detection & Sinhala Voice Navigation System</p>
                    <p className="fst-italic">
                      * The primary issue at hand is the absence of a Sinhala-specific object detection.
                    </p>
                    <p>4. Sinhala Image Identification</p>
                    <p className="fst-italic">
                      * This study aims to address the accessibility gap by developing an image detection
                      system capable of providing comprehensive and culturally relevant descriptions in
                      Sinhala within a student books.
                    </p>
                  </div>
                  <div className="col-lg-8 text-center order-1 order-lg-2">
                    <img src="/assets/img/blind2.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Research Problem */}
              <div className={`tab-pane ${activeTab === 'tab-3' ? 'active show' : ''}`} id="tab-3">
                <div className="row gy-4">
                  <h3>Research Problem</h3>
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <p className="fst-italic">
                      The main research problem here is the difficulty of accessing printed materials with
                      braille technology for visually impaired individuals.
                    </p>
                    <h5>There is no proper mobile application for sinhala book reading.</h5>
                    <p>
                      Obtaining educational materials and resources that meet the language needs of visually
                      impaired Sinhala-speaking individuals is a significant challenge. The lack of a
                      comprehensive educational access program designed specifically for this group of people
                      poses major problems.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/assets/img/researchproblem.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Objectives */}
              <div className={`tab-pane ${activeTab === 'tab-4' ? 'active show' : ''}`} id="tab-4">
                <div className="row gy-4">
                  <h3>Research Objectives</h3>
                  <div className="col-lg-6 details order-2 order-lg-1">
                    <p className="fst-italic">
                      <h5>Main Objective</h5>
                    </p>
                    <p>
                      Our research goals are aimed at providing a comprehensive solution to the issue
                      previously mentioned. We aim to enhance OCR and TTS technologies, particularly for
                      Sinhala.
                    </p>
                    <p className="fst-italic">
                      <h5>Sub Objectives</h5>
                    </p>
                    <p>Sinhala Optical Character Recognition (OCR)</p>
                    <p>Sinhala Text-to-Speech (TTS) Synthesizer</p>
                    <p>Sinhala Voice Navigation System</p>
                    <p>Sinhala Object Detection</p>
                    <p>Sinhala Image Identification</p>
                  </div>
                  <div className="col-lg-6 text-center order-1 order-lg-2">
                    <img src="/assets/img/ocr.jpg" alt="" className="img-fluid" />
                    <hr />
                    <img src="/assets/img/tts.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Methodology */}
              <div className={`tab-pane ${activeTab === 'tab-5' ? 'active show' : ''}`} id="tab-5">
                <div className="row gy-4">
                  <h3>Methodology</h3>
                  <div className="col-lg-12 details order-2 order-lg-1">
                    <p>
                      The methodology for studying mobile-based Sinhala book readers for visually impaired
                      students involves a mixed-methods approach.
                    </p>
                  </div>
                  <div className="col-lg-8 text-center order-1 order-lg-2">
                    <img src="/assets/img/blind1.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div className={`tab-pane ${activeTab === 'tab-6' ? 'active show' : ''}`} id="tab-6">
                <div className="row gy-4">
                  <h3>Tools & Technologies</h3>
                  <div className="col-lg-4 details order-2 order-lg-1">
                    <p>Android Studio</p>
                    <p>Java 8</p>
                    <p>Python 3.8</p>
                    <p>Jupyter Notebook</p>
                    <p>Anaconda Navigator</p>
                    <p>Postman API Platform</p>
                    <p>VS Code</p>
                    <p>Figma UI/UX</p>
                    <p>GitLab</p>
                    <p>ngrok server</p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/assets/img/androjava.jpg" alt="" className="img-fluid" />
                    <img src="/assets/img/pyjupyanaconda.jpg" alt="" className="img-fluid" />
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <img src="/assets/img/postman.png" alt="" className="img-fluid" />
                    <img src="/assets/img/figma.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
