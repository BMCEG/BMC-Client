import React, { Component } from 'react';
import axios from 'axios';
import endpoint from '../../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import './blogs.css';
import { Button } from 'react-bootstrap';
import { Paper } from '@material-ui/core';

export default class Blogs extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      blogs: [],
    };
  }

  handleClick = (e) => {
    window.location.href = `blogs/${e.target.value}`;
  };

  async componentDidMount() {
    await axios
      .get(`${endpoint}/blogs/`)
      .then((res) => {
        this.setState({
          blogs: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${endpoint}/images/bg-our-story.png)`,
          backgroundSize: 'cover',
        }}
      >
        <div className="blogs-mob-root">
          {this.state.blogs.map((blog) => (
            <Paper className="blogs-card-mobile">
              <div>
                <img
                  src={`${endpoint}/images/${blog.image}`}
                  alt={blog.title}
                  className="blogs-img-mobile"
                />
              </div>
              <div className="blogs-card-info-mobile">
                <h3 className="bukra-bold">{blog.title}</h3>
                <div className="blogs-ticket">
                  <div className="blogs-author">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      style={{ marginRight: '5px' }}
                    />
                    <h6 className="bukra-regular">{blog.author}</h6>
                  </div>
                  <div className="blogs-date">
                    <FontAwesomeIcon
                      icon={faClock}
                      style={{ marginRight: '5px' }}
                    />
                    <h6 className="bukra-regular">
                      {moment(blog.dateCreated).format('DD MMM, YYYY')}
                    </h6>
                  </div>
                </div>
                <div className="blogs-inner-text bukra-regular">
                  {blog.post}
                </div>
                <br></br>
                <div className="blogs-btn-mobile">
                  <Button
                    variant="danger"
                    value={blog._id}
                    onClick={this.handleClick}
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}
