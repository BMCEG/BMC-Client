import React, { Component } from 'react'
import './Navbar.css';
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import endpoint from '../../../helpers/api_service';
import MediaQuery from 'react-responsive';
export default class Navbar2 extends Component {
    constructor(props) {
        super(props)
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            aboutToggle: 'none',
            mentoringToggle: 'none',
            servicesToggle: 'none'
        }

    }

    handleMouseEnter(e) {
        this.setState({
            [e]: 'block'
        })
        document.getElementById(e).click();

    }
    handleMouseLeave(e) {

        document.getElementById(e + '-menu').classList.add('dropdown__fadeOut')
        setTimeout(() => {
            this.setState({
                [e]: 'none'
            })
        }, 500);

    }

    render() {
        return (
            <Navbar className='bmcnav__root' fixed='top'>
                <div className='bmcnav__space' />
                <Button variant='link' className='bmcnav__btn bmcnav__btn--size' href='/'>
                    <img alt='nav' src={`${endpoint}/images/Logo (1).png`} className='bmcnav__logo' />
                </Button>
                <div className='bmcnav__space' />
                <div className='bmcnav__space' />
                <Dropdown name='aboutToggle' onMouseEnter={() => this.handleMouseEnter('aboutToggle')} onMouseLeave={() => this.handleMouseLeave('aboutToggle')}>
                    <Dropdown.Toggle variant="link" id="aboutToggle" className='bmcnav__btn bmcnav__btn--size'>
                        About
                    </Dropdown.Toggle>
                    <Dropdown.Menu id='aboutToggle-menu' className='dropdown__menu' style={{ display: this.state.aboutToggle }}>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/founder'>Founder's Message</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/partners'>Partners' Message</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/about/story'>Our Story</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/whyBMC'>Why BMC</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className='bmcnav__space' />
                <Dropdown name='servicesToggle' onMouseEnter={() => this.handleMouseEnter('servicesToggle')} onMouseLeave={() => this.handleMouseLeave('servicesToggle')} >
                    <Dropdown.Toggle id="servicesToggle" variant="link" className='bmcnav__btn bmcnav__btn--size'>
                        Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="servicesToggle-menu" className='dropdown__menu' style={{ display: this.state.servicesToggle }}>
                        <Dropdown name='mentoringToggle' onMouseEnter={() => this.handleMouseEnter('mentoringToggle')} onMouseLeave={() => this.handleMouseLeave('mentoringToggle')}>
                            <Dropdown.Toggle id="mentoringToggle" variant="link" className='bmcnav__dropdown__item bmcnav__dropdown__item--nested bmcnav__btn--size'>
                                Business Mentoring & Guidance
                            </Dropdown.Toggle>
                            <Dropdown.Menu id='mentoringToggle-menu' align="right" className='bmcnav__dropdown__menu--nested' style={{ display: this.state.mentoringToggle }}>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/strategic'>Strategic Planning</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/marketingMgmt'>Marketing Management</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/hr'>HR Management</Dropdown.Item>
                                <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/financial'>Finance & Accoutning</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item variant="link" className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/corporate'>Corporate Governance</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/services/toolbox'>BMC Toolbox</Dropdown.Item>
                        <Dropdown.Item className='bmcnav__dropdown__item bmcnav__btn--size' href='/courses'>Training & Development</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
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
                <MediaQuery minWidth={1250}>
                    <div className='bmcnav__divider'></div>
                </MediaQuery>
                <Button variant='link' className='bmcnav__btn bmcnav__btn--size' href='/ewings'>
                    <img alt='nav' src={`${endpoint}/images/ewings-logo-greyscale.png`} className='bmcnav__logo--ewings' />
                </Button>
                <MediaQuery minWidth={1250}>
                    {/* <div className='bmcnav__divider'></div> */}
                <div className='bmcnav__space' />
                </MediaQuery>
            </Navbar>
        )
    }
}
