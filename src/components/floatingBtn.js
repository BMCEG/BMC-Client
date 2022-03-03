import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import './floatingBtn.css';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../helpers/api_service';

export default class floatingBtn extends Component {
  constructor(props) {
    super(props);

    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitRequest = this.handleSubmitRequest.bind(this);

    this.state = {
      modalFlag: false,
      requestName: '',
      requestEmail: '',
      requestMobile: '',
    };
  }

  handleModalOpen() {
    this.setState({
      modalFlag: true,
    });
  }
  handleModalClose() {
    this.setState({
      modalFlag: false,
    });
  }

  async handleSubmitRequest() {
    const newRequest = {
      name: this.state.requestName,
      email: this.state.requestEmail,
      mobile: this.state.requestMobile,
    };
    await axios
      .post(`${endpoint}/requests/create`, newRequest)
      .then((res) => {
        alert('Your request has been submitted successfully');

        this.setState({
          requestName: '',
          requestEmail: '',
          requestMobile: '',
          modalFlag: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="fab-root">
        <Fab
          variant="extended"
          className="fab-btn"
          onClick={this.handleModalOpen}
        >
          <h4 style={{ fontWeight: 'bold' }} className="bukra-bold">
            Request Consultancy
          </h4>
        </Fab>
        <Modal
          open={this.state.modalFlag}
          onClose={this.handleModalClose}
          aria-labelledby="simple-modal-title"
          className="fab-form-modal"
          aria-describedby="simple-modal-description"
        >
          <div
            className="fab-form"
            style={{
              backgroundImage: `url(${endpoint}/images/bg-founder.png)`,
              backgroundSize: 'cover',
            }}
          >
            <TextField
              fullWidth
              variant="outlined"
              label="Name"
              name="requestName"
              value={this.state.requestName}
              onChange={this.handleInputChange}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              variant="outlined"
              label="E-Mail"
              name="requestEmail"
              value={this.state.requestEmail}
              onChange={this.handleInputChange}
            />
            <br></br>
            <br></br>
            <TextField
              fullWidth
              variant="outlined"
              label="Mobile"
              name="requestMobile"
              value={this.state.requestMobile}
              onChange={this.handleInputChange}
            />
            <br></br>
            <br></br>
            <div style={{ textAlign: 'center' }}>
              <Button variant="danger" onClick={this.handleSubmitRequest}>
                Submit Request
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
