import React, { useState } from 'react';

const Documentation = () => {
  const [activeDoc, setActiveDoc] = useState('charter');

  const documents = {
    charter: {
      title: 'Project Charter',
      description: 'Click Here to View the Project Charter Document',
      link: 'https://drive.google.com/file/d/14hpzy_H8zi8qAcvXJ6jMW9-6bzSyGAqb/view?usp=drive_link'
    },
    proposal: {
      title: 'Proposal Documents',
      description: 'Click Here to View the Proposal Documents',
      link: 'https://drive.google.com/drive/folders/1363TV_MgPga4X96zgyKHRqT6-6f16JTf?usp=drive_link'
    },
    logbook: {
      title: 'Research Logbooks',
      description: 'Click Here to View the Research Logbooks',
      link: '2023-198_Research_Logbook'
    },
    status1: {
      title: 'Status Document I',
      description: 'Click Here to View Status Document I',
      link: 'https://drive.google.com/file/d/12yVGeFlLlvXz-4dGKz1Nl_nQ1YzGaHGN/view?usp=drive_link'
    },
    status2: {
      title: 'Status Document II',
      description: 'Click Here to View Status Document II',
      link: 'https://docs.google.com/spreadsheets/d/1qyCcGWYBAUSA8XxIE5lDKwZl8nkCE9dB/edit?usp=drive_link&ouid=104117928198051178525&rtpof=true&sd=true'
    },
    final: {
      title: 'Final Reports',
      description: 'Click Here to View the Final Reports',
      link: 'https://drive.google.com/drive/folders/1CKE44RSDgy6m8FFL6aFAkpiHsSeGSu-N?usp=drive_link'
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
              {documents[activeDoc].link ? (
                <a 
                  href={
                    documents[activeDoc].link.startsWith('http')
                      ? documents[activeDoc].link
                      : `/documents/${documents[activeDoc].link}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className="doc-link"
                >
                  <h3>📄 {documents[activeDoc].title}</h3>
                </a>
              ) : (
                <h3>📄 {documents[activeDoc].title}</h3>
              )}
              <p>{documents[activeDoc].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
