import React, { Component } from 'react'
import axios from 'axios';
import './landing.css';
import endpoint from '../../../helpers/api_service';
import { Grid, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import CourseApplicationModal from '../../../components/course/application-ewings.js';
export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.handleApplicationModalOpen = this.handleApplicationModalOpen.bind(this);
        this.handleApplicationModalClose = this.handleApplicationModalClose.bind(this);

        this.state = {
            courseName: props.match.params.courseName,
            courseDetails: {},
            courseSchedules: [],
            courseTrainer: {},
            courseFees: Number,
            courseTrainerQualifications: [],

            imageScheduleSrc: '',
            imageMethodologySrc: '',
            imageDescriptionSrc: '',
            imageOutlineSrc: '',

            applicationModalFlag: false,
        }
    }

    handleApplicationModalOpen = async () => {
        this.setState({
            applicationModalFlag: true
        })
    }
    handleApplicationModalClose = async () => {
        this.setState({
            applicationModalFlag: false
        })
    }

    async componentDidMount() {
        await axios
            .get(`${endpoint}/courses/${this.state.courseName}`)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    courseDetails: res.data,
                    courseFees: res.data.fees,
                    courseSchedules: res.data.schedules,
                    courseTrainer: res.data.trainer,
                    courseTrainerQualifications: res.data.trainer.qualifications,
                });

                for (let i = 0; i < res.data.images.length; i++) {
                    if (res.data.images[i].name === 'imageOutline') {
                        this.setState({ imageOutlineSrc: res.data.images[i].src })
                    } else if (res.data.images[i].name === 'imageSchedule') {
                        this.setState({ imageScheduleSrc: res.data.images[i].src })
                    } else if (res.data.images[i].name === 'imageMethodology') {
                        this.setState({ imageMethodologySrc: res.data.images[i].src })
                    } else if (res.data.images[i].name === 'imageDescription') {
                        this.setState({ imageDescriptionSrc: res.data.images[i].src })
                    }
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="ewings-landing-root">
                <Button className='ewings-course-fab bukra-regular ' onClick={this.handleApplicationModalOpen}>
                    Apply Now
                </Button>
                <div className="ewings-landing-grid ewings-height">
                    {/* <h1 className="bukra-bold ewings-course-text">{this.state.courseDetails.displayTitle}</h1> */}
                    <Typography style={{
                        backgroundImage: `url(${endpoint}/ewings-stamp.png)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center'
                    }} variant='h3' component='h3' className='bukra-bold ewings-white-color course-header'>{this.state.courseDetails.displayTitle}</Typography>
                    <div className='landing-grid-div'>
                        <div className='training-desc-img-base'>
                            <img className='training-desc-img' src={`${endpoint}/${this.state.imageDescriptionSrc}`} alt="Trainer Avatar"></img>
                        </div>
                        <div className='training-desc-text'>
                            <h2 className='bukra-bold ewings-green-color ewings-subtitle' >Training Description</h2>
                            <br></br>
                            <h3 className='bukra-regular ewings-course-text'>{this.state.courseDetails.description}</h3>
                            <br></br>
                            {/* <div className='landing-grid-btn-base-left'>
                                <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div> */}

                        </div>
                    </div>
                    <br></br>

                </div>
                <div className='landing-grid-div-outline ewings-height'>
                    <hr className='ewings-course-list-seperator'></hr>
                    <br></br>
                    <div className='landing-outline-grid'>

                        <div className='training-desc-text'>
                            <h2 className='bukra-bold ewings-green-color ewings-subtitle' >Training Outline</h2>
                            <br></br>
                            <h3 className='bukra-regular ewings-course-text-outline ewings-blue-color'>{this.state.courseDetails.outline}</h3>
                            <br></br>
                        </div>
                        <div className='training-outlines-img-base'>
                            <img className='training-desc-img' src={`${endpoint}/${this.state.imageOutlineSrc}`} alt="Trainer Avatar"></img>
                        </div>
                    </div>
                    <br></br>
                    <hr className='ewings-course-list-seperator'></hr>
                </div>
                <div className="ewings-landing-grid">
                    <br></br>
                    <br></br>

                        <div className='training-methodology-row'>
                            <div className='training-methodology-img-base'>
                                {this.state.courseDetails.title === 'graphic_design' ?
                                    <>
                                        <img className='training-methodology-img' src={`${endpoint}/${this.state.imageMethodologySrc}`} alt='sds' />
                                        <img className='training-methodology-img-mask' src={`${endpoint}/22222.png`} alt='sds' />
                                    </>
                                    :
                                    <img className='training-methodology-img' src={`${endpoint}/${this.state.imageMethodologySrc}`} alt='sds' />
                                }
                            </div>
                            <div className='training-methodology-seperator'></div>
                            <div className='training-methodology-text'>
                                <h2 className='bukra-bold ewings-white-color ewings-subtitle'>Training Methodology</h2>
                                <br></br>
                                <h3 className='bukra-regular ewings-course-text'>{this.state.courseDetails.methedology}</h3>
                            </div>
                        </div>

                        <br></br>
                        <hr className='ewings-course-list-seperator'></hr>
                        <br></br>
                        {/* <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                        <h2 className='bukra-bold ewings-course-text' >Training Methodology</h2>
                        <br></br>
                        <h3 className='bukra-regular ewings-course-text'>{this.state.courseDetails.methedology}</h3>
                        <br></br>
                        <div className='landing-grid-btn-base-left'>
                        <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                        </div>
                        </div>
                        <div className='landing-grid-img-base'>
                        <img className='landing-grid-img' src={`${endpoint}/${this.state.imageMethodologySrc}`} alt="Trainer Avatar"></img>
                        </div>
                        </div>
                    <hr></hr> */}
                        <div className='landing-grid-div'>
                            <div className='course-meet-trainer'>
                                <h2 className='bukra-bold course-meet-trainer-title'>Meet the Trainer</h2>
                                <br></br>
                                <br></br>
                                <div className="course-trainer-avatar-base">
                                    <img src={`${endpoint}/${this.state.courseTrainer.photoUrl}`} alt="Trainer Avatar" className="course-trainer-avatar"></img>
                                </div>
                                <br></br>
                                <br></br>
                                <h3 className='bukra-medium course-meet-trainer-title'>{this.state.courseTrainer.firstName} {this.state.courseTrainer.lastName}</h3>
                            </div>
                        </div>
                        {/* <div className='landing-grid-img-base'>
                        </div>
                        <div className='landing-grid-text'>
                        <h2 className='bukra-bold ewings-course-text'>Meet the Trainer</h2>
                        <br></br>
                            <h3 className='bukra-medium ewings-course-text'>{this.state.courseTrainer.firstName} {this.state.courseTrainer.lastName}</h3>
                            {this.state.courseTrainerQualifications.map((qual, index) => (
                                <div key={index} className="course-trainer-qualification">
                                    <h3 className='bukra-regular'>Title: {qual.title}</h3>
                                    <h3 className='bukra-regular'>Brief: {qual.brief}</h3>
                                </div>
                            ))}
                            <br></br>
                            <div className='landing-grid-btn-base-left'>
                                <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div> */}
                    
                    <br></br>
                    <hr className='ewings-course-list-seperator'></hr>
                    <br></br>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text-dates'>
                            {/* <h2 className='bukra-bold ewings-course-text' >Duration and Fees</h2> */}
                            <h2 className='bukra-bold ewings-green-color ewings-subtitle' >Duration and Fees</h2>
                            <br></br>
                            {this.state.courseSchedules.map((schedule, index) => (
                                <div key={index} className="course-schedule">
                                    <div className='ewings-course-booking-text'>
                                        <h3 className='bukra-regular ewings-course-booking-info'>Fees:- {this.state.courseFees} EGP</h3>
                                        <h3 className='bukra-regular ewings-course-booking-info'>Duration:- {schedule.duration} Month(s)</h3>
                                        <h3 className='bukra-regular ewings-course-booking-info'>Start Date:-  <Moment format='dddd, DD/MM/YYYY'>
                                            {schedule.startDate}
                                        </Moment></h3>
                                        <h5 className='bukra-regular ewings-course-booking-info'>End Date:- <Moment format='dddd, DD/MM/YYYY'>
                                            {schedule.endDate}
                                        </Moment></h5>
                                        {/* <h4 className='bukra-regular ewings-course-text'></h4> */}
                                        {/* <h3 className='bukra-medium ewings-course-text'>Duration:</h3>
                                            <h4 className='bukra-regular ewings-course-text'>{schedule.duration} Month(s)</h4>
                                            <h3 className='bukra-medium ewings-course-text'>Start Date: <Moment format='dddd, DD/MM/YYYY'>
                                                {schedule.endDate}
                                            </Moment></h3>
                                            <h4 className='bukra-regular ewings-course-text'> <Moment format='dddd, DD/MM/YYYY'>
                                                {schedule.startDate}
                                            </Moment></h4>
                                            <h3 className='bukra-medium ewings-course-text'>End Date:</h3>
                                            <h4 className='bukra-regular ewings-course-text'> <Moment format='dddd, DD/MM/YYYY'>
                                                {schedule.endDate}
                                            </Moment></h4> */}
                                    </div>
                                    <div className='ewings-course-info'>
                                        {schedule.dates.map((date, index) => (
                                            <div key={index} className="ewings-course-schedule-date">
                                                <h5 className='bukra-regular ewings-course-booking-info'>Weekday: {date.weekday}</h5>
                                                <h5 className='bukra-regular ewings-course-booking-info'>Duration: {date.duration} Hours</h5>
                                                <h5 className='bukra-regular ewings-course-booking-info'>Starts at: {date.startHour}</h5>
                                                <h5 className='bukra-regular ewings-course-booking-info'>Ends at: {date.endHour}</h5>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            {/* <br></br> */}
                        </div>
                    </div>
                    {/* <div className='landing-grid-btn-base'>
                        <Button variant="danger" className='landing-grid-btn-center' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                    </div> */}
                </div>

                <Modal
                    className='landing-modal'
                    open={this.state.applicationModalFlag}
                    onClose={this.handleApplicationModalClose}
                    aria-labelledby="simple-modal-title"
                    style={{ display: 'flex' }}
                    aria-describedby="simple-modal-description"
                >
                    <CourseApplicationModal course={this.state.courseDetails} />
                </Modal>
            </div>
        )
    }
}
