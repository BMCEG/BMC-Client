import React, { Component } from 'react'
import axios from 'axios';
import endpoint from '../../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import './blogs.css';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Paper, Grid } from '@material-ui/core';

export default class Blogs extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            blogs: [],
        }
    }

    handleClick = (e) => {
        // <Redirect push to="/blogs/${e.target.value}" />

        window.location.href = `blogs/${e.target.value}`
    }

    async componentDidMount() {

        await axios.get(`${endpoint}/blogs/`)
            .then((res) => {
                // const half = Math.ceil(res.data.length / 2);

                // const firstHalf = res.data.slice(0, half)
                // const secondHalf = res.data.slice(half, res.data.length)

                this.setState({
                    blogs: res.data,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div style={{ backgroundImage: `url(${endpoint}/bg-our-story.png)`, backgroundSize: 'cover' }}>
                <div className="blogs-root">
                    {/* <h1>Blogs</h1> */}
                    {this.state.blogs.map((blog) => (
                        <Paper className='blogs-card-mobile'>
                            <div>
                                <img src={`${endpoint}/${blog.image}`} alt={blog.title} className='blogs-img-mobile' />
                            </div>
                            <div className='blogs-card-info-mobile'>
                                <h3 className='bukra-bold'>{blog.title}</h3>
                                <div className="blogs-ticket">
                                    <div className="blogs-author">
                                        <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '5px' }} />
                                        <h6 className='bukra-regular'>{blog.author}</h6>
                                    </div>
                                    <div className="blogs-date">
                                        <FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} />
                                        <h6 className='bukra-regular'>{moment(blog.dateCreated).format('DD MMM, YYYY')}</h6>
                                    </div>
                                </div>
                                <div className='blogs-inner-text bukra-regular'>
                                    {blog.post}
                                </div>
                                <br></br>
                                <div className='blogs-btn-mobile'>

                                    <Button variant="danger" value={blog._id} onClick={this.handleClick}>Read More</Button>
                                </div>

                            </div>
                        </Paper>
                    ))}
                </div>
            </div>

        )
    }
}
