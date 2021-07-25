import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './careers.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default class Postings extends Component {
    constructor(props) {
        super(props);
        this.handleDeletePosting = this.handleDeletePosting.bind(this);

        this.state = {
            postings: [],
        }
    }

    async handleDeletePosting(postingID) {
        await axios.post(`${endpoint}/jobs/${postingID}/delete`)
            .then((res) => {
                alert("Posting deleted successfully");
                this.setState({
                    postings: res.data
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }


    async componentDidMount() {
        await axios.get(`${endpoint}/jobs/`)
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    postings: res.data
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
                                <th>Department</th>
                                <th>Type</th>
                                <th>Min Experience</th>
                                <th>Max Experience</th>
                                <th>Date Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.postings.map((posting, index) => (
                                <tr className="admin-table-row" key={index}>
                                    <td>{index + 1}</td>
                                    <td><h5>{posting.title}</h5></td>
                                    <td><h5>{posting.department}</h5></td>
                                    <td><h5>{posting.type}</h5></td>
                                    <td><h5>{posting.minXP}</h5></td>
                                    <td><h5>{posting.maxXP}</h5></td>
                                    <td style={{ width: '12vw' }}><h5>
                                        <Moment format='dddd, DD/MM/YYYY'>
                                            {posting.dateCreated}
                                        </Moment>
                                    </h5></td>
                                    <td style={{ width: '15%' }}><div className='admin-careers-row-btn'>
                                        <Button variant='success' href={`/admin/careers/${posting._id}`} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faPencilAlt} size='sm' />
                                            <h6>Edit</h6>
                                        </Button>
                                        <Button variant='danger' onClick={() => this.handleDeletePosting(posting._id)} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faTrash} size='sm' />
                                            <h6>Delete</h6>
                                        </Button>
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
