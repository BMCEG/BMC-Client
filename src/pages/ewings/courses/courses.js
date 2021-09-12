import React, { Component } from 'react'
import './courses.css';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';
import { Grid } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class CoursesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses1: [],
            courses2: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/courses?company=E-Wings`)
            .then((res) => {
                const half = Math.ceil(res.data.length / 2);

                const firstHalf = res.data.slice(0, half)
                const secondHalf = res.data.slice(half, res.data.length)

                this.setState({
                    courses1: firstHalf,
                    courses2: secondHalf,
                })
                console.log(this.state)

            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='ewings-courses'>
                <div className='ewings-courses-list-root'>
                    <div className='ewings-course-list-title'>
                        <h2 className='bukra-bold' style={{ color: 'white' }}>Courses</h2>
                    </div>
                    <div className='ewings-course-list-row'>
                        <Grid container>
                            <Grid item xs={6} className='ewings-course-list-left'>
                                {this.state.courses1.map((course) => (
                                    <>
                                        <Button variant='link' className='course-container' href={`/ewings/courses/${course.title}`}>
                                            <img className='course-img' alt={`${course.title}`} src={`${endpoint}/${course.images[3].src}`} />
                                            <div className='course-middle'>
                                                <div className='course-text'>
                                                    <p className='bukra-bold course-list-name'>
                                                        {course.displayTitle}
                                                    </p>
                                                    <p className='bukra-regular course-list-desc'>
                                                        {course.description}
                                                    </p>
                                                </div>
                                            </div>

                                        </Button>
                                        <br></br>
                                        <br></br>
                                    </>
                                ))}
                            </Grid>
                            <Grid item xs={6} className='ewings-course-list-right'>
                                {this.state.courses2.map((course) => (
                                    <>
                                        <Button variant='link' className='course-container' href={`/ewings/courses/${course.title}`}>
                                            <img className='course-img' alt={`${course.title}`} src={`${endpoint}/${course.images[3].src}`} />
                                            <div className='course-middle'>
                                                <div className='course-text'>
                                                    <p className='bukra-bold course-list-name'>
                                                        {course.displayTitle}
                                                    </p>
                                                    <p className='bukra-regular course-list-desc'>
                                                        {course.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </Button>
                                        <br></br>
                                        <br></br>
                                        \                                    </>
                                ))}
                            </Grid>
                        </Grid>
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}
