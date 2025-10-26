import React, { useState } from 'react';

const Documentation = () => {
  const [activeDoc, setActiveDoc] = useState('charter');

  const documents = {
    charter: {
      title: 'Project Charter',
      description: 'Click Here to View the Project Charter Document',
      link: '2023-198_Project_Charter'
    },
    proposal: {
      title: 'Proposal Document',
      description: 'Click Here to View the Proposal Document',
      link: '2023-198_Proposal_Document'
    },
    logbook: {
      title: 'Research Logbook',
      description: 'Click Here to View the Research Logbook',
      link: '2023-198_Research_Logbook'
    },
    status1: {
      title: 'Status Document I',
      description: 'Click Here to View Status Document I',
      link: '2023-198_Status_Document_I'
    },
    status2: {
      title: 'Status Document II',
      description: 'Click Here to View Status Document II',
      link: '2023-198_Status_Document_II'
    },
    final: {
      title: 'Final Report',
      description: 'Click Here to View the Final Report',
      link: '2023-198_Final_Report'
    }
  };

  const docNav = [
    { id: 'charter', label: 'Project Charter' },
    { id: 'proposal', label: 'Proposal Document' },
    { id: 'logbook', label: 'Research Logbook' },
    { id: 'status1', label: 'Status Document I' },
    { id: 'status2', label: 'Status Document II' },
    { id: 'final', label: 'Final Report' }
  ];

  return (
    <section id="documentation" className="documentation">
      <div className="container">
        <div className="section-title">
          <h2>Documentation</h2>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <ul className="doc-nav">
              {docNav.map((doc) => (
                <li 
                  key={doc.id}
                  className={`doc-nav-item ${activeDoc === doc.id ? 'active' : ''}`}
                  onClick={() => setActiveDoc(doc.id)}
                >
                  {doc.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="doc-content">
              <h3>{documents[activeDoc].title}</h3>
              <p>{documents[activeDoc].description}</p>
              <a href="#" className="doc-link">📄 {documents[activeDoc].link}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
