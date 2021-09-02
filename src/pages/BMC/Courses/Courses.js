import React, { Component } from 'react'
import './Courses.css'
import axios from 'axios'
import { Button } from 'react-bootstrap'
import { Typography } from '@material-ui/core'
import endpoint from '../../../helpers/api_service'
import MediaQuery from 'react-responsive'
import FooterTop from '../../../components/BMC/Footer/Footer-Top'

export default class Courses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            posts1: [],
            posts2: []
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/courses?company=BMC`).then((res) => {
            console.log(res.data)
            const half = Math.ceil(res.data.length / 2);

            const firstHalf = res.data.slice(0, half)
            const secondHalf = res.data.slice(half, res.data.length)

            this.setState({
                posts: res.data,
                posts1: firstHalf,
                posts2: secondHalf,
            })
        })
            .catch((err) => {
                console.log(err);
            })
    }
    // render() {
    render() {
        return (
            <>
            <div className='courses__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        COURSES
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <MediaQuery minWidth={900}>

                    <div className='courses__list'>
                        <div className='courses__list__left'>
                            {this.state.posts1.map((post) => (
                                <>
                                    <div className='careers__posts__post'>
                                        <img className='careers__posts__post__img' src={`${endpoint}/${post.images[0].src}`} />
                                        <div className='careers__posts__post__info'>
                                            <div>
                                                <Typography className='careers__posts__post__info--header courses__list__course__info--header--size'>
                                                    {post.displayTitle}
                                                </Typography>
                                                <Typography className='careers__posts__post__info--exp courses__list__course__info--exp--size'>
                                                    {post.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='careers__posts__post__below__row'>
                                        <div className='careers__posts__post__below' />
                                        <Button className='careers__posts__post__btn' href={`/courses/${post.title}`}>
                                            Read More
                                        </Button>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className='careers__posts__seperator'></div>
                        <div className='courses__list__right'>
                            {this.state.posts2.map((post) => (
                                <>
                                    <div className='careers__posts__post'>
                                    <img className='careers__posts__post__img' src={`${endpoint}/${post.images[0].src}`} />
                                        <div className='careers__posts__post__info'>
                                            <div>
                                                <Typography className='careers__posts__post__info--header courses__list__course__info--header--size'>
                                                    {post.displayTitle}
                                                </Typography>
                                                <Typography className='careers__posts__post__info--exp courses__list__course__info--exp--size'>
                                                    {post.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='careers__posts__post__below__row'>
                                        <div className='careers__posts__post__below' />
                                        <Button className='careers__posts__post__btn' href={`/courses/${post.title}`}>
                                            Read More
                                        </Button>
                                    </div>
                                </>
                            ))}

                        </div>

                    </div>

                </MediaQuery>
                <MediaQuery maxWidth={900}>

                    <div className='courses__list'>
                        <div className='courses__list__left'>
                            {this.state.posts.map((post) => (
                                <>
                                    <div className='careers__posts__post'>
                                        <img className='careers__posts__post__img' src={`${endpoint}/${post.images[0].src}`} />
                                        <div className='careers__posts__post__info'>
                                            <div>
                                                <Typography className='careers__posts__post__info--header courses__list__course__info--header--size'>
                                                    {post.displayTitle}
                                                </Typography>
                                                <Typography className='careers__posts__post__info--exp courses__list__course__info--exp--size'>
                                                    {post.description}
                                                </Typography>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='careers__posts__post__below__row'>
                                        <div className='careers__posts__post__below' />
                                        <Button className='careers__posts__post__btn' href={`/courses/${post.title}`}>
                                            Read More
                                        </Button>
                                    </div>
                                </>
                            ))}
                        </div>


                    </div>

                </MediaQuery>
<br></br>
<br></br>
            </div>
<FooterTop />
</>
        )
    }
}
