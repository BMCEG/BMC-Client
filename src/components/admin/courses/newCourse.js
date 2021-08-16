import React, { Component } from 'react'
import './courses.css';
import { TextField, Select, MenuItem, FormControl, Grid, InputLabel } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';

export default class NewCourse extends Component {
    constructor(props) {
        super(props);
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddWeekdate = this.handleAddWeekdate.bind(this)
        this.handleAddSchedule = this.handleAddSchedule.bind(this)
        this.handleCreateCourse = this.handleCreateCourse.bind(this)
        this.handleFileSelect = this.handleFileSelect.bind(this)

        this.state = {
            schedules: [],
            weekdates: [],
            trainers: [],
            hours: [
                "00:00",
                "01:00",
                "02:00",
                "03:00",
                "04:00",
                "05:00",
                "06:00",
                "07:00",
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00"
            ],
            companies: [
                'BMC',
                'E-Wings'
            ],
            company: 'Company Name',
            startHour: '',
            endHour: '',
            scheduleFlag: false,

            imageSchedule: null,
            imageDescription: null,
            imageOutline: null,
            imageMethodology: null,
        }
    }

    handleModalOpen = async () => {
        this.setState({
            scheduleFlag: true
        })
    }

    handleModalClose = async () => {
        this.setState({
            scheduleFlag: false
        })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFileSelect = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };



    async handleAddWeekdate() {
        // alert("jsx")
        const weekdate = {
            "weekday": this.state.weekday,
            "startHour": this.state.startHour,
            "endHour": this.state.endHour,
            "duration": this.state.durationHours
        }

        this.state.weekdates.push(weekdate);
        this.setState({
            weekday: ''
        })
    }

    async handleAddSchedule() {
        const schedule = {
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "duration": this.state.durationMonths,
            "dates": this.state.weekdates,
        }

        this.state.schedules.push(schedule)
        alert("Schedule Added");
        this.setState({
            scheduleFlag: false
        })

    }

