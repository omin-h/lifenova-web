import React from 'react';
import './App.css';

function App() {
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
          <div className="container">
            <h1>LifeNova SMART Diary</h1>
            <p>Your intelligent personal diary companion</p>
            <button className="cta-button">Get Started</button>
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
