import React, { Component } from 'react'
import './Contact.css';
import endpoint from '../../../helpers/api_service';
import axios from 'axios';
import { Typography, TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import FooterTop from '../../../components/BMC/Footer/Footer-Top';
export default class ContactMob extends Component {
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
            <>
            <div className='contact__root'>
                <br></br>
                <div className='clients__header'>
                    <Typography className='clients__header--font clients__header--font--size'>
                        Contact Us
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <div className='contact__root__contact--mob'>
                    <div className='bmchome__contact__right--mob'>
                        <iframe className='bmchome__contact__map' src="https://maps.google.com/maps?q=30.015124,%2031.427728&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    <br></br>
                    <div className='bmchome__contact__left--mob'>

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
                                {/* <br></br> */}
                            </div>
                            <div className='contact-form-btn-base'>

                                <Button onClick={this.handleSubmit} className='bmchome__contact__form__btn bukra-regular'>
                                    Send Message
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
            <FooterTop />
            </>
        )
    }
}
