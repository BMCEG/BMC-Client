import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import './footer.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../helpers/api_service';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-root">
                <div className="footer-margin">
                    <Grid container>
                        <Grid item xs={3} className='footer-logo-base'>
                            <img className='footer-logo' src={`${endpoint}/images/logo.png`} alt='logo' />
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                            <div className="footer-grid-col">
                                <h2 style={{ color: 'black', fontWeight: 'bolder' }} className='bukra-bold'>Business Map Consultants</h2>
                                <br></br>
                                <br></br>
                                <h5 style={{ color: 'black' }}   className='bukra-regular'>B103 90th Road, 5th Settlement,</h5>
                                <h5 style={{ color: 'black' }}   className='bukra-regular'>New Cairo, 11835</h5>
                                <br></br>
                                <h4 style={{ color: 'black' }} className='bukra-regular'>Phone: 010 0822 4224</h4>
                                <h4 style={{ color: 'black' }} className='bukra-regular'>E-Mail: info@bmceg.com</h4>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                            <div className="footer-grid-col">

                                <h2 style={{ color: 'black', fontWeight: 'bolder' }} className='bukra-bold'>Our Services</h2>
                                <br></br>

                                <Button className='footer-link' variant="link" onClick={() => window.location.href = '/services/strategic'} >
                                    <h4 className='bukra-regular'>Strategic Plan</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => window.location.href = '/services/marketingMgmt'} >
                                    <h4 className='bukra-regular'>Marketing Management</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => window.location.href = '/services/hr'}>
                                    <h4 className='bukra-regular'>HR Management</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => window.location.href = '/services/financial'} >
                                    <h4 className='bukra-regular'>Finance and Accounting</h4>
                                </Button>
                                <br></br>
                                <Button variant="link" className='footer-link' onClick={() => window.location.href = '/services/toolbox'} >
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
