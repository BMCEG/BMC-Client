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
            <div className="landing-mob-root ewings-landing-root">
                <div className="ewings-landing-mob-grid">
                    <Typography className="bukra-bold ewings-course-text landing-mob-title" variant='h3' component='h3'>
                        {this.state.courseDetails.displayTitle}
                    </Typography>
                    <br></br>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h1 className='bukra-bold ewings-course-text'>Training Description</h1>
                            <br></br>
                            <div className='landing-mob-grid-img-base'>
                                <img className='landing-grid-img' src={`${endpoint}/${this.state.imageDescriptionSrc}`} alt="Trainer Avatar"></img>
                            </div>
                            <br></br>
                            <h3 className='bukra-regular ewings-course-text'>{this.state.courseDetails.description}</h3>
                            <br></br>
                            <div className='landing-grid-btn-base'>
                                <Button variant="danger" className='landing-mob-grid-btn bukra-regular' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h1 className='bukra-bold ewings-course-text'>Training Outline</h1>
                            <br></br>
                            <div className='landing-mob-grid-img-base'>
                                <img className='landing-grid-img' src={`${endpoint}/${this.state.imageOutlineSrc}`} alt="Trainer Avatar"></img>
                            </div>
                            <br></br>
                            <h3 className='bukra-regular ewings-course-text'>{this.state.courseDetails.outline}</h3>
                            <br></br>
                            <div className='landing-grid-btn-base'>
                                <Button variant="danger" className='landing-mob-grid-btn bukra-regular' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h1 className='bukra-bold ewings-course-text'>Training Methodology</h1>
                            <br></br>
                            <div className='landing-mob-grid-img-base'>
                                <img className='landing-grid-img' src={`${endpoint}/${this.state.imageMethodologySrc}`} alt="Trainer Avatar"></img>
                            </div>
                            <br></br>
                            <h3 className='bukra-regular ewings-course-text'>{this.state.courseDetails.methedology}</h3>
                            <br></br>
                            <div className='landing-grid-btn-base'>
                                <Button variant="danger" className='landing-mob-grid-btn bukra-regular' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h1 className='bukra-bold ewings-course-text'>Meet the Trainer</h1>
                            <br></br>
                            <div className='landing-mob-trainer-img-base '>
                                <img src={`${endpoint}/${this.state.courseTrainer.photoUrl}`} alt="Trainer Avatar" className="course-trainer-avatar"></img>
                            </div>
                            <br></br>
                            <h1 style={{textAlign:"center", color:"white"}} className='bukra-bold'>{this.state.courseTrainer.firstName} {this.state.courseTrainer.lastName}</h1>
                            <br></br>
                            {this.state.courseTrainerQualifications.map((qual, index) => (
                                <div key={index} className="course-trainer-qualification">
                                    <h3 className='bukra-regular'>Title: {qual.title}</h3>
                                    <h3 className='bukra-regular'>Brief: {qual.brief}</h3>
                                </div>
                            ))}
                            <br></br>
                            <div className='landing-grid-btn-base'>
                                <Button variant="danger" className='landing-mob-grid-btn bukra-regular' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h1 className='bukra-bold ewings-course-text'>Duration and Fees</h1>
                            <br></br>
                            <div className='landing-mob-grid-img-base'>
                                <img src={`${endpoint}/${this.state.imageScheduleSrc}`} alt="Trainer Avatar" className="landing-grid-img"></img>
                            </div>
                            <br></br>

                            {this.state.courseSchedules.map((schedule, index) => (
                                <div key={index} className="course-schedule">

                                    <h3 className='bukra-medium ewings-course-text'>Fees:</h3>
                                    <h4 className='bukra-regular ewings-course-text'>{this.state.courseFees} EGP</h4>
                                    <br></br>
                                    <h3 className='bukra-medium ewings-course-text'>Duration:</h3>
                                    <h4 className='bukra-regular ewings-course-text'>{schedule.duration} Month(s)</h4>
                                    <br></br>
                                    <h3 className='bukra-medium ewings-course-text'>Start Date:</h3>
                                    <h4 className='bukra-regular ewings-course-text'> <Moment format='dddd, DD/MM/YYYY'>
                                        {schedule.startDate}
                                    </Moment></h4>
                                    <br></br>
                                    <h3 className='bukra-medium ewings-course-text'>End Date:</h3>
                                    <h4 className='bukra-regular ewings-course-text'> <Moment format='dddd, DD/MM/YYYY'>
                                        {schedule.endDate}
                                    </Moment></h4>
                                    <br></br>
                                    <h3 className='bukra-medium ewings-course-text'>Schedule:</h3>
                                    {schedule.dates.map((date, index) => (
                                        <div key={index} className="landing-mob-course-schedule-date">
                                            <h5 className='bukra-regular'>Weekday: {date.weekday}</h5>
                                            <h5 className='bukra-regular'>Duration: {date.duration} Hours</h5>
                                            <h5 className='bukra-regular'>Starts at: {date.startHour}</h5>
                                            <h5 className='bukra-regular'>Ends at: {date.endHour}</h5>
                                        </div>
                                    ))}


                                    {index < this.state.courseSchedules.length ?
                                        <br></br>
                                        : null}
                                </div>
                            ))}
                            <div className='landing-grid-btn-base'>
                                <Button variant="danger" className='landing-mob-grid-btn bukra-regular' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
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
