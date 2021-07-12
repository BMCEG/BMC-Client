import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './courses.css'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default class Trainers extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteTrainer = this.handleDeleteTrainer.bind(this);

        this.state = {
            trainers: [],
        }
    }

    async handleDeleteTrainer(trainerID) {
        await axios.post(`${endpoint}/trainers/${trainerID}/delete`)
            .then((res) => {
                alert("Trainer deleted successfully");
                this.setState({
                    trainers: res.data
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }


    async componentDidMount() {
        await axios.get(`${endpoint}/trainers/`)
            .then((res) => {
                this.setState({
                    trainers: res.data
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
                                <th>Image</th>
                                <th>Name</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.trainers.map((trainer, index) => (
                                <tr className="admin-table-row" key={index}>
                                    <td>{index + 1}</td>
                                    <td width='15%'><img src={`${endpoint}/${trainer.photoUrl}`} alt='image' width='100%' /></td>
                                    <td><h5>{trainer.firstName} {trainer.lastName}</h5></td>
                                    <td style={{ width: '15%' }}><div className='admin-contacts-row-btn'>
                                        <Button variant='success' href={`/admin/trainers/${trainer._id}`} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faPencilAlt} size='sm' />
                                            <h6>Edit</h6>
                                        </Button>
                                        <Button variant='danger' onClick={() => this.handleDeleteTrainer(trainer._id)} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faTrash} size='sm' />
                                            <h6>Delete</h6>
                                        </Button>
                                    </div>
                                    </td>                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>            </div>
        )
    }
}
