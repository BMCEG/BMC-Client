import React, { Component } from 'react'
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
export default class Navbar2 extends Component {
    constructor(props) {
        super(props)
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

    }

    handleMouseEnter(e) {
        console.log("here")
        // alert(e.target.name)
        document.getElementById(e).click();

    }
    handleMouseLeave(e){
        document.getElementById(e + '-menu').classList.add('dropdown__fadeOut')
        document.getElementById(e).click();

    }

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
                <Dropdown name='about-toggle' onMouseEnter={() => this.handleMouseEnter('about-toggle')} onMouseLeave={() => this.handleMouseLeave('about-toggle')}>
                    <Dropdown.Toggle variant="link" id="about-toggle" className='bmcnav__btn bmcnav__btn--size'>
                        About
                    </Dropdown.Toggle>
                    <Dropdown.Menu id='about-toggle-menu' className='dropdown__menu'>
                        {/* {this.state.items.map((item) => ( */}
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/founder'>Founder's Message</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/partners'>Partners' Message</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/story'>Our Story</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/whyBMC'>Why BMC</Dropdown.Item>
                        {/* )) */}
                        {/* } */}
                    </Dropdown.Menu>
                </Dropdown>
                <div className='bmcnav__space' />
                <Dropdown  name='services-toggle' onMouseEnter={() => this.handleMouseEnter('services-toggle')} onMouseLeave={() => this.handleMouseLeave('services-toggle')} >
                    <Dropdown.Toggle id="services-toggle" variant="link" className='bmcnav__btn bmcnav__btn--size'>
                        Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="services-toggle-menu" className='dropdown__menu'>

                        {/* <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size'> */}
                        <Dropdown name='mentoring-toggle' onMouseEnter={() => this.handleMouseEnter('mentoring-toggle')} onMouseLeave={() => this.handleMouseLeave('mentoring-toggle')}>
                            <Dropdown.Toggle id="mentoring-toggle" variant="link" className='bmcnav__dropdown__item bmcnav__dropdown__item--nested bmcnav__btn--size'>
                                Business Mentoring & Guidance
                            </Dropdown.Toggle>
                            <Dropdown.Menu id='mentoring-toggle-menu' align="right" className='bmcnav__dropdown__menu--nested'>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/strategic'>Strategic Planning</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/marketingMgmt'>Marketing Management</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/hr'>HR Management</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/financial'>Finance & Accoutning</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        {/* </Dropdown.Item> */}

                        <Dropdown.Item variant="link" className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/corporate'>Corporate Governance</Dropdown.Item>

                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/toolbox'>BMC Toolbox</Dropdown.Item>

                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/courses'>Training & Development</Dropdown.Item>
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
