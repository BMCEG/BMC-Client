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
                {this.state.items.map((item, key) => (
                    <Carousel.Item key={key}>
                        <>
                            <div className='carousel-slide-title' style={{backgroundImage: `url(${endpoint}/${item.src})`, backgroundSize: 'cover' }}>
                                <Typography variant='h2' component='h2' className='carousel-slide-title-text'>
                                    {item.title}
                                </Typography>
                            </div>
                            {/* <div className='carousel-slide-img-base'>
                                <img
                                    className="carousel-slide-img"
                                    src={`${endpoint}/${item.src}`}
                                    alt="First slide"
                                    width="100%"
                                />
                            </div> */}
                        </>
                    </Carousel.Item>
                ))}
            </Carousel>)
    }
}
