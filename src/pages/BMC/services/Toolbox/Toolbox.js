import React, { Component } from 'react'
import './Toolbox.css';
import endpoint from '../../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../../components/BMC/Footer/Footer-Top.js';


export default class Toolbox extends Component {
    render() {
        return (
            <div className='toolbox__root'>
                <br></br>
                <div className='toolbox__header'>
                    <Typography className='toolbox__header--font toolbox__header--font--size'>
                        BMC Toolbox
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/BMCTB-H.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <div className='finance-accounting__subtitle'>
                    <div className='toolbox__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='toolbox__header--font toolbox__subtitle--size'>
                                Feasibility Study
                            </Typography>
                            <Typography className='finance-accounting__body--text'>
                                Feasibility study is an assessment tool to assess the
                                viability of a new proposed project or a plan.
                                You do it before spending money or time or effort.
                                It is to find the answers of many questions:
                                <br></br>
                                · Is this project or plan doable?
                                <br></br>
                                · How can I start?
                                <br></br>
                                · What are the required resources and technologies?
                                <br></br>
                                · Is it profitable? Is there a demand? How much risk do
                                you encounter?                            </Typography>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img' src={`${endpoint}/BMCTB-2.png`} alt='Marketing Mgmt' />
                    <Typography className='toolbox__banner__caption toolbox__banner__caption--font toolbox__header--font--size'>
                    What is a Feasibility Study?
                    </Typography>
                    <div className='toolbox__body__img__border-right'></div>
                </div>
                {/* <br></br> */}
                <div className='strategic-planning__body'>
                    <Typography className='strategic-planning__body--text'>
                        The proposed project or plan initially started with an Idea, after Idea validation, through conducting an initial informal investigation and assessment, you may conduct a formal assessment
                        like a prefeasibility study to investigate various aspects of the proposed project or plan, this
                        may eliminate scenarios/models or identifying new ones.
                        <br></br>
                        By doing this you now are able to conduct the comprehensive feasibility study to your refined
                        proposed project or plan for a comprehensive and detailed study covering all business areas.
                    </Typography>
                </div>
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <div className='strategic-planning__body_canvas'>
                        <Typography className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                            Why do you need to conduct a feasibility study?
                        </Typography>
                        <Typography className='strategic-planning__body--text strategic-planning__body--text--card'>
                            · To save money, time and effort before wasting them on not sure project/plan
                            <br></br>
                            · Provide a clear and whole view of the proposed project / plan
                            <br></br>
                            · Enhance the success rate of the proposed project / plan
                            <br></br>
                            · Provide quality information and answers needed for the decision-making process.
                            <br></br>
                            · Narrow business alternatives and seize the options gap.
                            <br></br>
                            · You may need to attract equity investments or funding from banks.
                            <br></br>
                            <br></br>
                            · You should have a clearly defined outline of one or more alternative business models or
                            scenarios that you want to explore its feasibility.
                            <br></br>
                            · Sure, you don’t want to spend your feasibility money investigating ideas that you can determine are not feasible by just making a few phone calls.
                            <br></br>
                            · Do not start with a previously taken decision, Feasibility is not to hear what you want to
                            hear, you need an accurate assessment of the feasibility of the proposed project / plan
                            based on primary data received from surveys and research studies.
                            <br></br>
                            · Comprehensive and accurate Feasibility study is not cheap, Time and money spent in
                            choosing and hiring a good consultant is an important investment that will return on later.
                            <br></br>
                            · Never blindly follow feasibility templates, please investigate and hire consultants who are
                            familiar with your type of business and experienced in preparing feasibility studies.
                            <br></br>
                            · Following any business principles doesn’t guarantee business success, however it increases the chances of success. The basic premise of a feasibility study is to determine the potential for success, or viability, of a proposed project / plan.
                            <br></br>
                            · The feasibility study is a critical step in the business assessment process. If properly conducted, it may be the best investment you ever made
                        </Typography>

                    </div>


                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <img className='strategic-planning__img' src={`${endpoint}/BMCTB-Ta7t.png`} alt='Marketing Mgmt' />
                    <Typography className='toolbox__banner__caption toolbox__banner__caption--font toolbox__header--font--size'>
                        Typical Feasibility study outline
                    </Typography>
                    <div className='toolbox__body__img__border-right'></div>
                </div>
                {/* <br></br> */}
                <div className='strategic-planning__body'>
                    <Typography className='strategic-planning__body--text'>
                        BMC offers a wide range of studies and analysis such as, Market studies, technical studies, financial & economical analysis and sensitivity analysis are the typical factors to cover in building
                        a feasibility study for your business. Moreover, a well-done comprehensive feasibility study is
                        based on the careful identification and assessment of all of the issues important to your specific project or idea. However, this may not be a complete listing of the factors that should be considered in your specific situation.

                    </Typography>
                </div>
                <FooterTop />

            </div>
        )
    }
}
