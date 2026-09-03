import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
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

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="hero">
      <video key={currentVideo} className="video-background" autoPlay muted playsInline>
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            Voice-Enabled Assistive Intelligence
          </div>
          <h1>
            Empowering Independence With <span>LifeNova</span>
          </h1>
          <p className="hero-lead">
            An intelligent, voice-controlled diary mobile ecosystem designed to enhance productivity, learning, and emotional well-being for visually impaired professionals.
          </p>
          <div className="hero-actions">
            <a href="#about" onClick={scrollToAbout} className="cta-button primary">
              Explore Research ↓
            </a>
            <a 
              href="https://drive.google.com/file/d/15JLhh8I9mqXbwRdOsKCGbEZmv48xHaMY/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cta-button secondary"
            >
              📄 Read Paper ↗
            </a>
          </div>

          <div className="hero-feature-tags">
            <span>🎯 Adaptive Learning Goals</span>
            <span className="dot">•</span>
            <span>🧠 Multimodal Stress Detection</span>
            <span className="dot">•</span>
            <span>📅 SMART Auto-Scheduling</span>
            <span className="dot">•</span>
            <span>📍 Context-Aware Navigation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
