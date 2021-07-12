import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core'
import './default.css';
// import "react-responsive-carousel/lib/stylesx/carousel.min.css";
import Carousel from 'react-elastic-carousel';
import CarouselComp from '../../../components/carousel.js'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import endpoint from '../../../helpers/api_service.js';
// import Carousel from "react-multi-carousel";

export default class DefaultPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners: [],
            breakPoints: [
                { width: 1, itemsToShow: 1 },
                { width: 500, itemsToShow: 2 },
                { width: 768, itemsToShow: 3 },
                { width: 1200, itemsToShow: 4 },
              ],
            carouselItems: [
                {
                    title: 'Goal Oriented',
                    src: 'carousel1.png'
                },
                {
                    title: 'Marketing Masters',
                    src: 'carousel2.png'
                },
                {
                    title: 'Efficiency in Every Path',
                    src: 'carousel3.png'
                }
            ]
        }
    }

    componentDidMount = async () => {
        await axios.get(`${endpoint}/partners`)
            .then((res) => {
                this.setState({
                    partners: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className="default-root">
                <div className="carousel-canvas">
                    <CarouselComp items={this.state.carouselItems} />
                </div>
                {/* <br></br> */}
                <div className="page-margin">
                    <div className='banner-grid'>
                        <div className='banner-text'>
                            <h1 className='bukra-bold'>Who Are We?!</h1>
                            <h3 className='bukra-regular line-spacing'>We are experts in such broad business tools as Strategic audit, Feasibility studies, research and analysis, Business strategies - Internal business processes – Business development, book keeping, financial audits, Business Manuals, Digital transformation, training courses, among other custom-tailored services.</h3>
                        </div>
                        <div className="banner-photo-base">
                            <img
                                className="banner-photo"
                                alt="howItWorks"
                                src={`${endpoint}/logo.png`}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                {/* <div className='home-partners'> */}
                {/* <Carousel style={{ zIndex: -2 }} indicators={true} controls={true} className='home-partners'> */}
                {/* <Carousel
                    swipeable={true}
                    arrows={false}
                    draggable={true}
                    showDots={false}
                    responsive={this.state.responsive}
                    // ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    // style={{display:'flex', justiftContent:'center'}}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    // keyBoardControl={true}
                    customTransition="all .2"
                    transitionDuration={500}
                    containerClass="carousel-container home-partners"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                > */}
                <Carousel
                    breakPoints={this.state.breakPoints}
                    enableMouseSwipe={true}
                    enableAutoPlay={true}
                    disableArrowsOnEnd={true}
                    // isRTL={true}
                    className="home-partners"
                    pagination={false}
                    easing="cubic-bezier(1,.15,.55,1.54)"
                    tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
                    transitionMs={4500}
                >
                    {this.state.partners.map((partner) => (
                        // <Carousel.Item>
                        <div className='home-partner'>
                            <Button variant='link' href='/partners'>
                                <img src={`${endpoint}/${partner.logo}`} height='120px' />
                            </Button>
                        </div>
                        /* </Carousel.Item> */
                    ))}
                </Carousel>)
                {/* </div>/ */}
                <br></br>
                <div className="page-margin">
                    <Grid container className='home-services-grid'>
                        <Grid item xs={6}>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' src={`${endpoint}/service-strategic-planning-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>Strategic Plan</h3>
                                            <h5 className='bukra-regular'>BMC has the aim to provide professional counsel and assistance in the analysis, conception, and formulation of strategies & plans along with the development of the implementation framework that assure client’s sustained survival and long-term growth & profitability.</h5>
                                        </div>
                                    </Grid>

                                </Grid>
                                <div style={{ textAlign: 'right' }}>

                                    <Button variant='danger' href='/services/strategic'>Read More</Button>
                                </div>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>

                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' src={`${endpoint}/service-hr-black.png`} />
                                        </div>

                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>HR Management</h3>
                                            <h5 className='bukra-regular'>We provide Human Resources service in support of our client’s vision, mission and values by promoting the concept that employees are the most valuable resource and will be treated as such.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/hr'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' src={`${endpoint}/service-toolbox-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>BMC Tool Box</h3>
                                            <h5 className='bukra-regular'>We are often engaged to provide Custom-tailored solutions,We can help formulate the specific problem or uncover areas that need improvements and then find a comprehensive set of possible solutions to meet the needs of your particular organization.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/toolbox'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' src={`${endpoint}/service-marketing-mgmt-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>Marketing Management</h3>
                                            <h5 className='bukra-regular'>We act as your marketing arm department, we have the right blend of strategists and planners, researchers, designers, thinkers and creatives, detail and big-picture people all dedicated to achieve the goal at the highest quality, on time and within your budget.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/marketingMgmt'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className='home-service-icon-base'>
                                            <img className='home-service-icon' src={`${endpoint}/service-financial-black.png`} />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className='home-service-text'>
                                            <h3 className='bukra-bold'>Financial and Accounting</h3>
                                            <h5 className='bukra-regular'>We have the aim to provide a full range of comprehensive high quality services with a modern and practical approach in several fields.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/financial'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            {/* <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                    <div className='home-service-icon'>
                                            <img src="https://i1.wp.com/realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png?w=200" height='100px' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div>
                                            <h3>Outsourcing Marketing Arm</h3>
                                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pharetra nibh. Morbi id urna hendrerit, placerat dui ut, convallis orci.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/marketingArm'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                    <div className='home-service-icon'>
                                            <img src="https://i1.wp.com/realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png?w=200" height='100px' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div>
                                            <h3>Public Relations</h3>
                                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pharetra nibh. Morbi id urna hendrerit, placerat dui ut, convallis orci.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/pr'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="home-service">
                                <Grid container>
                                    <Grid item xs={3}>
                                    <div className='home-service-icon'>
                                            <img src="https://i1.wp.com/realestatebossmamas.com/wp-content/uploads/2018/02/logo-placeholder-1.png?w=200" height='100px' />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div>
                                            <h3>Creation</h3>
                                            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at pharetra nibh. Morbi id urna hendrerit, placerat dui ut, convallis orci.</h5>
                                        </div>
                                        <div style={{ textAlign: 'right' }}>

                                            <Button variant='danger' href='/services/creation'>Read More</Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div> */}
                        </Grid>
                    </Grid>
                </div>
                {/* <div className="page-margin">
                    <Grid container className="home-gallery">
                        <Grid item xs={4}>
                            <div className="home-gallery-picture">
                                <img src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-landscape.png" className="home-gallery-img" />
                            </div>
                            <div className="home-gallery-picture">
                                <img src="https://colpas.mouau.edu.ng/sites/colpas.mouau.edu.ng/files/default_images/placeholder1.png" className="home-gallery-img" />
                            </div>
                            <div className="home-gallery-picture">
                                <img src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-square.png" className="home-gallery-img" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="home-gallery-picture">
                                <img src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png" className="home-gallery-img" />
                            </div>
                            <div className="home-gallery-picture">
                                <img src="https://colpas.mouau.edu.ng/sites/colpas.mouau.edu.ng/files/default_images/placeholder1.png" className="home-gallery-img" />
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <div className="home-gallery-picture">
                                <img src="https://colpas.mouau.edu.ng/sites/colpas.mouau.edu.ng/files/default_images/placeholder1.png" className="home-gallery-img" />
                            </div>
                            <div className="home-gallery-picture">
                                <img src="https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png" className="home-gallery-img" />
                            </div>
                        </Grid>
                    </Grid>
                </div> */}
                <br></br>

            </div>
        )
    }
}