import React, { Component } from 'react'
import './DigitalMarketing.css'
import { Typography } from '@material-ui/core'
import MediaQuery from 'react-responsive'
import endpoint from '../../../../helpers/api_service'
export default class DigitalMarketing extends Component {
    render() {
        return (
            <div className='ewings__digitalM__root'>
                <div className='ewings__digitalM__banner'>
                    <img className='ewings__digitalM__banner__img' src={`${endpoint}/images/DigitalM-Header.png`} alt='banner' />
                    <div className='ewings__banner__title' style={{
                        backgroundImage: `url(${endpoint}/imagesewings-header.png  )`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center'
                    }}>

                        <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                            DIGITAL MARKETING
                        </Typography>
                    </div>
                </div>
                <div className='ewings__digitalM__body'>
                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        DIGITAL MARKETING:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        All marketing initiatives that involve an electronic device or the internet are referred to as digital
                        marketing. To engage with present and potential customers, businesses use digital channels such
                        as search engines, social media, email, and their websites. Digital marketing has become a new
                        trend in recent years, combining customisation and wide distribution to reach marketing objectives.
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        The main benefit of digital marketing is that it allows you to contact a specific audience in a
                        cost-effective and measurable manner. In addition, digital marketing improves brand loyalty and
                        boosts online sales.
                    </Typography>
                    <br></br>
                    <MediaQuery minWidth={1050}>

                        <div className='ewings__digitalM__body__inline'>
                            <div className='ewings__digitalM__body__inline__img--base'>
                                <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/images/DigitalM-IMG-1.png`} alt='digital marketing' />
                                <img className='ewings__digitalM__body__ball__img__bottom-left' src={`${endpoint}/images/Ball.png`} alt='ball' />
                            </div>
                            <div className='ewings__digitalM__body__inlline__text--base'>
                                <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                    <br></br>
                                    - Global reach
                                    <br></br>
                                    - Lower cost & Apparent Pricing
                                    <br></br>
                                    - Track able, measurable results
                                    <br></br>
                                    - Personalization
                                    <br></br>
                                    - Openness
                                    <br></br>
                                    - Social currency
                                    <br></br>
                                    - Improves conversion rates
                                    <br></br>
                                    - Shopping
                                    {/* <br></br> */}
                                </Typography>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                        <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/images/DigitalM-IMG-1.png`} alt='digital marketing' />
                        <img className='ewings__digitalM__body__ball__img__bottom-left' src={`${endpoint}/images/Ball.png`} alt='ball' />
                        <div className='ewings__digitalM__body__inlline__text--base--mob'>
                            <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                - Global reach
                                <br></br>
                                - Lower cost & Apparent Pricing
                                <br></br>
                                - Track able, measurable results
                                <br></br>
                                - Personalization
                                <br></br>
                                - Openness
                                <br></br>
                                - Social currency
                                <br></br>
                                - Improves conversion rates
                                <br></br>
                                - Shopping
                                {/* <br></br> */}
                            </Typography>
                        </div>
                    </MediaQuery>
                    <br></br>
                    <hr className='ewings__service__hr'></hr>
                    <br></br>
                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        DIGITAL MARKETING PLAN:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        A digital marketing plan is a tactical document that examines a company's current status in order
                        to set certain midterm objectives and determine the strategy and methods for achieving them.
                        This paper outlines the roles and responsibilities, as well as the time frame and monitoring tools.
                        Discussing organizations and their environments is one of the goals of a digital marketing strategy.
                        It should also serve as a roadmap for managing the organization's marketing plan so that resources
                        are correctly allocated. The plan also aids in the control and evaluation of output, as well as the
                        management of any potential deviations from the organization's planned outcomes.
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        In this context, a marketing strategy becomes a flexible document that must be adjusted to the
                        company's position and feed into the outcomes of each of the actions taken, particularly in the digital realm. The following are the steps in developing a digital marketing strategy:
                    </Typography>
                    <br></br>
                    <MediaQuery minWidth={1050}>
                        <div className='ewings__digitalM__body__inline'>
                            <div className='ewings__digitalM__body__inline__img--base'>
                                <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/images/DigitalM-IMG-2.png`} alt='digital marketing' />
                                <img className='ewings__digitalM__body__ball__img__bottom-right' src={`${endpoint}/images/Ball.png`} alt='ball' />
                            </div>
                            <div className='ewings__digitalM__body__inlline__text--base'>
                                <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                    <br></br>
                                    1. Situation Analysis
                                    <br></br>
                                    2. Goal Definition
                                    <br></br>
                                    3. Strategy
                                    <br></br>
                                    4. Action & Control
                                </Typography>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                        <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/images/DigitalM-IMG-2.png`} alt='digital marketing' />
                        <img className='ewings__digitalM__body__ball__img__bottom-right' src={`${endpoint}/images/Ball.png`} alt='ball' />
                        <div className='ewings__digitalM__body__inlline__text--base--mob'>
                            <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                1. Situation Analysis
                                <br></br>
                                2. Goal Definition
                                <br></br>
                                3. Strategy
                                <br></br>
                                4. Action & Control
                            </Typography>
                        </div>

                    </MediaQuery>
                    <br></br>
                    <hr className='ewings__service__hr'></hr>
                    <br></br>
                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        ASPECTS OF DIGITAL MARKETING:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Digital marketing nowadays is based on the sorts of audience communications. The following are
                        digital marketing services that revolve around controlling and leveraging various forms of digital
                        marketing channels.
                    </Typography>
                    <br></br>
                    <MediaQuery minWidth={1050}>

                        <div className='ewings__digitalM__body__inline'>
                            <div className='ewings__digitalM__body__inline__img--base'>
                                <img className='ewings__digitalM__body__ball__img__top-left' src={`${endpoint}/images/Ball.png`} alt='ball' />
                                <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/images/DigitalM-IMG-3.png`} alt='digital marketing' />
                            </div>
                            <div className='ewings__digitalM__body__inlline__text--base'>
                                <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                    <br></br>
                                    <br></br>
                                    - Search Engine Marketing & PPC
                                    <br></br>
                                    - Pay Per Click (PPC)
                                    <br></br>
                                    - Seach Engine Optimization (SEO)
                                    <br></br>
                                    - Social Media Marketing (SMM)
                                    <br></br>
                                    - Email Marketing
                                    <br></br>
                                    - Content Marketing
                                    <br></br>
                                    - Web Analytics

                                </Typography>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                        <img className='ewings__digitalM__body__ball__img__top-left' src={`${endpoint}/images/Ball.png`} alt='ball' />
                        <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/images/DigitalM-IMG-3.png`} alt='digital marketing' />
                        <div className='ewings__digitalM__body__inlline__text--base--mob'>
                            <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                <br></br>
                                - Search Engine Marketing & PPC
                                <br></br>
                                - Pay Per Click (PPC)
                                <br></br>
                                - Seach Engine Optimization (SEO)
                                <br></br>
                                - Social Media Marketing (SMM)
                                <br></br>
                                - Email Marketing
                                <br></br>
                                - Content Marketing
                                <br></br>
                                - Web Analytics

                            </Typography>
                        </div>

                    </MediaQuery>


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
