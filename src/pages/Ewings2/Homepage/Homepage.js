import React, { Component } from 'react'
import './Homepage.css';
import Carousel from 'react-bootstrap/Carousel'
import { Typography } from '@material-ui/core';
import endpoint from '../../../helpers/api_service';
import MediaQuery from 'react-responsive';
import axios from 'axios';
import ClientsCarousel from 'react-elastic-carousel';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core';

export default class Homepage extends Component {
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
            <div className='ewings__home__root'>
                <MediaQuery maxWidth={900}>
                    <div className='ewings__home__banner__mob'>
                        <Carousel className="ewings__home__banner__carousel" indicators={true} keyboard={true}>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__center__mob'>
                                        <div className='ewings__home__banner__center__top'>
                                            <img className='ewings__home__banner__center__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-about-typography.png`} />
                                            <img className='ewings__home__banner__center__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-about.png`} />

                                        </div>
                                        <div className='ewings__home__banner__center__bottom'>
                                            <div className='ewings__home__banner__center__text'>
                                                <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                    EWINGS
                                                    <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                        is a media production and advertising agency, founded in 2014 as a place where people are happy to come to work every morning. A place that is all about collaboration. Where we love what we do and we do great things. At Ewings we dare to care. It's what sets us apart from other agencies.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__center__mob'>
                                        <div className='ewings__home__banner__center__top'>
                                            <img className='ewings__home__banner__center__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-promise-typography.png`} />
                                            <img className='ewings__home__banner__center__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-promise.png`} />

                                        </div>
                                        <div className='ewings__home__banner__center__bottom'>
                                            <div className='ewings__home__banner__center__text'>
                                                <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                    <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                        Ewings will personalize and provide you with the best sevice possible to assist your company in achieving
                                                    </span>
                                                    MAXIMUM PERFORMANCE
                                                    <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                        and expansion.
                                                        <br></br>
                                                        The Value you'll obtain will always be above your expectations with our experts in the marketing field.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__center__mob'>
                                        <div className='ewings__home__banner__center__top'>
                                            <img className='ewings__home__banner__center__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-values-typography.png`} />
                                            <img className='ewings__home__banner__center__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-values.png`} />

                                        </div>
                                        <div className='ewings__home__banner__center__bottom'>
                                            <div className='ewings__home__banner__center__text'>
                                                <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                    EWINGS
                                                    <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                        will give you the most unexpected outcomes that will take your company's marketing to another level. Moreover, you will be provided with the best experience in working with Ewings, because we are keen to make the client feel comfortable and satisfied with our services.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__center__mob'>
                                        <div className='ewings__home__banner__center__top'>
                                            <img className='ewings__home__banner__center__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-vision-typography.png`} />
                                            <img className='ewings__home__banner__center__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-vision.png`} />

