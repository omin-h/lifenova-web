import React, { useState } from 'react';
import { FaHandPointRight } from 'react-icons/fa';

const Documentation = () => {
  const [activeTab, setActiveTab] = useState('tab-7');

  const tabs = [
    { id: 'tab-7', title: 'Project Charter' },
    { id: 'tab-8', title: 'Proposal Document' },
    { id: 'tab-9', title: 'Research Logbook' },
    { id: 'tab-10', title: 'Status Document I' },
    { id: 'tab-11', title: 'Status Document II' },
    { id: 'tab-12', title: 'Final Report' }
  ];

  const documents = {
    'tab-7': {
      title: 'Project Charter',
      content: (
        <>
          <h4>Click Here to View the Project Charter Document</h4>
          <h4>
            <a
              href="https://drive.google.com/file/d/1B_kuimyodJ_MetQiJ3IetJRx_TuRMAeg/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaHandPointRight className="me-2" />
              2023-198_Project_Charter
            </a>
          </h4>
        </>
      ),
      image: '/assets/img/departments-1.jpg'
    },
    'tab-8': {
      title: 'Proposal Document',
      content: (
        <>
          <h4>Access the Individual Proposal Documents Using Following Links</h4>
          <h4>
            <a href="https://drive.google.com/file/d/1Gtwtln2ixwI0YubT5L7pGSf9OBLu4omZ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20146238_Jayathunga T.M.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/13qvBdUWqUJlB8bekxXtEqyIw89mujrfN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20241346_Semini J.P.D.L.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1qLYGQOcs_K6P8T-6n3KGxJKCFZxcb8WI/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20129712_Godakanda P.G.S.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1KdWjQK0ucgCI9Cq0vZLSlizq62J9r5RC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20254520_Bhagya H.D.M.
            </a>
          </h4>
        </>
      )
    },
    'tab-9': {
      title: 'Research Logbook',
      content: (
        <>
          <h4>Access the Research Logbook Documents Using Following Links</h4>
          <h4>
            <a href="https://drive.google.com/file/d/1XOKtRD6YcHgq7LyRXTtk7CuvQXs1yPeW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20146238_Jayathunga T.M.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/18ynkCMv4rTcvY6GAAzwRD_TBbvvYw1OH/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20241346_Semini J.P.D.L.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1XOKtRD6YcHgq7LyRXTtk7CuvQXs1yPeW/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20129712_Godakanda P.G.S.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1NOPRIdYNOjMfjQMXdyzGQIR-KMhLhPgg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20254520_Bhagya H.D.M.
            </a>
          </h4>
        </>
      )
    },
    'tab-10': {
      title: 'Status Document I',
      content: (
        <>
          <h4>Access Status Document_I Using Following Links</h4>
          <h4>
            <a href="https://drive.google.com/file/d/1eEQivU6htfRpm5t89nTvipkCeK1j79Gs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20146238_Jayathunga T.M.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1Z0pTpK2ikwkNDmSWDcO2ukonj0JnurF7/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20241346_Semini J.P.D.L.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1ANG0NBLWySOwdVtgYyjYXkK0ZAT-HVnN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20129712_Godakanda P.G.S.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1SH-UDONJnIxZdxjXsXq7iR6kkRqfxKTt/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20254520_Bhagya H.D.M.
            </a>
          </h4>
        </>
      )
    },
    'tab-11': {
      title: 'Status Document II',
      content: (
        <>
          <h4>Access Status Document_II Using Following Links</h4>
          <h4>
            <a href="https://drive.google.com/file/d/1VoFBdSQdn8loSQEmYwrBGokV4r2DiT2P/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20146238_Jayathunga T.M.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1KUtKEQEm8FJL8Ai8w53qV58YKD6JJiVg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20241346_Semini J.P.D.L.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1VoFBdSQdn8loSQEmYwrBGokV4r2DiT2P/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20129712_Godakanda P.G.S.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1eIiLMa5X4Gn0nmX9L8KA7VUbHHc4CDtg/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20254520_Bhagya H.D.M.
            </a>
          </h4>
        </>
      )
    },
    'tab-12': {
      title: 'Final Reports',
      content: (
        <>
          <h4>Access the Final Group Report Using Following Link</h4>
          <h4>
            <a href="https://drive.google.com/file/d/127hoDY_LnJuG0VD14-70LIynoZhOGfP6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />2023-198_Group_Report
            </a>
          </h4>
          <h4>Access the Individual Final Reports Using Following Links</h4>
          <h4>
            <a href="https://drive.google.com/file/d/1ClXxGAbcCxsl7dTqONWLj0BjavqMw466/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20146238_Jayathunga T.M.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1qd4m5b281dvw4VxVSq_WUUP7qeLsbtU9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20241346_Semini J.P.D.L.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/1ClXxGAbcCxsl7dTqONWLj0BjavqMw466/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20129712_Godakanda P.G.S.
            </a>
          </h4>
          <h4>
            <a href="https://drive.google.com/file/d/16MPkptJzgmZrLKhhRgyxskirtBtjNbl8/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FaHandPointRight className="me-2" />IT20254520_Bhagya H.D.M.
            </a>
          </h4>
        </>
      )
    }
  };

  return (
    <section id="documents" className="documents section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Documentation</h2>
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
                    <h5>{tab.title}</h5>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              {Object.entries(documents).map(([tabId, doc]) => (
                <div className={`tab-pane ${activeTab === tabId ? 'active show' : ''}`} id={tabId} key={tabId}>
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{doc.title}</h3>
                      {doc.content}
                    </div>
                    {doc.image && (
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img src={doc.image} alt="" className="img-fluid" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
