import React, { Component } from 'react';
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faYoutube,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { Typography } from '@material-ui/core';
export default class NavbarMob extends Component {
  render() {
    return (
      <Navbar className="ewingsnav__root" fixed="top">
        <div className="bmcnav__left--mob">
          <Button
            variant="link"
            className="bmcnav__btn__logo bmcnav__btn--size"
            href="/"
          >
            <img
              alt="nav"
              src={`${endpoint}/images/ewings-full-logo.png`}
              className="bmcnav__logo--mob"
            />
          </Button>
        </div>

        <div className="nav-dmap-right-mob">
          <div className="title" style={{ marginLeft: 'auto' }}>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                <Typography>
                  <FontAwesomeIcon
                    style={{ color: '#4694D6' }}
                    icon={faBars}
                    size={'2x'}
                  />
                </Typography>
              </Dropdown.Toggle>

              <Dropdown.Menu align={{ lg: 'left' }}>
                <Dropdown.Item href="/ewings">
                  <Typography className="bukra-bold">Home</Typography>
                </Dropdown.Item>
                <hr></hr>
                <Dropdown.Item>
                  <Typography className="bukra-bold">Services:</Typography>
                </Dropdown.Item>
                <Dropdown.Item href="/ewings/services/digital">
                  <h6 className="bukra-regular">Digital Marketing</h6>
                </Dropdown.Item>
                <Dropdown.Item href="/ewings/services/multimedia">
                  <h6 className="bukra-regular">Multimedia Productions</h6>
                </Dropdown.Item>
                <Dropdown.Item href="/ewings/services/social">
                  <h6 className="bukra-regular">Social Media Management</h6>
                </Dropdown.Item>
                <Dropdown.Item href="/ewings/services/media">
                  <h6 className="bukra-regular">Media Planning and Buying</h6>
                </Dropdown.Item>
                <Dropdown.Item href="/ewings/services/web">
                  <h6 className="bukra-regular">Web Development</h6>
                </Dropdown.Item>
                <br></br>
                <Dropdown.Item href="/ewings/courses">
                  <Typography className="bukra-bold">Courses</Typography>
                </Dropdown.Item>

                <hr></hr>
                <Dropdown.Item>
                  <Button
                    variant="link"
                    href="https://www.facebook.com/Ewings-103947045332006"
                  >
                    <Typography className="bukra-bold">
                      <FontAwesomeIcon
                        style={{ color: '#4694D6' }}
                        icon={faFacebook}
                        size={'2x'}
                      />
                    </Typography>
                  </Button>
                  <Button variant="link">
                    <Typography className="bukra-bold">
                      <FontAwesomeIcon
                        style={{ color: '#4694D6' }}
                        icon={faTwitter}
                        size={'2x'}
                      />
                    </Typography>
                  </Button>
                  <Button
                    variant="link"
                    href="https://www.linkedin.com/company/businessmapconsultants/"
                  >
                    <Typography className="bukra-bold">
                      <FontAwesomeIcon
                        style={{ color: '#4694D6' }}
                        icon={faLinkedin}
                        size={'2x'}
                      />
                    </Typography>
                  </Button>
                  <Button
                    variant="link"
                    href="https://www.instagram.com/ewings_creative/?utm_medium=copy_link"
                  >
                    <Typography className="bukra-bold">
                      <FontAwesomeIcon
                        style={{ color: '#4694D6' }}
                        icon={faInstagram}
                        size={'2x'}
                      />
                    </Typography>
                  </Button>
                  <Button
                    variant="link"
                    href="https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q"
                  >
                    <Typography className="bukra-bold">
                      <FontAwesomeIcon
                        style={{ color: '#4694D6' }}
                        icon={faYoutube}
                        size={'2x'}
                      />
                    </Typography>
                  </Button>
                </Dropdown.Item>
                <hr></hr>
                <Dropdown.Item href="/">
                  <Typography className="bukra-bold">BMC</Typography>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Navbar>
    );
  }
}
