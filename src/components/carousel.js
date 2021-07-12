import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css';
import { Typography } from '@material-ui/core';
import endpoint from '../helpers/api_service';
export default class CarouselComponenet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: this.props.items
        }
    }

    render() {
        return (
            <Carousel fade style={{ zIndex: -2 }} indicators={false} controls={false} className='carousel-root'>
                {this.state.items.map((item) => (
                    <Carousel.Item>
                        <>
                            <div className='carousel-slide-title'>
                                <Typography variant='h2' component='h2' className='carousel-slide-title-text'>
                                    {item.title}
                                </Typography>
                            </div>
                            <img
                                className="carousel-slide-img"
                                src={`${endpoint}/${item.src}`}
                                alt="First slide"
                                width="100%"
                            />
                        </>
                    </Carousel.Item>
                ))}
            </Carousel>)
    }
}
