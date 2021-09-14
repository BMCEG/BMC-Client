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
        // alert(e.target.name)
        document.getElementById(e).click();

    }
    handleMouseLeave(e) {
        document.getElementById(e + '-menu').classList.add('dropdown__fadeOut')
        setTimeout(function(){  document.getElementById(e).click(); }, 400);

       

    }

    render() {
        return (
            <Navbar className='ewingsnav__root' fixed='top'>
                <div className='ewingsnav__space' />
                <Button variant='link' className='bmcnav__btn ewingsnav__btn--size' href='/ewings'>
                    <img alt='nav'src={`${endpoint}/images/ewings-full-logo.png`} className='bmcnav__logo' />
                </Button>
                {/* <div className='ewingsnav__space' /> */}
                <div className='ewingsnav__space' />

                <Dropdown name='services-toggle' onMouseEnter={() => this.handleMouseEnter('services-toggle')} onMouseLeave={() => this.handleMouseLeave('services-toggle')} >
                    <Dropdown.Toggle id="services-toggle" variant="link" className='bmcnav__btn ewingsnav__btn--size'>
                        Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="services-toggle-menu" className='dropdown__menu'>
                            <Dropdown.Item className='bmcnav__dropdown__item ewingsnav__btn--size' href='/ewings/services/digital'>Digital Marketing</Dropdown.Item>
                            <Dropdown.Item className='bmcnav__dropdown__item ewingsnav__btn--size' href='/ewings/services/multimedia'>Multimedia Productions</Dropdown.Item>
                            <Dropdown.Item className='bmcnav__dropdown__item ewingsnav__btn--size' href='/ewings/services/social'>Social Media Management</Dropdown.Item>
                            <Dropdown.Item className='bmcnav__dropdown__item ewingsnav__btn--size' href='/ewings/services/media'>Media Planning and Buying</Dropdown.Item>
                            <Dropdown.Item className='bmcnav__dropdown__item ewingsnav__btn--size' href='/ewings/services/web'>Web Development</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
                <div className='ewingsnav__space' />
                <Button className='bmcnav__btn ewingsnav__btn--size' href='/ewings/courses' variant='link'>
                    Courses
                </Button>
                {/* <div className='ewingsnav__space' />
                <Button className='bmcnav__btn ewingsnav__btn--size' href='/ewings/gallery' variant='link'>
                    Gallery
                </Button> */}
                <div className='ewingsnav__space' />
                <Button className='bmcnav__btn ewingsnav__btn--size' href='/ewings/contact' variant='link'>
                    Contact Us
                </Button>
                <div className='ewingsnav__space' />
                <div className='ewingsnav__divider'></div>
                <Button variant='link' className='bmcnav__btn ewingsnav__btn--size' href='/'>

                    <img alt='nav'src={`${endpoint}/images/logo-no-text.png`} className='ewingsnav__bmc__logo' />
                </Button>
                <div className='ewingsnav__space' />
            </Navbar>
        )
    }
}
