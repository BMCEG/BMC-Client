import React from 'react'
import './careerLanding.css'
import { Button } from 'react-bootstrap';
import { Grid, Paper } from '@material-ui/core';
import endpoint from '../../../../helpers/api_service.js'

export default function careerLanding() {
    return (
        <div className="career-landing-root" style={{ backgroundImage: `url(${endpoint}/imagesbg-our-story.png)`, backgroundSize: 'cover' }}>
            {/* <div className='career-landing-title career-landing-margins'>
                <h1>CAREERS</h1>
            </div> */}
            <div className='career-landing-banner' style={{ backgroundImage: `url(${endpoint}/imagesbg-founder.png)`, backgroundSize: 'cover' }}>
                <div className='career-landing-banner-text'>
                    <h1>Join Our Team At</h1>
                    <h1>Business Map Consultants</h1>
                    <br></br>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
                    <br></br>
                    <div className='career-landing-banner-btn'>

                        <Button href='/careers/openings' size='lg' variant='danger' style={{
                            borderRadius: '100px',
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 10,
                            paddingBottom: 10,
                            boxShadow: '2px 2px 10px black'
                        }}>View Openings</Button>
                    </div>
                </div>
                <div className='career-landing-banner-img-base'>

                    <img className='career-landing-banner-img' src={`${endpoint}/images/logo.png`} alt='Career Landing Banner' />
                </div>
            </div>
            <br></br>
            <div className='career-landing-info career-landing-margins'>
                <div className='career-landing-info-grid'>
                    <Grid container>
                        <Grid item xs={6}>
                            <Paper className='career-landing-info-grid-paper'>
                                <div style={{ display: 'flex' }}>
                                    {/* <img className='career-landing-info-grid-paper-img' src='http://cdn.onlinewebfonts.com/svg/img_148071.png' alt='placeholder' /> */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h4 style={{ paddingLeft: '20px' }}>Large Office Space</h4>
                                    </div>
                                </div>
                                <br></br>
                                <h6>Donec dui nisi, luctus quis nisl vel, efficitur ullamcorper enim. Donec posuere cursus elit. Proin finibus efficitur neque, id convallis felis scelerisque non. Aenean tempor feugiat nulla, eu tempus nibh pharetra at. Proin vel velit a tellus tincidunt malesuada vel at elit. Ut suscipit ullamcorper posuere. Nulla facilisi.</h6>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='career-landing-info-grid-paper'>
                                <div style={{ display: 'flex' }}>
                                    {/* <img className='career-landing-info-grid-paper-img' src='http://cdn.onlinewebfonts.com/svg/img_148071.png' alt='placeholder' /> */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h4 style={{ paddingLeft: '20px' }}>Great Co-Workers</h4>
                                    </div>
                                </div>
                                <br></br>
                                <h6>Donec dui nisi, luctus quis nisl vel, efficitur ullamcorper enim. Donec posuere cursus elit. Proin finibus efficitur neque, id convallis felis scelerisque non. Aenean tempor feugiat nulla, eu tempus nibh pharetra at. Proin vel velit a tellus tincidunt malesuada vel at elit. Ut suscipit ullamcorper posuere. Nulla facilisi.</h6>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={6}>
                            <Paper className='career-landing-info-grid-paper'>
                                <div style={{ display: 'flex' }}>
                                    {/* <img className='career-landing-info-grid-paper-img' src='http://cdn.onlinewebfonts.com/svg/img_148071.png' alt='placeholder' /> */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h4 style={{ paddingLeft: '20px' }}>Easy Location</h4>
                                    </div>
                                </div>
                                <br></br>
                                <h6>Donec dui nisi, luctus quis nisl vel, efficitur ullamcorper enim. Donec posuere cursus elit. Proin finibus efficitur neque, id convallis felis scelerisque non. Aenean tempor feugiat nulla, eu tempus nibh pharetra at. Proin vel velit a tellus tincidunt malesuada vel at elit. Ut suscipit ullamcorper posuere. Nulla facilisi.</h6>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className='career-landing-info-grid-paper'>
                                <div style={{ display: 'flex' }}>
                                    {/* <img className='career-landing-info-grid-paper-img' src='http://cdn.onlinewebfonts.com/svg/img_148071.png' alt='placeholder' /> */}
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h4 style={{ paddingLeft: '20px' }}>Education Opportunity</h4>
                                    </div>
                                </div>
                                <br></br>
                                <h6>Donec dui nisi, luctus quis nisl vel, efficitur ullamcorper enim. Donec posuere cursus elit. Proin finibus efficitur neque, id convallis felis scelerisque non. Aenean tempor feugiat nulla, eu tempus nibh pharetra at. Proin vel velit a tellus tincidunt malesuada vel at elit. Ut suscipit ullamcorper posuere. Nulla facilisi.</h6>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                <div className='career-landing-info-about'>
                    <div className='career-landing-info-about-title'>
                        <h2>Your Life At BMC</h2>
                    </div>
                    <br></br>
                    <div className='career-landing-info-about-body'>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pharetra nibh. Morbi id urna hendrerit, placerat dui ut, convallis orci. Duis commodo nulla faucibus erat dictum, nec bibendum massa rutrum. Quisque ullamcorper tincidunt arcu, eget efficitur elit eleifend non. Duis id semper magna. Etiam pretium malesuada fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</h4>
                        <br></br>
                        <h4>Donec dui nisi, luctus quis nisl vel, efficitur ullamcorper enim. Donec posuere cursus elit. Proin finibus efficitur neque, id convallis felis scelerisque non. Aenean tempor feugiat nulla, eu tempus nibh pharetra at. Proin vel velit a tellus tincidunt malesuada vel at elit. Ut suscipit ullamcorper posuere. Nulla facilisi.</h4>
                    </div>
                    <br></br>
                    <div className='career-landing-info-about-btn'>
                        <Button href='/about/story' size='lg' variant='danger' style={{
                            borderRadius: '100px',
                            paddingLeft: 40,
                            paddingRight: 40,
                            paddingTop: 10,
                            paddingBottom: 10,
                            boxShadow: '2px 2px 10px black'
                        }}>Our Story</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
