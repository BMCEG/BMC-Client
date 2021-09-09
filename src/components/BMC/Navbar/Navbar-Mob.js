import React, { Component } from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@material-ui/core';
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
export default class NavbarMob extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Navbar className="bmcnav__root" fixed="top">
                <div className='bmcnav__left--mob'>
                <Button variant='link' className='bmcnav__btn__logo bmcnav__btn--size' href='/'>
                        <img src={`${endpoint}/Logo (1).png`} className='bmcnav__logo--mob' />
                    </Button>
                </div>
                <div className='nav-dmap-right-mob'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                <FontAwesomeIcon color='black' icon={faBars} size={'2x'} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu align={{ lg: 'left' }} className='nav-bmc-dropdown'>
                                <div className="nav__dropdown">
                                    <Dropdown.Item href='/' ><Typography className='bukra-bold'>Home</Typography></Dropdown.Item>
                                    <hr></hr>
                                    <Dropdown.Item><Typography className='bukra-bold'>About:</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/about/founder' ><Typography className='bukra-regular'>Founder's Message</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/about/partners' ><Typography className='bukra-regular'>Partners' Message</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/about/story' ><Typography className='bukra-regular'>Our Story</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/whyBMC' ><Typography className='bukra-regular'>Why BMC?!</Typography></Dropdown.Item>
                                    <br></br>
                                    <Dropdown.Item><Typography className='bukra-bold'>Services:</Typography></Dropdown.Item>
                                    {/* <br></br> */}
                                    <Dropdown.Item disabled><Typography className='bukra-regular'>Business Mentoring and Guidance:
                                    </Typography></Dropdown.Item>

                                    <Dropdown.Item href='/services/strategic'><Typography className='bukra-regular'>Strategic Planning</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/services/marketingMgmt'><Typography className='bukra-regular'>Marketing Management</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/services/financial'><Typography className='bukra-regular'>Finance and Accounting</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/services/hr'><Typography className='bukra-regular'>Human Resources<hr></hr></Typography></Dropdown.Item>

                                    <Dropdown.Item href='/services/corporate'><Typography className='bukra-regular'>Corporate Governance</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/courses'><Typography className='bukra-regular'>Training and Development</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/services/toolbox'><Typography className='bukra-regular'>BMC Toolbox</Typography></Dropdown.Item>
                                    <br></br>
                                    <Dropdown.Item href='/consultations'><Typography className='bukra-bold'>Consultations</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/careers'><Typography className='bukra-bold'>Careers</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/blogs'><Typography className='bukra-bold'>Blogs</Typography></Dropdown.Item>
                                    <Dropdown.Item href='/contact'><Typography className='bukra-bold'>Contact Us</Typography></Dropdown.Item>
                                    <hr></hr>
                                    <Dropdown.Item href='/ewings'><Typography className='bukra-bold'>Ewings</Typography></Dropdown.Item>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Navbar >
        )
    }
}
