import React from 'react';
import { BsFileText, BsMicFill, BsCompass, BsImages } from 'react-icons/bs';

const WhyUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <br /><br />
              <h3>Why Choose The AudioSight?</h3>
              <p>
                You selected the AudioSight App for our Sinhala Optical Character Recognition (OCR),
                Sinhala Text to Speech Synthesizer (TTS), Sinhala Voice Navigation, and Object Detection,
                as well as Sinhala Image Identification and Captioning for our Blind Story Book Reader
                mobile application due to its exceptional capabilities in enhancing accessibility and
                usability for the visually impaired community.
              </p>
            </div>
          </div>
          <div className="col-lg-9 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-xl-3 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <BsFileText className="icon" />
                    <h5>Sinhala Optical Character Recognition (OCR)</h5>
                    <p>
                      A blind user takes a photo of a Sinhala text document using their smartphone. The
                      AudioSight App swiftly recognizes the text and converts it into audible content,
                      allowing the user to access and understand the information within seconds.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <BsMicFill className="icon" />
                    <h5>Sinhala Text to Speech Synthesizer (TTS)</h5>
                    <p>
                      A visually impaired individual receives a Sinhala e-book. They employ the AudioSight
                      App to convert the written text into spoken words, enabling them to enjoy literature
                      and access educational content seamlessly.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <BsCompass className="icon" />
                    <h5>Sinhala Voice Navigation & Object Detection</h5>
                    <p>
                      A blind user aims to navigate an unfamiliar environment. The AudioSight App assists
                      by providing clear Sinhala voice navigation instructions, guiding them through
                      streets, public transport, and indoor spaces with confidence.
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 d-flex align-items-stretch">
                  <div className="icon-box mt-4 mt-xl-0">
                    <BsImages className="icon" />
                    <h5>Sinhala Image Identification & Captioning</h5>
                    <p>
                      A visually impaired person uses the app's object detection and Sinhala image
                      identification features describe these items, allowing users to maintain their
                      independence and manage their surroundings effectively.
                    </p>
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

export default WhyUs;