                                        </div>
                                        <div className='ewings__home__banner__center__bottom'>
                                            <div className='ewings__home__banner__center__text'>
                                                <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                    <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                        Your
                                                    </span>
                                                    Vision
                                                </p>
                                                <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                    <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                        Is Our
                                                    </span>
                                                    Mission
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={900}>
                    <div className='ewings__home__banner'>
                        <Carousel className="ewings__home__banner__carousel" indicators={true} keyboard={true} slide>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__left'>
                                        <img className='ewings__home__banner__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-about-typography.png`} />
                                        <div className='ewings__home__banner__left__text'>
                                            <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                EWINGS
                                                <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                    is a media production and advertising agency, founded in 2014 as a place where people are happy to come to work every morning. A place that is all about collaboration. Where we love what we do and we do great things. At Ewings we dare to care. It's what sets us apart from other agencies.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__right'>
                                        <img className='ewings__home__banner__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-about.png`} />
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__left'>
                                        <img className='ewings__home__banner__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-promise-typography.png`} />
                                        <div className='ewings__home__banner__left__text'>
                                            <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                    Ewings will personalize and provide you with the best sevice possible to assist your company in achieving
                                                </span>
                                                MAXIMUM PERFORMANCE
                                                <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                    and expansion.
                                                    <br></br>
                                                    The Value you'll obtain will always be above your expectations with our experts in the marketing field.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__right'>
                                        <img className='ewings__home__banner__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-promise.png`} />
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__left'>
                                        <img className='ewings__home__banner__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-values-typography.png`} />
                                        <div className='ewings__home__banner__left__text'>
                                            <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                EWINGS
                                                <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                    will give you the most unexpected outcomes that will take your company's marketing to another level. Moreover, you will be provided with the best experience in working with Ewings, because we are keen to make the client feel comfortable and satisfied with our services.
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__right'>
                                        <img className='ewings__home__banner__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-values.png`} />
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className='ewings__home__banner__carousel--item'>
                                    <div className='ewings__home__banner__padding' />
                                    <div className='ewings__home__banner__left'>
                                        <img className='ewings__home__banner__left__img' alt='EWings' src={`${endpoint}/ewings-carousel-vision-typography.png`} />
                                        <div className='ewings__home__banner__left__text'>
                                            <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                    Your
                                                </span>
                                                Vision
                                            </p>
                                            <p className='ewings__home__banner__heading ewings__home__banner__heading--text'>
                                                <span className='ewings__home__banner__body ewings__home__banner__body--text'>
                                                    Is Our
                                                </span>
                                                Mission
                                            </p>
                                        </div>
                                    </div>
                                    <div className='ewings__home__banner__right'>
                                        <img className='ewings__home__banner__right__img' alt='EWings' src={`${endpoint}/ewings-carousel-vision.png`} />
                                    </div>
                                    <div className='ewings__home__banner__padding' />
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </MediaQuery>

