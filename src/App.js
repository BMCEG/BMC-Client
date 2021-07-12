import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Homepage from "./pages/homepage/homepage.js";
import LandingPage from "./pages/landing/landing.js";

import NavbarBMC from './components/navbar/navbarBMC.js';
import NavbarBMCMob from './components/navbar/navbarBMC-mobile';
import FooterBMC from './components/footer/footer.js';
import FooterBMCMob from './components/footer/footer-mobile';

import FloatingBtn from './components/floatingBtn.js';
import FloatingBtnMob from './components/floatingBtn-mobile.js';

import FoundersMessage from './pages/contexts/bmc/about/foundersMessage.js';
import FoundersMessageMob from './pages/contexts/bmc/about/foundersMessage-mobile.js';
import OurStory from './pages/contexts/bmc/about/ourStory.js';
import OurStoryMob from './pages/contexts/bmc/about/ourStory-mobile.js';
import MeetTheExperts from './pages/contexts/bmc/about/meetTheExperts.js';
import PartnersMessage from './pages/contexts/bmc/about/partnersMessage.js';
import PartnersMessageMob from './pages/contexts/bmc/about/partnersMessage-mobile.js';

import WhyBMC from './pages/contexts/bmc/whyBMC/whyBMC.js'
import WhyBMCMob from './pages/contexts/bmc/whyBMC/whyBMC-mobile.js'

import Service from './pages/contexts/bmc/services/service.js'
import ServiceMob from './pages/contexts/bmc/services/service-mobile.js'

import ServiceEwings from './pages/ewings/services/service.js'
import ServiceEwingsMob from './pages/ewings/services/service-mobile'

// import StrategicPlan from './pages/contexts/bmc/services/strategicPlan.js';
// import MarketingMgmt from './pages/contexts/bmc/services/marketingMgmt.js';
// import Branding from './pages/contexts/bmc/services/hrMgmt.js';  
// import HRManagement from './pages/contexts/bmc/services/hrMgmt';
// import Financial from './pages/contexts/bmc/services/financial.js';
// import Toolbox from './pages/contexts/bmc/services/toolbox.js';

import CareerLanding from './pages/contexts/bmc/careers/careerLanding.js';
import CareerOpenings from './pages/contexts/bmc/careers/careerOpenings';
import CareerOpeningsMob from './pages/contexts/bmc/careers/careerOpenings-mobile.js';
import CareerListing from './pages/contexts/bmc/careers/careerListing.js';
import CareerListingMob from './pages/contexts/bmc/careers/careerListing-mobile.js';

import Gallery from './pages/contexts/bmc/gallery/gallery.js';
import GalleryMob from './pages/contexts/bmc/gallery/gallery-mob.js';

import Partners from './pages/contexts/bmc/partners/partners.js';
import PartnersMob from './pages/contexts/bmc/partners/partners-mobile.js';

import Contact from './pages/contexts/bmc/contactUs/contact.js';
import ContactMob from './pages/contexts/bmc/contactUs/contact-mobile.js';

import Blogs from './pages/contexts/bmc/blogs/blogs.js';
import BlogsMob from './pages/contexts/bmc/blogs/blogs-mobile.js';
import BlogPage from './pages/blog/blog.js';
import BlogPageMob from './pages/blog/blog-mobile.js';

import DefaultBMC from './pages/contexts/bmc/default.js';
import DefaultBMCMob from './pages/contexts/bmc/default-mobile';
import DefaultDMap from './pages/contexts/dmap/default.js';

import AdminPage from './pages/admin/page.js';
import AdminCreate from './pages/admin/users/users.js';
import AdminCareers from './pages/admin/careers/careers.js';
import AdminJob from './pages/admin/careers/jobPage.js';
import AdminCourses from './pages/admin/courses/courses.js';
import AdminCoursePage from './pages/admin/courses/coursePage.js';
import AdminTrainerPage from './pages/admin/trainers/trainer.js';
import AdminBlogs from './pages/admin/blogs/blogs.js';
import AdminBlog from './pages/admin/blogs/blog.js';
import AdminGallery from './pages/admin/gallery/gallery.js';
import AdminPartners from './pages/admin/partners/partners.js';
import AdminPartnerPage from './pages/admin/partners/partner.js';
import AdminContacts from './pages/admin/contacts/contacts.js';
import AdminRequests from './pages/admin/requests/requests.js';

import NavbarDMap from './components/navbar/navbarDMap.js';
import NavbarDMapMob from './components/navbar/navbarDMap-mobile.js';
import FooterEwings from './components/ewigns/footer/footer.js';
import FooterEwingsMob from './components/ewigns/footer/footer-mobile';


import HomepageEwings from './pages/ewings/homepage/homepage.js'
import HomepageEwingsMob from './pages/ewings/homepage/homepage-mobile'


import { Redirect } from 'react-router';

import { createBrowserHistory } from 'history';

