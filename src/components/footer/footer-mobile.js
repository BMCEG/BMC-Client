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
                            <h3 className='bukra-bold' style={{ color: 'black', fontWeight: 'bolder' }}>Business Map Consultants</h3>
                            <br></br>
                            <h6  className='bukra-regular' style={{ color: 'black' }}>Lorem Street</h6>
                            <h6  className='bukra-regular' style={{ color: 'black' }}>New Cairo, Cairo, Egypt</h6>
                            <br></br>
                            <h6 className='bukra-regular' style={{ color: 'black' }}>Phone: +021234567890</h6>
                            <h6 className='bukra-regular' style={{ color: 'black' }}>E-Mail: test@email.com</h6>
                        </Grid>
                        {/* <Grid item xs={1}></Grid> */}
                        {/* <Grid item xs={3}>
                            <h2 style={{ color: 'black', fontWeight: 'bolder' }}>Our Services</h2>
                            <br></br>
                            <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                <h4>Multimedia Management</h4>
                            </Button>
                            <br></br>
                            <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                <h4>Web Development</h4>
                            </Button>
                            <br></br>
                            <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                <h4>Product Management</h4>
                            </Button>
                            <br></br>
                            <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                <h4>Marketinv</h4>
                            </Button>

                        </Grid> */}
                        {/* <Grid item xs={3}>
                            <h2 style={{ color: 'black', fontWeight: 'bolder' }}>Social Media</h2>
                            <br></br>
                            <div style={{ float: 'left' }}>

                                <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4><FontAwesomeIcon icon={faFacebook} size={'2x'} /> Facebook</h4>
                                </Button>
                            </div>
                            <div style={{ float: 'left' }}>
                                <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4><FontAwesomeIcon icon={faInstagram} size={'2x'} /> Instagram</h4>
                                </Button>
                            </div>
                            <div style={{ float: 'left' }}>
                                <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4><FontAwesomeIcon icon={faLinkedin} size={'2x'} /> LinkedIn</h4>
                                </Button>
                            </div>
                            <div style={{ float: 'left' }}>
                                <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4><FontAwesomeIcon icon={faTwitter} size={'2x'} /> Twitter</h4>
                                </Button>
                            </div>
                            <div style={{ float: 'left' }}>
                                <Button variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                                    <h4><FontAwesomeIcon icon={faYoutube} size={'2x'} /> Youtube</h4>
                                </Button>
                            </div>
                        </Grid> */}
                        {/* <Grid item xs={5}>
                            <h2>Our Newsletter</h2>
                            <br></br>
                            <h4>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</h4>
                            <br></br>
                            <TextField label="Enter your E-Mail" variant='outlined' />
                            <Button variant="danger" >Subscribe</Button>
                        </Grid> */}
                    </Grid>
                </div>
            </div >
        )
    }
}
