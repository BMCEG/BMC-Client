import React, { Component } from 'react'
import './navbarDMap.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
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
        return (
            <Navbar className="nav-dmap-root-mob">
                <div className='nav-dmap-left-mob'>

                    <div className="title">
                        <Button variant="link" onClick={() => { window.location.href = '/ewings' }} >
                                <img src={`${endpoint}/ewings-full-logo.png`} alt='logo' className='nav-dmap-logo' />
                        </Button>
                    </div>
                </div>
                <div className='nav-dmap-right-mob'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="dropdown-basic">
                                <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faBars} size={'2x'} /></h5>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={{ lg: 'left' }}>
                                <Dropdown.Item href='/ewings' ><h5 className='bukra-bold'>Home</h5></Dropdown.Item>
                                <hr></hr>
                                <Dropdown.Item><h5 className='bukra-bold'>Services:</h5></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/digital' ><h6 className='bukra-regular'>Digital Marketing</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/multimedia' ><h6 className='bukra-regular'>Multimedia Productions</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/social' ><h6 className='bukra-regular'>Social Media Management</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/media' ><h6 className='bukra-regular'>Media Planning and Buying</h6></Dropdown.Item>
                                <Dropdown.Item href='/ewings/services/web' ><h6 className='bukra-regular'>Web Development</h6></Dropdown.Item>
                                <br></br>
                                <Dropdown.Item href='/ewings/courses' ><h5 className='bukra-bold'>Courses</h5></Dropdown.Item>
                                <br></br>
                                <Dropdown.Item href='/ewings/gallery' ><h5 className='bukra-bold'>Gallery</h5></Dropdown.Item>

                                <hr></hr>
                                <Dropdown.Item>
                                    <Button variant='link' href='https://www.facebook.com/businessmapconsultants/'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faFacebook} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faTwitter} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link' href='https://www.linkedin.com/company/businessmapconsultants/'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faLinkedin} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faInstagram} size={'2x'} /></h5>
                                    </Button>
                                    <Button variant='link' href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q'>
                                        <h5 className='bukra-bold'><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faYoutube} size={'2x'} /></h5>
                                    </Button>
                                </Dropdown.Item>
                                <hr></hr>
                                <Dropdown.Item href='/' ><h5 className='bukra-bold'>BMC</h5></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>

            </Navbar>
        )
    }
}
