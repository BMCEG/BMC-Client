import React, { Component } from 'react'
import axios from 'axios';
import './landing.css';
import endpoint from '../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';
import CourseApplicationModal from '../../../components/course/application-ewings.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class Landing extends Component {

    constructor(props) {
        super(props);
        this.handleApplicationModalOpen = this.handleApplicationModalOpen.bind(this);
        this.handleApplicationModalClose = this.handleApplicationModalClose.bind(this);
        this.handleFabHover = this.handleFabHover.bind(this);

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
            isFabHover: false,
        }
    }

    handleFabHover = async () => {
        this.setState({
            isFabHover: !this.state.isFabHover
        })
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
                {this.state.isFabHover ?
                    <Button className='ewings-course-fab bukra-regular ' onMouseLeave={this.handleFabHover} onMouseOver={this.handleFabHover} onClick={this.handleApplicationModalOpen}>
                        Apply Now
                    </Button>
                    :
                    <Button className='ewings-course-fab bukra-regular ' onMouseLeave={this.handleFabHover} onMouseOver={this.handleFabHover} onClick={this.handleApplicationModalOpen}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                }
                <div className="ewings-landing-grid ewings-height"><Typography style={{
                        backgroundImage: `url(${endpoint}/imagesewings-stamp.png)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center'
                    }} variant='h3' component='h3' className='bukra-bold ewings-white-color course-header'>{this.state.courseDetails.displayTitle}</Typography>
                    <div className='landing-grid-div'>
                        <div className='training-desc-img-base'>
                            <img className='training-desc-img' src={`${endpoint}/images/${this.state.imageDescriptionSrc}`} alt="Trainer Avatar"></img>
                        </div>
                        <div className='training-desc-text'>
                            <h2 className='bukra-bold ewings-green-color ewings-subtitle' >Training Description</h2>
                            <br></br>
                            <h3 className='bukra-regular ewings__home__banner__body'>{this.state.courseDetails.description}</h3>
                            <br></br>
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
                            <h3 className='bukra-regular ewings__home__banner__body ewings-blue-color'>{this.state.courseDetails.outline}</h3>
                            <br></br>
                        </div>
                        <div className='training-outlines-img-base'>
                            <img className='training-desc-img' src={`${endpoint}/images/${this.state.imageOutlineSrc}`} alt="Trainer Avatar"></img>
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
                                    <img className='training-methodology-img' src={`${endpoint}/images/${this.state.imageMethodologySrc}`} alt='sds' />
                                    <img className='training-methodology-img-mask' src={`${endpoint}/images/22222.png`} alt='sds' />
                                </>
                                :
                                <img className='training-methodology-img' src={`${endpoint}/images/${this.state.imageMethodologySrc}`} alt='sds' />
                            }
                        </div>
                        <div className='training-methodology-seperator'></div>
                        <div className='training-methodology-text'>
                            <h2 className='bukra-bold ewings-white-color ewings-subtitle'>Training Methodology</h2>
                            <br></br>
                            <Typography style={{color:'white'}} className='bukra-regular ewings__home__banner__body' >{this.state.courseDetails.methedology}</Typography>
                        </div>
                    </div>

                    <br></br>
                    <hr className='ewings-course-list-seperator'></hr>
                    <br></br>
                    <div className='landing-grid-div'>
                        <div className='course-meet-trainer'>
                            <h2 className='bukra-bold course-meet-trainer-title'>Meet the Trainer</h2>
                            <br></br>
                            <br></br>
                            <div className="course-trainer-avatar-base">
                                <img src={`${endpoint}/images/${this.state.courseTrainer.photoUrl}`} alt="Trainer Avatar" className="course-trainer-avatar"></img>
                            </div>
                            <br></br>
                            <br></br>
                            <h3 className='bukra-medium course-meet-trainer-title'>{this.state.courseTrainer.firstName} {this.state.courseTrainer.lastName}</h3>
                        </div>
                    </div>
                    <br></br>
                    <hr className='ewings-course-list-seperator'></hr>
                    <br></br>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text-dates'>
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
                    <CourseApplicationModal course={this.state.courseDetails} />
                </Modal>
            </div>
        )
    }
}

