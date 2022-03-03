import axios from 'axios';
import React, { Component } from 'react';
import endpoint from '../../../helpers/api_service';
import './trainer.css';
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import { Paper, TextField, Zoom } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      trainerID: props.match.params.trainerID,
      trainer: {},
      qualifications: [],

      isEditing: false,
      editedFirstName: '',
      editedLastName: '',
      editedPhoto: '',
      editedQualifications: [],
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${endpoint}/trainers/${this.state.trainerID}`)
      .then((res) => {
        this.setState({
          trainer: res.data,
          qualifications: res.data.qualifications,

          editedFirstName: res.data.firstName,
          editedLastName: res.data.lastName,
          editedPhoto: res.data.photoUrl,
          editedQualifications: res.data.qualifications,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleEdit() {
    this.setState({
      isEditing: true,
    });
  }

  handleCancel() {
    this.setState({
      isEditing: false,
    });
  }

  async handleDelete() {
    await axios
      .post(`${endpoint}/trainers/${this.state.trainer._id}/delete`, {
        trainerID: this.state.trainer._id,
      })
      .then((res) => {
        alert('Trainer has been deleted Successfully');
        window.location.href = '/admin/courses';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async handleConfirm() {
    const editedTrainer = {
      trainerID: this.state.trainerID,
      editedFirstName: this.state.editedFirstName,
      editedLastName: this.state.editedLastName,
      editedPhoto: this.state.editedPhoto,
      editedQualifications: this.state.editedQualifications,
    };

    await axios
      .post(
        `${endpoint}/trainers/${this.state.trainer._id}/edit`,
        editedTrainer
      )
      .then((res) => {
        alert('Trainer has been edited successfully');

        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <NavbarAdmin isLoggedIn={true} />
        <div className="admin-course-root">
          <div className="admin-course-post">
            <Paper className="admin-course-post-paper">
              {this.state.isEditing ? (
                <Zoom in={this.state.isEditing}>
                  <div>
                    <h4>
                      Name:
                      <TextField
                        onChange={this.handleInputChange}
                        value={this.state.editedFirstName}
                        name="editedFirstName"
                      />
                      <TextField
                        onChange={this.handleInputChange}
                        value={this.state.editedLastName}
                        name="editedLastName"
                      />
                    </h4>
                    <hr></hr>
                    <>
                      <h4>Qualifications</h4>
                      {this.state.qualifications.map((q) => (
                        <div className="trainer-qualifications">
                          <h5>{q.title}</h5>
                          <h6>{q.brief}</h6>
                        </div>
                      ))}

                      <br></br>
                    </>
                  </div>
                </Zoom>
              ) : (
                <div className="trainer-info">
                  <div className="trainer-info-left">
                    <h4>
                      Name: {this.state.trainer.firstName}
                      {this.state.trainer.lastName}
                    </h4>
                    <hr></hr>
                    <>
                      <h4>Qualifications</h4>
                      {this.state.qualifications.map((q) => (
                        <div className="trainer-qualifications">
                          <h5>{q.title}</h5>
                          <h6>{q.brief}</h6>
                        </div>
                      ))}
                    </>
                  </div>
                  <img
                    className="trainer-info-img"
                    src={`${endpoint}/images/${this.state.trainer.photoUrl}`}
                    alt="avatar"
                  />
                </div>
              )}
            </Paper>
          </div>
          <div className="admin-course-controls">
            {this.state.isEditing ? (
              <Zoom in={this.state.isEditing}>
                <div className="admin-course-controls-btn-groups">
                  <div className="admin-course-controls-btn-base">
                    <Button
                      className="admin-course-controls-btn-confirm"
                      onClick={this.handleConfirm}
                    >
                      Confirm
                    </Button>
                  </div>
                  <div className="admin-course-controls-btn-base">
                    <Button
                      className="admin-course-controls-btn-cancel"
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Zoom>
            ) : (
              <div className="admin-course-controls-btn-groups">
                <div className="admin-course-controls-btn-base">
                  <Button
                    className="admin-course-controls-btn-edit"
                    onClick={this.handleEdit}
                  >
                    Edit
                  </Button>
                </div>
                <div className="admin-course-controls-btn-base">
                  <Button
                    className="admin-course-controls-btn-delete"
                    onClick={this.handleDelete}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
