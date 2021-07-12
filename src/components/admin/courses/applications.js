import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './courses.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Modal, Paper } from '@material-ui/core';
import Moment from 'react-moment';

export default class Applications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applications: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/coursesApplications/`)
            .then((res) => {
                this.setState({
                    applications: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='admin-applications-root'>

                <div className='admin-blogs-table'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>E-Mail</th>
                                <th>Mobile</th>
                                <th>Course Name</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.applications.map((application, index) => (
                                <tr className="admin-table-row" key={index}>
                                    <td>{index + 1}</td>
                                    <td><h5>{application.name}</h5></td>
                                    <td><h5>{application.email}</h5></td>
                                    <td><h5>{application.mobile}</h5></td>
                                    <td><h5>{application.course.displayTitle}</h5></td>
                                    <td style={{ width: '12vw' }}><h5>
                                        <Moment format='dddd, DD/MM/YYYY'>
                                            {application.schedule.startDate}
                                        </Moment>
                                    </h5></td>
                                    <td style={{ width: '12vw' }}><h5>
                                        <Moment format='dddd, DD/MM/YYYY'>
                                            {application.schedule.endDate}
                                        </Moment>
                                    </h5></td>
                                    <td style={{ width: '7vw' }}><div className='admin-blogs-row-btn'>
                                        {/* <Button variant='danger' href={`/admin/blogs/${blog._id}`}>Go to blog</Button> */}
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
