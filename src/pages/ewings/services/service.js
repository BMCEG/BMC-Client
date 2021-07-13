import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './service.css';
import { Grid, Typography } from '@material-ui/core';

import Digital from '../../../components/ewigns/services/digital';
import Web from '../../../components/ewigns/services/web';
import Media from '../../../components/ewigns/services/media';
import Multimedia from '../../../components/ewigns/services/multimedia';
import Social from '../../../components/ewigns/services/social';

export default class Service extends Component {
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
                <div className='ewings-service-page-left'>
                    {/* <div className='service-page-title-details'>
                        <img src={`${endpoint}/${this.props.logo}`} alt='logo' className='service-details-icon' />
                        <div className='service-details-name'>
                            <h1>{this.props.title}</h1>
                        </div>
                    </div> */}
                    <div className='ewings-service-page-content'>
                        {this.props.title === 'Digital Marketing' ? 
                        <Digital /> : this.props.title === 'Multimedia Production' ?
                            <Multimedia /> : this.props.title === 'Social Media Management' ?
                                <Social /> :  this.props.title === 'Media Planning and Buying' ? 
                                    <Media /> : this.props.title === 'Web Development' ?
                                        <Web /> : null    
                    }
                    </div>
                </div>
                <div className='ewings-service-page-right'>
                    <div className='service-page-img-base'>
                        <img src={`${endpoint}/${this.props.sideImage}`} alt='Img' className='service-page-img' />
                    </div>
                </div>
            </div>
        )
    }
}