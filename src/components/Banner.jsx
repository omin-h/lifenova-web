import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: '#34495e' }}>Banner</h2>
        </div>
        <div className="banner-image">
          <img src="src/assets/img/research-banner.png" alt="Research Banner" className="img-fluid" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
