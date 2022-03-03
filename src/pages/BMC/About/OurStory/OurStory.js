import React, { Component } from 'react';
import './OurStory.css';
import { Typography } from '@material-ui/core';
import StoryBalls from '../../../../components/BMC/OurStory/storyBalls';

export default class OurStory extends Component {
  render() {
    return (
      <div className="ourStory__root">
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
        <div className="ourStory__balls__canvas">
          <StoryBalls />
        </div>
      </div>
    );
  }
}
