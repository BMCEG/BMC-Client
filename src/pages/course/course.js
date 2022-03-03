import React, { Component } from 'react';
import { getJwt } from '../../helpers/jwt.js';
import { getCourseName } from '../../helpers/coursename.js';
import { getUsername } from '../../helpers/username.js';

import Login from '../../components/login/login.js';

export default class CoursePage extends Component {
  constructor(props) {
    super(props);
    this.checkApplicant = this.checkApplicant.bind(this);

    this.state = {
      isLoggedIn: false,
      courseName: props.match.params.courseName,
      applicantUsername: '',
    };
  }

  checkApplicant = (bool) => {
    this.setState({ isLoggedIn: bool });
    window.location.reload();
  };

  async componentDidMount() {
    const jwt = getJwt();
    const courseName = getCourseName();
    const username = getUsername();
    if (jwt && courseName === this.state.courseName) {
      this.setState({
        isLoggedIn: true,
        applicantUsername: username,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <CoursePage
            applicantUsername={this.state.applicantUsername}
            courseName={this.state.courseName}
          />
        ) : (
          <Login checkApplicant={this.checkApplicant} />
        )}
      </div>
    );
  }
}
