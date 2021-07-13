import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import './default.css';
// import "react-responsive-carousel/lib/stylesx/carousel.min.css";
import Carousel from 'react-elastic-carousel';
import CarouselComp from '../../../components/carousel-mobile'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service.js';
// import Carousel from "react-multi-carousel";

export default class DefaultPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners: [],
            breakPoints: [
                { width: 1, itemsToShow: 3 },
                { width: 500, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 4 },
            ],
            carouselItems: [
                {
                    title: 'Goal Oriented',
                    src: 'carousel1.png'
                },
                {
                    title: 'Marketing Masters',
                    src: 'carousel2.png'
                },
                {
                    title: 'Efficiency in Every Path',
                    src: 'carousel3.png'
                }
            ]
        }
    }

    componentDidMount = async () => {
        await axios.get(`${endpoint}/partners`)
            .then((res) => {
                this.setState({
                    partners: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className="default-root">
                <div className="carousel-canvas-mobile">
                    <CarouselComp isMobile={true} items={this.state.carouselItems} />
                </div>
                {/* <br></br> */}
                <div className="page-margin-mobile">
                    <div className='banner-grid-mobile'>
                        <div className='banner-text-mobile'>
                            <h5 className='bukra-bold'>Who Are We?!</h5>
                            <h6 className='bukra-regular'>We are experts in such broad business tools as Strategic audit, Feasibility studies, research and analysis, Business strategies - Internal business processes – Business development, book keeping, financial audits, Business Manuals, Digital transformation, training courses, among other custom-tailored services.</h6>
                        </div>
                        <div className="banner-photo-base-mobile">
                            <img
                                className="banner-photo-mobile"
                                alt="howItWorks"
                                src={`${endpoint}/logo.png`}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <Carousel
                    breakPoints={this.state.breakPoints}
                    enableMouseSwipe={true}
                    enableAutoPlay={true}
                    disableArrowsOnEnd={true}
                    // isRTL={true}
                    className="home-partners"
                    pagination={false}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={4500}
                >
                    {this.state.partners.map((partner) => (
                        <div className='home-partner'>
                            <Button variant='link' href='/partners'>
                                <img src={`${endpoint}/${partner.logo}`} height='60px' />
                            </Button>
                        </div>
                    ))}
                </Carousel>
                <br></br>
                {/* <div className="page-margin"> */}
                <Grid container className='home-services-grid'>
                    <Grid item xs={6}>
                        <div className="home-service-mobile">
                            <div className='home-service-icon-base-mobile'>
                                <img className='home-service-icon-mobile' src={`${endpoint}/service-strategic-planning-black.png`} />
                            </div>
                            <div className='home-service-text-mobile'>
                                <h5 className='bukra-bold'>Strategic Plan</h5>
                                <h6 className='bukra-regular'>BMC has the aim to provide professional counsel, and plans along with the development of the implementation framework that assure client’s long-term growth.</h6>
                            </div>

                            <div style={{ textAlign: 'right', paddingTop: '20px' }}>

                                <Button variant='danger' href='/services/strategic'>Read More</Button>
                            </div>
                        </div>
                        <div className="home-service-mobile">
                            <div className='home-service-icon-base-mobile'>
                                <img className='home-service-icon-mobile' src={`${endpoint}/service-hr-black.png`} />
                            </div>
                            <div className='home-service-text-mobile'>
                                <h5 className='bukra-bold'>HR Management</h5>
                                <h6 className='bukra-regular'>We provide Human Resources service promoting the concept that employees are the most valuable resource and will be treated as such.</h6>
                            </div>

                            <div style={{ textAlign: 'right', paddingTop: '20px' }}>

                                <Button variant='danger' href='/services/hr'>Read More</Button>
                            </div>
                        </div>
                        <div className="home-service-mobile">
                            <div className='home-service-icon-base-mobile'>
                                <img className='home-service-icon-mobile' src={`${endpoint}/service-toolbox-black.png`} />
                            </div>
                            <div className='home-service-text-mobile'>
                                <h5 className='bukra-bold'>BMC Tool Box</h5>
                                <h6 className='bukra-regular'>We are often engaged to provide Custom-tailored solutions that meet the needs of your particular organization.</h6>
                            </div>

                            <div style={{ textAlign: 'right', paddingTop: '20px' }}>

                                <Button variant='danger' href='/services/toolbox'>Read More</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="home-service-mobile">
                            <div className='home-service-icon-base-mobile'>
                                <img className='home-service-icon-mobile' src={`${endpoint}/service-marketing-mgmt-black.png`} />
                            </div>
                            <div className='home-service-text-mobile'>
                                <h5 className='bukra-bold'>Marketing Management</h5>
                                <h6 className='bukra-regular'>We act as your marketing arm department, dedicated to achieve the goal at the highest quality, on time and within your budget.</h6>
                            </div>

                            <div style={{ textAlign: 'right', paddingTop: '20px' }}>

                                <Button variant='danger' href='/services/marketingMgmt'>Read More</Button>
                            </div>
                        </div>
                        <div className="home-service-mobile">
                            <div className='home-service-icon-base-mobile'>
                                <img className='home-service-icon-mobile' src={`${endpoint}/service-marketing-mgmt-black.png`} />
                            </div>
                            <div className='home-service-text-mobile'>
                                <h5 className='bukra-bold'>Finance and Accounting</h5>
                                <h6 className='bukra-regular'>We have the aim to provide a full range of comprehensive high quality services.</h6>
                            </div>

                            <div style={{ textAlign: 'right', paddingTop: '20px' }}>

                                <Button variant='danger' href='/services/financial'>Read More</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <br></br>
            </div>
        )
    }
}