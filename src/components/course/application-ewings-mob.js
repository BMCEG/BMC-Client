import React, { Component } from 'react';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import './application.css';
import axios from 'axios';
import endpoint from '../../helpers/api_service';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';

export default class Application extends Component {
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleApply = this.handleApply.bind(this);

        this.state = {
            // courseName: this.props.courseName,
            courses: [],
            course: this.props.course,

            applicationName: '',
            applicationEmail: '',
            applicationMobileNumber: '',
            applicationSchedule: '',
            applicationCourse: ''

        }
    }

    handleApply = async () => {
        const applicationDetails = {
            applicationName: this.state.applicationName,
            applicationSchedule: this.state.applicationSchedule,
            applicationEmail: this.state.applicationEmail,
            applicationMobileNumber: this.state.applicationMobileNumber,
            applicationCourse: this.state.applicationCourse
        }

        await axios.post(`${endpoint}/coursesApplications/create`, applicationDetails)
            .then((res) => {
                alert('Application Submitted Successfully');
                window.location.reload();
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


    async componentDidMount() {
        await axios.get(`${endpoint}/courses?company=E-Wings`)
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
            <div className="ewings-application-modal-root-mob">
                <div className="application-mob">
                    <img style={{ margin: 'auto' }} src={`${endpoint}/ewings-full-logo.png`} alt='logo' className='ewings-application-logo' />
                    <br></br>
                    <br></br>
                    <TextField name="applicationName" value={this.state.applicationFirstName} label="Name" variant="outlined" className="application-form" onChange={this.handleInputChange} />
                    <br></br>
                    <TextField name="applicationEmail" value={this.state.applicationEmail} label="E-Mail" variant="outlined" className="application-form" onChange={this.handleInputChange} />
                    <br></br>
                    <TextField name="applicationMobileNumber" value={this.state.applicationMobileNumber} label="Mobile Number" variant="outlined" className="application-form" onChange={this.handleInputChange} />
                    <br></br>
                    <FormControl className="application-form" style={{ margin: 5 }}>
                        <InputLabel id="demo-simple-select-required-label" style={{ marginLeft: 10 }}>Training Course</InputLabel>
                        <Select
                            variant="outlined"
                            value={this.state.applicationCourse}
                            name="applicationCourse"
                            onChange={this.handleInputChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="placeholder" disabled>
                                Training Course
                            </MenuItem>
                            {this.state.courses.map((course, index) => (
                                <MenuItem key={index} value={course._id}>
                                    {course.displayTitle}
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                    <br></br>
                    <FormControl style={{ margin: 5 }} className="application-form">
                        <InputLabel id="demo-simple-select-required-label" style={{ marginLeft: 10 }}>Schedule</InputLabel>
                        <Select
                            variant="outlined"
                            name="applicationSchedule"
                            value={this.state.applicationSchedule}
                            onChange={this.handleInputChange}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="placeholder" disabled>
                                Schedule
                            </MenuItem>
                            {this.state.course.schedules.map((schedule, index) => (
                                <MenuItem key={index} value={schedule._id}>
                                    From: <Moment format='DD/MM/YYYY'>
                                        {schedule.startDate}
                                    </Moment>
                                    - To: <Moment format='DD/MM/YYYY'>
                                        {schedule.endDate}
                                    </Moment>
                                </MenuItem>
                            ))}
                        </Select>

                    </FormControl>
                    <br></br>
                    <Button onClick={this.handleApply} className="application-btn">
                        Apply
                    </Button>
                </div>
            </div>
        )
    }
}
