import React, { Component } from 'react'
import './courses.css';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';
import { Grid, Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class CoursesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/courses?company=E-Wings`)
            .then((res) => {
                this.setState({
                    courses: res.data,
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='ewings-courses'>
                <div className='courses-list-root'>
                    {this.state.courses.map((course) => (
                        <div className='course-list-row'>
                            <Grid container>
                                <Grid item xs={6} className='course-list-left'>
                                    <img className='course-list-img' src={`${endpoint}/${course.images[0].src}`} />
                                </Grid>
                                <Grid item xs={6} className='course-list-right'>
                                    <p className='bukra-bold course-title-size' style={{ color: 'white' }}>
                                        {course.displayTitle}
                                    </p>
                                    <hr></hr>
                                    <p className='bukra-regular course-list-desc' style={{ color: 'white' }}>
                                        {course.description}
                                    </p>
                                    <br></br>
                                    <Button variant='danger' className='course-list-btn bukra-regular' href={`/ewings/courses/${course.title}`}>Read More</Button>
                                </Grid>
                            </Grid>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
