import React from 'react';

const About = () => {
  const scrollToDocumentation = (e) => {
    e.preventDefault();
    const docSection = document.getElementById('documentation');
    if (docSection) {
      docSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const researchMetrics = [
    {
      value: '94.1%',
      title: 'SMART Scheduling Accuracy',
      desc: 'WCFDA multi-model decision algorithm (+7.4% over baseline, 31% fewer redundant confirmations)'
    },
    {
      value: '91.0%',
      title: 'Goal Generation Accuracy',
      desc: 'Groq LLaMA 3.3 70B & Deepgram STT translating spoken intentions with 4.7/5 user satisfaction'
    },
    {
      value: '91.0%',
      title: 'Voice Stress Detection',
      desc: '1-D CNN on 13 MFCC audio features (RAVDESS/TESS, F1: 0.89) fused with Random Forest app analytics'
    },
    {
      value: '83.0%',
      title: 'Contextual Task Relevance',
      desc: 'Zero-shot BART-large-MNLI + dynamic weighting (temporal discounting, Tobler’s spatial decay)'
    }
  ];

  const researchPillars = [
    {
      icon: '🎯',
      title: 'Voice-Based Learning Goal Generator & Tracker',
      text: 'Converts spoken learning intentions into adaptive, stress-aware study plans. Powered by Deepgram Speech-to-Text and Groq LLaMA 3.3 70B to decompose goals into structured JSON sub-goals. Applies cognitive neuroscience models including the Spacing Effect, Work-Life Balance principles, Cognitive Load & stress-cortisol theory, Pomodoro breaks, Circadian rhythm optimization (biologically optimal study times), and Ultradian recovery breaks. Delivered via hands-free Text-to-Speech (TTS).',
      tags: ['LLaMA 3.3 70B', 'Deepgram STT', 'Cognitive Load Theory', 'Circadian Optimization', '91% Accuracy']
    },
    {
      icon: '🧠',
      title: 'Multimodal Stress Detection & Wellness Recommendations',
      text: 'Integrates acoustic emotion recognition and mobile behavior analytics to help users manage daily tension. A 1-D CNN built with TensorFlow/Keras analyzes 13 MFCCs from 3-second voice notes to classify Negative (Stressed), Neutral, and Positive (Relaxed) states. Concurrently, a Scikit-learn Random Forest classifier analyzes app-usage patterns. Both signals undergo semantic fusion via Google Gemini 2.5 Flash LLM, delivering empathetic, actionable voice guidance.',
      tags: ['1-D CNN (TensorFlow)', 'Librosa 13 MFCCs', 'Random Forest', 'Google Gemini 2.5 Flash', '89% Fusion Agreement']
    },
    {
      icon: '📅',
      title: 'Real-Time Adaptive SMART Scheduling System',
      text: 'Transforms incoming SMS messages into actionable calendar events through a modular orchestration pipeline. Integrates DistilBERT for spam filtering (96.2%), RoBERTa for intent detection (93.7%), BERT-NER for entity extraction (90.4% F1), and HeidelTime for temporal normalization into ISO datetimes. The Weighted Confidence Fusion Decision Algorithm (WCFDA) merges confidence scores to autonomously schedule high-confidence items and reduce user latency by 28%.',
      tags: ['WCFDA Orchestration', 'DistilBERT', 'RoBERTa', 'BERT-NER', 'HeidelTime', '94.1% Accuracy']
    },
    {
      icon: '📍',
      title: 'Context-Aware Task Prioritization & Turn-by-Turn Guidance',
      text: 'Dynamically ranks calendar tasks based on real-time situational inputs: GPS location, Google Places API, time, and detected user activity (walking, driving, stationary). Uses zero-shot classification (BART-large-MNLI) to infer place types without extra training data. A dynamic weighting algorithm balances exponential temporal discounting, Tobler’s Law of Spatial Decay, activity compatibility, and cognitive load, providing turn-by-turn navigation via Google Maps API.',
      tags: ['BART-large-MNLI Zero-Shot', 'Google Places API', 'Spatial Decay Law', 'Google Maps Turn-by-Turn', '83% Relevance']
    }
  ];

  return (
    <section id="about" className="about section-bg">
      <div className="container">
        <div className="section-title">
          <h2>About the Project</h2>
          <p>Scientific Research & Architectural Overview</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="text-center mb-4">
              <h3 style={{ fontSize: '26px', fontWeight: '700', color: '#2c4964', lineHeight: '1.4', marginBottom: '16px' }}>
                Life Nova: Voice-Enabled Intelligent Diary System for Enhancing Productivity and Accessibility of Visually Impaired Professionals
              </h3>
              <p style={{ fontSize: '15px', color: '#556677', maxWidth: '850px', margin: '0 auto', lineHeight: '1.8', textAlign: 'justify' }}>
                Balancing emotional and physical well-being is essential for all professionals, especially those working in demanding environments. For visually impaired individuals, this balance becomes even more challenging due to the lack of accessible tools that support organization, learning, and mental wellness. Existing productivity tools often neglect accessibility or rely on rigid command-response interfaces without contextual awareness. <strong>LifeNova</strong> bridges the gap between assistive technology and proactive digital productivity by uniting natural voice interaction, large language models, multimodal emotion recognition, and adaptive scheduling into a single unified framework.
              </p>
            </div>

            {/* Empirical Performance Metrics */}
            <div className="metrics-grid">
              {researchMetrics.map((metric, index) => (
                <div key={index} className="metric-card">
                  <div className="metric-val">{metric.value}</div>
                  <div className="metric-title">{metric.title}</div>
                  <div className="metric-desc">{metric.desc}</div>
                </div>
              ))}
            </div>

            {/* 4 Core Research Pillars */}
            <div className="text-center mt-5 mb-4">
              <h4 style={{ fontSize: '22px', fontWeight: '700', color: '#2c4964' }}>
                Four Intelligent Research Components
              </h4>
              <p style={{ fontSize: '14px', color: '#7f8c8d' }}>
                Integrated multimodal architecture designed for complete auditory accessibility and cognitive support
              </p>
            </div>

            <div className="pillars-grid">
              {researchPillars.map((pillar, index) => (
                <div key={index} className="pillar-card">
                  <div className="pillar-header">
                    <div className="pillar-icon">{pillar.icon}</div>
                    <h5 className="pillar-title">{pillar.title}</h5>
                  </div>
                  <p className="pillar-text">{pillar.text}</p>
                  <div className="pillar-tags">
                    {pillar.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="pillar-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Paper CTA Box */}
            <div className="paper-cta-box">
              <div className="paper-cta-content">
                <h4>Read the Full Research Paper</h4>
                <p>
                  Authored by researchers from the Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT). Access the complete publication with literature review, mathematical modeling, and evaluation benchmarks.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href="https://drive.google.com/file/d/15JLhh8I9mqXbwRdOsKCGbEZmv48xHaMY/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="paper-cta-btn"
                >
                  📄 View Research Paper
                </a>
                <a 
                  href="#documentation" 
                  onClick={scrollToDocumentation}
                  className="paper-cta-btn" 
                  style={{ background: 'transparent', color: '#ffffff', border: '1px solid #ffffff' }}
                >
                  📑 Documentation Tab
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
