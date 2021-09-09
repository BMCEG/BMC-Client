import React, { Component } from 'react'
import './MultimediaProd.css'
import { Typography } from '@material-ui/core'
import MediaQuery from 'react-responsive'
import endpoint from '../../../../helpers/api_service'
export default class MultimediaProd extends Component {
    render() {
        return (
            <div className='ewings__digitalM__root'>
                <div className='ewings__digitalM__banner'>
                    <img className='ewings__multimediaProd__banner__img' src={`${endpoint}/MultiProd-H.png`} alt='banner' />
                    <div className='ewings__banner__title' style={{
                        backgroundImage: `url(${endpoint}/ewings-header.png  )`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center'
                    }}>

                        <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                            MULTIMEDIA PRODUCTION
                        </Typography>
                    </div>
                </div>
                <div className='ewings__digitalM__body'>
                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        MULTIMEDIA PRODUCTION:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Multimedia is a type of media that uses a variety of information content and processing methods
                        (for example, text, audio, graphics, animation, video, and interactivity) to inform or entertain the
                        user. The use of electronic media to store and experience multimedia content is sometimes referred to as multimedia. Multimedia is a type of fine art that is akin to traditional mixed media, but
                        with a greater scope. Moreover, "Rich media" is a word that refers to interactive multimedia.
                    </Typography>
                    <br></br>
                    <br></br>
                    <MediaQuery minWidth={1050}>

                        <div className='ewings__digitalM__body__inline'>
                            <div className='ewings__digitalM__body__inline__img--base'>
                                <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/MultiProd-IMG-1.png`} alt='digital marketing' />
                                <img className='ewings__digitalM__body__ball__img__bottom-left' src={`${endpoint}/Ball.png`} alt='ball' />
                            </div>
                            <div className='ewings__digitalM__body__inlline__text--base'>
                                <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                    Elements of Multimedia System:
                                </Typography>
                                <br></br>
                                <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                    {/* <br></br> */}
                                    1. Audio
                                    <br></br>
                                    2. Video
                                </Typography>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                        <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/MultiProd-IMG-1.png`} alt='digital marketing' />
                        <img className='ewings__digitalM__body__ball__img__bottom-left' src={`${endpoint}/Ball.png`} alt='ball' />
                        <div className='ewings__digitalM__body__inlline__text--base--mob'>
                            <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                                Elements of Multimedia System:
                            </Typography>
                            <br></br>
                            <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                {/* <br></br> */}
                                1. Audio
                                <br></br>
                                2. Video
                            </Typography>
                        </div>
                    </MediaQuery>
                    <br></br>
                    <hr className='ewings__service__hr'></hr>
                    <br></br>

                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        CATEGORIES OF MULTIMEDIA:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Multimedia can be separated into two types: linear and nonlinear. As in a movie presentation, linear
                        active content progresses without the viewer having any influence over navigation. Non-linear content, such as that found in a computer game or in self-paced computer-based training, allows users
                        to control their own development. Hypermedia content is another term for non-linear content                    </Typography>
                    <br></br>
                    <hr className='ewings__service__hr'></hr>
                    <br></br>
                    <br></br>

                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        FEATURES OF MULTIMEDIA:
                    </Typography>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Multimedia presentations can be viewed live on stage, projected on a screen, streamed over the internet, or played locally using a media player. A live or recorded multimedia presentation is referred
                        to as a broadcast. Analog or digital electronic media technology can be used for broadcasts and recordings. It is possible to download or stream digital online multimedia. Multimedia streaming
                        might be live or on-demand.
                    </Typography>
                    <br></br>
                    <MediaQuery minWidth={1050}>

                        <div className='ewings__digitalM__body__inline'>
                            <div className='ewings__digitalM__body__inline__img--base'>
                                <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/MultiProd-IMG-2.png`} alt='digital marketing' />
                                <img className='ewings__digitalM__body__ball__img__bottom-left' src={`${endpoint}/Ball.png`} alt='ball' />
                            </div>
                            <div className='ewings__digitalM__body__inlline__text--base'>
                                <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                    Multimedia games and simula
                                    tions can be played with special
                                    effects in a physical environ
                                    ment, with numerous people in
                                    an online network, or locally on a
                                    computer, gaming system
                                    or simulator.
                                </Typography>
                            </div>
                        </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                        <img className='ewings__digitalM__body__inline__img' src={`${endpoint}/MultiProd-IMG-2.png`} alt='digital marketing' />
                        <img className='ewings__digitalM__body__ball__img__bottom-left' src={`${endpoint}/Ball.png`} alt='ball' />
                        <div className='ewings__digitalM__body__inlline__text--base--mob'>

                            <Typography className='ewings__digitalM__body__inlline__text ewings__digitalM__body__text bmchome__services__text--size'>
                                Multimedia games and simula
                                tions can be played with special
                                effects in a physical environ
                                ment, with numerous people in
                                an online network, or locally on a
                                computer, gaming system
                                or simulator.
                            </Typography>
                        </div>
                    </MediaQuery>


                    {/* </div> */}
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
