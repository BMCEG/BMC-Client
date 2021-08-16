import React, { Component } from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Typography } from '@material-ui/core';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-ewings'>
                <div className="footer-ewings-root">
                    <div className="footer-ewings-root-left">
                        <img src={`${endpoint}/wing-right.png`} alt='wing-left' className='footer-ewings-root-img' />
                    </div>
                    <div className="footer-ewings-info">
                        <div className='footer-ewings-left'>
                            <div className='footer-ewings-logo'>
                                <img src={`${endpoint}/Typeface-Full-colors.png`} alt='wing-left' className='footer-ewings-root-logo-img' />
                            </div>
                            <div className='footer-ewings-social-links'>
                                <Button variant="link" href='https://www.facebook.com/businessmapconsultants/' className='footer-ewingss-social-btn'  >
                                    <FontAwesomeIcon icon={faFacebook} className='nav-social-btn-img' />
                                </Button>
                                <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                    <FontAwesomeIcon icon={faInstagram} className='nav-social-btn-img' />
                                </Button>
                                <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                    <FontAwesomeIcon icon={faLinkedin} className='nav-social-btn-img' />
                                </Button>
                                <Button variant="link" href='https://www.linkedin.com/company/businessmapconsultants/' className='footer-ewingss-social-btn' >
                                    <FontAwesomeIcon icon={faYoutube} className='nav-social-btn-img' />
                                </Button>
                                <Button variant="link" href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q' className='footer-ewingss-social-btn' >
                                    <FontAwesomeIcon icon={faTwitter} className='nav-social-btn-img' />
                                </Button>
                            </div>
                        </div>
                        <div className='footer-ewings-right'>
                            <p className='footer-header-text-size bukra-bold'>Our Services:</p>
                            <a href='/ewings/services/digital'>
                                <p style={{ color: '#86CE4E' }} className='bukra-regular footer-text-size'>Digital Marketing</p>
                            </a>
                            <a href='/ewings/services/multimedia'>
                                <p style={{ color: '#86CE4E' }} className='bukra-regular footer-text-size'>Multimedia Production</p>
                            </a>
                            <a href='/ewings/services/social'>
                                <p style={{ color: '#86CE4E' }} className='bukra-regular footer-text-size'>Social Media</p>
                            </a>
                            <a href='/ewings/services/media'>
                                <p style={{ color: '#86CE4E' }} className='bukra-regular footer-text-size'>Media Planning</p>
                            </a>
                            <a href='/ewings/services/web'>
                                <p style={{ color: '#86CE4E' }} className='bukra-regular footer-text-size'>Web Development</p>
                            </a>
                        </div>
                    </div>
                    <div className="footer-ewings-root-right">
                        <img src={`${endpoint}/wing-left.png`} alt='wing-left' className='footer-ewings-root-img' />
                    </div>
                </div>
            </div>
        )
    }
}
