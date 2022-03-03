import React, { Component } from 'react';
import NavbarDropdown from './navbarBMCDropdown';
import './navbarDMap.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import endpoint from '../../helpers/api_service';

export default class NavbarDMap extends Component {
  constructor(props) {
    super(props);

    this.setSelectedItem = this.setSelectedItem.bind(this);

    this.state = {
      selectedItem: '',
    };
  }

  async setSelectedItem(item, nav) {
    this.setState({
      selectedItem: item,
    });
    this.props.handleSelectedContext(item, nav);
  }

  render() {
    const servicesItems = [
      {
        displayTitle: 'Digital Marketing',
        path: '/ewings/services/digital',
        nav: 'bmc',
      },
      {
        displayTitle: 'Multimedia Productions',
        path: '/ewings/services/multimedia',
        nav: 'dmap',
      },
      {
        displayTitle: 'Social Media Management',
        path: '/ewings/services/social',
        nav: 'dmap',
      },
      {
        displayTitle: 'Media Planning and Buying',
        path: '/ewings/services/media',
        nav: 'dmap',
      },
      {
        displayTitle: 'Web Development',
        path: '/ewings/services/web',
        nav: 'dmap',
      },
    ];

    return (
      <Navbar className="nav-dmap-root">
        <div className="nav-dmap-left">
          <div className="title-ewings-logo">
            <Button
              variant="link"
              onClick={() => {
                window.location.href = '/ewings';
              }}
            >
              <img
                src={`${endpoint}/images/ewings-full-logo.png`}
                alt="logo"
                className="nav-ewings-logo-img"
              />
            </Button>
          </div>
        </div>
        <div className="nav-dmap-center">
          <NavbarDropdown
            isEwings={true}
            title="Services"
            items={servicesItems}
            setSelectedItem={this.setSelectedItem}
          />
          <Button variant="link" href="/ewings/courses">
            <h4 className="bukra-medium" style={{ color: '#4694D6' }}>
              Courses
            </h4>
          </Button>
          <Button variant="link" href="/ewings/gallery">
            <h4 className="bukra-medium" style={{ color: '#4694D6' }}>
              Gallery
            </h4>
          </Button>
        </div>

        <div className="nav-dmap-right">
          <div className="title">
            <Button
              className="ewings-nav-social-btn"
              variant="link"
              href="/blogs"
            >
              <FontAwesomeIcon
                style={{ color: '#4694D6' }}
                icon={faFacebook}
                className="ewings-nav-social-btn-img"
              />
            </Button>
          </div>
          <div className="title">
            <Button
              className="ewings-nav-social-btn"
              variant="link"
              href="/blogs"
            >
              <FontAwesomeIcon
                style={{ color: '#4694D6' }}
                icon={faLinkedin}
                className="ewings-nav-social-btn-img"
              />
            </Button>
          </div>
          <div className="title">
            <Button
              className="ewings-nav-social-btn"
              variant="link"
              href="/blogs"
            >
              <FontAwesomeIcon
                style={{ color: '#4694D6' }}
                icon={faYoutube}
                className="ewings-nav-social-btn-img"
              />
            </Button>
          </div>
          <div className="title">
            <Button
              className="ewings-nav-social-btn"
              variant="link"
              href="/blogs"
            >
              <FontAwesomeIcon
                style={{ color: '#4694D6' }}
                icon={faInstagram}
                className="ewings-nav-social-btn-img"
              />
            </Button>
          </div>
          <div className="title">
            <Button
              className="ewings-nav-social-btn"
              variant="link"
              href="/blogs"
            >
              <FontAwesomeIcon
                style={{ color: '#4694D6' }}
                icon={faTwitter}
                className="ewings-nav-social-btn-img"
              />
            </Button>
          </div>

          <div className="nav-ewings-bmc-tab">
            <Button variant="link" href="/">
              <img
                src={`${endpoint}/images/logo-no-text.png`}
                alt="home"
                className="nav-logo-img-bmc"
              />
            </Button>
          </div>
        </div>
      </Navbar>
    );
  }
}
