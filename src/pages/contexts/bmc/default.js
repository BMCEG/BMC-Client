import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import './default.css';
import Carousel from 'react-elastic-carousel';
import CarouselComp from '../../../components/carousel.js'
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service.js';
import { Map,  Marker, GoogleApiWrapper } from 'google-maps-react';
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
                { width: 1, itemsToShow: 1 },
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

    render() {
        return (
            <div className="default-root">
                <div className="carousel-canvas">
                    <CarouselComp isMobile={true} items={this.state.carouselItems} />
                </div>
                <div className="page-margin">
                    <div className='banner-grid'>
                        <div className='banner-text'>
                            <Typography variant='h3' component='h3' className='bukra-bold'>
                                Who We Are?!
                            </Typography>
                            <Typography variant='h6' component='h6' className='bukra-regular line-spacing'>
                                We are experts in such broad business tools as Strategic audit, Feasibility studies, research and analysis, Business strategies - Internal business processes – Business development, book keeping, financial audits, Business Manuals, Digital transformation, training courses, among other custom-tailored services.                            </Typography>
                        </div>
                        <div className="banner-photo-base">
                            <img
                                className="banner-photo"
                                alt="howItWorks"
                                src={`${endpoint}/logo.png`}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="page-margin">
                    <Grid container className='home-services-grid'>
                        <Grid item xs={6}>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' alt='placeholder' src={`${endpoint}/service-strategic-planning-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>Strategic Plan</h3>
                                            <br></br>

                                            <h5 className='bukra-regular'>BMC has the aim to provide professional counsel and assistance in the analysis, conception, and formulation of strategies & plans along with the development of the implementation framework that assure client’s sustained survival and long-term growth & profitability.</h5>
                                        </div>
                                    </Grid>
                                </Grid>
                                <div style={{ textAlign: 'right' }}>
                                    <Button variant='danger' href='/services/strategic'>Read More</Button>
                                </div>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' alt='placeholder' src={`${endpoint}/service-hr-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>HR Management</h3>
                                            <br></br>

                                            <h5 className='bukra-regular'>We provide Human Resources service in support of our client’s vision, mission and values by promoting the concept that employees are the most valuable resource and will be treated as such.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <Button variant='danger' href='/services/hr'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' alt='placeholder' src={`${endpoint}/service-toolbox-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>BMC Tool Box</h3>
                                            <br></br>

                                            <h5 className='bukra-regular'>We are often engaged to provide Custom-tailored solutions,We can help formulate the specific problem or uncover areas that need improvements and then find a comprehensive set of possible solutions to meet the needs of your particular organization.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <Button variant='danger' href='/services/toolbox'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img alt='placeholder' className='home-service-icon' src={`${endpoint}/service-marketing-mgmt-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>Marketing Management</h3>
                                            <br></br>

                                            <h5 className='bukra-regular'>We act as your marketing arm department, we have the right blend of strategists and planners, researchers, designers, thinkers and creatives, detail and big-picture people all dedicated to achieve the goal at the highest quality, on time and within your budget.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <Button variant='danger' href='/services/marketingMgmt'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img alt='placeholder' className='home-service-icon' src={`${endpoint}/service-financial-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>Financial and Accounting</h3>
                                            <br></br>
                                            <h5 className='bukra-regular'>We have the aim to provide a full range of comprehensive high quality services with a modern and practical approach in several fields.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>
                                            <Button variant='danger' href='/services/financial'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <Carousel
                    breakPoints={this.state.breakPoints}
                    enableMouseSwipe={true}
                    enableAutoPlay={true}
                    disableArrowsOnEnd={true}
                    className="home-partners"
                    pagination={false}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={4500}
                >
                    {this.state.partners.map((partner) => (
                        <div className='home-partner'>
                            <Button variant='link' href='/partners'>
                                <img  alt='placeholder'src={`${endpoint}/${partner.logo}`} height='120px' />
                            </Button>
                        </div>
                    ))}
                </Carousel>)
                <br></br>
                <br></br>
                <br></br>

                {/* <iframe src="https://www.focal-x.com/mario" width="1700px" height='600px' title="W3Schools Free Online Web Tutorials"></iframe>
<br></br> */}
                <div className="page-margin homepage-contact">
                    <div className='contact-left'>

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
                        </div>



                    </div>
                    <div className='contact-right'>
                        <div className='contact-form-location-base'>
                            <Map google={this.props.google}
                                initialCenter={{
                                    lat: 30.015124,
                                    lng: 31.427728
                                }} zoom={16} className='contact-form-location'>
                                <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />
                            </Map>
                        </div>
                        <br></br>
                        <div className='contact-form-body'>
                            <div className='contact-form-body-left'>
                                <div className='contact-form-body-left-info'>

                                    <br></br>
                                    <h4 className='bukra-bold'>Location:</h4>
                                    <h5 className='bukra-regular'>B103 90th Road, 5th Settlement,</h5>
                                    <h5 className='bukra-regular'>New Cairo, 11835</h5>
                                </div>
                                <div className='contact-form-body-left-info'>
                                    <br></br>
                                    <h4 className='bukra-bold'>Email:</h4>
                                    <h5 className='bukra-regular'>mohamed@bmceg.com</h5>
                                </div>
                                <div className='contact-form-body-left-info'>
                                    <br></br>
                                    <h4 className='bukra-bold'>Call:</h4>
                                    <h5 className='bukra-regular'>010 0822 4224</h5>
                                    <h5 className='bukra-regular'>202 2564 9732</h5>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBicNovSmmbpmXq4WSv5yKBR45FDjz0WkQ')
})(DefaultPage)
