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
                <div className="footer-margin">
                    <Grid container>
                        <Grid item xs={3} className='footer-logo-base'>
                            <img className='footer-logo' src={`${endpoint}/bmc-name.png`} alt='logo' />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                            <div className="footer-grid-col">
                                <h2 style={{ color: 'black', fontWeight: 'bolder' }} className='bukra-bold'>Business Map Consultants</h2>
                                <br></br>
                                <h4 style={{ color: 'black' }} className='bukra-regular'>Lorem Street</h4>
                                <h4 style={{ color: 'black' }} className='bukra-regular'>New Cairo, Cairo, Egypt</h4>
                                <br></br>
                                <h4 style={{ color: 'black' }} className='bukra-regular'>Phone: +021234567890</h4>
                                <h4 style={{ color: 'black' }} className='bukra-regular'>E-Mail: test@email.com</h4>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                            <div className="footer-grid-col">

                                <h2 style={{ color: 'black', fontWeight: 'bolder' }} className='bukra-bold'>Our Services</h2>
                                <br></br>

                                    <Button className='footer-link' variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                        <h4 className='bukra-regular'>Strategic Plan</h4>
                                    </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4 className='bukra-regular'>Marketing Management</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4 className='bukra-regular'>HR Management</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4 className='bukra-regular'>Finance and Accounting</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4 className='bukra-regular'>BMC Toolbox</h4>
                                </Button>
                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div >
        )
    }
}
