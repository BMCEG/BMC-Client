import React, { Component } from 'react'
import './courses.css'
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import CoursesApplications from '../../../components/admin/courses/applications.js';
import CreateCourse from '../../../components/admin/courses/newCourse.js'
import Courses from '../../../components/admin/courses/courses.js';
import CreateTrainer from '../../../components/admin/courses/newTrainer.js'
import Trainers from '../../../components/admin/courses/trainers.js';
import { faPlusCircle, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';
export default class CoursesPanel extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {
            context: 'CoursesApplications'
        }
    }

    handleBtnClick = (context) => {
        this.setState({
            context
        })
    }
    render() {
        return (
            <>
                <NavbarAdmin isLoggedIn={true} />

                <div className='admin-courses-root' style={{ backgroundImage: `url(${endpoint}/images/bg-experts.png)`, backgroundSize: 'cover' }}>
                    <div className='admin-courses-controls'>
                        <div className='admin-courses-controls-btns'>
                            <AdminBtn label={'View Applications'} icon={faUserGraduate} onClick={() => this.handleBtnClick('CoursesApplications')} />
                            <hr></hr>
                            <AdminBtn label={'Create New Course'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('CourseCreate')} />
                            <br></br>
                            <AdminBtn label={'View Courses'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('Courses')} />
                            <hr></hr>
                            <AdminBtn label={'Create New Trainer'} icon={faPlusCircle} onClick={() => this.handleBtnClick('TrainerCreate')} />
                            <br></br>
                            <AdminBtn label={'View Trainers'} icon={faPlusCircle} onClick={() => this.handleBtnClick('Trainers')} />
                            <br></br>
                        </div>
                    </div>
                    <div className='admin-courses-body'>
                        {this.state.context === 'CoursesApplications' ?
                            <CoursesApplications /> : this.state.context === 'CourseCreate' ?
                                <CreateCourse /> : this.state.context === 'Courses' ?
                                    <Courses /> : this.state.context === 'Trainers' ?
                                        <Trainers /> : <CreateTrainer />
                        }
                    </div>
                </div>
            </>
        )
    }
}
