import React, { Component } from 'react'
import './PartnersMessage.css'
import { Typography } from '@material-ui/core'
import endpoint from '../../../../helpers/api_service'
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class PartnersMessage extends Component {
    render() {
        return (
            <div className='partners__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                    PARTNERS' MESSAGE
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/images/Slide-1.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='finance-accounting__subtitle'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='strategic-planning__heading strategic-planning__title-font'>
                                We live for our values and passion
                            </Typography>
                            <Typography className='finance-accounting__body--text'>
                                Our passion is to add value to others, Impact is our main
                                core value, Impact is a key part of our business. we are
                                and will be always- making an impact on someone’s
                                life every single day.
                            </Typography>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img' src={`${endpoint}/images/Slide-2.png`} alt='Marketing Mgmt' />
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='partners__body'>
                    <Typography className='partners__body__subtitle partners__body__subtitle--size'>
                        We challenge the status quo
                    </Typography>
                    <Typography className='partners__body__text partners__body__text--size'>
                        In a rapidly changing environment and dynamic markets. All businesses face many challenges that need
                        a practical application to adopt and remain dynamically changing as the economy and market dictate.
                        <br></br>
                        We have a team who adapt and change according to what we face in our business process.
                        <br></br>
                        We Lead the change to take your business to a whole next level.
                    </Typography>

                </div>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img' src={`${endpoint}/images/Slide-3.png`} alt='Marketing Mgmt' />
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='partners__body'>
                    <Typography className='partners__body__subtitle partners__body__subtitle--size'>
                        We have a family philosophy
                    </Typography>
                    <Typography className='partners__body__text partners__body__text--size'>
                        Our employees are our main assets, we make sure to provide them with sense of security, educational development, public awareness,
                        we also provide them all the factors of success that builds them to be the future leaders
                    </Typography>

                </div>

                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img' src={`${endpoint}/images/Slide-4.png`} alt='Marketing Mgmt' />
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='partners__body'>
                    <Typography className='partners__body__subtitle partners__body__subtitle--size'>
                        Our Promise
                    </Typography>
                    <Typography className='partners__body__text partners__body__text--size'>
                        BMC will be passionately tailoring and giving you the best service to help your business achieve
                        optimal results and maximum development.                        <br></br>
                        We believe that money is a result, not an objective, so the value you’ll receive will always
                        exceed our fees and your expectations.                        <br></br>
                    </Typography>

                </div>
                <br></br>
                <div className='partners__sig'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='partners__sig__heading--size strategic-planning__title-font'>
                                Sincerely
                            </Typography>
                            <Typography className='partners__sig__text--size'>
                                Co-partners, Partners, and Consultants.
                                <br></br>
                                Business Map Consultants.
                            </Typography>
                        </div>
                    </div>
                </div>
                <FooterTop />
            </div>
        )
    }
}
