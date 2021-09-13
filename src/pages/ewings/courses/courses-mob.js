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
                    <div className='ewings-course-list-title'>
                        <h2 className='bukra-bold course-title-size-mob' style={{ color: 'white' }}>Courses</h2>
                    </div>
                    {this.state.courses.map((course) => (
                        <div className='ewings-course-list-row-mob'>
                            <Grid container>
                                <Grid item xs={5} className='course-list-left'>
                                    <img className='ewings-course-list-img-mob' alt={`${course.title}`} src={`${endpoint}/images/${course.images[0].src}`} />
                                </Grid>
                                <Grid item xs={7} className='course-list-right-mob'>
                                    <p className='bukra-bold course-title-size-mob' style={{ color: 'white' }}>
                                        {course.displayTitle}
                                    </p>
                                    {/* <hr></hr> */}
                                    <p className='bukra-regular course-list-desc-mob' style={{ color: 'white' }}>
                                        {course.description}
                                    </p>
                                    <br></br>
                                    <Button className='ewings__home__services__card__btn' size='sm' href={`/ewings/courses/${course.title}`}>Read More</Button>
                                </Grid>
                            </Grid>
                            <br></br>
                            <hr></hr>
                            <br></br>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
