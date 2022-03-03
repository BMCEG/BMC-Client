import React, { Component } from 'react';
import axios from 'axios';
import './landing.css';
import endpoint from '../../helpers/api_service';
import { Grid, Typography } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

import CourseApplicationModal from '../../components/course/application.js';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.handleApplicationModalOpen =
      this.handleApplicationModalOpen.bind(this);
    this.handleApplicationModalClose =
      this.handleApplicationModalClose.bind(this);

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
    };
  }

  handleApplicationModalOpen = async () => {
    this.setState({
      applicationModalFlag: true,
    });
  };
  handleApplicationModalClose = async () => {
    this.setState({
      applicationModalFlag: false,
    });
  };

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
            this.setState({ imageOutlineSrc: res.data.images[i].src });
          } else if (res.data.images[i].name === 'imageSchedule') {
            this.setState({ imageScheduleSrc: res.data.images[i].src });
          } else if (res.data.images[i].name === 'imageMethodology') {
            this.setState({ imageMethodologySrc: res.data.images[i].src });
          } else if (res.data.images[i].name === 'imageDescription') {
            this.setState({ imageDescriptionSrc: res.data.images[i].src });
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        className="landing-root"
        style={{
          backgroundImage: `url(${endpoint}/images/bg-experts.png)`,
          backgroundSize: 'cover',
        }}
      >
        <div
          className="landing-grid"
          style={{
            backgroundImage: `url(${endpoint}/images/bg-founder.png)`,
            backgroundSize: 'cover',
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            className="bukra-bold course-header"
          >
            {this.state.courseDetails.displayTitle}
          </Typography>
          <div className="landing-grid-div">
            <div className="landing-grid-text">
              <h2 className="bukra-bold">Training Description</h2>
              <br></br>
              <h3 className="bukra-regular">
                {this.state.courseDetails.description}
              </h3>
              <br></br>
              <div className="landing-grid-btn-base-left">
                <Button
                  variant="danger"
                  className="landing-grid-btn"
                  onClick={this.handleApplicationModalOpen}
                >
                  Apply for Training
                </Button>
              </div>
            </div>
            <div className="landing-grid-img-base">
              <img
                className="landing-grid-img"
                src={`${endpoint}/images/${this.state.imageDescriptionSrc}`}
                alt="Trainer Avatar"
              ></img>
            </div>
          </div>
          <hr></hr>
          <div className="landing-grid-div">
            <div className="landing-grid-img-base">
              <img
                className="landing-grid-img"
                src={`${endpoint}/images/${this.state.imageOutlineSrc}`}
                alt="Trainer Avatar"
              ></img>
            </div>
            <div className="landing-grid-text">
              <h2 className="bukra-bold">Training Outline</h2>
              <br></br>
              <h3 className="bukra-regular">
                {this.state.courseDetails.outline}
              </h3>
              <br></br>
              <div className="landing-grid-btn-base-right">
                <Button
                  variant="danger"
                  className="landing-grid-btn"
                  onClick={this.handleApplicationModalOpen}
                >
                  Apply for Training
                </Button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="landing-grid-div">
            <div className="landing-grid-text">
              <h2 className="bukra-bold">Training Methodology</h2>
              <br></br>
              <h3 className="bukra-regular">
                {this.state.courseDetails.methedology}
              </h3>
              <br></br>
              <div className="landing-grid-btn-base-left">
                <Button
                  variant="danger"
                  className="landing-grid-btn"
                  onClick={this.handleApplicationModalOpen}
                >
                  Apply for Training
                </Button>
              </div>
            </div>
            <div className="landing-grid-img-base">
              <img
                className="landing-grid-img"
                src={`${endpoint}/images/${this.state.imageMethodologySrc}`}
                alt="Trainer Avatar"
              ></img>
            </div>
          </div>
          <hr></hr>
          <div className="landing-grid-div">
            <div className="landing-grid-img-base">
              <div className="course-trainer-avatar-base">
                <img
                  src={`${endpoint}/images/${this.state.courseTrainer.photoUrl}`}
                  alt="Trainer Avatar"
                  className="course-trainer-avatar"
                ></img>
              </div>
            </div>
            <div className="landing-grid-text">
              <h2 className="bukra-bold">Meet the Trainer</h2>
              <br></br>
              <h3 className="bukra-medium">
                {this.state.courseTrainer.firstName}
                {this.state.courseTrainer.lastName}
              </h3>
              {this.state.courseTrainerQualifications.map((qual, index) => (
                <div key={index} className="course-trainer-qualification">
                  <h3 className="bukra-regular">Title: {qual.title}</h3>
                  <h3 className="bukra-regular">Brief: {qual.brief}</h3>
                </div>
              ))}
              <br></br>
              <div className="landing-grid-btn-base-left">
                <Button
                  variant="danger"
                  className="landing-grid-btn"
                  onClick={this.handleApplicationModalOpen}
                >
                  Apply for Training
                </Button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="landing-grid-div">
            <div className="landing-grid-text-dates">
              <h2 className="bukra-bold">Duration and Fees</h2>
              {this.state.courseSchedules.map((schedule, index) => (
                <div key={index} className="course-schedule">
                  <Grid container>
                    <Grid xs={4}>
                      <h3 className="bukra-medium">Fees:</h3>
                      <h4 className="bukra-regular">
                        {this.state.courseFees} EGP
                      </h4>
                      <h3 className="bukra-medium">Duration:</h3>
                      <h4 className="bukra-regular">
                        {schedule.duration} Month(s)
                      </h4>
                      <h3 className="bukra-medium">Start Date:</h3>
                      <h4 className="bukra-regular">
                        <Moment format="dddd, DD/MM/YYYY">
                          {schedule.startDate}
                        </Moment>
                      </h4>
                      <h3 className="bukra-medium">End Date:</h3>
                      <h4 className="bukra-regular">
                        <Moment format="dddd, DD/MM/YYYY">
                          {schedule.endDate}
                        </Moment>
                      </h4>
                    </Grid>
                    <Grid xs={8} className="course-schedule-dates-grid">
                      {schedule.dates.map((date, index) => (
                        <div key={index} className="course-schedule-date">
                          <h5 className="bukra-regular">
                            Weekday: {date.weekday}
                          </h5>
                          <h5 className="bukra-regular">
                            Duration: {date.duration} Hours
                          </h5>
                          <h5 className="bukra-regular">
                            Starts at: {date.startHour}
                          </h5>
                          <h5 className="bukra-regular">
                            Ends at: {date.endHour}
                          </h5>
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                  {index < this.state.courseSchedules.length ? <hr></hr> : null}
                </div>
              ))}
            </div>
            <div className="landing-grid-img-base">
              <img
                className="landing-grid-img"
                src={`${endpoint}/images/${this.state.imageScheduleSrc}`}
                alt="Trainer Avatar"
              ></img>
            </div>
          </div>
          <div className="landing-grid-btn-base">
            <Button
              variant="danger"
              className="landing-grid-btn-center"
              onClick={this.handleApplicationModalOpen}
            >
              Apply for Training
            </Button>
          </div>
        </div>

        <Modal
          className="landing-modal"
          open={this.state.applicationModalFlag}
          onClose={this.handleApplicationModalClose}
          aria-labelledby="simple-modal-title"
          style={{ display: 'flex' }}
          aria-describedby="simple-modal-description"
        >
          <CourseApplicationModal course={this.state.courseDetails} />
        </Modal>
      </div>
    );
  }
}
