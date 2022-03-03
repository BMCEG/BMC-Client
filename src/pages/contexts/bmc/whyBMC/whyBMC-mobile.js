import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import './whyBMC.css';
import endpoint from '../../../../helpers/api_service';

export default class whyBMC extends Component {
  render() {
    return (
      <div
        className="whyBMC-root"
        style={{
          backgroundImage: `url(${endpoint}/images/bg-our-story.png)`,
          backgroundSize: 'cover',
        }}
      >
        <div className="whyBMC-page-margin">
          <div className="whyBMC-card-mobile">
            <div className="whyBMC-subtitle">
              <Typography variant="h5" component="h5" className="bukra-bold">
                Outside & Unbiased Eye
              </Typography>
            </div>
            <br></br>
            <div className="whyBMC-body">
              <Typography variant="h6" component="h6" className="bukra-regular">
                BMC worked with many different companies and we passed through
                many different challenges and issues, now we can provide
                accurate perspectives and solutions based on academic and
                practical background.
              </Typography>
            </div>
          </div>
          <div className="whyBMC-card-mobile">
            <div className="whyBMC-subtitle">
              <Typography variant="h5" component="h5" className="bukra-bold">
                An Extra Horsepower
              </Typography>
            </div>
            <br></br>
            <div className="whyBMC-body">
              <Typography variant="h6" component="h6" className="bukra-regular">
                One of the best comments we received from our clients is that we
                are considered as an extra horsepower for their business and
                that is what keeps us going in expanding our business. We hire
                highly skilled and educated employees, and due to us always
                switching around different companies, our learning curve is
                moving very fast compared to other companies.
              </Typography>
            </div>
          </div>
          <div className="whyBMC-card-mobile">
            <div className="whyBMC-subtitle">
              <Typography variant="h5" component="h5" className="bukra-bold">
                A Catalyst for Change
              </Typography>
            </div>
            <br></br>
            <div className="whyBMC-body">
              <Typography variant="h6" component="h6" className="bukra-regular">
                When it comes to change everyone resists, BMC’s magic role when
                companies are trying to institute change, we have the ability to
                face resistance and enforce change; we act as your changing
                leader.
              </Typography>
            </div>
          </div>
          <div className="whyBMC-card-mobile">
            <div className="whyBMC-subtitle">
              <Typography variant="h5" component="h5" className="bukra-bold">
                Specialized Skills
              </Typography>
            </div>
            <br></br>
            <div className="whyBMC-body">
              <Typography variant="h6" component="h6" className="bukra-regular">
                The main reason that companies hire us is to gain full access to
                a specialized skill set that might not exist in house. You get
                access to a group of professionals that have skills and
                capabilities. BMC might not have enough work to keep said
                employees busy all year; we bring them in house when needed.
              </Typography>
            </div>
          </div>
          <div className="whyBMC-card-mobile">
            <div className="whyBMC-subtitle">
              <Typography variant="h5" component="h5" className="bukra-bold">
                A Safe Zone
              </Typography>
            </div>
            <br></br>
            <div className="whyBMC-body">
              <Typography variant="h6" component="h6" className="bukra-regular">
                We provide you services with a safe zone where you can apply a
                new decision or take necessary actions for your business issue.
                BMC provides you with back-up plans and confirmation for your
                business when attempting to run a new idea.
              </Typography>
            </div>
          </div>
          <div className="whyBMC-card-mobile">
            <div className="whyBMC-subtitle">
              <Typography variant="h5" component="h5" className="bukra-bold">
                Training and Coaching
              </Typography>
            </div>
            <br></br>
            <div className="whyBMC-body">
              <Typography variant="h6" component="h6" className="bukra-regular">
                Your employees are your main assets, they should be well trained
                and skilled and fully loaded with all the needed knowledge,
                awareness and skills. Keep them up to date with all new
                discoveries in their field and industry.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
