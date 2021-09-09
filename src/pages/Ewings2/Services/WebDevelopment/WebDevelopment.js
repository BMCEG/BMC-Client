import React, { Component } from 'react'
import './WebDevelopment.css';
import endpoint from '../../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import MediaQuery from 'react-responsive';
export default class WebDevelopment extends Component {
    render() {
        return (
            <div className='ewings__digitalM__root'>
                <div className='ewings__digitalM__banner'>
                    <img className='ewings__multimediaProd__banner__img' src={`${endpoint}/Web-H.png`} alt='banner' />
                    <div className='ewings__banner__title' style={{
                        backgroundImage: `url(${endpoint}/ewings-header.png)`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center'
                    }}>
                        <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                            WEB DEVELOPMENT
                        </Typography>
                    </div>
                </div>
                <div className='ewings__digitalM__body'>
                    <MediaQuery maxWidth={1050}>

                        <div className='ewings__web__inline__img--base'>
                            <img className='ewings__digitalM__body__ball__img__top-left' src={`${endpoint}/Ball.png`} alt='ball' />

                            <img src={`${endpoint}/Web-IMG-1.png`} alt='web development' className='ewings__web__inline__img' />
                        </div>
                        <br></br>
                        <div className='ewings__web__inline__text'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                WEB DEVELOPMENT:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                A website can be defined as a collection of
                                related webpages that can be accessed by
                                visiting a homepage or using a browser such
                                as Internet Explorer, Mozilla, Google Chrome,
                                or Opera.
                            </Typography>
                        </div>
                    </MediaQuery>
                    <MediaQuery minWidth={1050}>

                        <div className='ewings__web__inline'>
                            <div className='ewings__web__inline__img--base'>
                                <img className='ewings__digitalM__body__ball__img__top-left' src={`${endpoint}/Ball.png`} alt='ball' />

                                <img src={`${endpoint}/Web-IMG-1.png`} alt='web development' className='ewings__web__inline__img' />
                            </div>
                            <div className='ewings__web__inline__text'>
                                <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                    WEB DEVELOPMENT:
                                </Typography>
                                <br></br>
                                <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                    A website can be defined as a collection of
                                    related webpages that can be accessed by
                                    visiting a homepage or using a browser such
                                    as Internet Explorer, Mozilla, Google Chrome,
                                    or Opera.
                                </Typography>
                            </div>
                        </div>
                    </MediaQuery>

                    <br></br>
                    <br></br>
                    <br></br>

                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        WHY DO WE NEED WEBSITES?
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Websites serve as a conduit between individuals seeking to contribute information and others
                        seeking to absorb it. If you run a business, having a website to publicize your products and reach
                        out to potential clients on a global scale is nearly a requirement.
                    </Typography>

                    <br></br>
                    <br></br>
                    <br></br>

                    <div className='ewings__web__border--left'>
                        <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                            - A website serves as an online brochure for your business, allowing you to showcase your
                            products and services.
                            <br></br>
                            - Website Development and Design
                            <br></br>
                            - It gives you the opportunity to connect out to a global audience.
                            <br></br>
                            - If you're a blogger, you have the power to impact your audience.
                            <br></br>
                            - You can put all of your thoughts on a website and have them published.
                            <br></br>
                            - You don't have to wait if you have a company concept. You can start selling your items or
                            <br></br>
                            services online right away by opening an online store. An extra benefit is that your clients
                            will be able to shop online 24 hours a day, 7 days a week, 365 days a year.
                            <br></br>
                            - You have the ability to communicate with your customers and allow them to express themselves.
                            <br></br>
                            - A trouble-ticket system can help you give excellent customer service
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}
