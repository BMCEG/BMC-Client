import React, { Component } from 'react';
import './careers.css';
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import JobApplications from '../../../components/admin/careers/applications.js';
import JobPostings from '../../../components/admin/careers/postings.js';
import CreateJobPosting from '../../../components/admin/careers/newJobPosting.js';
import {
  faPlusCircle,
  faUserGraduate,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';

export default class Careers extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);

    this.state = {
      context: 'JobApplications',
    };
  }

  handleBtnClick = (context) => {
    this.setState({
      context,
    });
  };
  render() {
    return (
      <>
        <NavbarAdmin isLoggedIn={true} />

        <div
          className="admin-careers-root"
          style={{
            backgroundImage: `url(${endpoint}/images/bg-experts.png)`,
            backgroundSize: 'cover',
          }}
        >
          <div className="admin-careers-controls">
            <div className="admin-careers-controls-btns">
              <AdminBtn
                label={'Create Job Posting'}
                icon={faUserGraduate}
                onClick={() => this.handleBtnClick('CreateJobPosting')}
              />
              <br></br>
              <AdminBtn
                label={'View Job Postings'}
                icon={faChalkboardTeacher}
                onClick={() => this.handleBtnClick('JobPostings')}
              />
              <br></br>
              <AdminBtn
                label={'View Applications'}
                icon={faPlusCircle}
                onClick={() => this.handleBtnClick('JobApplications')}
              />
              <br></br>
            </div>
          </div>
          <div className="admin-careers-body">
            {this.state.context === 'JobApplications' ? (
              <JobApplications />
            ) : this.state.context === 'JobPostings' ? (
              <JobPostings />
            ) : (
              <CreateJobPosting />
            )}
          </div>
        </div>
      </>
    );
  }
}
