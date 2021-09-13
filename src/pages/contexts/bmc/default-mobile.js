import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import './default.css';
import Carousel from 'react-elastic-carousel';
import CarouselComp from '../../../components/carousel-mobile'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service.js';
import { isMobile, isIOS } from "react-device-detect";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { TextField } from '@material-ui/core';

class DefaultPage extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            contactFirstName: '',
            contactLastName: '',
            contactEmail: '',
            contactMobile: '',
            contactMessage: '',
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

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async () => {
        const contactDetails = {
            contactFirstName: this.state.contactFirstName,
            contactLastName: this.state.contactLastName,
            contactEmail: this.state.contactEmail,
            contactMobile: this.state.contactMobile,
            contactMessage: this.state.contactMessage
        }

        await axios.post(`${endpoint}/contacts/create`, contactDetails)
            .then((res) => {
                alert('Contact Message Submitted Successfully')
            })
            .catch((err) => {
                console.log(err);
            })
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
            <>
                {isMobile && isIOS ?

                    <div className="default-root-ios">
                        <div className="carousel-canvas-mobile">
                            <CarouselComp isMobile={true} items={this.state.carouselItems} />
                        </div>
                        {/* <br></br> */}
                        <div className="page-margin-mobile">
                            <div className='banner-grid-mobile'>
                                <div className='banner-text-mobile'>
                                    {/* <h5 className='bukra-bold'>Who Are We?!</h5> */}
                                    <h6 className='bukra-regular'>We are experts in such broad business tools as Strategic audit, Feasibility studies, research and analysis, Business strategies - Internal business processes – Business development, book keeping, financial audits, Business Manuals, Digital transformation, training courses, among other custom-tailored services.</h6>
                                </div>
                                <div className="banner-photo-base-mobile">
                                    <img
                                        className="banner-photo-mobile"
                                        alt="howItWorks"
                                        src={`${endpoint}/images/logo.png`}
                                    />
                                </div>
                            </div>
                        </div>

                        <br></br>
                        {/* <div className="page-margin"> */}
                        <Grid container className='home-services-grid'>
                            <Grid item xs={6}>
                                <div className="home-service-mobile">
                                    <div className='home-service-icon-base-mobile'>
                                        <img alt='placeholder' className='home-service-icon-mobile' src={`${endpoint}/images/service-strategic-planning-black.png`} />
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
                                        <img  alt='placeholder' className='home-service-icon-mobile' src={`${endpoint}/images/service-hr-black.png`} />
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
                                        <img alt='placeholder' className='home-service-icon-mobile' src={`${endpoint}/images/service-toolbox-black.png`} />
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
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-marketing-mgmt-black.png`} />
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
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-marketing-mgmt-black.png`} />
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
                    :
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
                                        src={`${endpoint}/images/logo.png`}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <Grid container className='home-services-grid'>
                            <Grid item xs={6}>
                                <div className="home-service-mobile">
                                    <div className='home-service-icon-base-mobile'>
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-strategic-planning-black.png`} />
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
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-hr-black.png`} />
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
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-toolbox-black.png`} />
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
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-marketing-mgmt-black.png`} />
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
                                        <img className='home-service-icon-mobile' alt='placeholder' src={`${endpoint}/images/service-marketing-mgmt-black.png`} />
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
                            {this.state.partners.map((partner, key) => (
                                <div className='home-partner' key={key}>
                                    <Button variant='link' href='/partners'>
                                        <img alt='placeholder' className='home-partner-img' src={`${endpoint}/images/${partner.logo}`} height='60px' />
                                    </Button>
                                </div>
                            ))}
                        </Carousel>
                        <br></br>
                        <div className="contact-root-mobile" style={{ backgroundImage: `url(${endpoint}/imagesbg-founder.png)`, backgroundSize: 'cover' }}>
                            <div className='contact-left'>
                                <div className='contact-form-location-base-mobile'>
                                    <Map google={this.props.google}
                                        initialCenter={{
                                            lat: 30.015124,
                                            lng: 31.427728
                                        }} zoom={16} className='contact-form-location-mobile'>
                                        <Marker onClick={this.onMarkerClick}
                                            name={'Current location'} />
                                    </Map>
                                </div>
                                <br></br>
                                {/* <div className='contact-form-body'> */}
                                {/* <div className='contact-form-body-left'> */}
                                {/* <div className='contact-form-body-left-info'> */}
                                <div className='contact-form-body-mobile'>

                                    <span>
                                        <br></br>
                                        <h3 className='bukra-bold'>Location:</h3>
                                        <h5 className='bukra-regular'>B103 90th Road, 5th Settlement,</h5>
                                        <h5 className='bukra-regular'>New Cairo, 11835</h5>

                                    </span>
                                    <span>
                                        <br></br>
                                        <h3 className='bukra-bold'>Email:</h3>
                                        <h5 className='bukra-regular'>info@bmceg.com</h5>
                                    </span>
                                    <span>
                                        <br></br>
                                        <h3 className='bukra-bold'>Call:</h3>
                                        <h5 className='bukra-regular'>010 0822 4224</h5>
                                        <h5 className='bukra-regular'>202 2564 9732</h5>

                                        <br></br>
                                    </span>
                                </div>

                            </div>
                            <div className='contact-form'>
                                <div className='contact-form-body-right'>
                                    <div className='contact-form-body-names'>
                                        <TextField fullWidth name="contactFirstName" value={this.state.contactFirstName} label="First Name" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} />
                                        <div style={{ width: '2%' }} />
                                        <TextField fullWidth name="contactLastName" value={this.state.contactLastName} label="Last Name" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} />
                                    </div>
                                    <TextField name="contactEmail" value={this.state.contactEmail} label="E-Mail" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} fullWidth />
                                    <br></br>
                                    <TextField name="contactMobile" value={this.state.contactMobile} label="Mobile Number" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} fullWidth />
                                    <br></br>
                                    <TextField name="contactMessage" value={this.state.contactMessage} label="Message" rows={10} multiline variant="outlined" className="contact-form-input" onChange={this.handleInputChange} fullWidth />
                                    <br></br>
                                </div>
                                <div className='contact-form-btn-base'>

                                    <Button variant="danger" onClick={this.handleSubmit} className='contact-form-btn'>
                                        Send Message
                                    </Button>
                                </div>
                                <br></br>
                            </div>
                            <br></br>
                        </div>
                    </div>
                }
            </>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBicNovSmmbpmXq4WSv5yKBR45FDjz0WkQ')
})(DefaultPage)
