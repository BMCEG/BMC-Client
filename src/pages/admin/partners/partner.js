import axios from 'axios';
import React, { Component } from 'react';
import endpoint from '../../../helpers/api_service';
import './partners.css';
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
      partnerID: props.match.params.partnerID,
      partner: {},

      isEditing: false,
      editedName: '',
      editedDescription: '',
      editedURL: '',
      editedLogo: '',
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${endpoint}/partners/${this.state.partnerID}`)
      .then((res) => {
        this.setState({
          partner: res.data,

          editedName: res.data.name,
          editedDescription: res.data.description,
          editedURL: res.data.url,
          editedLogo: res.data.logo,
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
      .post(`${endpoint}/partners/${this.state.partnerID}/delete`)
      .then((res) => {
        alert('Partner has been deleted Successfully');
        window.location.href = '/admin/partners';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async handleConfirm() {
    const editedPartner = {
      partnerID: this.state.partnerID,
      editedPartnerName: this.state.editedName,
      editedPartnerDescription: this.state.editedDescription,
      editedPartnerURL: this.state.editedURL,
      editedPartnerLogo: this.state.editedLogo,
    };

    await axios
      .post(
        `${endpoint}/partners/${this.state.partner._id}/edit`,
        editedPartner
      )
      .then((res) => {
        alert('Partner has been edited successfully');

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
                  <>
                    <h4>
                      Name:{' '}
                      <TextField
                        onChange={this.handleInputChange}
                        value={this.state.editedName}
                        name="editedName"
                      />
                    </h4>
                    <h5>
                      Url:{' '}
                      <TextField
                        onChange={this.handleInputChange}
                        value={this.state.editedURL}
                        name="editedURL"
                      />
                    </h5>
                    <hr></hr>
                    <h5>Description:</h5>
                    <TextField
                      onChange={this.handleInputChange}
                      value={this.state.editedDescription}
                      name="editedDescription"
                      variant="outlined"
                      multiline
                      fullWidth
                      rows={10}
                    />
                    <br></br>
                  </>
                </Zoom>
              ) : (
                <>
                  <div className="posting-info">
                    <div className="posting-info-left">
                      <h4>Name: {this.state.partner.name}</h4>
                      <h5>Url: {this.state.partner.url}</h5>
                      <hr></hr>
                      <h5>Description: </h5>
                      <h5>{this.state.partner.description}</h5>
                      <br></br>
                    </div>
                  </div>
                </>
              )}
              <br></br>
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
