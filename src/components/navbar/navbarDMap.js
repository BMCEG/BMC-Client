import React, { Component } from 'react'
import NavbarDropdown from './navbarBMCDropdown';
import './navbarDMap.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import endpoint from '../../helpers/api_service';


export default class NavbarDMap extends Component {
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
            <Navbar className="nav-dmap-root">
                <div className='nav-dmap-left'>

                    <div className="title">
                        <Button variant="link" onClick={() => { window.location.href = '/ewings' }} >
                            <h5 style={{ color: '#4694D6' }} >
                                <img src={`${endpoint}/ewings-full-logo.png`} alt='logo' height='100px' />
                            </h5>
                        </Button>
                    </div>
                </div>
                <div className='nav-dmap-center'>

                    <div className="title nav-bar-skyblue">
                        <NavbarDropdown isEwings={true} title="Services" items={servicesItems} setSelectedItem={this.setSelectedItem} />
                    </div>
                    <div className="title gallery-tab">
                        <Button variant="link" href='/ewings/gallery' >
                            <h4 className='bukra-medium' style={{ color: '#4694D6' }} >Gallery</h4>
                        </Button>
                    </div>
                </div>

                <div className='nav-dmap-right'>
                    <div className="title" style={{ marginLeft: 'auto' }}>
                        <Button variant="link" href='https://www.facebook.com/businessmapconsultants/' >
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faFacebook} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='https://www.linkedin.com/company/businessmapconsultants/'>
                            <h5><FontAwesomeIcon style={{ color: '#4694D6' }} icon={faLinkedin} size={'2x'} /></h5>
                        </Button>
                    </div>
                    <div className="title">
                        <Button variant="link" href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q' >
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
                    </div>
                    <div className="nav-ewings-bmc-tab">
                        <Button variant="link" href='/' >
                            <img src={`${endpoint}/logo-no-text.png`} alt='home' className='nav-logo-img-bmc' />
                        </Button>
                    </div>
                </div>
            </Navbar>
        )
    }
}
