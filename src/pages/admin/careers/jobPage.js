import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './careers.css';
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
            postingID: props.match.params.jobID,
            posting: {},
            qualifications: [],
            responsibilities: [],

            isEditing: false,
            editedTitle: '',
            editedDepartment: '',
            editedMinXP: Number,
            editedMaxXP: Number,
            editedDescription: '',
            editedType: '',
            editedJobMinSalary: Number,
            editedJobMaxSalary: Number
        }
    }

    componentDidMount = async () => {
        await axios.get(`${endpoint}/jobs/${this.state.postingID}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    posting: res.data,
                    qualifications: res.data.qualifications,
                    responsibilities: res.data.responsibilities,

                    editedTitle: res.data.title,
                    editedDepartment: res.data.department,
                    editedMinXP: res.data.minXP,
                    editedMaxXP: res.data.maxXP,
                    editedJobMinSalary: res.data.minSalary,
                    editedJobMaxSalary: res.data.maxSalary,
                    editedDescription: res.data.description,
                    editedType: res.data.type
                })
            })
            .catch((err) => {
                console.log(err)
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
        })
    }

    async handleDelete() {
        await axios.post(`${endpoint}/jobs/${this.state.postingID}/delete`)
            .then((res) => {
                alert("Posting has been deleted Successfully");
                window.location.href = "/admin/courses"
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async handleConfirm() {
        const editedPosting = {
            jobID: this.state.postingID,
            editedJobTitle: this.state.editedTitle,
            editedJobType: this.state.editedType,
            editedJobDepartment: this.state.editedDepartment,
            editedJobMinXP: this.state.editedMinXP,
            editedJobMaxXP: this.state.editedMaxXP,
            editedJobMinSalary: this.state.editedJobMinSalary,
            editedJobMaxSalary: this.state.editedJobMaxSalary,
            editedJobDescription: this.state.editedDescription,
            editedJobResponsibilities: this.state.editedJobResponsibilities,
            editedJobQualifications: this.state.editedJobQualifications
        }

        await axios.post(`${endpoint}/jobs/${this.state.posting._id}/edit`, editedPosting)
            .then((res) => {
                alert("Posting has been edited successfully");

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
                                    <>
                                        <div>
                                            <h4>Title: <TextField onChange={this.handleInputChange} value={this.state.editedTitle} name='editedTitle' /></h4>
                                            <h5>Department: <TextField onChange={this.handleInputChange} value={this.state.editedDepartment} name='editedDepartment' /></h5>
                                            <h5>Type: <TextField onChange={this.handleInputChange} value={this.state.editedType} name='editedType' /></h5>
                                            <hr></hr>
                                        </div>
                                        <div className='admin-job-XPs'>
                                            <div style={{ marginRight: '5%' }}>
                                                <h4>Minimum Experience: <TextField type='number' onChange={this.handleInputChange} value={this.state.editedMinXP} name='editedMinXP' /></h4>
                                            </div>
                                            <div>
                                                <h4>Maximum Experience: <TextField type='number' onChange={this.handleInputChange} value={this.state.editedMaxXP} name='editedMaxXP' /></h4>
                                            </div>
                                        </div>
                                        <br></br>
                                        <div className='admin-job-XPs'>
                                            <div style={{ marginRight: '5%' }}>
                                                <h4>Minimum Salary: <TextField type='number' onChange={this.handleInputChange} value={this.state.editedJobMinSalary} name='editedJobMinSalary' /></h4>
                                            </div>
                                            <div>
                                                <h4>Maximum Salary: <TextField type='number' onChange={this.handleInputChange} value={this.state.editedJobMaxSalary} name='editedJobMaxSalary' /></h4>
                                            </div>
                                        </div>
                                        <br></br>
                                        <h4>Job Description:</h4>
                                        <TextField onChange={this.handleInputChange} value={this.state.editedDescription} name='editedDescription' variant='outlined' multiline fullWidth rows={10} />
                                    </>
                                </Zoom>
                                :
                                <>     <div className='posting-info'>
                                    <div className='posting-info-left'>
                                        <h4>Title: {this.state.posting.title}</h4>
                                        <h5>Department: {this.state.posting.department}</h5>
                                        <h5>Type: {this.state.posting.type}</h5>
                                        <hr></hr>
                                    </div>
                                </div>
                                    <div className='admin-job-XPs'>
                                        <div style={{ marginRight: '5%' }}>
                                            <h4>Minimum Experience: {this.state.posting.minXP}</h4>
                                        </div>
                                        <div>
                                            <h4>Maximum Experience: {this.state.posting.maxXP}</h4>
                                        </div>
                                    </div>
                                    <div className='admin-job-XPs'>
                                        <div style={{ marginRight: '5%' }}>
                                            <h4>Minimum Salary: {this.state.posting.minSalary}</h4>
                                        </div>
                                        <div>
                                            <h4>Maximum Salary: {this.state.posting.maxSalary}</h4>
                                        </div>
                                    </div>
                                    <br></br>
                                    <h4>Job Description:</h4>
                                    <h5>{this.state.posting.description}</h5>
                                </>}
                            {/* <br></br> */}
                            <h4>Job Responsibilities:</h4>
                            {this.state.responsibilities.map((r) => (
                                <h5>- {r}</h5>
                            ))}
                            <br></br>
                            <h4>Job Qualifications:</h4>
                            {this.state.qualifications.map((q) => (
                                <h5>- {q}</h5>
                            ))}
                            <br></br>
                        </Paper>
                    </div>
                    <div className='admin-course-controls'>

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