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
                <div className='footer-ewings-root-center'>
                    <div className='footer-ewings-logo-mob'>
                        <img src={`${endpoint}/ewings-full-logo.png`} alt='wing-left' width="70%" className='footer-ewings-root-logo-img    ' />
                    </div>
                    <div className='footer-ewings-social-links-mob'>
                        <div className='footer-ewings-social-links-row'>

                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                                <FontAwesomeIcon icon={faFacebook} size={'lg'} style={{margin:'auto'}} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                                <FontAwesomeIcon icon={faInstagram} size={'lg'} style={{margin:'auto'}} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                                <FontAwesomeIcon icon={faTwitter} size={'lg'} style={{margin:'auto'}} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                                <FontAwesomeIcon icon={faLinkedin} size={'lg'} style={{margin:'auto'}} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn-mob' >
                                <FontAwesomeIcon icon={faYoutube} size={'lg'} style={{margin:'auto'}} />
                            </Button>
                        </div>
                    </div>
                 </div>
            </div >
        )
    }
}
