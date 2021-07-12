import React, { Component } from 'react'
import axios from 'axios';
import './landing.css';
import endpoint from '../../helpers/api_service';
import { Grid } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';

import CourseApplicationModal from '../../components/course/application.js';

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
                    courseSchedules: res.data.schedules,
                    courseTrainer: res.data.trainer,
                    courseTrainerQualifications: res.data.trainer.qualifications,
                });

                for(let i = 0; i < res.data.images.length; i++){
                    if (res.data.images[i].name === 'imageOutline'){
                        this.setState({ imageOutlineSrc: res.data.images[i].src })
                    } else if (res.data.images[i].name === 'imageSchedule'){
                        this.setState({ imageScheduleSrc: res.data.images[i].src })
                    } else if (res.data.images[i].name === 'imageMethodology'){
                        this.setState({ imageMethodologySrc: res.data.images[i].src })
                    } else if (res.data.images[i].name === 'imageDescription'){
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
            <div className="landing-root" style={{ backgroundImage: `url(${endpoint}/bg-experts.png)`, backgroundSize: 'cover' }}>
                <div className="landing-grid" style={{ backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover' }}>
                    <h2>{this.state.courseDetails.displayTitle}</h2>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h2 style={{ textShadow: '2px 2px grey' }}>Training Description</h2>
                            <h3>{this.state.courseDetails.description}</h3>
                            <br></br>
                            <div className='landing-grid-btn-base-left'>
                                <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>

                        </div>
                        <div className='landing-grid-img-base'>
                            <img className='landing-grid-img' src={`${endpoint}/${this.state.imageDescriptionSrc}`} alt="Trainer Avatar"></img>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-img-base'>
                        <img className='landing-grid-img' src={`${endpoint}/${this.state.imageOutlineSrc}`} alt="Trainer Avatar"></img>
                        </div>
                        <div className='landing-grid-text'>
                            <h2 style={{ textShadow: '2px 2px grey' }}>Training Outline</h2>
                            <h3>{this.state.courseDetails.outline}</h3>
                            <br></br>
                            <div className='landing-grid-btn-base-right'>
                                <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text'>
                            <h2 style={{ textShadow: '2px 2px grey' }}>Training Methodology</h2>
                            <h3>{this.state.courseDetails.methedology}</h3>
                            <br></br>
                            <div className='landing-grid-btn-base-left'>
                                <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                        <div className='landing-grid-img-base'>
                        <img className='landing-grid-img' src={`${endpoint}/${this.state.imageMethodologySrc}`} alt="Trainer Avatar"></img>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-img-base'>
                            <div className="course-trainer-avatar-base">
                                <img src={`${endpoint}/${this.state.courseTrainer.photoUrl}`} alt="Trainer Avatar" className="course-trainer-avatar"></img>
                            </div>
                        </div>
                        <div className='landing-grid-text'>
                            <h2 style={{ textShadow: '2px 2px grey' }}>Meet the Trainer</h2>
                            <h3>{this.state.courseTrainer.firstName} {this.state.courseTrainer.lastName}</h3>
                            {this.state.courseTrainerQualifications.map((qual, index) => (
                                <div key={index} className="course-trainer-qualification">
                                    <h3>Title: {qual.title}</h3>
                                    <h3>Brief: {qual.brief}</h3>
                                </div>
                            ))}
                            <br></br>
                            <div className='landing-grid-btn-base-left'>
                                <Button variant="danger" className='landing-grid-btn' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='landing-grid-div'>
                        <div className='landing-grid-text-dates'>
                            <h2 style={{ textShadow: '2px 2px grey' }}>Duration and Fees</h2>
                            {this.state.courseSchedules.map((schedule, index) => (
                                <div key={index} className="course-schedule">
                                    <Grid container>
                                        <Grid xs={4}>
                                            <h3>Duration: {schedule.duration} Month(s)</h3>
                                            <h3>Start Date:</h3>
                                            <h4> <Moment format='dddd, DD/MM/YYYY'>
                                                {schedule.startDate}
                                            </Moment></h4>
                                            <h3>End Date:</h3>
                                            <h4> <Moment format='dddd, DD/MM/YYYY'>
                                                {schedule.endDate}
                                            </Moment></h4>
                                        </Grid>
                                        <Grid xs={8} className="course-schedule-dates-grid">
                                            {schedule.dates.map((date, index) => (
                                                <div key={index} className="course-schedule-date">
                                                    <h3>Weekday: {date.weekday}</h3>
                                                    <h3>Duration: {date.duration} Hours</h3>
                                                    <h3>Starts at: {date.startHour}</h3>
                                                    <h3>Ends at: {date.endHour}</h3>
                                                </div>
                                            ))}

                                        </Grid>
                                    </Grid>
                                    {index < this.state.courseSchedules.length ?
                                        <hr></hr>
                                        : null}
                                </div>
                            ))}
                            {/* <br></br> */}
                        </div>
                        <div className='landing-grid-img-base'>
                        <img className='landing-grid-img' src={`${endpoint}/${this.state.imageScheduleSrc}`} alt="Trainer Avatar"></img>
                        </div>
                    </div>
                    <div className='landing-grid-btn-base'>
                        <Button variant="danger" className='landing-grid-btn-center' onClick={this.handleApplicationModalOpen}> Apply for Training </Button>
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
