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

  return (
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
  );
};

export default Hero;
