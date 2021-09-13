import React, { Component } from 'react'
import './Consultations.css';
import endpoint from '../../../helpers/api_service';
import { TextField, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import FooterTop from '../../../components/BMC/Footer/Footer-Top';
import axios from 'axios';
export default class Consultations extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            consultancyBusinessType: "",
            consultancyBusinessWebsite: '',
            consultancyBusinessFacebook: '',
            consultancyBusinessLinkedIn: '',
            consultancyBusinessInstagram: '',
            consultancyBusinessTwitter: '',
            consultancyBusinessYouTube: '',
            consultancyBusinessGoals: '',
            consultancyBusinessChallenges: ''

        }

    }
    
    async handleSubmit() {
        await axios
            .post(`${endpoint}/requests/create`, {
                consultancyBusinessType: this.state.consultancyBusinessType,
                consultancyBusinessWebsite: this.state.consultancyBusinessWebsite,
                consultancyBusinessFacebook: this.state.consultancyBusinessFacebook,
                consultancyBusinessLinkedIn: this.state.consultancyBusinessLinkedIn,
                consultancyBusinessInstagram: this.state.consultancyBusinessInstagram,
                consultancyBusinessTwitter: this.state.consultancyBusinessTwitter,
                consultancyBusinessYouTube: this.state.consultancyBusinessYouTube,
                consultancyBusinessGoals: this.state.consultancyBusinessGoals,
                consultancyBusinessChallenges: this.state.consultancyBusinessChallenges

            })
            .then((res) => {
                alert('Your message has been recieved. You will be contacted shortly')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {
        return (
            <div className='consultations__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        CONSULTATIONS
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/images/consultations.h.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='finance-accounting__subtitle'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <p className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                                Tell Us
                                <span className='strategic-planning__body--text strategic-planning__body--text--card'>
                                    more about your business and
                                    We will offer you a scheduled one-hour free
                                    consultation meeting after receiving your
                                    answers asap.
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className='consultations__body'>
                    <div className='consultations__body__subtitle'>
                        What is your business type?
                    </div>
                    <div className='consultations__body__form'>
                        <TextField value={this.state.consultancyBusinessType} name="consultancyBusinessType" label="What is Your business type" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                        <br></br>
                        <div className='consultations__body__form__row'>
                            <TextField value={this.state.consultancyBusinessWebsite} name="consultancyBusinessWebsite" label="Website" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                            <div className='consultations__body__form__divider' />
                            <TextField value={this.state.consultancyBusinessFacebook} name="consultancyBusinessFacebook" label="Facebook" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                            <div className='consultations__body__form__divider' />
                            <TextField value={this.state.consultancyBusinessLinkedIn} name="consultancyBusinessLinkedIn" label="LinkedIn" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                        </div>
                        {/* <br></br> */}
                        <div className='consultations__body__form__row'>
                            <TextField value={this.state.consultancyBusinessInstagram} name="consultancyBusinessInstagram" label="Instagram" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                            <div className='consultations__body__form__divider' />
                            <TextField value={this.state.consultancyBusinessTwitter} name="consultancyBusinessTwitter" label="Twitter" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                            <div className='consultations__body__form__divider' />
                            <TextField value={this.state.consultancyBusinessYouTube} name="consultancyBusinessYouTube" label="YouTube" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='consultations__body__subtitle'>
                        Where do you want to go?
                    </div>
                    <div className='consultations__body__form'>
                        <TextField value={this.state.consultancyBusinessGoals} name="consultancyBusinessGoals" label="What are your objectives and goals" rows={10} multiline variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='consultations__body__subtitle'>
                        What are your business challenges?
                    </div>
                    <div className='consultations__body__form'>
                        <TextField value={this.state.consultancyBusinessChallenges} name="consultancyBusinessChallenges" label="What are the barriers facing you to grow, describe your problems." rows={10} multiline variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />

                    </div>
                    <br></br>
                    <br></br>
                    <div className='courses__join__submit__width'>
                        <Button className='courses__join__submit--btn' onClick={this.handleSubmit}>
                            Send
                        </Button>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                <FooterTop />
            </div>
        )
    }
}
