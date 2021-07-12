import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './partners.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Modal, Paper } from '@material-ui/core';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default class Partners extends Component {
    constructor(props) {
        super(props);
        this.handleDeletePartner = this.handleDeletePartner.bind(this);

        this.state = {
            partners: [],
        }
    }

    async handleDeletePartner(partnerID) {
        await axios.post(`${endpoint}/partners/${partnerID}/delete`)
        .then((res) => {
            alert("Partner deleted successfully");
            this.setState({
                partners: res.data
            })

        })
        .catch((err) => {
            console.log(err);
        })
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/partners/`)
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    partners: res.data
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
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>URL</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.partners.map((partner, index) => (
                                <tr className="admin-table-row" key={index}>
                                    <td>{index + 1}</td>
                                    <td><h5><img src={`${endpoint}/${partner.logo}`} alt='logo' width="100vw" /></h5></td>
                                    <td><h5>{partner.name}</h5></td>
                                    <td><h5>{partner.description}</h5></td>
                                    <td><h5>{partner.url}</h5></td>
                                    <td style={{ width: '15%' }}><div className='admin-careers-row-btn'>
                                        <Button variant='success' href={`/admin/partners/${partner._id}`} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faPencilAlt} size='sm' />
                                            <h6>Edit</h6>
                                        </Button>
                                        <Button variant='danger' onClick={() => this.handleDeletePartner(partner._id)} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faTrash} size='sm' />
                                            <h6>Delete</h6>
                                        </Button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
