import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faClock } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import './blog.css'
import axios from 'axios';
import endpoint from '../../helpers/api_service';
import { Grid } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.setSelectedItem = this.setSelectedItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        // this.lmao = this.lmao.bind(this);
        this.state = {
            blogID: props.match.params.blogID,
            blog: {},
            blogs: [],
            homepageContext: "",
            navbarContext: ""
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/blogs/${this.state.blogID}`)
            .then((res) => {
                this.setState({
                    blog: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })

        await axios.get(`${endpoint}/blogs/`)
            .then((res) => {
                const blogs = res.data.filter(blog => blog._id !== this.state.blogID);
                this.setState({
                    blogs
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleClick = async (e) => {
        window.location.href=`/blogs/${e.target.value}`
    }

    setSelectedItem(homepageContext, navbarContext) {
        this.setState({
            homepageContext: homepageContext,
            navbarContext: navbarContext
        })
    // history.push('/');
    window.location.href="/"
    this.props.handleSelectedContext(homepageContext, navbarContext)
    }
    render() {
        return (
            <div style={{ backgroundImage: `url(${endpoint}/bg-our-story.png)`, backgroundSize: 'cover'}}>
                <div className="blog-root">
                    <div className='blog-grid'>
                        <div className='blog-img-base'>
                            <img className='blog-img' src={`${endpoint}/images/${this.state.blog.image}`} alt={this.state.blog.title} />
                        </div>
                        <div className='blog-title bukra-bold'>
                            <h1>{this.state.blog.title}</h1>
                        </div>
                        <div className="blogs-ticket bukra-bold">
                            <div className="blogs-author">
                                <FontAwesomeIcon icon={faUserCircle} style={{ marginRight: '5px' }} />
                                <h6>{this.state.blog.author}</h6>
                            </div>
                            <div className="blogs-date">
                                <FontAwesomeIcon icon={faClock} style={{ marginRight: '5px' }} />
                                <h6>{moment(this.state.blog.dateCreated).format('DD MMM, YYYY')}</h6>
                            </div>
                        </div>
                        <div className='blog-post bukra-regular lspacing'>
                            <h5>{this.state.blog.post}</h5>
                        </div>
                    </div>
                    <div className='recent-blog-grid'>
                        <h3 className='bukra-bold'>Recent Blogs</h3>
                        {this.state.blogs.map((blog) => (
                            <div className='recent-blog'>
                                <Grid container>
                                    <Grid item xs={5} >
                                    <img src={`${endpoint}/images/${blog.image}`} alt={blog.title} className='recent-blog-img' />
                                    </Grid>
                                    <Grid item xs={1}>
                                    </Grid>
                                    <Grid item xs={6} className="recent-blog-title">
                                        <h4  className='bukra-bold'>{blog.title}</h4>
                                        <h6  className='bukra-bold'>{moment(this.state.blog.dateCreated).format('DD MMM, YYYY')}</h6>
                                        <Button variant="danger" value={blog._id} onClick={this.handleClick}>
                                            Read More
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        )
    }
}
