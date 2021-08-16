import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import endpoint from '../../../helpers/api_service';
import './homepage.css';
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
                    <br></br>
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
                    <hr></hr>
                    {/* <br></br> */}
                    <div className="home-service-ewings">
                        <p className='bukra-bold home-service-text-ewings ewings-color' style={{ textAlign: 'center' }}>
                            Digital Marketing
                        </p>
                        <br></br>
                        <p className='bukra-regular ewings-home-service-text-desc ewings-color'>All marketing initiatives that involve an electronic device or the internet are referred to as digital marketing. To engage with present and potential customers, businesses use digital channels such as search engines, social media, email, and their websites.</p>
                    </div>
                    <div className="home-service-ewings">
                        <p className='bukra-bold home-service-text-ewings ewings-color' style={{ textAlign: 'center' }}>
                            Multimedia Production
                        </p>
                        <br></br>
                        <p className='bukra-regular ewings-home-service-text-desc ewings-color'>Multimedia is a type of media that uses a variety of information content and processing methods (for example, text, audio, graphics, animation, video, and interactivity) to inform or entertain the user.</p>
                        <br></br>
                    </div>
                    <div className="home-service-ewings">
                        <p className='bukra-bold home-service-text-ewings ewings-color' style={{ textAlign: 'center' }}>
                            Social Media and Creative Content & Management
                        </p>
                        <p className='bukra-regular ewings-home-service-text-desc ewings-color'>A social media platform is an online platform that users use to develop social networks or relationships with others that share similar personal or professional interests, hobbies, backgrounds, or real-life connections. Social networks have a huge impact on young people. It's becoming evident that social media has become an integral component of people's lives.</p>
                        <br></br>
                    </div>
                    <div className="home-service-ewings">

                        <p className='bukra-bold home-service-text-ewings ewings-color' style={{ textAlign: 'center' }}>
                            Media Planning and Buying</p>
                        <p className='bukra-regular ewings-home-service-text-desc ewings-color'>Any media or advertising agency's two most critical tasks are media planning and buying. An advertising agency's media planning and buying activities decide the combination of media, frequency of the commercial, or awareness campaign for an effective brand promotion at the best price.
                        </p>
                        <br></br>
                    </div>
                    <div className="home-service-ewings">

                        <p className='bukra-bold home-service-text-ewings ewings-color' style={{ textAlign: 'center' }}>
                            Web Development
                        </p>
                        <p className='bukra-regular ewings-home-service-text-desc ewings-color'>Websites serve as a conduit between individuals seeking to contribute information and others seeking to absorb it. If you run a business, having a website to publicize your products and reach out to potential clients on a global scale is nearly a requirement.</p>
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}
