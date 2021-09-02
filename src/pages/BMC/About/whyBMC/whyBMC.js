import React, { Component } from 'react'
import endpoint from '../../../../helpers/api_service'
import './whyBMC.css';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class whyBMC extends Component {
    render() {
        return (
            <div className='whybmc__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        WHY BMC?
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/whybmc-h.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='whybmc__service--top' />
                <div className='whybmc__service--row'>
                    <img src={`${endpoint}/whybmc-1.png`} alt='service' className='whybmc__service--img' />
                    <div className='whybmc__service--info'>
                        <Typography className='whybmc__service--header whybmc__heading'>
                            Outside & Unbiased Eye
                        </Typography>
                        <br></br>
                        <Typography className='whybmc__service--body whybmc__body--text'>
                            BMC worked with many different companies and
                            we passed through many different challenges
                            and issues, now we can provide accurate
                            perspectives and solutions based on academic
                            and practical background.
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='whybmc__service--top' />
                <div className='whybmc__service--row'>
                    <img src={`${endpoint}/whybmc-2.png`} alt='service' className='whybmc__service--img' />
                    <div className='whybmc__service--info'>
                        <Typography className='whybmc__service--header whybmc__heading'>
                            Specialized Skills
                        </Typography>
                        <br></br>
                        <Typography className='whybmc__service--body whybmc__body--text'>
                            The main reason that companies hire us is to gain
                            full access to a specialized skill set that might not
                            exist in house. You get access to a group of
                            professionals that have skills and capabilities.
                            BMC might not have enough work to keep said
                            employees busy all year; we bring them in house
                            when needed.
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='whybmc__service--top' />
                <div className='whybmc__service--row'>
                    <img src={`${endpoint}/whybmc-3.png`} alt='service' className='whybmc__service--img' />
                    <div className='whybmc__service--info'>
                        <Typography className='whybmc__service--header whybmc__heading'>
                            Training and Coaching
                        </Typography>
                        <br></br>
                        <Typography className='whybmc__service--body whybmc__body--text'>
                            Your employees are your main assets, they should
                            be well trained and skilled and fully loaded with
                            all the needed knowledge, awareness and skills.
                            Keep them up to date with all new discoveries
                            in their field and industry.
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='whybmc__service--top' />
                <div className='whybmc__service--row'>
                    <img src={`${endpoint}/whybmc-4.png`} alt='service' className='whybmc__service--img' />
                    <div className='whybmc__service--info'>
                        <Typography className='whybmc__service--header whybmc__heading'>
                            A Catalyst for Change
                        </Typography>
                        <br></br>
                        <Typography className='whybmc__service--body whybmc__body--text'>
                            When it comes to change everyone resists,
                            BMC’s magic role when companies are trying
                            to institute change, we have the ability to face
                            resistance and enforce change; we act as your
                            changing leader.
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='whybmc__service--top' />
                <div className='whybmc__service--row'>
                    <img src={`${endpoint}/whybmc-5.png`} alt='service' className='whybmc__service--img' />
                    <div className='whybmc__service--info'>
                        <Typography className='whybmc__service--header whybmc__heading'>
                            A Safe Zone
                        </Typography>
                        <br></br>
                        <Typography className='whybmc__service--body whybmc__body--text'>
                            We provide you services with a safe zone where you
                            can apply a new decision or take necessary actions
                            for your business issue. BMC provides you with
                            back-up plans and confirmation for your business
                            when attempting to run a new idea.
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='whybmc__service--top' />
                <div className='whybmc__service--row'>
                    <img src={`${endpoint}/whybmc-6.png`} alt='service' className='whybmc__service--img' />
                    <div className='whybmc__service--info'>
                        <Typography className='whybmc__service--header whybmc__heading'>
                            An Extra Horsepower
                        </Typography>
                        <br></br>
                        <Typography className='whybmc__service--body whybmc__body--text'>
                            One of the best comments we received from our
                            clients is that we are considered as an extra
                            horsepower for their business and that is what
                            keeps us going in expanding our business.
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <FooterTop />
            </div>
        )
    }
}
