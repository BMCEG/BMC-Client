import { Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-ewings-root">
                <div className="footer-ewings-root-left">
                    <img src={`${endpoint}/wing-right.png`} alt='wing-left' className='footer-ewings-root-img' />
                </div>
                <div className="footer-ewings-info">
                    <div className='footer-ewings-left'>
                        <div className='footer-ewings-logo'>
                            <img src={`${endpoint}/ewings-logo-text.png`} alt='wing-left' className='footer-ewings-root-logo-img' />
                        </div>
                        <div className='footer-ewings-social-links'>
                            <Button variant="link" href='/blogs'  className='footer-ewingss-social-btn'  >
                                <FontAwesomeIcon icon={faFacebook} size={'2x'}  />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faInstagram} size={'2x'} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faTwitter} size={'2x'}  />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faLinkedin} size={'2x'}  />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faYoutube} size={'2x'} />
                            </Button>
                        </div>
                    </div>
                    <div className='footer-ewings-right'>
                        <h3 className='bukra-bold'>Our Services:</h3>
                        <h5 style={{color: '#86CE4E'}} className='bukra-regular'>Digital Marketing</h5>
                        <h5 style={{color: '#86CE4E'}} className='bukra-regular'>Multimedia Production</h5>
                        <h5 style={{color: '#86CE4E'}} className='bukra-regular'>Social Media</h5>
                        <h5 style={{color: '#86CE4E'}} className='bukra-regular'>Media Planning</h5>
                        <h5 style={{color: '#86CE4E'}} className='bukra-regular'>Web Development</h5>

                    </div>
                </div>
                <div className="footer-ewings-root-right">
                    <img src={`${endpoint}/wing-left.png`} alt='wing-left' className='footer-ewings-root-img' />

                </div>
            </div >
        )
    }
}