                {/* <br></br> */}
                <div className='ewings__home__services__title' style={{
                    backgroundImage: `url(${endpoint}/ewings-header.png  )`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center'
                }}>
                    <div className='ewings__home__stamp' style={{ backgroundImage: `url(${endpoint}/ewings-stamp.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPositionX: 'center' }}>

                        <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                            OUR SERVICES
                        </Typography>
                    </div>
                </div>
                {/* <br></br>
                <br></br>
                <br></br> */}
                <MediaQuery maxWidth={900}>

                    <div className='ewings__home__services__row--mob'>
                        <div className='ewings__home__services__service--mob'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Digital-Marketing.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        DIGITAL MARKETING
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/digital'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br></br>                    <div className='ewings__home__services__row--mob'>

                        <div className='ewings__home__services__service--mob'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Multimedia-Production.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        MULTIMEDIA PRODUCTION
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/multimedia'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br></br>                    <div className='ewings__home__services__row--mob'>

                        <div className='ewings__home__services__service--mob'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Social-Media-Management.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        SOCIAL MEDIA MANAGEMENT
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/social'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br></br>                    <div className='ewings__home__services__row--mob'>
                        <div className='ewings__home__services__service--mob'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Media-planning.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        MEDIA PLANNING
                                        AND BUYING
                                    </Typography>

                                </div>

                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/media'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br></br>                    <div className='ewings__home__services__row--mob'>

                        <div className='ewings__home__services__service--mob'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Web-Development.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        WEB
                                        DEVELOPMENT
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/web'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div >
                    <br></br>
                </MediaQuery>
                <MediaQuery minWidth={900}>

                    <div className='ewings__home__services__row'>
                        <div className='ewings__home__services__service'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Digital-Marketing.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        DIGITAL MARKETING
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/digital'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className='ewings__home__services__service'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Multimedia-Production.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        MULTIMEDIA PRODUCTION
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/multimedia'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className='ewings__home__services__service'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Social-Media-Management.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        SOCIAL MEDIA MANAGEMENT
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/social'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='ewings__home__services__row'>
                        <div className='ewings__home__services__service'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Media-planning.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        MEDIA PLANNING
                                        AND BUYING
                                    </Typography>

                                </div>

                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/media'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                        <div className='ewings__home__services__service'>
                            <div className='ewings__home__services__card' style={{
                                backgroundImage: `url(${endpoint}/Web-Development.png)`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPositionX: 'center',
                                backgroundSize: 'cover'
                            }}
                            >
                                <div className='ewings__home__services__card__name'>
                                    <Typography className='ewings__home__services__card__name--font'>
                                        {/* <div className='ewings__home__services__card__name--overlay' /> */}
                                        WEB
                                        DEVELOPMENT
                                    </Typography>

                                </div>
                            </div>
                            <div className='ewings__home__services__card__btn--base'>
                                <Button className='ewings__home__services__card__btn' href='/ewings/services/web'>
                                    Read More
                                </Button>
                            </div>
                        </div>
                    </div >
                    <br></br>
                </MediaQuery>
                <br></br>
                <div className='ewings__home__services__title' style={{
                    backgroundImage: `url(${endpoint}/ewings-header.png  )`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center'
                }}>
                    <div className='ewings__home__stamp' style={{ backgroundImage: `url(${endpoint}/ewings-stamp.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPositionX: 'center' }}>
                        <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                            TRUSTED BY
                        </Typography>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <ClientsCarousel
                    breakPoints={this.state.breakPoints}
                    enableMouseSwipe={true}
                    enableAutoPlay={true}
                    disableArrowsOnEnd={false}
                    className="ewingshome__clients"
                    pagination={false}
                >
                    {this.state.clients.map((client) => (
                        <div className='home-partner-ewings'>
                            <Button variant='link' href='/partners'>
                                <img alt='placeholder' className='home-partner-img' src={`${endpoint}/${client.logo}`} height='120px' />
                            </Button>
                        </div>
                    ))}
                </ClientsCarousel>
                <br></br>
                <div className='partners__divider' />
                <br></br>
                <MediaQuery maxWidth={900}>
                    <div className='ewingshome__contact--mob'>
                        <iframe className='ewingshome__contact__map--mob' src="https://maps.google.com/maps?q=30.015124,%2031.427728&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <br></br>
                        <br></br>
                        <br></br>


                        <div className='bmchome__contact__form'>
                            <div className='contact-form-body-right'>
                                <div className='contact-form-body-names'>
                                    <TextField fullWidth name="contactFirstName" value={this.state.contactFirstName} label="First Name" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} />
                                    <div style={{ width: '2%' }} />
                                    <TextField fullWidth name="contactLastName" value={this.state.contactLastName} label="Last Name" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} />
                                </div>
                                <TextField name="contactEmail" value={this.state.contactEmail} label="E-Mail" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                <br></br>
                                <TextField name="contactMobile" value={this.state.contactMobile} label="Mobile Number" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                <br></br>
                                <TextField name="contactMessage" value={this.state.contactMessage} label="Message" rows={10} multiline variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} fullWidth />
                            </div>
                            <div className='contact-form-btn-base'>

                                <Button onClick={this.handleSubmit} className='ewings__home__contact__form__btn bukra-regular'>
                                    Send Message
                                </Button>
                            </div>
                        </div>
                        {/* <div className='bmchome__contact__right'> */}
                        {/* </div> */}
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={900}>

                    <div className='bmchome__contact'>
                        <div className='bmchome__contact__left'>
                            <div className='contact-form-body-left'>

                                <div className='bmchome__contact__form'>
                                    <div className='contact-form-body-right'>
                                        <div className='contact-form-body-names'>
                                            <TextField fullWidth name="contactFirstName" value={this.state.contactFirstName} label="First Name" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} />
                                            <div style={{ width: '2%' }} />
                                            <TextField fullWidth name="contactLastName" value={this.state.contactLastName} label="Last Name" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} />
                                        </div>
                                        <TextField name="contactEmail" value={this.state.contactEmail} label="E-Mail" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                        <br></br>
                                        <TextField name="contactMobile" value={this.state.contactMobile} label="Mobile Number" variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                        <br></br>
                                        <TextField name="contactMessage" value={this.state.contactMessage} label="Message" rows={10} multiline variant="outlined" className="ewings__home__contact__form__input" onChange={this.handleInputChange} fullWidth />
                                    </div>
                                    <div className='contact-form-btn-base'>

                                        <Button onClick={this.handleSubmit} className='ewings__home__contact__form__btn bukra-regular'>
                                            Send Message
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bmchome__contact__right'>
                            <iframe className='bmchome__contact__map' src="https://maps.google.com/maps?q=30.015124,%2031.427728&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        </div>
                    </div>
                </MediaQuery>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div >
        )
    }
}
