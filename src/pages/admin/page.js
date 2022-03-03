import React, { Component } from 'react';
import './page.css';
import { getJwt } from '../../helpers/jwt';
import NavbarAdmin from '../../components/navbar/navbarAdmin.js';
import AdminLogin from '../../components/admin/login.js';
import AdminPanel from '../../components/admin/panel.js';

export default class panel extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);

    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount = async () => {
    let jwt = getJwt();

    if (!jwt) {
      this.setState({
        isLoggedIn: false,
      });
    } else {
      this.setState({
        isLoggedIn: true,
      });
    }
  };

  handleLogin = (data) => {
    localStorage.setItem('jwt', data.token);
    localStorage.setItem('adminID', data.adminID);
    window.location.reload();
  };

  render() {
    return (
      <div className="page-root">
        {this.state.isLoggedIn ? (
          <>
            <NavbarAdmin isLoggedIn={this.state.isLoggedIn} />
            <AdminPanel />
          </>
        ) : (
          <>
            <NavbarAdmin isLoggedIn={this.state.isLoggedIn} />
            <AdminLogin handleLogin={this.handleLogin} />
          </>
        )}
      </div>
    );
  }
}
