import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128413!2d79.97036097499749!3d6.914682993083788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-content">
                  <h4>Location:</h4>
                  <p>SLIIT Malabe Campus, New Kandy Rd, Malabe, Sri Lanka</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-content">
                  <h4>Email:</h4>
                  <p>lifenovaofficial@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-content">
                  <h4>Phone:</h4>
                  <p>+94 77 5338 747</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
