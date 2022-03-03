import React from 'react';
import './digital.css';

export default function digital() {
  return (
    <div className="digital-root">
      <div className="digital-page">
        <div className="digital-title">
          <img
            src="https://livetorchlight.com/wp-content/uploads/2015/10/placeholder-circle.png"
            alt="logo"
            className="digital-icon"
          />
          <div className="strategic-planning-text-box">
            <h1>DIGITAL</h1>
          </div>
        </div>
        <br></br>
        <div className="digital-body">
          <div className="digital-text">
            <h4>
              In BMC, Our team of digital marketing experts will educate you on
              how targeted video, mobile, research and social media programs
              produce a measurable return on investment (ROI).{' '}
            </h4>
            <br></br>
            <h4>
              Outdated website? With BMC we get you covered, we have a full
              website design and optimization specialists ready to challenge
              your website as well.
            </h4>
          </div>
          <img
            className="digital-img"
            src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081"
            alt="whyBMC"
          />
        </div>
      </div>
    </div>
  );
}
