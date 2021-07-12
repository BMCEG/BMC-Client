import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import endpoint from '../../../helpers/api_service';
import './homepage.css';
import Carousel from 'react-bootstrap/esm/Carousel';
export default class homepage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            array : [
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
                <ReactPlayer
                    className="react-player"
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
                <div className='ewings-homepage-text' style={{marginBottom: '-460px'}}>
                    <Carousel>
                        {this.state.array.map((el) => (

                        <Carousel.Item className='carousel-item' indicators={false} controls={false} wrap={true}>
                            <h2 className='bukra-bold' style={{color:'#103442'}}>{el.title}</h2>
                            <br></br>
                            <h3 className='bukra-regular' style={{whiteSpace: 'pre-line', color:'#103442'}}>{el.post}</h3>
                        </Carousel.Item>
                        ))}
                    </Carousel>

                </div>
            </div>
        )
    }
}
