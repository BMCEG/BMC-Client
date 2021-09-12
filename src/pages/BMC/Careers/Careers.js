
import React, { Component } from 'react'
import './Careers.css'
import { Typography } from '@material-ui/core'
import endpoint from '../../../helpers/api_service'
import FooterTop from '../../../components/BMC/Footer/Footer-Top'
import { Button } from 'react-bootstrap'
import CareersJoinUs from './CareersJoin'
import CareersPosts from './CareersPosts'
import ReactElasticCarousel from 'react-elastic-carousel'

export default class Careers extends Component {
    constructor(props) {
        super(props);
        this.handleActiveChange = this.handleActiveChange.bind(this);

        this.state = {
            active: 'join',
            activeBarX: '0'
        }
    }

    handleActiveChange = (e) => {
        if (e.target.name === 'join') {
            document.getElementsByClassName('rec-arrow-left')[0].click();
        } else {
            document.getElementsByClassName('rec-arrow-right')[0].click();
        }
        this.setState({
            active: e.target.name,
            activeBarX: e.target.value,
        })
    }
    render() {
        return (
            <div className='careers__root'>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        CAREERS
                    </Typography>
                </div>
                <br></br>
                <br></br>         
                <br></br>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/careers-h.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>                <div className='job__divider' />

                <br></br>
                <div className='careers__tabs__row'>
                    {/* <div> */}

                    <div className='careers__tabs__join--block'>
                        <Button className='careers__tabs__join' name='join' value='0' onClick={this.handleActiveChange}>
                            JOIN US
                        </Button>
                        <div style={{
                            transform: `translate(${this.state.activeBarX}vw, 0px)`,
                        }} className='careers__tabs_active__bar' />
                    </div>
                    <div className='careers__tabs__join--block'>
                        <Button className='careers__tabs__posts' name='posts' value='53' onClick={this.handleActiveChange}>
                            JOB POSTS
                        </Button>
                        <div className='careers__tabs_active__bar--posts' />
                    </div>
                </div>
                <br></br>
                <div className='job__divider' />

                <br></br>
                {/* <FooterTop /> */}
                <ReactElasticCarousel
                    breakPoints={this.state.breakPoints}
                    enableMouseSwipe={false}
                    enableAutoPlay={false}
                    disableArrowsOnEnd={true}
                    className="careers__tabs__canvas"
                    pagination={false}
                    transitionMs='1000'
                    easing="ease"
                >
                    <CareersJoinUs />
                    <CareersPosts />

                </ReactElasticCarousel>
                {/* <div className='careers__tabs__canvas'> */}
                {/* {this.state.active === 'join' ?
                        <div id='CJ' style={{ display: `${this.state.displayCJ}` }}>
                            <CareersJoinUs />
                        </div>
                        :
                        <div id='CP' style={{ display: this.state.displayCP }}>
                            <CareersPosts />
                        </div>
                    } */}
                {/* </div> */}
                <br></br>
                <br></br>
                <FooterTop />
            </div>
        )
    }
}
