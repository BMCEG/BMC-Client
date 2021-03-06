import React, { Component } from 'react';
import './careerOpenings.css';
import endpoint from '../../../../helpers/api_service.js';
import axios from 'axios';
import OpeningMob from '../../../../components/careers/opening-mobile';

export default class CareerOpenings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openings: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${endpoint}/jobs/`)
      .then((res) => {
        this.setState({
          openings: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div
        className="career-opening-root-mob"
        style={{
          backgroundImage: `url(${endpoint}/images/bg-our-story.png)`,
          backgroundSize: 'cover',
        }}
      >
        {this.state.openings.map((opening) => (
          <OpeningMob opening={opening} />
        ))}
      </div>
    );
  }
}
