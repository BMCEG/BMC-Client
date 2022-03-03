import React from 'react';
import './content.css';

export default function content() {
  return (
    <div className="content-root">
      <div className="content-page">
        <div className="content-title">
          <img
            src="https://livetorchlight.com/wp-content/uploads/2015/10/placeholder-circle.png"
            alt="logo"
            className="content-icon"
          />
          <div className="strategic-planning-text-box">
            <h1>CONTENT</h1>
          </div>
        </div>
        <br></br>
        <div className="content-body">
          <img
            className="content-img"
            src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081"
            alt="whyBMC"
          />
          <div className="content-text">
            <h4>
              Content is crucial to your company's entire communications
              program, and our team at BMC works relentlessly on your behalf to
              ensure that each request is well planned. From website,
              collateral, and blog content to video and television commercial
              scriptwriting, we've got you covered.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
