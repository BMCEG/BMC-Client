import { Grid, TextField } from '@material-ui/core';
import React, { Component } from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-root">
                <div>
                    <Grid container>
                        {/* <Grid item xs={1}></Grid> */}
                        <Grid item xs={1}></Grid>
                        <Grid item xs={4} className='footer-logo-base'>
                            <img className='footer-logo-mob' src={`${endpoint}/bmc-name.png`} alt='logo' />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={6} className="footer-mob-text">
                            <h4 className='bukra-bold' style={{ color: 'black', fontWeight: 'bolder' }}>Business Map Consultants</h4>
                            <br></br>
                            <h6  className='bukra-regular' style={{ color: 'black' }}>Lorem Street</h6>
                            <h6  className='bukra-regular' style={{ color: 'black' }}>New Cairo, Cairo, Egypt</h6>
                            <br></br>
                            <h6 className='bukra-regular' style={{ color: 'black' }}>Phone: +021234567890</h6>
                            <h6 className='bukra-regular' style={{ color: 'black' }}>E-Mail: test@email.com</h6>
                        </Grid>
                 
                    </Grid>
                </div>
            </div >
        )
    }
}
