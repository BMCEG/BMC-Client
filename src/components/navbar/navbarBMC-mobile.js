import React, { Component } from 'react'
import NavbarDropdown from './navbarBMCDropdown';
import './navbarBMC.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../helpers/api_service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faLink } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin, fab } from '@fortawesome/free-brands-svg-icons'
import Dropdown from 'react-bootstrap/Dropdown'

export default class NavbarBMC extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedItem: ""
        }
    }

    render() {
        const aboutItems = [{
            displayTitle: "Founder's Message",
            path: "/about/founder",
            nav: 'bmc'
        },
        {
            displayTitle: "Partners' Message",
            path: "/about/partners",
            nav: 'bmc'
        },
        {
            displayTitle: "Our Story",
            path: "/about/story",
            nav: 'bmc'
        },
        ];

        const servicesItems = [{
            displayTitle: "Strategic Plan",
            path: "/services/strategic",
            nav: 'bmc'
        },
        {
            displayTitle: "Marketing Management",
            path: "/services/marketingMgmt",
            nav: 'bmc'
        },
        {
            displayTitle: "HR Management",
            path: "/services/hr",
            nav: 'bmc'
        },
        {
            displayTitle: "Financial and Accoutning",
            path: "/services/financial",
            nav: 'bmc'
        },
        {
            displayTitle: "BMC Tool Box",
            path: "/services/toolbox",
            nav: 'bmc'
        },
        ];

        return (
            <Navbar className="nav-bmc-root-mob" fixed="top">
                <div className='nav-bmc-left'>
                    <div className='title nav-logo-mob'>
                        <Button variant='link' href="/">
                            <img src={`${endpoint}/logo-no-text.png`} alt='home' className='nav-logo-img' />
                        </Button>

                    </div>
                </div>
                <div className='nav-bmc-right'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                {/* <h3>{this.props.title}</h3> */}
                                {/* <Button variant="link" href='/blogs' > */}

                                <h5 className='bukra-bold'><FontAwesomeIcon icon={faBars} size={'2x'} /></h5>
                                {/* </Button> */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={{ lg: 'left' }}>

                                <Dropdown.Item href='/' ><h5 className='bukra-bold'>Home</h5></Dropdown.Item>
                                <hr></hr>
                                <Dropdown.Item><h5 className='bukra-bold'>About:</h5></Dropdown.Item>
                                <Dropdown.Item href='/about/founder' ><h6 className='bukra-regular'>Founder's Message</h6></Dropdown.Item>
                                <Dropdown.Item href='/about/partners' ><h6 className='bukra-regular'>Partners' Message</h6></Dropdown.Item>
                                <Dropdown.Item href='/about/story' ><h6 className='bukra-regular'>Our Story</h6></Dropdown.Item>
                                <br></br>
                                <Dropdown.Item href='/whyBMC' ><h5 className='bukra-bold'>Why BMC?!</h5></Dropdown.Item>
                                <br></br>
                                <Dropdown.Item><h5 className='bukra-bold'>Consultancy Services:</h5></Dropdown.Item>
                                {/* <h5 className='bukra-bold'>Consultancy Services</h5> */}
                                <Dropdown.Item href='/services/strategic'><h6 className='bukra-regular'>Strategic Planning</h6></Dropdown.Item>
                                <Dropdown.Item href='/services/marketingMgmt'><h6 className='bukra-regular'>Marketing Management</h6></Dropdown.Item>
                                <Dropdown.Item href='/services/financial'><h6 className='bukra-regular'>Finance and Accounting</h6></Dropdown.Item>
                                <Dropdown.Item href='/services/hr'><h6 className='bukra-regular'>Humar Resources</h6></Dropdown.Item>
                                <Dropdown.Item href='/services/toolbox'><h6 className='bukra-regular'>BMC Toolbox</h6></Dropdown.Item>
                                <br></br>
                                <Dropdown.Item href='/partners'><h5 className='bukra-bold'>Clients</h5></Dropdown.Item>
                                <Dropdown.Item href='/careers/openings'><h5 className='bukra-bold'>Careers</h5></Dropdown.Item>
                                <Dropdown.Item href='/blogs'><h5 className='bukra-bold'>Blogs</h5></Dropdown.Item>
                                <Dropdown.Item href='/contact'><h5 className='bukra-bold'>Contact Us</h5></Dropdown.Item>
                                {/* <br></br> */}
                                <hr></hr>
                                <Dropdown.Item>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon icon={faFacebook} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon icon={faTwitter} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon icon={faInstagram} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon icon={faYoutube} size={'2x'} /></h5>
                                    </Button>
                                </Dropdown.Item>
                                <hr></hr>
                                <Dropdown.Item href='/ewings'><h5 className='bukra-bold'>Ewings</h5></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Navbar>
        )
    }
}