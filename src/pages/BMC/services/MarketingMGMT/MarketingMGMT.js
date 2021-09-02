import React, { Component } from 'react';
import './MarketingMGMT.css';
import { Typography } from '@material-ui/core';
import endpoint from '../../../../helpers/api_service';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class MarketingMGMT extends Component {
    render() {
        return (
            <div className='marketing-mgmt__root'>
                <br></br>
                <div className='marketing-mgmt__title'>
                    <Typography className='marketing-mgmt__heading marketing-mgmt__title-font '>
                        Marketing Management
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <div className='marketing-mgmt__banner'>
                    <img className='marketing-mgmt__banner-img' src={`${endpoint}/marketing-header.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='marketing-mgmt__subtitle'>
                    <div className='marketing-mgmt_subtitle-border'></div>
                    <div>
                        <Typography className='marketing-mgmt__heading marketing-mgmt__subtitle-font '>
                            What is
                        </Typography>
                        <Typography className='marketing-mgmt__heading marketing-mgmt__subtitle-font '>
                            Marketing
                        </Typography>
                        <Typography className='marketing-mgmt__heading marketing-mgmt__subtitle-font '>
                            Management?
                        </Typography>
                    </div>
                </div>
                <br></br>
                <div className='marketing-mgmt__body'>
                    <Typography className='marketing-mgmt__body--text'>
                        Marketing management is the processes, activity, and set of organizations for delivering, creating,
                        exchanging, and communicating, offerings that have worth for customers, partners, clients, and society as a whole.Furthermore, marketing management is also the organizational direction, which focuses on the real application of marketing techniques, alignment, and approaches inside companies and organizations.
                    </Typography>
                </div>
                <br></br>
                <div className='marketing-mgmt__img--base'>
                    <div className='marketing-mgmt__body__img__border-left'></div>
                    <img className='marketing-mgmt__img' src={`${endpoint}/strategic-img.jpeg`} alt='Marketing Mgmt' />
                    <Typography className='toolbox__banner__caption toolbox__banner__caption--font toolbox__header--font--size'>
                        Why is marketing management important?
                    </Typography>
                    <div className='toolbox__body__img__border-right'></div>
                </div>

                <br></br>
                <div className='marketing-mgmt__body'>
                    <Typography className='marketing-mgmt__body--text'>
                        Marketing management is critical to a company's success because it identifies the most effective
                        strategies to reach out to customers and increase sales. To be competitive in their field, businesses need excellent marketing tactics to attract new consumers and retain existing ones.                    </Typography>
                </div>
                <br></br>
                <div className='marketing-mgmt__subtitle'>
                    <div className='marketing-mgmt_subtitle-border'></div>
                    <div>
                        <Typography className='marketing-mgmt__heading marketing-mgmt__subtitle-font '>
                            When Do
                        </Typography>
                        <Typography className='marketing-mgmt__heading marketing-mgmt__subtitle-font '>
                            We Need
                        </Typography>
                        <Typography className='marketing-mgmt__heading marketing-mgmt__subtitle-font '>
                            Marketing Management?
                        </Typography>
                    </div>
                </div>
                <br></br>
                <div className='marketing-mgmt__body'>
                    <Typography className='marketing-mgmt__body--text'>
                        Marketing management has become more important as a result of increased competition and the
                        need for better distribution techniques to cut costs and increase revenues. Today, the most crucial
                        function in a commercial or business firm is marketing management.
                    </Typography>
                    <Typography className='marketing-mgmt__body--text'>
                        BMC provides the application, tracking and review of a company’s marketing resources and activities, Our effective marketing management aims to create demand on the client’s products and services, then ensure the targeted consumer segments. BMC focuses on creating the best strategies
                        for product development, pricing, promotion, and distribution.
                    </Typography>
                    <Typography className='marketing-mgmt__body--text'>
                        Our marketing management service is designed for our clients to encounter all the basic challenges in their industry:
                    </Typography>
                    <Typography className='marketing-mgmt__body--text'>
                        What is the company’s sales strategy?
                    </Typography>
                    <Typography className='marketing-mgmt__body--text'>
                        Which customers and markets to target? and the best means of reaching them?
                    </Typography>
                </div>
                <br></br>
                <FooterTop />

            </div>
        )
    }
}
