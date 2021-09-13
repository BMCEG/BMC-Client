import React, { Component } from 'react';
import './Finance.css';
import endpoint from '../../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class Finance extends Component {
    render() {
        return (
            <div className='finance-accounting__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='finance-accounting__heading finance-accounting__title-font '>
                        Finance & Accounting
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='finance-accounting__banner'>
                    <img className='finance-accounting__banner-img' src={`${endpoint}/images/FA-H.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='finance-accounting__subtitle'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='finance-accounting__body--text'>
                                BMC’s Financial Management division has the
                                aim to provide your company a full range of past
                                and future comprehensive high quality services
                                with a modern and practical approach in several
                                fields.
                            </Typography>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className='finance-accounting__img--base'>
                    <div className='finance-accounting__body__img__border-left'>

                    </div>
                    <div className='finance-accounting__body_canvas'>
                        <Typography className='finance-accounting__body--text finance-accounting__body--text--card'>
                            · Accounting & bookkeeping
                            <br></br>
                            · Business start-up
                            <br></br>
                            · Due diligence
                            <br></br>
                            · Cash management
                            <br></br>
                            · Internal audit function
                            <br></br>
                            · Budgeting & forecasting
                            <br></br>
                            · Internal process & Internal control system designation
                            <br></br>
                            · Financial Analysis & Projects Evaluation
                        </Typography>

                    </div>
                    <div className='finance-accounting__body__img__border-right'></div>
                </div>
                <br></br>
                <FooterTop />

            </div>
        )
    }
}
