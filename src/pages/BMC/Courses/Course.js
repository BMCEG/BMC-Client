import React, { Component } from 'react'
import './Courses.css';
import axios from 'axios';
import FooterTop from '../../../components/BMC/Footer/Footer-Top';
import endpoint from '../../../helpers/api_service';
import { Typography } from '@material-ui/core';
export default class Course extends Component {
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
            <div className='courses__root'>
                <br></br>
                <br></br>
                <Typography className='strategic-planning__heading bukra-regular ' style={{ textAlign: 'center' }}>
                    {this.state.courseDetails.title}
                </Typography>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        {this.state.courseDetails.displayTitle}
                    </Typography>
                </div>
                <Typography className='strategic-planning__heading bukra-regular ' style={{ textAlign: 'center' }}>
                    {this.state.courseDetails.title}
                </Typography>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/SP-H.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <div className='job__divider' />
                <br></br>
                <div className='finance-accounting__subtitle'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                            Training Description
                            </Typography>
                            <Typography className='strategic-planning__body--text strategic-planning__body--text--card'>
                                {this.state.courseDetails.description}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className='job__divider' />

            </div>
        )
    }
}
