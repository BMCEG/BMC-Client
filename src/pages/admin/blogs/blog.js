import axios from 'axios';
import React, { Component } from 'react';
import endpoint from '../../../helpers/api_service';
import './blogs.css';
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import { Paper, TextField, Zoom } from '@material-ui/core';
import Moment from 'react-moment';
import { Button } from 'react-bootstrap';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      blogID: props.match.params.blogID,
      blog: {},

      isEditing: false,
      editedTitle: '',
      editedPost: '',
      editedAuthor: '',
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${endpoint}/blogs/${this.state.blogID}`)
      .then((res) => {
        this.setState({
          blog: res.data,
          editedAuthor: res.data.author,
          editedPost: res.data.post,
          editedTitle: res.data.title,
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
      editedTitle: this.state.blog.title,
      editedPost: this.state.blog.post,
      editedAuthor: this.state.blog.author,
    });
  }

  async handleDelete() {
    await axios
      .post(`${endpoint}/blogs/${this.state.blog._id}/delete`, {
        blogID: this.state.blog._id,
      })
      .then((res) => {
        alert('Blog has been deleted Successfully');
        window.location.href = '/admin/blogs';
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async handleConfirm() {
    const editedBlog = {
      blogID: this.state.blog._id,
      editedBlogTitle: this.state.editedTitle,
      editedBlogPost: this.state.editedPost,
      editedBlogAuthor: this.state.editedAuthor,
    };

    await axios
      .post(`${endpoint}/blogs/${this.state.blog._id}/edit`, editedBlog)
      .then((res) => {
        alert('Blog has been edited successfully');
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
        <div className="admin-blog-root">
          <div className="admin-blog-post">
            <Paper className="admin-blog-post-paper">
              {this.state.isEditing ? (
                <Zoom in={this.state.isEditing}>
                  <TextField
                    onChange={this.handleInputChange}
                    value={this.state.editedTitle}
                    name="editedTitle"
                  />
                </Zoom>
              ) : (
                <h4>{this.state.blog.title}</h4>
              )}
              <hr></hr>
              {this.state.isEditing ? (
                <Zoom in={this.state.isEditing}>
                  <TextField
                    onChange={this.handleInputChange}
                    value={this.state.editedPost}
                    name="editedPost"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={43}
                  />
                </Zoom>
              ) : (
                <h4>{this.state.blog.post}</h4>
              )}
            </Paper>
          </div>
          <div className="admin-blog-controls">
            <div className="admin-blog-controls-info">
              {this.state.isEditing ? (
                <span style={{ display: 'flex' }}>
                  <h4>Written by</h4>
                  <Zoom in={this.state.isEditing}>
                    <TextField
                      onChange={this.handleInputChange}
                      style={{ marginLeft: '10px' }}
                      name="editedAuthor"
                      value={this.state.editedAuthor}
                    />
                  </Zoom>
                </span>
              ) : (
                <h4>Written by {this.state.blog.author}</h4>
              )}
              <hr></hr>
              <Moment format="dddd DD MMMM, YYYY" />
            </div>
            <br></br>

            {this.state.isEditing ? (
              <Zoom in={this.state.isEditing}>
                <div className="admin-blog-controls-btn-groups">
                  <div className="admin-blog-controls-btn-base">
                    <Button
                      className="admin-blog-controls-btn-confirm"
                      onClick={this.handleConfirm}
                    >
                      Confirm
                    </Button>
                  </div>
                  <div className="admin-blog-controls-btn-base">
                    <Button
                      className="admin-blog-controls-btn-cancel"
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </Zoom>
            ) : (
              <div className="admin-blog-controls-btn-groups">
                <div className="admin-blog-controls-btn-base">
                  <Button
                    className="admin-blog-controls-btn-edit"
                    onClick={this.handleEdit}
                  >
                    Edit
                  </Button>
                </div>
                <div className="admin-blog-controls-btn-base">
                  <Button
                    className="admin-blog-controls-btn-delete"
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
