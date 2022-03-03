import React, { Component } from 'react';
import './ourStory.css';
import '../../../BMC/services/StrategicPlanning/StrategicPlanning.css';
import StoryBalls from '../../../../components/BMC/OurStory/storyBalls';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top';
export default class ourStory extends Component {
  render() {
    return (
      <div className="ourStory-root">
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__title">
          <Typography className="strategic-planning__heading strategic-planning__title-font ">
            OUR STORY
          </Typography>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="ourStory-balls">
          <StoryBalls />
        </div>
        <FooterTop />
      </div>
    );
  }
}
