import React, { Component } from 'react'
import './SocialMediaMGMT.css'
import { Typography } from '@material-ui/core'
import MediaQuery from 'react-responsive'
import endpoint from '../../../../helpers/api_service'
export default class SocialMediaMGMT extends Component {
    render() {
        return (
            <div className='ewings__digitalM__root'>
                <div className='ewings__digitalM__banner'>
                    <img className='ewings__digitalM__banner__img' src={`${endpoint}/SocialMedia-H.png`} alt='banner' />
                    <div className='ewings__banner__title' style={{
                        backgroundImage: `url(${endpoint}/ewings-header.png  )`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center'
                    }}>
                        <div className='ewings__stamp' style={{ backgroundImage: `url(${endpoint}/ewings-stamp.png)`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPositionX: 'center' }}>

                            <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                                SOCIAL MEDIA MANAGEMENT
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className='ewings__digitalM__body'>
                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        SOCIAL MEDIA MANAGEMENT:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        A social media platform is an online platform that users use to develop social networks or relationships with others that share similar personal or professional interests, hobbies, backgrounds, or real-life connections. Social networks have a huge impact on young people. It's becoming evident that
                        social media has become an integral component of people's lives.
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Many teenagers check Tweets and status updates from their friends and family on their laptops,
                        tablet computers, and smartphones. People are being driven to accept alternative lifestyles as a
                        result of technological advancements. Social networking platforms can help young individuals improve their social skills. Social media is a type of web-based data transmission. Users can hold conversations, share information, and produce web content on social media sites. Blogs, microblogs,
                        wikis, social networking sites, photo-sharing sites, instant messaging, video-sharing sites, podcasts,
                        widgets, virtual worlds, and other kinds of social media are among them. Hundreds of millions of individuals use social media to share knowledge and build connections all over the world.
                    </Typography>
                    <br></br>
                    <hr className='ewings__service__hr'></hr>
                    <br></br>
                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        POPULAR SOCIAL MEDIA SITES:
                    </Typography>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='ewings__socialMediaMGMT__sites__row'>
                        <div className='ewings__socialMediaMGMT__sites__row__img__base'>
                            <img className='ewings__socialMediaMGMT__sites__row__img' src={`${endpoint}/Facebook 350X350.png`} alt='Facebook' />
                        </div>
                        <div className='ewings__socialMediaMGMT__sites__row__text'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                FACEBOOK:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                This is the Internet's most popular social media network, both in terms
                                of overall users and brand recognition. Since its inception on February 4,
                                2004, Facebook has grown to over 1.59 billion monthly active users,
                                making it one of the most effective platforms for connecting people all
                                over the world with your company. In addition, More than 1 million small
                                and medium-sized businesses utilize the site to advertise their business,
                                which is unsurprising.
                            </Typography>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='ewings__socialMediaMGMT__sites__row'>
                        <div className='ewings__socialMediaMGMT__sites__row__img__base'>
                            <img className='ewings__socialMediaMGMT__sites__row__img' src={`${endpoint}/Twitter 350X350.png`} alt='Facebook' />
                        </div>
                        <div className='ewings__socialMediaMGMT__sites__row__text'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                TWITTER:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                We may believe that limiting our posts to 140 characters is no way to
                                promote our business, but we will be surprised to learn that this social
                                media platform has over 320 million monthly active users who can make
                                use of the 140 character limit to communicate information. Businesses
                                may use Twitter to communicate with potential customers, answer inquiries, and provide the latest news while also targeting ads to specific
                                audiences.
                            </Typography>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='ewings__socialMediaMGMT__sites__row'>
                        <div className='ewings__socialMediaMGMT__sites__row__img__base'>
                            <img className='ewings__socialMediaMGMT__sites__row__img' src={`${endpoint}/YouTube 350X350.png`} alt='Facebook' />
                        </div>
                        <div className='ewings__socialMediaMGMT__sites__row__text'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                YOUTUBE:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                On February 14, 2005, three former PayPal employees founded the
                                world's largest and most well-known video-based online networking service.
                                It was ultimately purchased by Google for $1.65 billion in November
                                2006. YouTube receives over 1 billion monthly visitors and is the second
                                most popular internet search engine after Google.
                            </Typography>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='ewings__socialMediaMGMT__sites__row'>
                        <div className='ewings__socialMediaMGMT__sites__row__img__base'>
                            <img className='ewings__socialMediaMGMT__sites__row__img' src={`${endpoint}/Instagram 350X350.png`} alt='Facebook' />
                        </div>
                        <div className='ewings__socialMediaMGMT__sites__row__text'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                INSTAGRAM:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                Instagram is a visual social media platform. Facebook owns the site,
                                which has more than 400 million active users. It is used by a large
                                number of its clients to share information about travel, fashion, food,
                                craftsmanship, and other similar topics. The stage is also known for its
                                incredible channels, as well as video and photograph modifying features.
                                95 percent of Instagram clients additionally utilize Facebook.
                            </Typography>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='ewings__socialMediaMGMT__sites__row'>
                        <div className='ewings__socialMediaMGMT__sites__row__img__base'>
                            <img className='ewings__socialMediaMGMT__sites__row__img' src={`${endpoint}/whatsapp 350X350.png`} alt='Facebook' />
                        </div>
                        <div className='ewings__socialMediaMGMT__sites__row__text'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                WHATSAPP:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                                Messenger is a cross-platform instant messaging app for phones,
                                computers, and tablets. To transmit photographs, texts, documents, audio,
                                and video messages to other users who have the app loaded on their
                                devices, the software requires an Internet connection. WhatsApp was
                                founded in January 2010 and purchased by Facebook for $19.3 billion on
                                February 19, 2004. Today, more than 1 billion people utilize the service to
                                communicate with their friends, family, and even business associates.
                            </Typography>
                        </div>
                    </div>

                </div>
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

            </div>
        )
    }
}