import Media from 'react-media';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homepageContext: "",
      navbarContext: "bmc",
      isMobileDevice: Boolean,
      isLaptop: Boolean
    }
  }

  zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
      viewport.content = "initial-scale=0.1";
      viewport.content = "width=1400";
    }
  }

  componentDidMount() {

    if (window.location.href.indexOf("ewings") > -1) {
      this.setState({
        navbarContext: 'ewings'
      })
    }
    // const matches = useMediaQuery('(min-width:600px)');
    // console.log(matches)

    //     const isMobileDevice = useMediaQuery({
    //       query: "(min-device-width: 768px)",
    //     });

    //     const isLaptop = useMediaQuery({
    //       query: "(min-device-width: 1024px)",
    //     });
    // console.log(isMobileDevice)
    //     this.setState({
    //       isMobileDevice: isMobileDevice,
    //       isLaptop: isLaptop
    //     })
  }


  render() {
    console.log('this.state', this.state);
    return (
      <Router>
        <Switch>
          <Route path="/landing/:courseName" exact component={LandingPage} />

          <Route path="/admin" exact component={AdminPage} />

          <Route path="/admin/create" exact component={AdminCreate} />

          <Route path="/admin/blogs" exact component={AdminBlogs} />
          <Route path="/admin/blogs/:blogID" exact component={AdminBlog} />

          <Route path="/admin/gallery" exact component={AdminGallery} />

          <Route path="/admin/courses" exact component={AdminCourses} />
          <Route path="/admin/courses/:courseID" exact component={AdminCoursePage} />
          <Route path="/admin/trainers/:trainerID" exact component={AdminTrainerPage} />

          <Route path="/admin/careers" exact component={AdminCareers} />
          <Route path="/admin/careers/:jobID" exact component={AdminJob} />

          <Route path="/admin/requests" exact component={AdminRequests} />

          <Route path="/admin/partners" exact component={AdminPartners} />
          <Route path="/admin/partners/:partnerID" exact component={AdminPartnerPage} />

          <Route path="/admin/contacts" exact component={AdminContacts} />

          {this.state.navbarContext === 'bmc' ?
            <>

              <Media query='(min-width: 1540px)'>
                {(matches) => {
                  return matches ?
                    <NavbarBMC handleSelectedContext={this.handleSelectedContext} />
                    :
                    <NavbarBMCMob handleSelectedContext={this.handleSelectedContext} />
                }}
              </Media>
              <Media query='(min-width: 1540px)'>
                {(matches) => {
                  return matches ?
                    // <NavbarBMC handleSelectedContext={this.handleSelectedContext} />
                    <FloatingBtn />
                    :
                    <FloatingBtnMob />
                  // <NavbarBMCMob handleSelectedContext={this.handleSelectedContext} />
                }}
              </Media>


              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/' exact component={DefaultBMC} />
                    :
                    <Route path='/' exact component={DefaultBMCMob} />
                }}
              </Media>

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/about/partners' exact component={PartnersMessage} />
                    :
                    <Route path='/about/partners' exact component={PartnersMessageMob} />
                }}
              </Media>

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/about/founder' exact component={FoundersMessage} />
                    :
                    <Route path='/about/founder' exact component={FoundersMessageMob} />
                }}
              </Media>

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/about/story' exact component={OurStory} />
                    :
                    <Route path='/about/story' exact component={OurStoryMob} />
                }}
              </Media>

              <Route path='/about/experts' exact component={MeetTheExperts} />

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/whyBMC' exact component={WhyBMC} />
                    :
                    <Route path='/whyBMC' exact component={WhyBMCMob} />
                }}
              </Media>

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/services/strategic'
                      exact
                      render={() => (
                        <Service logo='service-strategic-planning.png' sideImage='landing-strategic-planning.jpg' title='Strategic Planning' />
                      )}
                    />
                    :
                    <Route
                      path='/services/strategic'
                      exact
                      render={() => (
                        <ServiceMob logo='service-strategic-planning.png' sideImage='landing-strategic-planning.jpg' title='Strategic Planning' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/services/marketingMgmt'
                      exact
                      render={() => (
                        <Service logo='service-marketing-mgmt.png' sideImage='landing-marketing-mgmt.jpg' title='Marketing Management' />
                      )}
                    />
                    :
                    <Route
                      path='/services/marketingMgmt'
                      exact
                      render={() => (
                        <ServiceMob logo='service-marketing-mgmt.png' sideImage='landing-marketing-mgmt.jpg' title='Marketing Management' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/services/financial'
                      exact
                      render={() => (
                        <Service logo='service-financial.png' sideImage='landing-financial.jpg' title='Finance & Accounting' />
                      )}
                    />
                    :
                    <Route
                      path='/services/financial'
                      exact
                      render={() => (
                        <ServiceMob logo='service-financial.png' sideImage='landing-financial.jpg' title='Finance & Accounting' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/services/hr'
                      exact
                      render={() => (
                        <Service logo='service-hr.png' sideImage='landing-hr.jpg' title='Human Resources' />
                      )}
                    />
                    :
                    <Route
                      path='/services/hr'
                      exact
                      render={() => (
                        <ServiceMob logo='service-hr.png' sideImage='landing-hr.jpg' title='Human Resources' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/services/toolbox'
                      exact
                      render={() => (
                        <Service logo='service-business-tool-box.png' sideImage='landing-toolbox.png' title='BMC Tool Box' />
                      )}
                    />
                    :
                    <Route
                      path='/services/toolbox'
                      exact
                      render={() => (
                        <ServiceMob logo='service-business-tool-box.png' sideImage='landing-toolbox.png' title='BMC Tool Box' />
                      )}
                    />
                }}
              </Media>
              <Route path='/careers' exact component={CareerLanding} />

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/careers/openings/:postingID' exact component={CareerListing} />
                    // <Route path='/careers/openings' exact component={CareerOpenings} />
                    :
                    <Route path='/careers/openings/:postingID' exact component={CareerListingMob} />
                  // <Route path='/careers/openings' exact component={CareerOpeningsMob} />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/careers/openings' exact component={CareerOpenings} />
                    :
                    <Route path='/careers/openings' exact component={CareerOpeningsMob} />
                }}
              </Media>


              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/partners' exact component={Partners} />
                    :
                    <Route path='/partners' exact component={PartnersMob} />
                }}
              </Media>




              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    // <Route path='/partners' exact component={Partners} />
                    <Route path='/contact' exact component={Contact} />
                    // <Route path='/blogs' exact component={Blogs} />
                    :
                    <Route path='/contact' exact component={ContactMob} />
                  // <Route path='/blogs' exact component={BlogsMob} />
                  // <Route path='/partners' exact component={PartnersMob} />    
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    // <Route path='/partners' exact component={Partners} />
                    <Route path='/blogs' exact component={Blogs} />
                    :
                    <Route path='/blogs' exact component={BlogsMob} />
                  // <Route path='/partners' exact component={PartnersMob} />      
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/blogs/:blogID' exact component={BlogPage} />
                    :
                    <Route path='/blogs/:blogID' exact component={BlogPageMob} />
                }}
              </Media>

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <FooterBMC />
                    :
                    <FooterBMCMob />
                }}
              </Media>

            </>
            :
            <>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    // <FooterBMC />
                    <NavbarDMap handleSelectedContext={this.handleSelectedContext} />
                    :
                    <NavbarDMapMob handleSelectedContext={this.handleSelectedContext} />
                  // <FooterBMCMob />
                }}
              </Media>
              {/* <Redirect push to="/digitalMap" /> */}
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/ewings'
                      exact
                      render={() => (
                        <HomepageEwings />
                      )}
                    />
                    :
                    <Route
                      path='/ewings'
                      exact
                      render={() => (
                        <HomepageEwingsMob />
                      )}
                    />
                }}
              </Media>

              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route path='/ewings/gallery' exact component={Gallery} />
                    :
                    <Route path='/ewings/gallery' exact component={GalleryMob} />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/ewings/services/digital'
                      exact
                      render={() => (
                        <ServiceEwings sideImage='landing-digital.png' title='Digital Marketing' />
                      )}
                    />
                    :
                    <Route
                      path='/ewings/services/digital'
                      exact
                      render={() => (
                        <ServiceEwingsMob logo='service-strategic-planning.png' sideImage='landing-digital.png' title='Digital Marketing' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/ewings/services/multimedia'
                      exact
                      render={() => (
                        <ServiceEwings sideImage='landing-multimedia.png' title='Multimedia Production' />
                      )}
                    />
                    :
                    <Route
                      path='/ewings/services/multimedia'
                      exact
                      render={() => (
                        <ServiceEwingsMob sideImage='landing-multimedia.png' title='Multimedia Production' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/ewings/services/social'
                      exact
                      render={() => (
                        <ServiceEwings sideImage='landing-social.png' title='Social Media Management' />
                      )}
                    />
                    :
                    <Route
                      path='/ewings/services/social'
                      exact
                      render={() => (
                        <ServiceEwingsMob sideImage='landing-social.png' title='Social Media Management' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/ewings/services/media'
                      exact
                      render={() => (
                        <ServiceEwings sideImage='landing-media.png' title='Media Planning and Buying' />
                      )}
                    />
                    :
                    <Route
                      path='/ewings/services/media'
                      exact
                      render={() => (
                        <ServiceEwingsMob sideImage='landing-media.png' title='Media Planning and Buying' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1024px)'>
                {(matches) => {
                  return matches ?
                    <Route
                      path='/ewings/services/web'
                      exact
                      render={() => (
                        <ServiceEwings sideImage='landing-web.png' title='Web Development' />
                      )}
                    />
                    :
                    <Route
                      path='/ewings/services/web'
                      exact
                      render={() => (
                        <ServiceEwingsMob sideImage='landing-web.png' title='Web Development' />
                      )}
                    />
                }}
              </Media>
              <Media query='(min-width: 1280px)'>
                {(matches) => {
                  return matches ?
                    <FooterEwings />
                    :
                    <FooterEwingsMob />
                }}
              </Media>

            </>
          }
        </Switch>
      </Router>
    )
  }
}