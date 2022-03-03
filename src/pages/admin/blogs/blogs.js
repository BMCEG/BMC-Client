import React, { Component } from 'react';
import './blogs.css';
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import CreateBlog from '../../../components/admin/blogs/newBlog.js';
import BlogsTable from '../../../components/admin/blogs/blogs.js';
import {
  faUserGraduate,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';

export default class Blogs extends Component {
  constructor(props) {
    super(props);
    this.handleBtnClick = this.handleBtnClick.bind(this);

    this.state = {
      context: 'Blogs',
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
                label={'Create Blog'}
                icon={faUserGraduate}
                onClick={() => this.handleBtnClick('CreateBlog')}
              />
              <br></br>
              <AdminBtn
                label={'View Blogs'}
                icon={faChalkboardTeacher}
                onClick={() => this.handleBtnClick('Blogs')}
              />
              <br></br>
            </div>
          </div>
          <div className="admin-careers-body">
            {this.state.context === 'Blogs' ? <BlogsTable /> : <CreateBlog />}
          </div>
        </div>
      </>
    );
  }
}
