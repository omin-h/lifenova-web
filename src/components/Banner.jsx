import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="banner section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <h2>Banner</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <img src="/assets/img/2023-198-Poster.jpg" alt="Research Poster" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
