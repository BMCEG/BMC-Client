import React, { Component } from 'react';
import endpoint from '../../../../helpers/api_service';
import './service.css';
import { Typography } from '@material-ui/core';

import StrategicPlan from '../../../../components/service/strategicPlan.js';
import MarketingMgmt from '../../../../components/service/marketingMgmt.js';
import HRMgmt from '../../../../components/service/hrMgmt.js';
import Finance from '../../../../components/service/financial.js';
import Toolbox from '../../../../components/service/toolbox.js';

export default class Service extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logo: this.props.logo,
      title: this.props.title,
      sideImage: this.props.sideImage,
      content: this.props.content,
    };
  }

  render() {
    return (
      <div
        className="founder-root-mobile"
        style={{
          backgroundImage: `url(${endpoint}/images/bg-founder.png)`,
          backgroundSize: 'cover',
        }}
      >
        <div className="founder-img-base-mobile">
          <img
            className="founder-img"
            src={`${endpoint}/images/${this.props.sideImage}`}
            alt="service"
          />
        </div>
        <div className="founder-text-mobile">
          <div className="service-page-title-details">
            <img
              src={`${endpoint}/images/${this.props.logo}`}
              alt="logo"
              className="service-details-icon-mobile"
            />
            <div className="service-details-name">
              <Typography variant="h4" component="h4" className="bukra-bold">
                {this.props.title}
              </Typography>
            </div>
          </div>
          <br></br>
          <div className="founder-text-msg-mobile">
            <div className="service-page-content">
              {this.props.title === 'Strategic Planning' ? (
                <StrategicPlan />
              ) : this.props.title === 'Marketing Management' ? (
                <MarketingMgmt />
              ) : this.props.title === 'Finance & Accounting' ? (
                <Finance />
              ) : this.props.title === 'Human Resources' ? (
                <HRMgmt />
              ) : this.props.title === 'BMC Tool Box' ? (
                <Toolbox />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
