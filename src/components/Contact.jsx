import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="section-title">
              <h2>Contact Us</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7985117576864!2d79.97075581477283!3d6.914677495003823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1654861438602!5m2!1sen!2slk"
                  width="100%"
                  height="400px"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SLIIT Location"
                ></iframe>

                <div className="info mt-4">
                  <FaMapMarkerAlt />
                  <h4>Location:</h4>
                  <p>SLIIT Malabe Campus, New Kandy Rd, Malabe, SriLanka</p>
                </div>
                <div className="row">
                  <div className="col-lg-6 mt-4">
                    <div className="info">
                      <FaEnvelope />
                      <h4>Email:</h4>
                      <p>audiosightofficial@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="info w-100 mt-4">
                      <FaPhone />
                      <h4>Call:</h4>
                      <p>+94 77 5338 747</p>
                    </div>
                  </div>
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
