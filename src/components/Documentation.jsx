import React, { useState } from 'react';

const Documentation = () => {
  const [openDoc, setOpenDoc] = useState('charter');

  const toggleDoc = (id) => {
    setOpenDoc((prev) => (prev === id ? null : id));
  };

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
    paper: {
      title: 'Research Paper',
      description: 'Access the LifeNova Research Publication and Study Outcomes',
      directLink: {
        name: 'Life Nova: Research Paper',
        link: 'https://drive.google.com/file/d/15JLhh8I9mqXbwRdOsKCGbEZmv48xHaMY/view?usp=sharing'
      },
      paperDetails: {
        title: 'Life Nova: Voice-Enabled Intelligent Diary System for Enhancing Productivity and Accessibility of Visually Impaired Professionals',
        authors: 'Hemapriya K.K.V.O.D, Herath H.M.D.P, Idamewaththa I.W.S.M.B, Anuruddhika S.K.D',
        supervisors: 'Dr. Samantha Rajapaksha, Ms. Aparna Jayawardena',
        institution: 'Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka',
        keywords: [
          'Voice-enabled system',
          'Accessibility',
          'Visually impaired professionals',
          'Intelligent diary',
          'Productivity enhancement',
          'Context-aware computing',
          'Stress detection',
          'Smart scheduling'
        ],
        abstract: 'In the growing era of mobile technology, numerous applications help people enhance productivity and reduce stress. However, visually impaired individuals often miss these opportunities due to the lack of proper accessibility features. To address this gap, this research introduces LifeNova, a fully voice-controlled intelligent diary mobile application designed to enhance productivity, accessibility, and emotional well-being. LifeNova integrates four intelligent components: a voice-based learning goal generator and tracker, a smart scheduling engine, a context-aware task prioritization system, and a multimodal stress detection module using voice and app-usage behavior. By combining speech recognition, natural language understanding, and machine learning, the system allows users to manage their tasks and wellness entirely through voice interaction. Experimental evaluations demonstrate improved accessibility, reduced cognitive effort, and better daily management for visually impaired professionals.',
        metrics: [
          { label: 'SMART Scheduling Accuracy', value: '94.1%', note: 'WCFDA Decision Algorithm (+7.4% vs baseline)' },
          { label: 'Sub-Goal Generation Accuracy', value: '91.0%', note: '4.7/5 user satisfaction with Groq LLaMA 3.3' },
          { label: 'Voice Stress Emotion Recognition', value: '91.0%', note: '1-D CNN on 13 MFCC audio features (F1: 0.89)' },
          { label: 'Multimodal Stress Prediction', value: '89.0%', note: 'Gemini 2.5 Flash semantic fusion (>90% approval)' },
          { label: 'Task Relevance Accuracy', value: '83.0%', note: 'Zero-shot BART + Dynamic Context Weighting' }
        ]
      }
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
    { id: 'paper', label: 'Research Paper' },
    { id: 'status1', label: 'Check List I' },
    { id: 'status2', label: 'Check List II' },
    { id: 'final', label: 'Final Report' }
  ];

  return (
    <section id="documentation" className="documentation">
      <div className="container">
        <div className="section-title">
          <h2>Documentation</h2>
          <p>Click on any document tab to view details and access files</p>
        </div>

        <div className="doc-accordion">
          {docNav.map((doc) => {
            const isOpen = openDoc === doc.id;
            const docData = documents[doc.id];

            return (
              <div key={doc.id} className={`doc-accordion-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className={`doc-accordion-btn ${isOpen ? 'active' : ''}`}
                  onClick={() => toggleDoc(doc.id)}
                  aria-expanded={isOpen}
                >
                  <span className="doc-accordion-title">{doc.label}</span>
                  <span className="doc-chevron">{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div className="doc-accordion-dropdown">
                    <p className="doc-accordion-desc">{docData.description}</p>

                    {/* Proposal Document: Individual Reports */}
                    {doc.id === 'proposal' && docData.individuals && (
                      <div className="doc-links-grid">
                        {docData.individuals.map((individual, index) => (
                          <a
                            key={index}
                            href={individual.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="doc-download-btn"
                          >
                            <span className="doc-btn-icon">📄</span>
                            <span className="doc-btn-text">{individual.name}</span>
                            <span className="doc-btn-arrow">↗</span>
                          </a>
                        ))}
                      </div>
                    )}

                    {/* Final Report: Group + Individual Reports */}
                    {doc.id === 'final' && (
                      <div>
                        {docData.groupReport && (
                          <div style={{ marginBottom: '16px' }}>
                            <a
                              href={docData.groupReport.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-download-btn"
                              style={{ width: '100%' }}
                            >
                              <span className="doc-btn-icon">📁</span>
                              <span className="doc-btn-text">
                                <strong>Group Report:</strong> {docData.groupReport.name}
                              </span>
                              <span className="doc-btn-arrow">↗</span>
                            </a>
                          </div>
                        )}

                        {docData.individualsDescription && (
                          <p style={{ margin: '20px 0 12px', fontWeight: '700', color: '#2c4964', fontSize: '15px' }}>
                            {docData.individualsDescription}
                          </p>
                        )}

                        <div className="doc-links-grid">
                          {docData.individuals.map((individual, index) => (
                            <a
                              key={index}
                              href={individual.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="doc-download-btn"
                            >
                              <span className="doc-btn-icon">📄</span>
                              <span className="doc-btn-text">{individual.name}</span>
                              <span className="doc-btn-arrow">↗</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Research Paper: Direct Google Drive Link & Details */}
                    {doc.id === 'paper' && (
                      <div>
                        <div style={{ marginBottom: '20px' }}>
                          <a
                            href={docData.directLink.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="doc-download-btn"
                            style={{
                              width: '100%',
                              background: '#178178',
                              color: '#ffffff',
                              borderColor: '#178178'
                            }}
                          >
                            <span className="doc-btn-icon">📄</span>
                            <span className="doc-btn-text">
                              <strong>View Research Paper (Google Drive PDF)</strong>
                            </span>
                            <span className="doc-btn-arrow">↗</span>
                          </a>
                        </div>

                        {docData.paperDetails && (
                          <div className="paper-details-card" style={{
                            background: '#ffffff',
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            padding: '24px',
                            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.03)'
                          }}>
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
                              <span style={{
                                background: '#dcfce7',
                                color: '#15803d',
                                fontSize: '11px',
                                fontWeight: '700',
                                padding: '4px 10px',
                                borderRadius: '20px'
                              }}>
                                SLIIT FACULTY OF COMPUTING
                              </span>
                            </div>

                            <h4 style={{ color: '#1e293b', fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>
                              {docData.paperDetails.title}
                            </h4>

                            <p style={{ fontSize: '14px', color: '#475569', marginBottom: '6px' }}>
                              <strong>Authors:</strong> {docData.paperDetails.authors}
                            </p>
                            <p style={{ fontSize: '14px', color: '#475569', marginBottom: '6px' }}>
                              <strong>Supervisors:</strong> {docData.paperDetails.supervisors}
                            </p>
                            <p style={{ fontSize: '13px', color: '#64748b', fontStyle: 'italic', marginBottom: '14px' }}>
                              {docData.paperDetails.institution}
                            </p>

                            <div style={{ marginBottom: '16px' }}>
                              <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                                Abstract
                              </h5>
                              <p style={{ fontSize: '13px', color: '#334155', lineHeight: '1.65', textAlign: 'justify' }}>
                                {docData.paperDetails.abstract}
                              </p>
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                              <h5 style={{ fontSize: '13px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>
                                Keywords
                              </h5>
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {docData.paperDetails.keywords.map((kw, i) => (
                                  <span key={i} style={{
                                    background: '#f1f5f9',
                                    color: '#475569',
                                    fontSize: '11px',
                                    padding: '3px 8px',
                                    borderRadius: '4px',
                                    border: '1px solid #e2e8f0'
                                  }}>
                                    {kw}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h5 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '10px' }}>
                                Empirical Evaluation Results
                              </h5>
                              <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                                gap: '10px'
                              }}>
                                {docData.paperDetails.metrics.map((m, i) => (
                                  <div key={i} style={{
                                    background: '#f8fafc',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    border: '1px solid #e2e8f0',
                                    textAlign: 'center'
                                  }}>
                                    <div style={{ fontSize: '20px', fontWeight: '800', color: '#178178' }}>{m.value}</div>
                                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#1e293b', marginTop: '3px' }}>{m.label}</div>
                                    <div style={{ fontSize: '11px', color: '#64748b', marginTop: '3px' }}>{m.note}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Direct link documents: Charter, Checklist 1, Checklist 2 */}
                    {docData.directLink && doc.id !== 'paper' && (
                      <div>
                        <a
                          href={docData.directLink.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="doc-download-btn"
                          style={{ width: '100%' }}
                        >
                          <span className="doc-btn-icon">📄</span>
                          <span className="doc-btn-text">{docData.directLink.name}</span>
                          <span className="doc-btn-arrow">Open in Google Drive ↗</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Documentation;
