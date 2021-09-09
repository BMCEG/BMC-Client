import React, { Component } from 'react'
import './Contact.css';
import endpoint from '../../../helpers/api_service';
import axios from 'axios';
import { Typography, TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            contactFirstName: '',
            contactLastName: '',
            contactEmail: '',
            contactMobile: '',
            contactMessage: ''
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

    render() {
        return (
            <div className='ewings__contact__root'>
                <div className='ewings__digitalM__banner'>
                    <div className='ewings__banner__title' style={{
                        backgroundImage: `url(${endpoint}/ewings-header.png  )`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center'
                    }}>
                        <div className='ewings__stamp' style={{ backgroundImage: `url(${endpoint}/ewings-stamp.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPositionX: 'center' }}>

                            <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                                CONTACT US
                            </Typography>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='ewings__digitalM__body'>
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
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
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
                </div>
            </div>
        )
    }
}
