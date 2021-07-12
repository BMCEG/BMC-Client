import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './users.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Users extends Component {
    constructor(props) {
        super(props);

        this.handleDeleteAdmin = this.handleDeleteAdmin.bind(this);

        this.state = {
            admins: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/admins/`).then((res) => {
            this.setState({
                admins: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    async handleDeleteAdmin(adminID) {
        await axios.post(`${endpoint}/admins/${adminID}/delete`)
        .then((res) => {
            alert("Admin deleted successfully");
            this.setState({
                admins: res.data
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.admins.map((admin, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><h5>{admin.firstName} {admin.lastName}</h5></td>
                                    <td><h5>{admin.email}</h5></td>
                                    <td style={{ width: '7vw' }}><div className='admin-contacts-row-btn'>
                                        <Button variant='danger' onClick={() => this.handleDeleteAdmin(admin._id)} style={{width: '100%'}}>
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
