import { Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class FooterEwingsMob extends Component {
    render() {
        return (
            <div className="footer-ewings-root-mob">
                <div className='footer-ewings-root-left'>
                    <img src={`${endpoint}/wing-right.png`} alt='wing-left' width="100%" />
                </div>
                <div className='footer-ewings-root-center'>
                    <div className='footer-ewings-logo-mob'>
                        <img src={`${endpoint}/Typeface-Full-colors.png`} alt='wing-left' width="90%" className='footer-ewings-logo-img' />
                    </div>
                    <div className='footer-ewings-social-links'>
                        <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                            <FontAwesomeIcon icon={faFacebook} size={'lg'} />
                        </Button>
                        <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                            <FontAwesomeIcon icon={faInstagram} size={'lg'} />
                        </Button>
                        <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                            <FontAwesomeIcon icon={faTwitter} size={'lg'} />
                        </Button>
                        <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                            <FontAwesomeIcon icon={faLinkedin} size={'lg'} />
                        </Button>
                        <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                            <FontAwesomeIcon icon={faYoutube} size={'lg'} />
                        </Button>
                    </div>
                </div>
                <div className='footer-ewings-root-right'>
                    <img src={`${endpoint}/wing-left.png`} alt='wing-left' width="100%" />
                </div>
            </div >
        )
    }
}
