import React, { Component } from 'react'
import './service.css';
import DigitalMob from '../../../components/ewigns/services/digital-mobile';
import WebMob from '../../../components/ewigns/services/web-mobile';
import MediaMob from '../../../components/ewigns/services/media-mobile';
import MultimediaMob from '../../../components/ewigns/services/multimedia-mobile';
import SocialMob from '../../../components/ewigns/services/social-mobile';
import endpoint from '../../../helpers/api_service';
export default class ServiceMob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logo: this.props.logo,
            title: this.props.title,
            sideImage: this.props.sideImage,
            content: this.props.content
        }
    }

    render() {
        return (
            <div className='ewings-service-page-root'>
                <div className='ewings-service-page-mob'>
                    <div className='ewings-service-img-base-mobile'>
                        <img className='ewings-service-img' src={`${endpoint}/images/${this.props.sideImage}`} alt='service' />
                    </div>
                    {/* <div className='service-page-title-details'>
                        <img src={`${endpoint}/images/${this.props.logo}`} alt='logo' className='service-details-icon' />
                        <div className='service-details-name'>
                            <h1>{this.props.title}</h1>
                        </div>
                    </div> */}
                    <div className='ewings-service-page-content'>
                        {this.props.title === 'Digital Marketing' ?
                            <DigitalMob /> : this.props.title === 'Multimedia Production' ?
                                <MultimediaMob /> : this.props.title === 'Social Media Management' ?
                                    <SocialMob /> : this.props.title === 'Media Planning and Buying' ?
                                        <MediaMob /> : this.props.title === 'Web Development' ?
                                            <WebMob /> : null
                        }
                    </div>
                </div>
                {/* <div className='service-page-right'>
                    <div className='service-page-img-base'>
                        <img src={`${endpoint}/images/${this.props.sideImage}`} alt='Img' className='service-page-img' />
                    </div>
                </div> */}
            </div>
        )
    }
}
