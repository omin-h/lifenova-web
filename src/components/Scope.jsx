import React from 'react';

const Scope = () => {
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
  );
};

export default Scope;
