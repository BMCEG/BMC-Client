import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';
import { Typography } from '@material-ui/core';
import endpoint from '../helpers/api_service';
export default class CarouselComponenet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      isMobile: this.props.isMobile,
    };
  }

  render() {
    return (
      <Carousel
        fade
        style={{ zIndex: -2 }}
        indicators={false}
        controls={false}
        className="carousel-root-mobile"
      >
        {this.state.items.map((item, key) => (
          <Carousel.Item key={key}>
            <div
              className="carousel-slide-title"
              style={{
                backgroundImage: `url(${endpoint}/images/${item.src})`,
                backgroundSize: 'cover',
              }}
            >
              <Typography
                variant="h3"
                component="h3"
                className="carousel-slide-title-text"
              >
                {item.title}
              </Typography>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}
