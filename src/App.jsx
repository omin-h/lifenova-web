import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
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

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>LifeNova</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <video key={currentVideo} className="video-background" autoPlay muted>
            <source src={videos[currentVideo]} type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1>Welcome To <span>LifeNova</span></h1>
            <p>SMART Diary - Your Intelligent Personal Journal</p>
            <a href="#about" className="cta-button">Read More</a>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <h2>About LifeNova</h2>
            <p>LifeNova is a smart diary application that helps you track your daily activities, thoughts, and memories with intelligent insights.</p>
          </div>
        </section>

        <section id="features" className="features">
          <div className="container">
            <h2>Features</h2>
            <div className="feature-grid">
              <div className="feature-card">
                <h3>Smart Tracking</h3>
                <p>Automatically track your daily activities</p>
              </div>
              <div className="feature-card">
                <h3>AI Insights</h3>
                <p>Get intelligent insights from your entries</p>
              </div>
              <div className="feature-card">
                <h3>Secure Storage</h3>
                <p>Your data is encrypted and secure</p>
              </div>
              <div className="feature-card">
                <h3>Analytics</h3>
                <p>Visualize your life patterns</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Get in touch with the LifeNova team</p>
            <p>Email: info@lifenova.com</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 LifeNova. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
