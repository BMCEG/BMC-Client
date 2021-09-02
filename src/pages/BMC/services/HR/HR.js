import { Typography } from '@material-ui/core'
import React, { Component } from 'react'
import './HR.css'
import endpoint from '../../../../helpers/api_service'
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class HR extends Component {
    render() {
        return (
            <div className='hr__root'>
                <br></br>
                <br></br>
                <div className='hr__title'>
                    <Typography className='hr__title--font hr__heading'>
                        HR Management
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <div className='hr__body'>
                    <Typography className='hr__body--text'>
                        BMC provides Human Resources services in support of your company’s vision, mission, and values
                        by supporting the concept that employees are the most valuable resource we have.
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <div className='finance-accounting__banner'>
                    <img className='hr__banner-img' src={`${endpoint}/hr-header.png`} alt='Marketing Mgmt' />
                </div>
                {/* <br></br> */}
                <br></br>
                <div className='hr__body'>
                    <Typography className='hr__title--font hr__body--subtitle'>
                        BMC provides Human Resources services in support of your company’s vision, mission, and values
                        by supporting the concept that employees are the most valuable resource we have:
                    </Typography>
                    {/* <br></br> */}
                    <Typography className='hr__body--text'>
                        · Recruitment
                    <br></br>
                        · Organizational Development
                    <br></br>
                        · Personnel Management
                    <br></br>
                        · Performance Management
                    <br></br>
                        · Training and Development
                    </Typography>
                </div>
                <br></br>
                <FooterTop />

            </div>
        )
    }
}
