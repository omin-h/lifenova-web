import React, { useState } from 'react';

const Documentation = () => {
  const [activeDoc, setActiveDoc] = useState('charter');

  const documents = {
    charter: {
      title: 'Project Charter',
      description: 'Access the Project Charter Document Using Following Link',
      directLink: {
        name: 'Project Charter',
        link: 'https://drive.google.com/file/d/14hpzy_H8zi8qAcvXJ6jMW9-6bzSyGAqb/view?usp=drive_link'
      }
    },
    proposal: {
      title: 'Proposal Document',
      description: 'Access the Individual Proposal Documents Using Following Links',
      individuals: [
        {
          name: 'IT21801372_Hemapriya K. K. V. O. D.',
          link: 'https://drive.google.com/file/d/111lvcXNHZQhLceHSZQcNKTEoOKCbiSGU/view?usp=sharing'
        },
        {
          name: 'IT21389542_Herath H.M.D.P.',
          link: 'https://drive.google.com/file/d/1PAPfCL3A1TKH5ax2lhcEgx7lE8Cioza9/view?usp=sharing'
        },
        {
          name: 'IT21258930_Idamewaththa I.W.S.M.B.',
          link: 'https://drive.google.com/file/d/100b5EGocfdBJS9X5TfBtYk59zOrOrRaD/view?usp=sharing'
        },
        {
          name: 'IT21099090_Anuruddhika S.K.D.',
          link: 'https://drive.google.com/file/d/1SuOiEV4Am0e5NonvyRwZixYpb-GORE9j/view?usp=sharing'
        }
      ]
    },
    logbook: {
      title: 'Research Logbook',
      description: 'Access the Research Logbook Documents Using Following Links',
      individuals: [
        {
          name: 'IT21801372_Hemapriya K. K. V. O. D.',
          link: 'https://drive.google.com/file/d/1KXwXOvl7sJ5vXpXk9GHuA5w5K4OZrKjZ/view?usp=drive_link'
        },
        {
          name: 'IT21389542_Herath H.M.D.P.',
          link: 'https://drive.google.com/file/d/1KXwXOvl7sJ5vXpXk9GHuA5w5K4OZrKjZ/view?usp=drive_link'
        },
        {
          name: 'IT21258930_Idamewaththa I.W.S.M.B.',
          link: 'https://drive.google.com/file/d/1KXwXOvl7sJ5vXpXk9GHuA5w5K4OZrKjZ/view?usp=drive_link'
        },
        {
          name: 'IT21099090_Anuruddhika S.K.D.',
          link: 'https://drive.google.com/file/d/1KXwXOvl7sJ5vXpXk9GHuA5w5K4OZrKjZ/view?usp=drive_link'
        }
      ]
    },
    status1: {
      title: 'Check List I',
      description: 'Access Check List I Using Following Link',
      directLink: {
        name: 'Check List I',
        link: 'https://drive.google.com/file/d/12yVGeFlLlvXz-4dGKz1Nl_nQ1YzGaHGN/view?usp=drive_link'
      }
    },
    status2: {
      title: 'Check List II',
      description: 'Access Check List II Using Following Link',
      directLink: {
        name: 'Check List II',
        link: 'https://docs.google.com/spreadsheets/d/1qyCcGWYBAUSA8XxIE5lDKwZl8nkCE9dB/edit?usp=drive_link&ouid=104117928198051178525&rtpof=true&sd=true'
      }
    },
    final: {
      title: 'Final Reports',
      description: 'Access the Final Group Report Using Following Link',
      groupReport: {
        name: 'R25-005_Group_Report',
        link: 'https://drive.google.com/file/d/1Q4kxpbE6Xzj-vzjE5dTHns70q7VB5Jt-/view?usp=drive_link'
      },
      individualsDescription: 'Access the Individual Final Reports Using Following Links',
      individuals: [
        {
          name: 'IT21801372_Hemapriya K. K. V. O. D.',
          link: 'https://drive.google.com/file/d/1qP4h_hXcZNf2nRjzPMdAnSHLmZUkzBgs/view?usp=sharing'
        },
        {
          name: 'IT21389542_Herath H.M.D.P.',
          link: 'https://drive.google.com/file/d/1mTnXtsASRD9ev8OdnwjqyvOXpZQ-Ycf4/view?usp=sharing'
        },
        {
          name: 'IT21258930_Idamewaththa I.W.S.M.B.',
          link: 'https://drive.google.com/file/d/1qkLM6-jVwFGsU2EtavsVRfJjbvUs00a0/view?usp=sharing'
        },
        {
          name: 'IT21099090_Anuruddhika S.K.D.',
          link: 'https://drive.google.com/file/d/1OA-rEb42GG-NptXWpTikME4nxJxLCu-T/view?usp=sharing'
        }
      ]
    }
  };

  const docNav = [
    { id: 'charter', label: 'Project Charter' },
    { id: 'proposal', label: 'Proposal Document' },
    { id: 'logbook', label: 'Research Logbook' },
    { id: 'status1', label: 'Check List I' },
    { id: 'status2', label: 'Check List II' },
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
              
              {(activeDoc === 'proposal' || activeDoc === 'logbook') && documents[activeDoc].individuals ? (
                <div className="individual-docs">
                  {documents[activeDoc].individuals.map((individual, index) => (
                    <div key={index} className="individual-doc-item">
                      <a 
                        href={individual.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="individual-doc-link"
                      >
                        📄 {individual.name}
                      </a>
                    </div>
                  ))}
                </div>
              ) : activeDoc === 'final' && documents[activeDoc].groupReport ? (
                <div>
                  <div className="group-report">
                    <a 
                      href={documents[activeDoc].groupReport.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="individual-doc-link"
                    >
                      📄 {documents[activeDoc].groupReport.name}
                    </a>
                  </div>
                  <p style={{ marginTop: '2rem' }}>{documents[activeDoc].individualsDescription}</p>
                  <div className="individual-docs">
                    {documents[activeDoc].individuals.map((individual, index) => (
                      <div key={index} className="individual-doc-item">
                        <a 
                          href={individual.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="individual-doc-link"
                        >
                          📄 {individual.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ) : documents[activeDoc].directLink ? (
                <div className="individual-docs">
                  <div className="individual-doc-item">
                    <a 
                      href={documents[activeDoc].directLink.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="individual-doc-link"
                    >
                      📄 {documents[activeDoc].directLink.name}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
