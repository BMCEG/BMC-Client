import React, { Component } from 'react';
import './partners.css';
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import Partners from '../../../components/admin/partners/partners.js';
import CreatePartner from '../../../components/admin/partners/newPartner.js';
import {
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
      context: 'Partners',
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
                label={'Create Partner'}
                icon={faUserGraduate}
                onClick={() => this.handleBtnClick('CreatePartner')}
              />
              <br></br>
              <AdminBtn
                label={'View Partners'}
                icon={faChalkboardTeacher}
                onClick={() => this.handleBtnClick('Partners')}
              />
              <br></br>
            </div>
          </div>
          <div className="admin-careers-body">
            {this.state.context === 'Partners' ? (
              <Partners />
            ) : (
              <CreatePartner />
            )}
          </div>
        </div>
      </>
    );
  }
}
