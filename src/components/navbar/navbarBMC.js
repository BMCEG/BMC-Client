import React, { Component } from 'react'
import NavbarDropdown from './navbarBMCDropdown';
import './navbarBMC.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../helpers/api_service.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
            <Navbar className="nav-bmc-root" fixed="top">
                <div className='nav-bmc-left'>
                    <div className='title nav-logo'>
                        <Button variant="link" href='/' >
                            <img src={`${endpoint}/logo-no-text.png`} alt='home' className='nav-logo-img' />
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/' >
                            <h4 className='bukra-medium'>Home</h4>
                        </Button>
                    </div>
                    <div className="title">
                        <NavbarDropdown title="About" items={aboutItems} />
                    </div>
                    <div className="title">
                        <Button variant="link" href='/whyBMC' >
                            <h4 className='bukra-medium'>Why BMC?!</h4>
                        </Button>
                    </div>
                    <div className="title">
                        <NavbarDropdown title="Consultency Services" items={servicesItems} />
                    </div>
                    <div className="title">
                        <Button variant="link" href='/partners' >

                            <h4 className='bukra-medium'>Clients</h4>
                        </Button>

                    </div>
                    <div className="title">
                        <Button variant="link" href='/careers/openings' >
                            <h4 className='bukra-medium'>Careers</h4>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h4 className='bukra-medium'>Blogs</h4>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/contact' >
                            <h4 className='bukra-medium'>Contact Us</h4>
                        </Button>
                    </div>
                    {/* <div className="title">
                    <Button variant="link" href='/gallery' >
                        <h4>Gallery</h4>
                    </Button>
                </div> */}

                </div>
                <div className='nav-bmc-right'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon icon={faFacebook} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon icon={faLinkedin} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon icon={faYoutube} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon icon={faInstagram} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon icon={faTwitter} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className='title nav-logo-ewings'>
                        <Button variant="link" href='/ewings' >
                            <img src={`${endpoint}/ewings-logo-greyscale.png`} alt='home' className='nav-logo-img-ewings' />
                        </Button>
                    </div>
                </div>
            </Navbar>
        )
    }
}
