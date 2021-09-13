import React, { Component } from 'react';
import './Homepage.css';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import { GoogleApiWrapper } from 'google-maps-react';
import ClientsCarousel from 'react-elastic-carousel';
import FooterTop from '../../../components/BMC/Footer/Footer-Top';
import { Typography } from '@material-ui/core';
import endpoint from '../../../helpers/api_service';
import { Button } from 'react-bootstrap';
class Homepage extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            clients: [],
            contactFirstName: '',
            contactLastName: '',
            contactEmail: '',
            contactMobile: '',
            contactMessage: '',

            breakPoints: [
                { width: 1, itemsToShow: 1 },
                { width: 500, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 6 },
            ],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/partners/`)
            .then((res) => {
                this.setState({
                    clients: res.data
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
            <div className='bmchome-root'>
                <div className='bmchome__banner'>
                    {/* <img className='bmchome__banner-img' src={`${endpoint}/images/strategic-banner.jpeg`} alt='Marketing Mgmt' /> */}
                    <Carousel fade className="bmchome__banner__carousel" controls={false}>
                        <Carousel.Item>
                            <div className='bmchome__banner__carousel--item' style={{ backgroundImage: `url(${endpoint}/Homepage-Header-1.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <Typography className='bmchome__banner__carousel--text  bmchome__banner__carousel--text--size'>
                                    SEIZE
                                    <br></br>
                                    {/* </Typography>
                                <Typography className='bmchome__banner__carousel--text  bmchome__banner__carousel--text--size'> */}
                                    THE GAP
                                </Typography>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='bmchome__banner__carousel--item' style={{ backgroundImage: `url(${endpoint}/Homepage-Header-2.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <Typography className='bmchome__banner__carousel--text bmchome__banner__carousel--text--size'>
                                    MARKETING
                                    <br></br>
                                    MASTERS
                                </Typography>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='bmchome__banner__carousel--item' style={{ backgroundImage: `url(${endpoint}/Homepage-Header-3.png)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                                <Typography className='bmchome__banner__carousel--text bmchome__banner__carousel--text--size'>
                                    EFFICIENCY IN
                                    <br></br>
                                    EVERY PATH
                                </Typography>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
                {/* <div className='strategic-planning__banner'> */}
                {/* </div> */}
                <br></br>
                <div className='bmchome__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <div className='strategic-planning__body_canvas'>

                        <p className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                            We are experts
                            <span className='strategic-planning__body--text strategic-planning__body--text--card'>
                                in such broad business tools as Strategic audit,
                                Feasibility studies, research and analysis, Business strategies - Internal business processes
                                Business development, book keeping, financial audits, Business Manuals, Digital transformation,
                                training courses, among other custom-tailored services.
                            </span>
                        </p>


                    </div>
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='bmchome__service__row'>
                    {/* <div className='bmchome__service__row__img'> */}
                    <img className='bmchome__service__row__img' src={`${endpoint}/images/Strategic-Plan.png`} alt='service' />
                    <div className='bmchome__service__row__details'>
                        <Typography className='bmchome__service__row__details--header'>
                            Strategic Plan
                        </Typography>
                        <Typography className='bmchome__service__row__details--text'>
                            BMC has the aim to provide professional
                            counsel and assistance in the analysis,.....
                        </Typography>
                    </div>
                    {/* </div> */}
                </div>
                <div className='bmchome__service__below'>

                    <Button className='bmchome__service__row__btn' href='/services/strategic' >
                        Read More
                    </Button>
                </div>
                <br></br>
                <br></br>
                <div className='bmchome__service__row'>
                    {/* <div className='bmchome__service__row__img'> */}
                    <img className='bmchome__service__row__img' src={`${endpoint}/images/Marketing-Management.png`} alt='service' />
                    <div className='bmchome__service__row__details'>
                        <Typography className='bmchome__service__row__details--header'>
                            Marketing Management
                        </Typography>
                        <Typography className='bmchome__service__row__details--text'>
                            We act as your marketing arm department, we have
                            the right blend of strategists and planners,...
                        </Typography>
                    </div>
                    {/* </div> */}
                </div>
                <div className='bmchome__service__below'>

                    <Button className='bmchome__service__row__btn' href='/services/marketingMgmt'>
                        Read More
                    </Button>
                </div>
                <br></br>
                <br></br>
                <div className='bmchome__service__row'>
                    {/* <div className='bmchome__service__row__img'> */}
                    <img className='bmchome__service__row__img' src={`${endpoint}/images/HR-Management.png`} alt='service' />
                    <div className='bmchome__service__row__details'>
                        <Typography className='bmchome__service__row__details--header'>
                            HR Management
                        </Typography>
                        <Typography className='bmchome__service__row__details--text'>
                            We provide Human Resources service in support
                            of our client’s vision,.....
                        </Typography>
                    </div>
                    {/* </div> */}
                </div>
                <div className='bmchome__service__below'>

                    <Button className='bmchome__service__row__btn' href='/services/hr'>
                        Read More
                    </Button>
                </div>
                <br></br>
                <br></br>
                <div className='bmchome__service__row'>
                    <img className='bmchome__service__row__img' src={`${endpoint}/images/Finance-&-Accounting.png`} alt='service' />
                    <div className='bmchome__service__row__details'>
                        <Typography className='bmchome__service__row__details--header'>
                            Finance & Accounting
                        </Typography>
                        <Typography className='bmchome__service__row__details--text'>
                            We have the aim to provide a full range of
                            comprehensive high quality services with.....
                        </Typography>
                    </div>
                </div>
                <div className='bmchome__service__below'>
                    <Button className='bmchome__service__row__btn' href='/services/financial'>
                        Read More
                    </Button>
                </div>
                <br></br>
                <br></br>
                <div className='bmchome__service__row'>
                    <img className='bmchome__service__row__img' src={`${endpoint}/images/BMC-Tool-Box.png`} alt='service' />
                    <div className='bmchome__service__row__details'>
                        <Typography className='bmchome__service__row__details--header'>
                            BMC Tool Box

                        </Typography>
                        <Typography className='bmchome__service__row__details--text'>
                            We are often engaged to provide Custom-tailored
                            solutions,We can help formulate the specific....
                        </Typography>
                    </div>
                </div>
                <div className='bmchome__service__below'>
                    <Button className='bmchome__service__row__btn' href='/services/toolbox'>
                        Read More
                    </Button>
                </div>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='bmchome__subtitle'>
                    <div className='strategic-planning_subtitle-border'></div>
                    <div>
                        <Typography className='strategic-planning__heading bmchome__subtitle--font '>
                            TRUSTED BY
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <ClientsCarousel
                    breakPoints={this.state.breakPoints}
                    enableMouseSwipe={true}
                    enableAutoPlay={true}
                    disableArrowsOnEnd={false}
                    className="bmchome__clients"
                    pagination={false}
                >
                    {this.state.clients.map((client, index) => (
                        <div key={index} className='home-partner-ewings'>
                            <Button variant='link' href='/partners'>
                                <img alt='placeholder' className='home-partner-img' src={`${endpoint}/images/${client.logo}`} height='120px' />
                            </Button>
                        </div>
                    ))}
                </ClientsCarousel>



                <br></br>
                <div className='partners__divider' />
                <br></br>
                <div className='bmchome__contact'>
                    <div className='bmchome__contact__left'>
                        <div className='contact-form-body-left'>

                            <div className='bmchome__contact__form'>
                                <div className='contact-form-body-right'>
                                    <div className='contact-form-body-names'>
                                        <TextField fullWidth name="contactFirstName" value={this.state.contactFirstName} label="First Name" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} />
                                        <div style={{ width: '2%' }} />
                                        <TextField fullWidth name="contactLastName" value={this.state.contactLastName} label="Last Name" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} />
                                    </div>
                                    <TextField name="contactEmail" value={this.state.contactEmail} label="E-Mail" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                    <br></br>
                                    <TextField name="contactMobile" value={this.state.contactMobile} label="Mobile Number" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                    <br></br>
                                    <TextField name="contactMessage" value={this.state.contactMessage} label="Message" rows={10} multiline variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                </div>
                                <div className='contact-form-btn-base'>

                                    <Button onClick={this.handleSubmit} className='bmchome__contact__form__btn bukra-regular'>
                                        Send Message
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bmchome__contact__right'>
                        <iframe title='5' className='bmchome__contact__map' src="https://maps.google.com/maps?q=30.015124,%2031.427728&t=&z=17&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    </div>
                </div>
                <br></br>
                <br></br>
                <FooterTop />

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBicNovSmmbpmXq4WSv5yKBR45FDjz0WkQ')
})(Homepage)