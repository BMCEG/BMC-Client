import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './courses.css';
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import { Paper, TextField, Zoom, Select, MenuItem, FormControl } from '@material-ui/core';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);


        this.state = {
            courseID: props.match.params.courseID,
            course: {},
            schedules: [],
            trainer: {},
            trainers: [],

            isEditing: false,
            editedTitle: '',
            editedURLTitle: '',
            editedFees: '',
            editedDescription: '',
            editedOutline: '',
            editedMethodology: '',
            editedTrainer: '',
        }
    }

    componentDidMount = async () => {
        await axios.get(`${endpoint}/courses/id/${this.state.courseID}`)
            .then((res) => {
                this.setState({
                    course: res.data,
                    schedules: res.data.schedules,
                    trainer: res.data.trainer,

                    editedTitle: res.data.displayTitle,
                    editedURLTitle: res.data.title,
                    editedFees: res.data.fees,
                    editedDescription: res.data.description,
                    editedOutline: res.data.outline,
                    editedMethodology: res.data.methedology,
                    editedTrainer: res.data.trainer,

                })
            })
            .catch((err) => {
                console.log(err)
            })

        await axios.get(`${endpoint}/trainers`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    trainers: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleEdit() {
        this.setState({
            isEditing: true
        })
    }

    handleCancel() {
        this.setState({
            isEditing: false,
            // editedTitle: this.state.course.title,
            // editedPost: this.state.course.post,
            // editedAuthor: this.state.course.author,
        })
    }

    async handleDelete() {
        await axios.post(`${endpoint}/courses/${this.state.course._id}/delete`, {
            courseID: this.state.course._id
        })
            .then((res) => {
                alert("Course has been deleted Successfully");
                window.location.href = "/admin/courses"
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async handleConfirm() {
        const editedCourse = {
            courseID: this.state.course._id,
            editedTitle: this.state.editedURLTitle,
            editedDisplayTitle: this.state.editedTitle,
            editedDescription: this.state.editedDescription,
            editedOutline: this.state.editedOutline,
            editedMethedology: this.state.editedMethodology,
            editedTrainer: this.state.editedTrainer,
            editedFees: this.state.editedFees,
            editedSchedules: this.state.editedSchedules
        }

        await axios.post(`${endpoint}/courses/${this.state.course._id}/edit`, editedCourse)
            .then((res) => {
                alert("Course has been edited successfully");

                window.location.reload();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <>
                <NavbarAdmin isLoggedIn={true} />
                <div className='admin-course-root'>
                    <div className='admin-course-post'>
                        <Paper className='admin-course-post-paper'>
                            {this.state.isEditing ?
                                <Zoom in={this.state.isEditing}>
                                    <div>
                                        <h4>Course Name: <TextField onChange={this.handleInputChange} value={this.state.editedTitle} name='editedTitle' /></h4>
                                        <h4>URL Name: <TextField onChange={this.handleInputChange} value={this.state.editedURLTitle} name='editedURLTitle' /></h4>
                                        <br></br>
                                        <h4>Course Fees: <TextField onChange={this.handleInputChange} value={this.state.editedFees} name='editedFees' /> EGP</h4>
                                    </div>
                                </Zoom>
                                :
                                <div>
                                    <h4>Course Name: {this.state.course.displayTitle}</h4>
                                    <h4>URL Name: {this.state.course.title}</h4>
                                    <br></br>
                                    <h4>Course Fees: {this.state.course.fees} EGP</h4>
                                </div>
                            }
                            <hr></hr>
                            {this.state.isEditing ?
                                <>
                                    <h4>Course Description</h4>
                                    <Zoom in={this.state.isEditing}>
                                        <TextField onChange={this.handleInputChange} value={this.state.editedDescription} name='editedDescription' variant="outlined" fullWidth multiline rows={10} />
                                    </Zoom>
                                    <br></br>
                                </>
                                :
                                <>
                                    <h4>Course Description</h4>
                                    <h5>{this.state.course.description}</h5>
                                </>
                            }
                            {this.state.isEditing ?
                                <>
                                    <h4>Course Outline</h4>
                                    <Zoom in={this.state.isEditing}>
                                        <TextField onChange={this.handleInputChange} value={this.state.editedOutline} name='editedOutline' variant="outlined" fullWidth multiline rows={10} />
                                    </Zoom>
                                    <br></br>
                                </>
                                :
                                <>
                                    <h4>Course Outline</h4>
                                    <h5>{this.state.course.outline}</h5>
                                </>
                            }
                            {this.state.isEditing ?
                                <>
                                    <h4>Course Methodology</h4>
                                    <Zoom in={this.state.isEditing}>
                                        <TextField onChange={this.handleInputChange} value={this.state.editedMethodology} name='editedMethodology' variant="outlined" fullWidth multiline rows={10} />
                                    </Zoom>
                                    <br></br>
                                </>
                                :
                                <>
                                    <h4>Course Methodology</h4>
                                    <h5>{this.state.course.methedology}</h5>
                                </>
                            }
                        </Paper>
                    </div>
                    <div className='admin-course-controls'>
                        <div className='admin-course-controls-info'>
                            {this.state.isEditing ?
                                <span style={{ display: 'flex' }}>
                                    <Zoom in={this.state.isEditing}>
                                        <FormControl fullWidth>
                                            <h4>Trainer:</h4>
                                            <Select
                                                variant="outlined"
                                                value={this.state.editedTrainer}
                                                name="editedTrainer"
                                                // label="applicationCourse"
                                                onChange={this.handleInputChange}
                                                inputProps={{ 'aria-label': 'Without label' }}
                                            >
                                                {this.state.trainers.map((trainer) => (

                                                    <MenuItem value={trainer._id}>
                                                        {trainer.firstName} {trainer.lastName}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Zoom>
                                </span>

                                :
                                <h4>Trainer: {this.state.trainer.firstName} {this.state.trainer.lastName}</h4>
                            }
                            <hr></hr>
                            <h3>Course Schedules</h3>
                            {this.state.schedules.map((schedule) => (
                                <>
                                    <div className='course-page-schedule'>
                                        <div className='course-page-schedule-left'>
                                            <h5>Start Date:  <Moment format='dddd DD MMMM, YYYY'>
                                                {schedule.startDate}
                                            </Moment>
                                            </h5>
                                            <h5>End Date: <Moment format='dddd DD MMMM, YYYY'>
                                                {schedule.endDate}
                                            </Moment></h5>
                                            <h5>Duration: {schedule.duration} month(s)</h5>
                                        </div>
                                        <div className='course-page-schedule-right'>
                                            <h5>Dates</h5>
                                            {schedule.dates.map((date) => (
                                                <div className='course-page-schedule-weekdays'>
                                                    <h6>Weekday: {date.weekday}</h6>
                                                    <h6>Start Hour: {date.startHour}</h6>
                                                    <h6>End Hour: {date.endHour}</h6>
                                                    <h6>Duration: {date.duration} hour(s)</h6>

                                                </div>))}
                                        </div>
                                    </div>
                                    <hr></hr>
                                </>
                            ))}
                        </div>
                        <br></br>

                        {this.state.isEditing ?
                            <Zoom in={this.state.isEditing}>
                                <div className='admin-course-controls-btn-groups'>
                                    <div className='admin-course-controls-btn-base'>
                                        <Button className='admin-course-controls-btn-confirm' onClick={this.handleConfirm}>Confirm</Button>
                                    </div>
                                    <div className='admin-course-controls-btn-base'>
                                        <Button className='admin-course-controls-btn-cancel' onClick={this.handleCancel}>Cancel</Button>

                                    </div>
                                </div>
                            </Zoom>
                            :
                            // <Zoom in={!this.state.isEditing}>
                            <div className='admin-course-controls-btn-groups'>
                                <div className='admin-course-controls-btn-base'>
                                    <Button className='admin-course-controls-btn-edit' onClick={this.handleEdit}>Edit</Button>
                                </div>
                                <div className='admin-course-controls-btn-base'>
                                    <Button className='admin-course-controls-btn-delete' onClick={this.handleDelete}>Delete</Button>
                                </div>
                            </div>
                            // </Zoom>
                        }
                    </div>
                </div>
            </>)
    }
}