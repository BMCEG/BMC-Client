import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './blogs.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { Modal, Paper } from '@material-ui/core';
import Moment from 'react-moment';

export default class Postings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogs: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/blogs/`).then((res) => {
            // console.log(res.data)
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
            <div className='admin-postings-root'>
                <div className='admin-blogs-table'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                                <th>Title</th>
                                <th>Post</th>
                                <th>Author</th>
                                <th>Date Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.blogs.map((blog, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td style={{ width: '25vw' }}><h5>{blog.title}</h5></td>
                                    <td style={{ width: '50vw' }}><h5 className="inner-text">{blog.post}</h5></td>
                                    <td><h5>{blog.author}</h5></td>
                                    <td style={{ width: '12vw' }}><h5>
                                        <Moment format='dddd, DD/MM/YYYY'>
                                            {blog.dateCreated}
                                        </Moment>
                                    </h5></td>
                                    <td style={{width: '7vw'}}><div className='admin-blogs-row-btn'>
                                        <Button variant='danger' href={`/admin/blogs/${blog._id}`}>Go to blog</Button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>            </div>
        )
    }
}
