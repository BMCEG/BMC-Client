import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import endpoint from '../../../helpers/api_service';
import './homepage.css';
import Carousel from 'react-bootstrap/esm/Carousel';
export default class homepageMob extends Component {
    constructor(props) {
        super(props)

        this.state = {
            array: [
                {
                    title: 'About Us',
                    post: "Ewings is a digital marketing agency that was founded in 2014, we are here to help B2B and B2C companies reach their highest marketing goals. We rely on our hardworking team with their years of experience in marketing management to expand, and improve our client’s marketing goals. We offer tailored services according to our client's needs and their position in the market, such as, digital marketing, multimedia production, social media and creative content, web development, and media management and buying."
                },
                {
                    title: 'Mission:',
                    post: "Our deepest purpose is to be the leading digital marketing agency in the MENA, as an agency that is helping to support and have full control over the marketing management for your company."
                },
                {
                    title: 'Vision:',
                    post: "Being the most professional, trusted, and “go to'' digital marketing agency to a wide rangeo of companies that provides all marketing services in the most unique, tailored, and executive ways."
                },
                {
                    title: 'Values:',
                    post: "Ewings will give you the most unexpected outcomes that will take your company’s marketing to another level. Moreover, you will be provided with the best experience in working with Ewings, because we are keen to make the client feel comfortable and satisfied with our services."
                },
                {
                    title: 'Our Promise:',
                    post: "Ewings will personalize and provide you with the best service possible to assist your company in achieving maximum performance and expansion. The value you'll obtain will always be above your expectations with our experts in the marketing feild."
                },
            ]

        }
    }

    render() {
        return (
            <div className='ewings-homepage-root-mob'>
                <div className='ewings-player'>
                    <ReactPlayer
                        // className="react-player"
                        url={`${endpoint}/ewings-homepage.mp4`}
                        width="100%"
                        height="80%"
                        loop={true}
                        controls={false}
                        muted="true"
                        volume="0"
                        autoplay
                        playsinline
                        playing="true"
                    />
                </div>
                <div className='ewings-homepage-text-mob'>
                    <h3 className='bukra-bold'>About Us</h3>
                    <h5 className='bukra-regular'>Ewings is a digital marketing agency that was founded in 2014, we are here to help B2B and B2C companies reach their highest marketing goals. We rely on our hardworking team with their years of experience in marketing management to expand, and improve our client’s marketing goals. We offer tailored services according to our client's needs and their position in the market, such as, digital marketing, multimedia production, social media and creative content, web development, and media management and buying.</h5>
                    <br></br>
                    <h3 className='bukra-bold'>Mission</h3>
                    <h5 className='bukra-regular'>Our deepest purpose is to be the leading digital marketing agency in the MENA, as an agency that is helping to support and have full control over the marketing management for your company.</h5>
                    <br></br>
                    <h3 className='bukra-bold'>Vision</h3>
                    <h5 className='bukra-regular'>Being the most professional, trusted, and “go to'' digital marketing agency to a wide rangeo of companies that provides all marketing services in the most unique, tailored, and executive ways.</h5>
                    <br></br>
                    <h3 className='bukra-bold'>Values</h3>
                    <h5 className='bukra-regular'>Ewings will give you the most unexpected outcomes that will take your company’s marketing to another level. Moreover, you will be provided with the best experience in working with Ewings, because we are keen to make the client feel comfortable and satisfied with our services.</h5>
                    <br></br>
                    <h3 className='bukra-bold'>Our Promise</h3>
                    <h5 className='bukra-regular'>Ewings will personalize and provide you with the best service possible to assist your company in achieving maximum performance and expansion. The value you'll obtain will always be above your expectations with our experts in the marketing feild.</h5>
                    <br></br>
                    {/* <Carousel>
                    {/* <Carousel>
                        {this.state.array.map((el) => (

                        <Carousel.Item className='carousel-item' indicators={false} controls={false} wrap={true}>
                            <h2>{el.title}</h2>
                            <br></br>
                            <h4>{el.post}</h4>
                        </Carousel.Item>
                        ))}
                    </Carousel> */}

                </div>
            </div>
        )
    }
}
