import React, { useState } from 'react';

const Scope = () => {
  const [activeTab, setActiveTab] = useState('literature');

  const tabContent = {
    literature: (
      <div>
        <h3>Literature Survey</h3>
        <p>
          Recent advancements in artificial intelligence (AI), natural language processing (NLP), and assistive technologies have significantly influenced the way individuals with visual impairments interact with digital systems. Studies highlight the growing importance of inclusive design and voice-based interfaces to empower users with accessibility challenges. Research by various scholars emphasizes that existing diary or scheduling applications are primarily designed for sighted users, leaving limited options that fully cater to the needs of visually impaired professionals. Traditional tools such as Braille diaries or basic speech-to-text recorders lack intelligent organization, contextual understanding, and real-time feedback mechanisms. Meanwhile, emerging systems like smart assistants (e.g., Alexa, Siri) demonstrate potential but are not tailored to professional or task-oriented environments. The integration of AI-based voice recognition, predictive analytics, and personalized scheduling remains underexplored in this domain. Moreover, previous studies have underlined that accessibility is not only a usability issue but also a productivity concern for visually impaired users. Hence, there is a pressing need to develop specialized tools that go beyond simple speech interfaces, combining intelligent context awareness, task management, and adaptive learning. This literature review underscores a clear technological and social opportunity: to bridge the gap between accessibility and productivity through an AI-driven, voice-enabled intelligent diary system.
        </p>
      </div>
    ),
    gap: (
      <div>
        <h3>Research Gap</h3>
        <p>
          Despite the progress in assistive technologies and AI-powered voice systems, a critical research gap persists in designing comprehensive productivity tools specifically tailored for visually impaired professionals. Current diary or scheduling applications, though equipped with basic accessibility features, fail to provide the depth of personalization and contextual intelligence required in professional settings. Most systems are limited to command-response models without adaptive learning, emotional understanding, or task prioritization capabilities. Furthermore, while commercial voice assistants can record notes or set reminders, they do not integrate with the user’s workflow, analyze behavioral patterns, or optimize schedules dynamically. Previous studies often focus on accessibility as a standalone feature rather than embedding it within productivity ecosystems. There is also limited exploration of user-centric design that accounts for the challenges faced by visually impaired professionals—such as navigation, cognitive load, and time management in complex work environments. Another gap exists in evaluating user experience and performance enhancement quantitatively within real-world contexts. This lack of empirical validation has hindered the adoption of intelligent diary systems among visually impaired professionals. Therefore, the research gap lies in developing a holistic, voice-enabled intelligent diary that merges AI-driven assistance, real-time adaptability, and inclusive usability principles to enhance productivity, independence, and accessibility for visually impaired users.
        </p>
      </div>
    ),
    problem: (
      <div>
        <h3>Research Problem</h3>
        <p>
          Visually impaired professionals often encounter significant challenges in managing time, organizing schedules, and tracking tasks efficiently. Existing digital tools do not fully accommodate their accessibility needs, resulting in dependence on external assistance and reduced productivity. Conventional diaries, even with speech-to-text support, lack the intelligence to understand context, adapt to user preferences, or provide proactive suggestions. This limitation creates barriers to independence and inclusivity in professional environments. The central research problem of this study is the absence of an integrated, intelligent, and voice-enabled diary system that can cater specifically to the functional and cognitive requirements of visually impaired professionals. While mainstream technologies like Google Assistant or Siri offer general-purpose assistance, they lack domain-specific customization for professional productivity. Moreover, these tools fail to provide an intuitive interface for task prioritization, calendar management, or real-time feedback suited to users who rely solely on auditory interaction. Therefore, the research problem focuses on designing and developing an AI-based system—Life Nova—that leverages voice recognition, NLP, and machine learning to create a seamless, accessible, and personalized diary experience. The system aims to reduce the productivity gap caused by limited accessibility and foster an environment where visually impaired professionals can independently manage daily activities with confidence and efficiency.
        </p>
      </div>
    ),
    objectives: (
      <div>
        <h3>Research Objectives</h3>
        <div className="objectives-content">
          <h4>Main Objective</h4>
          <p>
            The main objective of this research is to design and implement Life Nova, a voice-enabled intelligent diary system that enhances productivity and accessibility for visually impaired professionals through adaptive AI and user-centered design.
          </p>
          <h4>Sub Objectives</h4>
          <ul>
            <li>1. To analyze the existing limitations of current diary and scheduling tools in addressing the accessibility needs of visually impaired professionals.</li>
            <li>2. To design a voice-controlled interface using advanced NLP and speech recognition that enables seamless interaction without visual dependency.</li>
            <li>3. To integrate intelligent scheduling and task management features using AI-driven algorithms that can prioritize activities, provide reminders, and adapt to user behavior.</li>
            <li>4. To develop a context-aware feedback mechanism that supports users through personalized suggestions and adaptive learning capabilities.</li>
            <li>5. To evaluate the system’s effectiveness through usability testing and performance metrics focused on accessibility, efficiency, and user satisfaction.</li>
            <li>6. To promote digital inclusivity by demonstrating how AI-based tools can empower visually impaired professionals in their daily work environment.</li>
          </ul>
        </div>
      </div>
    ),
    methodology: (
      <div>
        <h3>Methodology</h3>
        <p>
          This study adopts a mixed-methods approach combining qualitative and quantitative research techniques to design, develop, and evaluate the Life Nova system. Initially, user-centered research will be conducted through interviews and surveys with visually impaired professionals to understand their challenges, preferences, and task management patterns. Insights from this phase will inform the design requirements and accessibility features of the prototype. The system design phase will employ agile development methodologies, emphasizing iterative prototyping and feedback integration. Core technologies will include Natural Language Processing (NLP) for intelligent voice interaction, machine learning for adaptive scheduling, and text-to-speech/speech-to-text frameworks for seamless communication. The prototype will be developed using accessible platforms compatible with mobile and desktop devices. Once developed, usability testing will be carried out involving participants from the target user group to measure performance indicators such as task completion time, accuracy, satisfaction, and accessibility efficiency. Data collected will be analyzed using both descriptive statistics and thematic analysis to evaluate system performance and user feedback. Ethical considerations will be strictly followed, ensuring participant consent, data privacy, and accessibility compliance. The final outcome will validate the system’s ability to enhance productivity, autonomy, and accessibility among visually impaired professionals, establishing Life Nova as a benchmark for future AI-driven assistive technologies.
        </p>
      </div>
    ),
    tools: (
      <div>
        <h3>Tools & Technologies</h3>
        <ul>
          <li>Python, TensorFlow, Keras</li>
          <li>React, Node.js</li>
          <li>Google Cloud Vision API</li>
          <li>Speech Synthesis Libraries</li>
          <li>Other relevant open-source tools</li>
        </ul>
      </div>
    ),
  };

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
                <button
                  className={`nav-link${activeTab === 'literature' ? ' active' : ''}`}
                  onClick={() => setActiveTab('literature')}
                  style={
                    activeTab === 'literature'
                      ? { background: 'green', color: 'white', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                      : { background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                  }
                >
                  <h5>📚 Literature Survey</h5>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link${activeTab === 'gap' ? ' active' : ''}`}
                  onClick={() => setActiveTab('gap')}
                  style={
                    activeTab === 'gap'
                      ? { background: 'green', color: 'white', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                      : { background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                  }
                >
                  <h5>🔍 Research Gap</h5>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link${activeTab === 'problem' ? ' active' : ''}`}
                  onClick={() => setActiveTab('problem')}
                  style={
                    activeTab === 'problem'
                      ? { background: 'green', color: 'white', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                      : { background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                  }
                >
                  <h5>❓ Research Problem</h5>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link${activeTab === 'objectives' ? ' active' : ''}`}
                  onClick={() => setActiveTab('objectives')}
                  style={
                    activeTab === 'objectives'
                      ? { background: 'green', color: 'white', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                      : { background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                  }
                >
                  <h5>🎯 Objectives</h5>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link${activeTab === 'methodology' ? ' active' : ''}`}
                  onClick={() => setActiveTab('methodology')}
                  style={
                    activeTab === 'methodology'
                      ? { background: 'green', color: 'white', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                      : { background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                  }
                >
                  <h5>⚙️ Methodology</h5>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link${activeTab === 'tools' ? ' active' : ''}`}
                  onClick={() => setActiveTab('tools')}
                  style={
                    activeTab === 'tools'
                      ? { background: 'green', color: 'white', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                      : { background: 'none', border: 'none', padding: 0, textAlign: 'left', width: '100%' }
                  }
                >
                  <h5>🛠️ Tools & Technologies</h5>
                </button>
              </li>
            </ul>
          </div>
          <div className="col-lg-9">
            <div className="tab-content">
              <div className="tab-pane active">
                {tabContent[activeTab]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scope;
