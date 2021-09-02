import React, { Component } from 'react'
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
export default class Navbar2 extends Component {
    render() {
        return (
            <Navbar className='bmcnav__root' fixed='top'>
                <div className='bmcnav__space' />
                <Button variant='link' className='bmcnav__btn bmcnav__btn--size' href='/'>
                    <img src={`${endpoint}/Logo (1).png`} className='bmcnav__logo' />
                </Button>
                <div className='bmcnav__space' />
                <div className='bmcnav__space' />
                {/* <Button className='bmcnav__btn bmcnav__btn--size' variant='link' href='/'>
                    Home
                </Button>
                <div className='bmcnav__space' /> */}
                <Dropdown>
                    <Dropdown.Toggle variant="link" className='bmcnav__btn bmcnav__btn--size'>
                        About
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* {this.state.items.map((item) => ( */}
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/founder'>Founder's Message</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/partners'><h5>Partners' Message</h5></Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/story'><h5>Our Story</h5></Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/whyBMC'><h5>Why BMC</h5></Dropdown.Item>
                        {/* )) */}
                        {/* } */}
                    </Dropdown.Menu>
                </Dropdown>
                <div className='bmcnav__space' />
                <Dropdown>
                    <Dropdown.Toggle variant="link" className='bmcnav__btn bmcnav__btn--size'>
                        Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu>

                        {/* <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size'> */}
                        <Dropdown>
                            <Dropdown.Toggle variant="link" className='bmcnav__dropdown__item bmcnav__dropdown__item--nested bmcnav__btn--size'>
                                Business Mentoring & Guidance
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="right" className='bmcnav__dropdown__menu--nested'>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/strategic'>Strategic Planning</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/marketingMgmt'><h5>Marketing Management</h5></Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/hr'><h5>HR Management</h5></Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/financial'><h5>Finance & Accoutning</h5></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* </Dropdown.Item> */}

                        <Dropdown.Item variant="link" className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/corporate'>Corporate Governance</Dropdown.Item>

                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/toolbox'><h5>BMC Toolbox</h5></Dropdown.Item>

                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/courses'><h5>Training & Development</h5></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* <div className='bmcnav__space' />
                <Button className='bmcnav__btn bmcnav__btn--size' href='/courses' variant='link'>
                    Courses
                </Button> */}
                {/* <div className='bmcnav__space' />
                <Button className='bmcnav__btn bmcnav__btn--size' href='/partners' variant='link'>
                    Clients
                </Button> */}
                <div className='bmcnav__space' />
                <Button className='bmcnav__btn bmcnav__btn--size' href='/consultations' variant='link'>
                    Consultations
                </Button>
                <div className='bmcnav__space' />
                <Button className='bmcnav__btn bmcnav__btn--size' href='/careers' variant='link'>
                    Careers
                </Button>
                <div className='bmcnav__space' />
                <Button className='bmcnav__btn bmcnav__btn--size' href='/blogs' variant='link'>
                    Blogs
                </Button>
                <div className='bmcnav__space' />
                <Button className='bmcnav__btn bmcnav__btn--size' href='/contact' variant='link'>
                    Contact
                </Button>
                <div className='bmcnav__space' />
                <div className='bmcnav__divider'></div>
                <Button variant='link' className='bmcnav__btn bmcnav__btn--size' href='/ewings'>

                    <img src={`${endpoint}/ewings-logo-greyscale.png`} className='bmcnav__logo--ewings' />
                </Button>
                <div className='bmcnav__space' />
            </Navbar>
        )
    }
}
