import React, { Component } from 'react'
import './Careers.css'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Typography } from '@material-ui/core'
import endpoint from '../../../helpers/api_service'
import MediaQuery from 'react-responsive'

export default class CareersPosts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            posts1: [],
            posts2: []
        }
    }

    async componentDidMount() {
        // const isDesktop = useMediaQuery({ minWidth: 992 })

        await axios.get(`${endpoint}/jobs/`).then((res) => {
            const half = Math.ceil(res.data.length / 2);

            const firstHalf = res.data.slice(0, half)
            const secondHalf = res.data.slice(half, res.data.length)

            this.setState({
                posts1: firstHalf,
                posts2: secondHalf,
                posts: res.data
            })
        })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div id='careersPosts' className='careers__posts__root'>
                    <MediaQuery minWidth={1050}>
                <div className='careers__posts__left'>
                    {this.state.posts1.map((post) => (
                        <>
                            <div className='careers__posts__post'>
                                <img className='careers__posts__post__img' src={`${endpoint}/marketing-header.png`} />
                                <div className='careers__posts__post__info'>
                                    <div>
                                        <Typography className='careers__posts__post__info--header careers__posts__post__info--header--size'>
                                            {post.title}
                                        </Typography>
                                            {/* <p>You also have a huge screen</p> */}
                                        <Typography className='careers__posts__post__info--exp careers__posts__post__info--exp--size'>
                                            {post.minXP} - {post.maxXP} Years
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className='careers__posts__post__below__row'>
                                <div className='careers__posts__post__below' />
                                <Button className='careers__posts__post__btn' href={`/careers/${post._id}`}>
                                    Read More
                                </Button>
                            </div>
                        </>
                    ))}
                </div>
                <div className='careers__posts__seperator'></div>
                <div className='careers__posts__right'>
                    {this.state.posts1.map((post) => (
                        <>
                            <div className='careers__posts__post'>
                                <img className='careers__posts__post__img' src={`${endpoint}/marketing-header.png`} />
                                <div className='careers__posts__post__info'>
                                    <div>
                                        <Typography className='careers__posts__post__info--header careers__posts__post__info--header--size'>
                                            {post.title}
                                        </Typography>
                                        <Typography className='careers__posts__post__info--exp careers__posts__post__info--exp--size'>
                                            {post.minXP} - {post.maxXP} Years
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className='careers__posts__post__below__row'>
                                <div className='careers__posts__post__below' />
                                <Button className='careers__posts__post__btn' href={`/careers/${post._id}`}>
                                    Read More
                                </Button>
                            </div>
                        </>
                    ))}

                </div>
                </MediaQuery>
                    <MediaQuery maxWidth={1050}>
                <div className='careers__posts__solo'>
                    {this.state.posts.map((post) => (
                        <>
                            <div className='careers__posts__post'>
                                <img className='careers__posts__post__img' src={`${endpoint}/marketing-header.png`} />
                                <div className='careers__posts__post__info'>
                                    <div>
                                        <Typography className='careers__posts__post__info--header careers__posts__post__info--header--size'>
                                            {post.title}
                                        </Typography>
                                        <Typography className='careers__posts__post__info--exp careers__posts__post__info--exp--size'>
                                            {post.minXP} - {post.maxXP} Years
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                            <div className='careers__posts__post__below__row'>
                                <div className='careers__posts__post__below' />
                                <Button className='careers__posts__post__btn' href={`/careers/${post._id}`}>
                                    Read More
                                </Button>
                            </div>
                        </>
                    ))}
                </div>
              
                </MediaQuery>

            </div>
        )
    }
}
