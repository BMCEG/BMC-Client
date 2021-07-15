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
                    {/* <div className="title">
                        <Button variant="link" href='/' >
                            <h5 className='bukra-medium'>Home</h5>
                        </Button>
                    </div> */}
                    <div className="title">
                        <NavbarDropdown size='h5' title="About" items={aboutItems} />
                    </div>
                    <div className="title">
                        <Button variant="link" href='/whyBMC' >
                            <h5 className='bukra-medium'>Why BMC?!</h5>
                        </Button>
                    </div>
                    <div className="title">
                        <NavbarDropdown size='h5' title="Consultency Services" items={servicesItems} />
                    </div>
                    <div className="title">
                        <Button variant="link" href='/partners' >

                            <h5 className='bukra-medium'>Clients</h5>
                        </Button>

                    </div>
                    <div className="title">
                        <Button variant="link" href='/careers/openings' >
                            <h5 className='bukra-medium'>Careers</h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5 className='bukra-medium'>Blogs</h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/contact' >
                            <h5 className='bukra-medium'>Contact Us</h5>
                        </Button>
                    </div>
                </div>
                <div className='nav-bmc-right'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Button variant="link" href='https://www.facebook.com/businessmapconsultants/' >
                            <h6><FontAwesomeIcon icon={faFacebook} size={'1x'} /></h6>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='https://www.linkedin.com/company/businessmapconsultants/' >
                            <h6><FontAwesomeIcon icon={faLinkedin} size={'1x'} /></h6>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q'  >
                            <h6><FontAwesomeIcon icon={faYoutube} size={'1x'} /></h6>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h6><FontAwesomeIcon icon={faInstagram} size={'1x'} /></h6>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h6><FontAwesomeIcon icon={faTwitter} size={'1x'} /></h6>
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
