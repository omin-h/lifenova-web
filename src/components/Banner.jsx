import React from 'react';
import bannerImg from '../assets/img/research-banner.png';

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: '#34495e' }}>Banner</h2>
        </div>
        <div className="banner-image">
          <img src={bannerImg} alt="Research Banner" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
