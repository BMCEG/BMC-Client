import { Grid } from '@material-ui/core'
import React from 'react';
import './default.css';
import Carousel from '../../../components/carousel.js'

export default function defaultPage() {
    let carouselItems = [
        {
            title: '1',
            src: 'http://meera-enterprises.com.ph/wp-content/uploads/2014/05/placeholder-red.png'
        },
        {
            title: '2',
            src: 'http://meera-enterprises.com.ph/wp-content/uploads/2014/05/placeholder-blue.png'
        },
        {
            title: '3',
            src: 'http://meera-enterprises.com.ph/wp-content/uploads/2014/05/placeholder-green.png'
        }
    ]

    return (
        <div className="default-root">
            <h1>Welcome to Digital Map</h1>

            <div className="carousel">
                <Carousel items={carouselItems} />
            </div>
            <Grid container className="banner-grid">
                <Grid item xs={6}>
                    <h2>Lorem Ipsum</h2>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pharetra nibh. Morbi id urna hendrerit, placerat dui ut, convallis orci. Duis commodo nulla faucibus erat dictum, nec bibendum massa rutrum. Quisque ullamcorper tincidunt arcu, eget efficitur elit eleifend non. Duis id semper magna. Etiam pretium malesuada fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
                    </h4>
                </Grid>
                <Grid item xs={6} className='banner-photo'>
                    <img src='https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png' height="100%" alt='placeholder' />
                </Grid>
            </Grid>
        </div>
    )
}
