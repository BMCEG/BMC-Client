import React, { Component } from 'react'
import axios from 'axios';
import './landing.css';
import endpoint from '../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

import CourseApplicationModalMob from '../../../components/course/application-ewings-mob.js';

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
            <div className="ewings-landing-root-mob">
                <Button className='ewings-course-fab-mob bukra-regular ' onClick={this.handleApplicationModalOpen}>
                    Apply Now
                </Button>

                <div className="ewings-landing-grid">
                    <Typography style={{
                        backgroundImage: `url(${endpoint}/ewings-stamp.png)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center'
                    }} variant='h3' component='h3' className='bukra-bold ewings-white-color course-header-mob'>{this.state.courseDetails.displayTitle}</Typography>
                </div>
                <div className='training-desc-img-base-mob'>
                    <img className='training-desc-img' src={`${endpoint}/${this.state.imageDescriptionSrc}`} alt="Trainer Avatar"></img>
                </div>
                <div className='training-desc-text-mob'>
                    <h2 className='bukra-bold ewings-green-color ewings-subtitle-mob' >Training Description</h2>
                    <br></br>
                    <h3 className='bukra-regular ewings-course-text-mob'>{this.state.courseDetails.description}</h3>
                    <br></br>
                </div>
                <div className='landing-grid-div-outline-mob    '>
                    <hr className='ewings-course-list-seperator'></hr>
                    <br></br>
                    <div className='landing-outline-grid-mob'>
                        <div className='training-outlines-img-base-mob'>
                            <img className='training-desc-img' src={`${endpoint}/${this.state.imageOutlineSrc}`} alt="Trainer Avatar"></img>
                        </div>

                        <div className='training-desc-text'>
                            <h2 className='bukra-bold ewings-green-color ewings-subtitle-mob' >Training Outline</h2>
                            <br></br>
                            <h3 className='bukra-regular ewings-course-text-outline-mob ewings-blue-color'>{this.state.courseDetails.outline}</h3>
                            <br></br>
                        </div>
                    </div>
                    <br></br>
                    <hr className='ewings-course-list-seperator'></hr>
                </div>
                <div className='training-methodology-img-base-mob'>
                    <img className='training-methodology-img-mob' src={`${endpoint}/${this.state.imageMethodologySrc}`} alt='sds' />
                    {/* <hr className='training-methodology-seperator-mob'></hr> */}
                    <div className='training-methodology-text-mob'>
                        <h2 className='bukra-bold ewings-white-color ewings-subtitle-mob'>Training Methodology</h2>
                        <br></br>
                        <h3 className='bukra-regular ewings-course-text-mob'>{this.state.courseDetails.methedology}</h3>
                    </div>
                    <br></br>
                </div>

                <div className='landing-grid-div'>
                    <div className='course-meet-trainer'>
                        <h2 className='bukra-bold course-meet-trainer-title-mob'>Meet the Trainer</h2>
                        <br></br>
                        <br></br>
                        <div className="course-trainer-avatar-base">
                            <img src={`${endpoint}/${this.state.courseTrainer.photoUrl}`} alt="Trainer Avatar" className="course-trainer-avatar"></img>
                        </div>
                        <br></br>
                        <br></br>
                        <h3 className='bukra-medium course-meet-trainer-title-mob'>{this.state.courseTrainer.firstName} {this.state.courseTrainer.lastName}</h3>
                    </div>
                </div>
                <br></br>
                <div className='training-desc-text-mob'>
                    <h2 className='bukra-bold ewings-green-color ewings-subtitle-mob' >Duration and Fees</h2>
                    <br></br>
                    {this.state.courseSchedules.map((schedule, index) => (
                        <div key={index} className="course-schedule-mob">

                            <h3 className='bukra-medium ewings-course-text-mob'>Fees:</h3>
                            <h4 className='bukra-regular ewings-course-text-mob'>{this.state.courseFees} EGP</h4>
                            <br></br>
                            <h3 className='bukra-medium ewings-course-text-mob'>Duration:</h3>
                            <h4 className='bukra-regular ewings-course-text-mob'>{schedule.duration} Month(s)</h4>
                            <br></br>
                            <h3 className='bukra-medium ewings-course-text-mob'>Start Date:</h3>
                            <h4 className='bukra-regular ewings-course-text-mob'> <Moment format='dddd, DD/MM/YYYY'>
                                {schedule.startDate}
                            </Moment></h4>
                            <br></br>
                            <h3 className='bukra-medium ewings-course-text-mob'>End Date:</h3>
                            <h4 className='bukra-regular ewings-course-text-mob'> <Moment format='dddd, DD/MM/YYYY'>
                                {schedule.endDate}
                            </Moment></h4>
                            <br></br>
                            <h3 className='bukra-medium ewings-course-text-mob'>Schedule:</h3>
                            {schedule.dates.map((date, index) => (
                                <div key={index} className="landing-mob-course-schedule-date-mob">
                                    <h5 className='bukra-regular'>Weekday: {date.weekday}</h5>
                                    <h5 className='bukra-regular'>Duration: {date.duration} Hours</h5>
                                    <h5 className='bukra-regular'>Starts at: {date.startHour}</h5>
                                    <h5 className='bukra-regular'>Ends at: {date.endHour}</h5>
                                    <hr></hr>
                                </div>
                            ))}


                            {index < this.state.courseSchedules.length ?
                                <br></br>
                                : null}
                        </div>
                    ))}
                </div>

                <Modal
                    className='landing-modal'
                    open={this.state.applicationModalFlag}
                    onClose={this.handleApplicationModalClose}
                    aria-labelledby="simple-modal-title"
                    style={{ display: 'flex' }}
                    aria-describedby="simple-modal-description"
                >
                    <CourseApplicationModalMob course={this.state.courseDetails} />
                </Modal>
            </div>
        )
    }
}
