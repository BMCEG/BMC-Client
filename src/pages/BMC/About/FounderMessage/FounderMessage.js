import { Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './FounderMessage.css';
import endpoint from '../../../../helpers/api_service.js';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class FounderMessage extends Component {
  render() {
    return (
      <div className="founder-message__root">
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__title">
          <Typography className="strategic-planning__heading strategic-planning__title-font ">
            FOUNDER'S MESSAGE
          </Typography>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__banner">
          <img
            className="founder-message__banner-img"
            src={`${endpoint}/images/landing-founder.png`}
            alt="Founder Message"
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__subtitle">
          <div className="strategic-planning_subtitle-border"></div>
          <div>
            <Typography className="strategic-planning__heading strategic-planning__subtitle-font ">
              <span>Welcome</span> To BMC
            </Typography>
          </div>
        </div>
        <br></br>
        <div className="strategic-planning__body">
          <Typography className="foudner-message__text">
            As you navigate our website I hope you end up with an inspired warm
            feeling, this is the same feeling that spark our existence, we are
            here to bring passion, motivation and inspiration.
          </Typography>
          <br></br>
          <Typography className="foudner-message__text">
            I hope you learn more about the qualities and values that make us a
            true business partner helping the many and proudly may help you in
            creating your business roadmap, achieving your objectives,
            guaranteeing sustainable progress and growth.
          </Typography>
          <br></br>
          <Typography className="foudner-message__text">
            We have earned the trust and respect of all people along our trip
            and we strive hard to do the right thing based on well-known
            business principles and theories with the best practice for each
            industry. We have handled many small- and large-scale projects and
            have implemented solutions for numerous organizations of all sizes
            over the years, whether you are a potential big customer or a
            startup or future employee we will dedicate all the knowledge and
            capabilities needed to support you to achieve your goal.
          </Typography>
          <br></br>
          <Typography className="foudner-message__text">
            I hope you enjoy our website as we will enjoy your warm visit.
          </Typography>
          <br></br>
          <br></br>
          <img
            className="founder-message__sig"
            src={`${endpoint}/images/signature.png`}
            alt="sig"
          />
          <Typography className="foudner-message__text">
            Mohamed Nasr,
          </Typography>
          <Typography className="foudner-message__text">
            Co-founder and CEO,
          </Typography>
          <Typography className="foudner-message__text">
            Business Map Consultants.
          </Typography>
        </div>
        <br></br>
        <FooterTop />
      </div>
    );
  }
}
