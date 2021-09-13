import React, { Component } from 'react'
import './careers.css';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';

export default class NewPosting extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreatePosting = this.handleCreatePosting.bind(this);
        this.handleAddQualifications = this.handleAddQualifications.bind(this);
        this.handleAddResponsibilities = this.handleAddResponsibilities.bind(this);

        this.state = {
            jobTitle: '',
            jobType: '',
            jobDepartment: '',
            jobMinXP: 0,
            jobMaxXP: 3,
            jobDescription: '',
            jobResponsibilities: [],
            jobQualifications: [],
            jobMinSalary: 0,
            jobMaxSalary: 1000,

            qualification: '',
            responsibility: ''

        }
    }

    handleAddQualifications = () => {
        this.state.jobQualifications.push(this.state.qualification);
        this.setState({
            qualification: ''
        })
    }
    handleAddResponsibilities = () => {
        this.state.jobResponsibilities.push(this.state.responsibility);
        this.setState({
            responsibility: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCreatePosting = async () => {
        const newPosting = {
            jobTitle: this.state.jobTitle,
            jobType: this.state.jobType,
            jobDepartment: this.state.jobDepartment,
            jobMinXP: this.state.jobMinXP,
            jobMaxXP: this.state.jobMaxXP,
            jobMinSalary: this.state.jobMinSalary,
            jobMaxSalary: this.state.jobMaxSalary,
            jobDescription: this.state.jobDescription,
            jobResponsibilities: this.state.jobResponsibilities,
            jobQualifications: this.state.jobQualifications,
        }
        await axios.post(`${endpoint}/jobs/create`, newPosting)
            .then((res) => {
                alert('Job Posting Created Successfully');
                this.setState({
                    jobTitle: '',
                    jobType: '',
                    jobDepartment: '',
                    jobMinXP: 0,
                    jobMaxXP: 3,
                    jobDescription: '',
                    jobResponsibilities: [],
                    jobQualifications: []
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className='trainer-create-root'>
                <div className='trainer-create-base' style={{ backgroundImage: `url(${endpoint}/images/bg-founder.png)`, backgroundSize: 'cover' }}>
                    <div className='trainer-create-form'>
                        <div className='trainer-create-form-left'>
                            <TextField variant='outlined' name='jobTitle' label='Job Title' value={this.state.jobTitle} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='jobType' label='Job Type' value={this.state.jobType} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='jobDepartment' label='Job Department' value={this.state.jobDepartment} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='jobDescription' multiline rows={3} label='Job Description' value={this.state.jobDescription} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <div className='career-create-form-xp'>
                                <TextField className='career-create-form-xp-input' variant='outlined' name='jobMinXP' type="number" label='Minimum Experience' value={this.state.jobMinXP} onChange={this.handleInputChange}  />
                                <TextField className='career-create-form-xp-input' variant='outlined' name='jobMaxXP' type="number" label='Maximum Experience' value={this.state.jobMaxXP} onChange={this.handleInputChange}  />
                            </div>
                            <br></br>
                            <br></br>
                            <div className='career-create-form-xp'>
                                <TextField className='career-create-form-xp-input' variant='outlined' name='jobMinSalary' type="number" label='Minimum Salary' value={this.state.jobMinSalary} onChange={this.handleInputChange}  />
                                <TextField className='career-create-form-xp-input' variant='outlined' name='jobMaxSalary' type="number" label='Maximum Salary' value={this.state.jobMaxSalary} onChange={this.handleInputChange}  />
                            </div>
                            <div className='trainer-btn-base'>
                                <Button variant='danger' onClick={this.handleCreatePosting}>Add Trainer</Button>
                            </div>

                        </div>
                        <div className='trainer-create-form-right'>
                            <TextField variant='outlined' name='qualification' label='Required Qualification' multiline rows={3} value={this.state.qualification} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <Button variant='secondary' onClick={this.handleAddQualifications}>Add Required Qualification</Button>
                            <hr></hr>
                            <h5>Qualifications</h5>
                            {this.state.jobQualifications.map((qualification, index) => (
                                <div className='trainer-create-qualification' key={index}>
                                    <h6>
                                        {index + 1}: {qualification}
                                    </h6>
                                </div>
                            ))}
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='responsibility' label='Job Responsibility' multiline rows={3} value={this.state.responsibility} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <Button variant='secondary' onClick={this.handleAddResponsibilities}>Add Job Responsibility</Button>
                            <hr></hr>
                            <h5>Qualifications</h5>
                            {this.state.jobResponsibilities.map((responsibility, index) => (
                                <div className='trainer-create-qualification' key={index}>
                                    <h6>
                                        {index + 1}: {responsibility}
                                    </h6>
                                </div>
                            ))}
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </div>
        )
    }
}
