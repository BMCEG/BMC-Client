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
        {
            displayTitle: "Why BMC?!",
            path: "/whyBMC",
            nav: 'bmc'
        },
        ];

        const servicesItems = [{
            displayTitle: "Business Mentoring & Guidance",
            // path: '/services/'
            nav: "bmc"
        },
        {
            displayTitle: "Corporate Governance",
            nav: 'bmc'
        },
        {
            displayTitle: "BMC Tool Box",
            path: "/services/toolbox",
            nav: 'bmc'
        },
        {
            displayTitle: "Training and Developments",
            path: "/courses",
            nav: 'bmc'
        },
    ]

        const businessMentoringItems = [{
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
       
        ];

        return (
            <Navbar className="nav-bmc-root" fixed="top">
                <div className='nav-bmc-left'>
                    <div className='title nav-logo'>
                        <Button variant="link" href='/' >
                            <img src={`${endpoint}/images/logo-no-text.png`} alt='home' className='nav-logo-img' />
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/' >
                            <p className='bukra-medium title-size'>Home</p>
                        </Button>
                    </div>
                    <div className="title">
                        <NavbarDropdown title="About" items={aboutItems} />
                    </div>
                    {/* <div className="title">
                        <Button variant="link" href='/whyBMC' >
                            <p className='bukra-medium title-size'>Why BMC?!</p>
                        </Button>
                    </div> */}
                    <div className="title">
                        <NavbarDropdown title="Services" items={servicesItems} />
                    </div>
                    {/* <div className="title">
                        <Button variant="link" href='/courses' >
                            <p className='bukra-medium title-size'>Courses</p>
                        </Button>
                    </div> */}
                    <div className="title">
                        <Button variant="link" href='/partners' >

                            <p className='bukra-medium title-size'>Clients</p>
                        </Button>

                    </div>
                    <div className="title">
                        <Button variant="link" href='/careers/openings' >
                            <p className='bukra-medium title-size'>Careers</p>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <p className='bukra-medium title-size'>Blogs</p>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/contact' >
                            <p className='bukra-medium title-size'>Contact Us</p>
                        </Button>
                    </div>
                </div>
                <div className='nav-bmc-right'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Button className="nav-social-btn" variant="link" href='https://www.facebook.com/businessmapconsultants/' >
                            <FontAwesomeIcon icon={faFacebook} className='nav-social-btn-img' />
                        </Button>
                    </div>
                    <div className="title">
                        <Button className="nav-social-btn" variant="link" href='https://www.linkedin.com/company/businessmapconsultants/' >
                            <FontAwesomeIcon icon={faLinkedin} className='nav-social-btn-img' />
                        </Button>
                    </div>
                    <div className="title">
                        <Button className="nav-social-btn" variant="link" href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q' >
                            <FontAwesomeIcon icon={faYoutube} className='nav-social-btn-img' />
                        </Button>
                    </div>
                    <div className="title">
                        <Button className="nav-social-btn" variant="link" href='/blogs'  >
                            <FontAwesomeIcon icon={faInstagram} className='nav-social-btn-img' />
                        </Button>
                    </div>
                    <div className="title">
                        <Button className="nav-social-btn" variant="link" href='/blogs' >
                            <FontAwesomeIcon icon={faTwitter} className='nav-social-btn-img' />
                        </Button>
                    </div>
                    <div className='nav-sep' />
                    <div className='nav-logo-ewings'>
                        <Button variant="link" href='/ewings' >
                            <img src={`${endpoint}/images/ewings-logo-greyscale.png`} alt='home' className='nav-logo-img-ewings' />
                        </Button>
                    </div>
                </div>
            </Navbar>
        )
    }
}