    async handleCreateCourse() {
        let images = [
            {
                'src': this.state.imageOutline,
                'name': 'imageOutline'
            },
            {
                'src': this.state.imageDescription,
                'name': 'imageDescription'
            },
            {
                'src': this.state.imageMethodology,
                'name': 'imageMethodology'
            },
            {
                'src': this.state.imageSchedule,
                'name': 'imageSchedule'
            }
        ];

        let imagesPaths = [];

        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append("image", images[i].src);

            await axios
                .post(`${endpoint}/courses/addImage`, formData, {
                    headers: { "content-type": "multipart/form-data" },
                })
                .then((res) => {
                    imagesPaths.push({
                        'name': images[i].name,
                        'src': res.data.filename
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        // console.log(imagesPaths);

        const course = {
            "title": this.state.urlName,
            "displayTitle": this.state.courseName,
            "company": this.state.company,
            'description': this.state.courseDescription,
            'trainer': this.state.courseTrainer,
            'outline': this.state.courseOutline,
            'methedology': this.state.courseMethodology,
            'fees': this.state.courseFees,
            'schedules': this.state.schedules,
            'images': imagesPaths
        }

        await axios.post(`${endpoint}/courses/create`, course)
            .then((res) => {
                alert("Course Created Successfully")
            })
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/trainers/`)
            .then((res) => {
                this.setState({
                    trainers: res.data
                })
                console.log(this.state)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='course-create-root'>
                <div className="course-create-base" style={{ backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover' }}>
                    <div className='course-create-form'>
                        <div className='course-create-form-left'>
                            <TextField fullWidth variant='outlined' name="courseName" value={this.state.courseName} onChange={this.handleInputChange} label='Course Name' />
                            <br></br>
                            <br></br>
                            <TextField fullWidth variant='outlined' name="urlName" value={this.state.urlName} onChange={this.handleInputChange} label='URL Name' />
                            <br></br>
                            <br></br>
                            <FormControl fullWidth>
                                
                            <InputLabel htmlFor="outlined-age-native-simple">Company Name</InputLabel>
                            <Select
                                variant="outlined"
                                
                                value={this.state.company}
                                name="company"
                                label="Company Name"
                                onChange={this.handleInputChange}
                                // inputProps={{ 'aria-label': 'Without label' }}
                                >   
                                    <MenuItem disabled selected>
                                        Company Name
                                    </MenuItem>
                                {this.state.companies.map((company) => (
                                    <MenuItem value={company}>
                                        {company}
                                    </MenuItem>
                                ))}
                            </Select>
                                </FormControl>
                            <br></br>
                            <hr></hr>
                            <h5>Course Description</h5>
                            <TextField fullWidth variant='outlined' name="courseDescription" value={this.state.courseDescription} onChange={this.handleInputChange} label='Course Description' multiline rows={6} />
                            <br></br>
                            <br></br>
                            <form encType="multipart/form-data">
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    filename="imageDescription"
                                    name="imageDescription"
                                    onChange={this.handleFileSelect}
                                />
                            </form>
                            <hr></hr>
                            <h5>Course Outline</h5>
                            {/* <TextField fullWidth variant='outlined' name="courseDescription" value={this.state.courseDescription} onChange={this.handleInputChange} label='Course Description' multiline rows={6} /> */}
                            <TextField fullWidth variant='outlined' name="courseOutline" value={this.state.courseOutline} onChange={this.handleInputChange} label='Course Outline' multiline rows={6} />
                            <br></br>
                            <br></br>
                            <form encType="multipart/form-data">
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    filename="imageOutline"
                                    name="imageOutline"
                                    onChange={this.handleFileSelect}
                                />
                            </form>
                            <hr></hr>

                            {/* <TextField fullWidth variant='outlined' name="courseOutline" value={this.state.courseOutline} onChange={this.handleInputChange} label='Course Outline' multiline rows={6} /> */}
                            {/* <TextField fullWidth variant='outlined' name="courseMethodology" value={this.state.courseMethodology} onChange={this.handleInputChange} label='Course Methodology ' multiline rows={6} /> */}
                            <h5>Course Methodology</h5>
                            <TextField fullWidth variant='outlined' name="courseMethodology" value={this.state.courseMethodology} onChange={this.handleInputChange} label='Course Methodology ' multiline rows={6} />
                            <br></br>
                            <br></br>
                            <form encType="multipart/form-data">
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    filename="imageMethodology"
                                    name="imageMethodology"
                                    onChange={this.handleFileSelect}
                                />
                            </form>                            {/* <hr></hr> */}
                            {/* <TextField fullWidth variant='outlined' name="courseOutline" value={this.state.courseOutline} onChange={this.handleInputChange} label='Course Outline' multiline rows={6} /> */}

                        </div>
                        <div className='course-create-form-center'>
                            <TextField fullWidth variant='outlined' name="courseFees" value={this.state.courseFees} onChange={this.handleInputChange} label='Course Fees' type='number' />
                            <br></br>
                            <br></br>
                            <div className='course-create-form-schedules'>
                                <Button className='course-create-form-btn' variant='danger' onClick={this.handleModalOpen}>Add Schedule</Button>
                                <br></br>
                                <br></br>
                                <form encType="multipart/form-data">
                                    <input
                                        accept="image/*"
                                        id="contained-button-file"
                                        type="file"
                                        filename="imageSchedule"
                                        name="imageSchedule"
                                        onChange={this.handleFileSelect}
                                    />
                                </form>
                                <Modal
                                    open={this.state.scheduleFlag}
                                    onClose={this.handleModalClose}
                                    aria-labelledby="simple-modal-title"
                                    className='course-create-modal'
                                    aria-describedby="simple-modal-description"
                                >
                                    <div className='course-create-modal-body' style={{ backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover' }}>
                                        <div className='course-create-modal-body-left'>
                                            <h5>Start Date</h5>
                                            <TextField fullWidth type='date' variant='outlined' name="startDate" value={this.state.startDate} onChange={this.handleInputChange} />
                                            <br></br>
                                            <br></br>
                                            <h5>End Date</h5>
                                            <TextField fullWidth type='date' variant='outlined' name="endDate" value={this.state.endDate} onChange={this.handleInputChange} />
                                            <br></br>
                                            <br></br>
                                            <TextField fullWidth label='Duration in Months' type='number' variant='outlined' name="durationMonths" value={this.state.durationMonths} onChange={this.handleInputChange} />
                                            <br></br>
                                            <br></br>
                                            <div className='course-create-weekdate-btn-base'>
                                                <Button variant='danger' onClick={this.handleAddSchedule}>Add Schedule</Button>
                                            </div>
                                        </div>

                                        <div className='course-create-modal-body-right'>
                                            <h5>Dates</h5>
                                            <Grid container>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth >
                                                        <h6>Weekday</h6>
                                                        {/* <h6>Start Time</h6> */}
                                                        {/* <InputLabel id="demo-simple-select-required-label" style={{ marginLeft: 10 }}>Weekday</InputLabel> */}

                                                        <Select
                                                            variant="outlined"
                                                            value={this.state.weekday}
                                                            name="weekday"
                                                            // label="applicationCourse"
                                                            onChange={this.handleInputChange}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem value="Sunday">
                                                                Sunday
                                                            </MenuItem>
                                                            <MenuItem value="Monday">
                                                                Monday
                                                            </MenuItem>
                                                            <MenuItem value="Tuesday">
                                                                Tuesday
                                                            </MenuItem>
                                                            <MenuItem value="Wednesday">
                                                                Wednesday
                                                            </MenuItem>
                                                            <MenuItem value="Thursday">
                                                                Thursday
                                                            </MenuItem>
                                                            <MenuItem value="Friday">
                                                                Friday
                                                            </MenuItem>
                                                            <MenuItem value="Saturday">
                                                                Saturday
                                                            </MenuItem>
                                                        </Select>
                                                        <br></br>

                                                        <h6>End Time</h6>
                                                        <Select
                                                            variant="outlined"
                                                            value={this.state.endHour}
                                                            name="endHour"
                                                            // label="applicationCourse"
                                                            onChange={this.handleInputChange}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            {this.state.hours.map((hour) => (

                                                                <MenuItem value={hour}>
                                                                    {hour}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>                                                    </FormControl>

                                                </Grid>
                                                <Grid item xs={6}>
                                                    <FormControl fullWidth>
                                                        <h6>Start Time</h6>
                                                        <Select
                                                            variant="outlined"
                                                            value={this.state.startHour}
                                                            name="startHour"
                                                            // label="applicationCourse"
                                                            onChange={this.handleInputChange}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            {this.state.hours.map((hour) => (

                                                                <MenuItem value={hour}>
                                                                    {hour}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    <br></br>
                                                    <br></br>
                                                    <h6>Duration</h6>
                                                    <TextField fullWidth label='Duration in Hours' type='number' variant='outlined' name="durationHours" value={this.state.durationHours} onChange={this.handleInputChange} />

                                                </Grid>
                                            </Grid>
                                            <div className='course-create-weekdate-btn-base'>

                                                <Button variant='danger' className='course-create-weekdate-btn' onClick={this.handleAddWeekdate}>Add Weekdate</Button>
                                            </div>
                                            <hr></hr>
                                            <div className='course-create-weekdate-dates'>
                                                <h5>Weekdates Added</h5>

                                                {this.state.weekdates.map((weekdate) => (
                                                    <>   <div className='course-create-weekdate-base'>
                                                        <h3>{weekdate.weekday} ({weekdate.duration} Hours)</h3>
                                                        <h4>From: {weekdate.startHour}</h4>
                                                        <h4>To: {weekdate.endHour}</h4>
                                                    </div>
                                                        <br></br></>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                                <hr></hr>
                                <h5>Schedules Added</h5>
                                {this.state.schedules.map((schedule) => (
                                    <div className='course-create-schedule'>
                                        <div className='course-create-schedule-base'>

                                            <h3>({schedule.duration} Months)</h3>
                                            <h4>From: {schedule.startDate}</h4>
                                            <h4>To: {schedule.endDate}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='course-create-form-right'>
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-required-label" style={{ marginLeft: 10 }}>Course Trainer</InputLabel>

                                <Select
                                    variant="outlined"
                                    value={this.state.courseTrainer}
                                    name="courseTrainer"
                                    label="applicationCourse"
                                    onChange={this.handleInputChange}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="placeholder" disabled>
                                        Course Trainer
                                    </MenuItem>
                                    {this.state.trainers.map((trainer, index) => (
                                        <MenuItem key={index} value={trainer._id}>
                                            {trainer.firstName} {trainer.lastName}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <div className='course-create-weekdate-btn-base'>
                                <Button variant='danger' onClick={this.handleCreateCourse} className='course-create-weekdate-btn'>Create Course</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
