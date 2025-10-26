import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/assets/videos/1.mp4',
    '/assets/videos/2.mp4',
    '/assets/videos/4.mp4',
    '/assets/videos/3.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="home">
      {slides.map((video, index) => (
        <video
          key={index}
          className={`video-slide ${index === currentSlide ? 'active' : ''}`}
          src={video}
          autoPlay
          muted
          loop
        />
      ))}
      <div className="content">
        <h1>
          Welcome To The <span>Audio Sight</span>
        </h1>
        <p>Mobile Base Sinhala Book Reader For Visually Impaired Individuals</p>
        <a href="#about">Read More</a>
      </div>
      <div className="media-icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
      </div>
      <div className="slider-navigation" style={{ pointerEvents: 'none' }}>
        {slides.map((_, index) => (
          <div key={index} className={`nav-btn ${index === currentSlide ? 'active' : ''}`} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
