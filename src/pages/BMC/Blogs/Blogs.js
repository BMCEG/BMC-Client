import React, { Component } from 'react'
import './Blogs.css';
import endpoint from '../../../helpers/api_service';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../components/BMC/Footer/Footer-Top';
import Moment from 'react-moment';
export default class Blogs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: []
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/blogs/`)
            .then((res) => {
                this.setState({
                    blogs: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='blogs__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        Blogs
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/images/blogs-H.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                {this.state.blogs.map((blog) => (
                    <>
                        <div className='blogs__row'>
                            <img className='blogs__row__img' src={`${endpoint}/images/${blog.image}`} alt='service' />
                            <div className='blogs__row__details'>
                                <Typography className='bmchome__service__row__details--header blogs__row__details__header--size'>
                                    {blog.title}
                                </Typography>
                                <Typography className='bmchome__service__row__details--text'>
                                    {blog.author}
                                    <br></br>
                                    <Moment format='dddd, DD/MM/YYYY'>
                                        {blog.dateCreated}
                                    </Moment>
                                </Typography>
                            </div>
                        </div>
                        <div className='bmchome__service__below'>

                            <Button className='bmchome__service__row__btn' href={`./blogs/${blog._id}`}>
                                Read More
                            </Button>
                        </div>
                        <br></br>
                        <br></br>
                    </>
                ))}
                <FooterTop />
            </div>
        )
    }
}
