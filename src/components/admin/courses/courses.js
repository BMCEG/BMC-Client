import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './courses.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
export default class Courses extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteCourse = this.handleDeleteCourse.bind(this);

        this.state = {
            courses: [],
        }
    }

    async handleDeleteCourse(courseID) {
        await axios.post(`${endpoint}/courses/${courseID}/delete`)
        .then((res) => {
            alert("Course deleted successfully");
            this.setState({
                courses: res.data
            })

        })
        .catch((err) => {
            console.log(err);
        })
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/courses/`)
            .then((res) => {
                this.setState({
                    courses: res.data
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
                                <th>Title</th>
                                <th>Trainer</th>
                                <th>Description</th>
                                <th>Fees</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.courses.map((course, index) => (
                                <tr className="admin-table-row" key={index}>
                                    <td>{index + 1}</td>
                                    <td width='10%'><h5>{course.displayTitle}</h5></td>
                                    <td width='10%'><h5>{course.trainer.firstName} {course.trainer.lastName}</h5></td>
                                    <td><h5>{course.description}</h5></td>
                                    <td><h5>{course.fees}</h5></td>
                                    <td style={{ width: '15%' }}><div className='admin-contacts-row-btn'>
                                        <Button variant='success' href={`/admin/courses/${course._id}`}  style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faPencilAlt} size='sm' />
                                            <h6>Edit</h6>
                                        </Button>
                                        <Button variant='danger' onClick={() => this.handleDeleteCourse(course._id)} style={{ width: '100%' }}>
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
