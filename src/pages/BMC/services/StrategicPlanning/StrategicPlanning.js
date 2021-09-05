
import React, { Component } from 'react';
import './StrategicPlanning.css';
import endpoint from '../../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';

export default class StrategicPlanning extends Component {
    render() {
        return (
            <div className='strategic-planning__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        Strategic Planning
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/SP-H.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <div className='strategic-planning__subtitle'>
                    <div className='strategic-planning_subtitle-border'></div>
                    <div>
                        <Typography className='strategic-planning__heading strategic-planning__subtitle-font '>
                            What is
                        </Typography>
                        <Typography className='strategic-planning__heading strategic-planning__subtitle-font '>
                            Strategic
                        </Typography>
                        <Typography className='strategic-planning__heading strategic-planning__subtitle-font '>
                            Planning?
                        </Typography>
                    </div>
                </div>
                <br></br>
                <div className='strategic-planning__body'>
                    <Typography className='strategic-planning__body--text'>
                        Strategic planning is the process of documenting
                        and setting a business strategy by examining
                        where you are now and where you want to go in
                        the future. It entails taking a step back from your
                        tasks and considering where your company is
                        headed and what its purpose should be. When a
                        company is just getting established, strategic
                        planning is essential for the business to improve
                        and come out with their goals and objectives
                    </Typography>
                </div>
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img' src={`${endpoint}/SP-2.png`} alt='Marketing Mgmt' />
                    <Typography className='toolbox__banner__caption toolbox__banner__caption--font toolbox__header--font--size'>
                        Why do we need strategic planning?

                    </Typography>
                    <div className='toolbox__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='strategic-planning__body'>
                    <Typography className='strategic-planning__body--text'>
                        Strategic planning puts your company on the right track. It will also assist it in improving its
                        effort in order to achieve your company's aims. As a result, strategic planning can assist your
                        company in developing the appropriate goals and objectives, as well as assisting the team in focusing more on their objectives in order to achieve them.
                    </Typography>
                    <Typography className='strategic-planning__body--text'>
                        BMC has the aim to provide professional consultancy and assistance for your business in the
                        analysis, conception, and formulation of strategies & plans along with the development of the
                        implementation framework that assure client’s sustained survival and long-term growth & profitability.                    </Typography>
                </div>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <div className='strategic-planning__body_canvas'>
                        <Typography className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                            BMC will be responsible for the formulation of your :
                        </Typography>
                        <Typography className='strategic-planning__body--text strategic-planning__body--text--card'>
                            · Vision
                            <br></br>
                            · Mission
                            <br></br>
                            · Core values
                            <br></br>
                            · Goals
                            <br></br>
                            · Objectives
                            <br></br>
                            · Corporate strategies & plans
                            <br></br>
                            · Business strategies & plans
                            <br></br>
                            · Functional strategies & plans
                            <br></br>
                            · Organization development and strengthening
                            <br></br>
                            · Culture, structure, systems, people, facilities & other resources
                        </Typography>

                    </div>
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img--ta7t' src={`${endpoint}/SP-marketing.png`} alt='Marketing Mgmt' />
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <FooterTop />

            </div>
        )
    }
}
