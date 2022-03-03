import React, { Component } from 'react';
import './users.css';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';

export default class NewPartner extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreateAdmin = this.handleCreateAdmin.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCreateAdmin = async () => {
    const newAdmin = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    await axios
      .post(`${endpoint}/admins/register`, newAdmin)
      .then((res) => {
        alert('Admin Created Successfully');
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="trainer-create-root">
        <div
          className="trainer-create-base"
          style={{
            backgroundImage: `url(${endpoint}/images/bg-founder.png)`,
            backgroundSize: 'cover',
          }}
        >
          <div className="trainer-create-form">
            <div className="trainer-create-form-left">
              <TextField
                variant="outlined"
                name="firstName"
                label="First Name"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                fullWidth
              />
              <br></br>
              <br></br>
              <TextField
                variant="outlined"
                name="lastName"
                label="Last Name"
                value={this.state.lastName}
                onChange={this.handleInputChange}
                fullWidth
              />
              <br></br>
              <br></br>
            </div>
            <div className="trainer-create-form-right">
              <TextField
                variant="outlined"
                name="email"
                label="E-Mail"
                value={this.state.email}
                onChange={this.handleInputChange}
                fullWidth
              />
              <br></br>
              <br></br>
              <TextField
                variant="outlined"
                type="password"
                name="password"
                label="Password"
                value={this.state.password}
                onChange={this.handleInputChange}
                fullWidth
              />
              <br></br>
              <br></br>
            </div>
            <br></br>
            <br></br>
          </div>
          <div className="users-create-btn-base">
            <Button
              variant="danger"
              className="users-create-btn"
              onClick={this.handleCreateAdmin}
            >
              Create Admin
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
