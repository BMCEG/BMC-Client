import React, { Component } from 'react'
import NavbarDropdown from './navbarBMCDropdown';
import './navbarDMap.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faLink } from '@fortawesome/free-solid-svg-icons';
import Dropdown from 'react-bootstrap/Dropdown'
import endpoint from '../../helpers/api_service';

export default class NavbarDMapMob extends Component {
    constructor(props) {
        super(props);

        this.setSelectedItem = this.setSelectedItem.bind(this);

        this.state = {
            selectedItem: ""
        }
    }

    async setSelectedItem(item, nav) {
        console.log('dmap nav', nav)
        this.setState({
            selectedItem: item
        })
        this.props.handleSelectedContext(item, nav)
    }

    render() {
        const servicesItems = [
            {
                displayTitle: "Digital Marketing",
                path: "/ewings/services/digital",
                nav: 'bmc'
            },
            {
                displayTitle: "Multimedia Productions",
                path: "/ewings/services/multimedia",
                nav: 'dmap'
            },
            {
                displayTitle: "Social Media Management",
                path: "/ewings/services/social",
                nav: 'dmap'
            },
            {
                displayTitle: "Media Planning and Buying",
                path: "/ewings/services/media",
                nav: 'dmap'
            },
            {
                displayTitle: "Web Development",
                path: "/ewings/services/web",
                nav: 'dmap'
            }];

        return (
            <Navbar className="nav-dmap-root-mob">
                <div className='nav-dmap-left'>

                <div className="title">
                        <Button variant="link" onClick={() => { window.location.href = '/ewings' }} >
                            <h5 style={{ color: '#4694D6' }} >
                                <img src={`${endpoint}/ewings-full-logo.png`} alt='logo' height='100px' />
                            </h5>
                        </Button>
                    </div>
                </div>
                {/* <div className='nav-dmap-center'>

                    <div className="title nav-bar-skyblue">
                        <NavbarDropdown title="Services" items={servicesItems} setSelectedItem={this.setSelectedItem} />
                    </div>
                    <div className="title gallery-tab">
                        <Button variant="link" href='/ewings/gallery' >
                            <h3 style={{ color: '#4694D6' }} >Gallery</h3>
                        </Button>
                    </div>
                </div> */}

                <div className='nav-dmap-right-mob'>
                    {/* <div className="title" style={{ marginLeft: 'auto' }}>
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faFacebook} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faLinkedin} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faYoutube} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faInstagram} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='/blogs' >
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faTwitter} size={'2x'} /></h5>
                        </Button>
                    </div> */}

                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                {/* <h3>{this.props.title}</h3> */}
                                {/* <Button variant="link" href='/blogs' > */}

                                <h5><FontAwesomeIcon style={{ color:'#4694D6'}} icon={faBars} size={'2x'} /></h5>
                                {/* </Button> */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={{ lg: 'left' }}>

                                <Dropdown.Item href='/' ><h5>Home</h5></Dropdown.Item>
                                <hr></hr>
                                <Dropdown.Item><h5>Services:</h5></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/digital' ><h6>Digital Marketing</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/multimedia' ><h6>Multimedia Productions</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/social' ><h6>Social Media Management</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/media' ><h6>Media Planning and Buying</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/web' ><h6>Web Development</h6></Dropdown.Item>
                                <br></br>
                                <Dropdown.Item href='/ewings/gallery' ><h5>Gallery</h5></Dropdown.Item>
                                <br></br>
                                <hr></hr>
                                <Dropdown.Item>
                                    <Button variant='link'>
                                        <h5><FontAwesomeIcon style={{ color:'#4694D6'}} icon={faFacebook} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5><FontAwesomeIcon style={{ color:'#4694D6'}} icon={faTwitter} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5><FontAwesomeIcon style={{ color:'#4694D6'}} icon={faLinkedin} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5><FontAwesomeIcon style={{ color:'#4694D6'}} icon={faInstagram} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5><FontAwesomeIcon style={{ color:'#4694D6'}} icon={faYoutube} size={'2x'} /></h5>
                                    </Button>
                                </Dropdown.Item>
                                {/* <hr></hr>
                                <Dropdown.Item>
                                    <h5 style={{ float: 'left' }}><FontAwesomeIcon icon={faBars} size={'2x'} /></h5>
                                    <div style={{ padding: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                        <h5>Ewings</h5>
                                    </div>
                                </Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                {/* <div className="title">
                    <NavbarDropdown title="About" items={aboutItems} setSelectedItem={this.setSelectedItem} />
                </div> */}
                {/* <div className="title">
                    <NavbarDropdown title="Packages" items={packagesItems} setSelectedItem={this.setSelectedItem} />
                </div>
                <div className="title">
                    <h5>Contact Us</h5>
                </div>
                <div className="title">
                    <h5>Careers</h5>
                </div> */}
                {/* <div className="title">
                    <h5>Partners</h5>
                </div>
                <Button className="title" variant="link" onClick={() => this.setSelectedItem('', 'bmc')} >
                    <h5>Consultants</h5>

                </Button> */}
            </Navbar>
        )
    }
}
