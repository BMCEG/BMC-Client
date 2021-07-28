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
                                <FontAwesomeIcon icon={faFacebook} size={'2x'} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faInstagram} size={'2x'} />
                            </Button>
                            <Button variant="link" href='/blogs' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faTwitter} size={'2x'} />
                            </Button>
                            <Button variant="link" href='https://www.linkedin.com/company/businessmapconsultants/' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faLinkedin} size={'2x'} />
                            </Button>
                            <Button variant="link" href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q' className='footer-ewingss-social-btn' >
                                <FontAwesomeIcon icon={faYoutube} size={'2x'} />
                            </Button>
                        </div>
                    </div>
                    <div className='footer-ewings-right'>
                        <Typography className='bukra-bold' variant='h3' component='h3'>Our Services:</Typography>
                        <a href='/ewings/services/digital'>
                            <Typography style={{ color: '#86CE4E' }} className='bukra-regular' variant='h5' component='h5'>Digital Marketing</Typography>
                        </a>
                        <a href='/ewings/services/multimedia'>
                            <Typography style={{ color: '#86CE4E' }} className='bukra-regular' variant='h5' component='h5'>Multimedia Production</Typography>
                        </a>
                        <a href='/ewings/services/social'>
                            <Typography style={{ color: '#86CE4E' }} className='bukra-regular' variant='h5' component='h5'>Social Media</Typography>
                        </a>
                        <a href='/ewings/services/media'>
                            <Typography style={{ color: '#86CE4E' }} className='bukra-regular' variant='h5' component='h5'>Media Planning</Typography>
                        </a>
                        <a href='/ewings/services/web'>
                            <Typography style={{ color: '#86CE4E' }} className='bukra-regular' variant='h5' component='h5'>Web Development</Typography>
                        </a>
                    </div>
                </div>
                <div className="footer-ewings-root-right">
                    <img src={`${endpoint}/wing-left.png`} alt='wing-left' className='footer-ewings-root-img' />
                </div>
            </div>
        )
    }
}
