import React, { Component } from 'react'
import './Blogs.css';
import endpoint from '../../../helpers/api_service';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../components/BMC/Footer/Footer-Top.js';
import Moment from 'react-moment';
export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogID: props.match.params.blogID,
            blog: {},
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
    }


    render() {
        return (
            <div className='blogs__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        {this.state.blog.title}
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/images/${this.state.blog.image}`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__body'>
                    <Typography className='strategic-planning__body--text lspacing'>
                        {this.state.blog.post}
                    </Typography>
                </div>
                {/* <br></br> */}
                <div className='strategic-planning__body'>
                    <hr></hr>
                    <Typography className='strategic-planning__body--text lspacing'>
                        Written By: {this.state.blog.author}
                        {/* <br></br> */}
                    </Typography>
                    <Typography className='strategic-planning__body--text lspacing'>
                        <Moment format='DD MMMM, YYYY'>
                            {this.state.blog.dateCreated}
                        </Moment>
                        {/* <br></br> */}
                    </Typography>
                </div>

                <FooterTop />
            </div>
        )
    }
}
