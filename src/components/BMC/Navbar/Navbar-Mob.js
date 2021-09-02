import React, { Component } from 'react'
import './Navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'
export default class NavbarMob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: ""
        }
    }

    render() {
        return (
            <Navbar className="bmcnav__root" fixed="top">
                <div className='bmcnav__left--mob'>
                    <Button variant='link' className='bmcnav__btn bmcnav__btn--size' href='/'>
                        <img src={`${endpoint}/Logo (1).png`} className='bmcnav__logo--mob' />
                    </Button>
                </div>
                <div className='nav-bmc-right'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                <FontAwesomeIcon icon={faBars} size={'2x'} />
                            </Dropdown.Toggle>
                            <Dropdown.Menu align={{ lg: 'left' }} className='nav-bmc-dropdown'>
                                <div className="Lmoa12">
                                    <Dropdown.Item href='/' ><h5 className='bukra-bold'>Home</h5></Dropdown.Item>
                                    <hr></hr>
                                    <Dropdown.Item><h5 className='bukra-bold'>About:</h5></Dropdown.Item>
                                    <Dropdown.Item href='/about/founder' ><h6 className='bukra-regular'>Founder's Message</h6></Dropdown.Item>
                                    <Dropdown.Item href='/about/partners' ><h6 className='bukra-regular'>Partners' Message</h6></Dropdown.Item>
                                    <Dropdown.Item href='/about/story' ><h6 className='bukra-regular'>Our Story</h6></Dropdown.Item>
                                    <Dropdown.Item href='/whyBMC' ><h5 className='bukra-regular'>Why BMC?!</h5></Dropdown.Item>
                                    <br></br>
                                    {/* <br></br> */}
                                    <Dropdown.Item><h5 className='bukra-bold'>Services:</h5></Dropdown.Item>
                                    <Dropdown.Item href='/services/strategic'><h6 className='bukra-regular'>Strategic Planning</h6></Dropdown.Item>
                                    <Dropdown.Item href='/services/marketingMgmt'><h6 className='bukra-regular'>Marketing Management</h6></Dropdown.Item>
                                    <Dropdown.Item href='/services/financial'><h6 className='bukra-regular'>Finance and Accounting</h6></Dropdown.Item>
                                    <Dropdown.Item href='/services/hr'><h6 className='bukra-regular'>Human Resources</h6></Dropdown.Item>
                                    <Dropdown.Item href='/services/toolbox'><h6 className='bukra-regular'>BMC Toolbox</h6></Dropdown.Item>
                                    <Dropdown.Item href='/courses'><h5 className='bukra-regular'>Training and Development</h5></Dropdown.Item>
                                    <br></br>
                                    {/* <Dropdown.Item href='/partners'><h5 className='bukra-bold'>Clients</h5></Dropdown.Item> */}
                                    <Dropdown.Item href='/consultations'><h5 className='bukra-bold'>Consultations</h5></Dropdown.Item>
                                    <Dropdown.Item href='/careers'><h5 className='bukra-bold'>Careers</h5></Dropdown.Item>
                                    <Dropdown.Item href='/blogs'><h5 className='bukra-bold'>Blogs</h5></Dropdown.Item>
                                    <Dropdown.Item href='/contact'><h5 className='bukra-bold'>Contact Us</h5></Dropdown.Item>
                                    <hr></hr>
                                    {/* <div className='nav-mob-socials'>
                                        <Button variant='link' href='https://www.facebook.com/businessmapconsultants/' >
                                            <h5 className='bukra-bold'><FontAwesomeIcon icon={faFacebook} size={'2x'} /></h5>
                                        </Button>
                                        <Button variant='link'>
                                            <h5 className='bukra-bold'><FontAwesomeIcon icon={faTwitter} size={'2x'} /></h5>
                                        </Button>
                                        <Button variant='link'>
                                            <h5 className='bukra-bold'><FontAwesomeIcon icon={faInstagram} size={'2x'} /></h5>
                                        </Button>
                                        <Button variant='link' href='https://www.linkedin.com/company/businessmapconsultants/'>
                                            <h5 className='bukra-bold'><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></h5>
                                        </Button>
                                        <Button variant='link' href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q'>
                                            <h5 className='bukra-bold'><FontAwesomeIcon icon={faYoutube} size={'2x'} /></h5>
                                        </Button>
                                    </div>
                                    <hr></hr> */}
                                    <Dropdown.Item href='/ewings'><h5 className='bukra-bold'>Ewings</h5></Dropdown.Item>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Navbar >
        )
    }
}
