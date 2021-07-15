import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import endpoint from '../../../helpers/api_service';
import './homepage.css';
import Carousel from 'react-bootstrap/esm/Carousel';
import '../../../styles.css'
import Button from 'react-bootstrap/Button';
import { Grid, Typography } from "@material-ui/core"
export default class homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [
                {
                    title: 'About Us',
                    post: `Ewings is a digital marketing agency that was founded in 2014, we are here to help B2B and B2C companies reach their highest marketing goals. \n\nWe rely on our hardworking team with their years of experience in marketing management to expand, and improve our client’s marketing goals. \n\nWe offer tailored services according to our client's needs and their position in the market, such as, digital marketing, multimedia production, social media and creative content, web development, and media management and buying.`
                },
                {
                    title: 'Mission:',
                    post: "Our deepest purpose is to be the leading digital marketing agency in the MENA, as an agency that is helping to support and have full control over the marketing management for your company. \n\n \n\n \n\n \n\n"
                },
                {
                    title: 'Vision:',
                    post: "Being the most professional, trusted, and “go to“ digital marketing agency to a wide range of companies that provides all marketing services in the most unique, tailored, and executive ways. \n\n \n\n \n\n \n\n"
                },
                {
                    title: 'Values:',
                    post: "Ewings will give you the most unexpected outcomes that will take your company’s marketing to another level. \n\nMoreover, you will be provided with the best experience in working with Ewings, because we are keen to make the client feel comfortable and satisfied with our services. \n\n \n\n \n"
                },
                {
                    title: 'Our Promise:',
                    post: "Ewings will personalize and provide you with the best service possible to assist your company in achieving maximum performance and expansion. \n\nThe value you'll obtain will always be above your expectations with our experts in the marketing feild. \n\n \n\n \n\n"
                },
            ]

        }
    }

    render() {
        return (
            <div className='ewings-homepage-root'>
                <div className='ewings-homepage-banner'>
                    <ReactPlayer
                        className="ewings-player"
                        url={`${endpoint}/ewings-homepage.mp4`}
                        width="100%"
                        height="100%"
                        loop={true}
                        controls={false}
                        muted="true"
                        volume="0"
                        autoplay
                        playsinline
                        playing="true"
                    />
                    <div className='ewings-homepage-text' style={{ marginBottom: '-460px' }}>
                        <Carousel>
                            {this.state.array.map((el) => (

                                <Carousel.Item className='carousel-item' indicators={false} controls={false} wrap={true}>
                                    <Typography className='bukra-bold' variant='h3' component='h3' style={{ color: '#103442' }}>{el.title}</Typography>
                                    <br></br>
                                    <Typography className='bukra-regular' variant='h6' component='h6' style={{ whiteSpace: 'pre-line', color: '#103442' }}>{el.post}</Typography>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <br></br>

                    </div>
                    <div className="page-margin">
                        <Grid container className='home-services-grid'>
                            <Grid item xs={6}>
                                <div className="home-service-ewings">
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <div className='home-service-icon-base'>
                                                <img className='home-service-icon' src={`${endpoint}/service-strategic-planning.png`} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='home-service-text-ewings ewings-color'>
                                                <h3 className='bukra-bold'>Digital Marketing </h3>
                                                <br></br>
                                                <h5 className='bukra-regular'>All marketing initiatives that involve an electronic device or the internet are referred to as digital marketing. To engage with present and potential customers, businesses use digital channels such as search engines, social media, email, and their websites.</h5>
                                            </div>
                                        </Grid>

                                    </Grid>
                                    <div style={{ textAlign: 'right' }}>

                                        <Button className='home-service-ewing-btn' href='/services/strategic'>Read More</Button>
                                    </div>
                                </div>
                                <div className="home-service-ewings">
                                    <Grid container>
                                        <Grid item xs={3}>

                                            <div className='home-service-icon-base'>
                                                <img className='home-service-icon' src={`${endpoint}/service-hr.png`} />
                                            </div>

                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='home-service-text-ewings ewings-color'>
                                                <h3 className='bukra-bold'>Multimedia Production</h3>
                                                <br></br>
                                                <h5 className='bukra-regular'>Multimedia is a type of media that uses a variety of information content and processing methods (for example, text, audio, graphics, animation, video, and interactivity) to inform or entertain the user.</h5>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>

                                                <Button className='home-service-ewing-btn' href='/services/hr'>Read More</Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="home-service-ewings">
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <div className='home-service-icon-base'>
                                                <img className='home-service-icon' src={`${endpoint}/service-toolbox.png`} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='home-service-text-ewings ewings-color'>
                                                <h3 className='bukra-bold'>Social Media and creative Content & Management</h3>
                                                <br></br>
                                                <h5 className='bukra-regular'>A social media platform is an online platform that users use to develop social networks or relationships with others that share similar personal or professional interests, hobbies, backgrounds, or real-life connections. Social networks have a huge impact on young people. It's becoming evident that social media has become an integral component of people's lives.</h5>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>

                                                <Button className='home-service-ewing-btn' href='/services/toolbox'>Read More</Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item xs={6}>
                                <div className="home-service-ewings">
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <div className='home-service-icon-base'>
                                                <img className='home-service-icon' src={`${endpoint}/service-marketing-mgmt.png`} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='home-service-text-ewings ewings-color'>
                                                <h3 className='bukra-bold'>Media planning and buying</h3>
                                                <br></br>
                                                <h5 className='bukra-regular'>Any media or advertising agency's two most critical tasks are media planning and buying. An advertising agency's media planning and buying activities decide the combination of media, frequency of the commercial, or awareness campaign for an effective brand promotion at the best price.
                                                </h5>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>

                                                <Button className='home-service-ewing-btn' href='/services/marketingMgmt'>Read More</Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="home-service-ewings">
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <div className='home-service-icon-base'>
                                                <img className='home-service-icon' src={`${endpoint}/service-financial.png`} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className='home-service-text-ewings ewings-color'>
                                                <h3 className='bukra-bold'>Web Development</h3>
                                                <br></br>
                                                <h5 className='bukra-regular'>Websites serve as a conduit between individuals seeking to contribute information and others seeking to absorb it. If you run a business, having a website to publicize your products and reach out to potential clients on a global scale is nearly a requirement.</h5>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>

                                                <Button className='home-service-ewing-btn' href='/services/financial'>Read More</Button>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}
