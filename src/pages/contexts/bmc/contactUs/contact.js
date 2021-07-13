import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import endpoint from '../../../../helpers/api_service';
import './contact.css';
import { Button } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class Contact extends Component {
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
            <div className="contact-root" style={{ backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover' }}>
                <div className='contact-left'>
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

                                <h3  className='bukra-bold'>Location:</h3>
                                <h4 className='bukra-regular'>A108 Adam Street, New York, NY 535022</h4>
                            </div>
                            <div className='contact-form-body-left-info'>
                                <h3 className='bukra-bold'>Email:</h3>
                                <h4 className='bukra-regular'>info@example.com</h4>
                            </div>
                            <div className='contact-form-body-left-info'>
                                <h3 className='bukra-bold'>Call:</h3>
                                <h4 className='bukra-regular'>+1 5589 55488 55</h4>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='contact-right'>
                    <div className='contact-form'>
                        <div className='contact-form-body-right'>
                            <div className='contact-form-body-names'>
                                <TextField fullWidth name="contactFirstName" value={this.state.contactFirstName} label="First Name" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} />
                                <div style={{width: '2%'}} />
                                <TextField fullWidth name="contactLastName" value={this.state.contactLastName} label="Last Name" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} />
                            </div>
                            <TextField fullWidth name="contactEmail" value={this.state.contactEmail} label="E-Mail" variant="outlined" className="contact-form-input" onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <TextField fullWidth name="contactMobile" value={this.state.contactMobile} label="Mobile Number" variant="outlined" className="contact-form-input" onChange={this.handleInputChange}  fullWidth/>
                            <br></br>
                            <TextField fullWidth name="contactMessage" value={this.state.contactMessage} label="Message" rows={10} multiline variant="outlined" className="contact-form-input" onChange={this.handleInputChange} fullWidth />
                            <br></br>
                        </div>
                            <div className='contact-form-btn-base'>

                                <Button variant="danger" onClick={this.handleSubmit} className='contact-form-btn'>
                                    Send Message
                                </Button>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBicNovSmmbpmXq4WSv5yKBR45FDjz0WkQ')
})(Contact)