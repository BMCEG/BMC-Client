import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BMCHomepage from './pages/BMC/Homepage/Homepage.js';
import BMCHomepageMob from './pages/BMC/Homepage/Homepage-Mob.js';
import NavbarBMC from './components/BMC/Navbar/Navbar.js';
import NavbarBMCMob from './components/BMC/Navbar/Navbar-Mob.js';
import FooterBMC from './components/BMC/Footer/Footer.js';
import FooterEwings from './components/ewigns/footer/footer.js';
import NavbarEwings from './components/ewigns/Navbar/Navbar.js';
import NavbarEwingsMob from './components/ewigns/Navbar/Navbar-Mob';

import FounderMessage from './pages/BMC/About/FounderMessage/FounderMessage.js';
import PartnersMessage from './pages/BMC/About/PartnersMessage/PartnersMessage.js';
import WhyBMC from './pages/BMC/About/whyBMC/whyBMC.js';
import WhyBMCMob from './pages/BMC/About/whyBMC/whyBMC-mob.js';

import MarketingMGMT from './pages/BMC/services/MarketingMGMT/MarketingMGMT.js';
import StrategicPlanning from './pages/BMC/services/StrategicPlanning/StrategicPlanning.js';
import Finance from './pages/BMC/services/Finance/Finance.js';
import Toolbox from './pages/BMC/services/Toolbox/Toolbox.js';

import Clients from './pages/BMC/Clients/Clients.js';

import Contact from './pages/BMC/Contact/Contact.js';
import ContactMob from './pages/BMC/Contact/Contact-Mob.js';

import Blogs from './pages/BMC/Blogs/Blogs.js';
import Blog from './pages/BMC/Blogs/Blog.js';

import Consultations from './pages/BMC/Consultations/Consultations.js';

import Careers from './pages/BMC/Careers/Careers.js';
import JobPost from './pages/BMC/Careers/JobPost.js';

import Courses from './pages/BMC/Courses/Courses.js';
import Course from './pages/BMC/Courses/Course.js';

import OurStory from './pages/contexts/bmc/about/ourStory.js';
import OurStoryMob from './pages/contexts/bmc/about/ourStory-mobile.js';
import MeetTheExperts from './pages/contexts/bmc/about/meetTheExperts.js';

import EwingsHomepage from './pages/Ewings2/Homepage/Homepage.js';

import DigitalMarketing from './pages/Ewings2/Services/DigitalMarketing/DigitalMarketing.js';
import MultimediaProd from './pages/Ewings2/Services/MultimediaProd/MultimediaProd.js';
import SocialMediaMGMT from './pages/Ewings2/Services/SocialMediaMGMT/SocialMediaMGMT.js';
import MediaPlanning from './pages/Ewings2/Services/MediaPlanning/MediaPlanning.js';
import WebDevelopment from './pages/Ewings2/Services/WebDevelopment/WebDevelopment.js';

import ContactEwings from './pages/Ewings2/Contact/Contact.js';

import CoursesListEwings from './pages/ewings/courses/courses.js';
import CoursesListEwingsMob from './pages/ewings/courses/courses-mob.js';
import CoursePageEwings from './pages/ewings/courses/landing.js';
import CoursePageEwingsMob from './pages/ewings/courses/landing-mobile.js';

import Gallery from './pages/contexts/bmc/gallery/gallery.js';
import GalleryMob from './pages/contexts/bmc/gallery/gallery-mob.js';

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

import Media from 'react-media';
import HR from './pages/BMC/services/HR/HR.js';
import FooterMob from './components/BMC/Footer/Footer-mob.js';
import FooterEwingsMob from './components/ewigns/footer/Footer-mob.js';
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homepageContext: '',
      navbarContext: 'bmc',
      isLanding: false,
      isMobileDevice: Boolean,
      isLaptop: Boolean,
    };
  }

  zoomOutMobile() {
    var viewport = document.querySelector('meta[name="viewport"]');

    if (viewport) {
      viewport.content = 'initial-scale=0.1';
      viewport.content = 'width=1400';
    }
  }

  componentDidMount() {
    if (window.location.href.indexOf('ewings') > -1) {
      this.setState({
        navbarContext: 'ewings',
      });
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/admin" exact component={AdminPage} />

          <Route path="/admin/create" exact component={AdminCreate} />

          <Route path="/admin/blogs" exact component={AdminBlogs} />
          <Route path="/admin/blogs/:blogID" exact component={AdminBlog} />

          <Route path="/admin/gallery" exact component={AdminGallery} />

          <Route path="/admin/courses" exact component={AdminCourses} />
          <Route
            path="/admin/courses/:courseID"
            exact
            component={AdminCoursePage}
          />
          <Route
            path="/admin/trainers/:trainerID"
            exact
            component={AdminTrainerPage}
          />

          <Route path="/admin/careers" exact component={AdminCareers} />
          <Route path="/admin/careers/:jobID" exact component={AdminJob} />

          <Route path="/admin/requests" exact component={AdminRequests} />

          <Route path="/admin/partners" exact component={AdminPartners} />
          <Route
            path="/admin/partners/:partnerID"
            exact
            component={AdminPartnerPage}
          />

          <Route path="/admin/contacts" exact component={AdminContacts} />

          {this.state.navbarContext === 'bmc' ? (
            <>
              {this.state.isLanding ? null : (
                <>
                  <Media
                    queries={{
                      mobile: '(max-width: 1024px)',
                      small: '(min-width: 1300px) and (max-width: 1400px)',
                      medium: '(min-width: 1400px) and (max-width: 1600px)',
                      large: '(min-width: 1600px)',
                    }}
                  >
                    {(matches) => {
                      return matches.mobile ? (
                        <NavbarBMCMob
                          handleSelectedContext={this.handleSelectedContext}
                        />
                      ) : (
                        <NavbarBMC
                          handleSelectedContext={this.handleSelectedContext}
                        />
                      );
                    }}
                  </Media>
                </>
              )}

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/temp" exact component={BMCHomepage} />
                  ) : (
                    <Route path="/temp" exact component={BMCHomepage} />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/temp/fm" exact component={Finance} />
                  ) : (
                    <Route path="/temp/fm" exact component={Finance} />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/" exact component={BMCHomepage} />
                  ) : (
                    <Route path="/" exact component={BMCHomepageMob} />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/courses/:courseName"
                      exact
                      component={Course}
                    />
                  ) : (
                    <Route
                      path="/courses/:courseName"
                      exact
                      component={Course}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/about/partners"
                      exact
                      component={PartnersMessage}
                    />
                  ) : (
                    <Route
                      path="/about/partners"
                      exact
                      component={PartnersMessage}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/about/founder"
                      exact
                      component={FounderMessage}
                    />
                  ) : (
                    <Route
                      path="/about/founder"
                      exact
                      component={FounderMessage}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/about/story" exact component={OurStory} />
                  ) : (
                    <Route path="/about/story" exact component={OurStoryMob} />
                  );
                }}
              </Media>

              <Route path="/about/experts" exact component={MeetTheExperts} />

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/whyBMC" exact component={WhyBMC} />
                  ) : (
                    <Route path="/whyBMC" exact component={WhyBMCMob} />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/services/marketingMgmt"
                      exact
                      component={MarketingMGMT}
                    />
                  ) : (
                    <Route
                      path="/services/marketingMgmt"
                      exact
                      component={MarketingMGMT}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/services/strategic"
                      exact
                      component={StrategicPlanning}
                    />
                  ) : (
                    <Route
                      path="/services/strategic"
                      exact
                      component={StrategicPlanning}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/services/financial"
                      exact
                      component={Finance}
                    />
                  ) : (
                    <Route
                      path="/services/financial"
                      exact
                      component={Finance}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/services/hr" exact component={HR} />
                  ) : (
                    <Route path="/services/hr" exact component={HR} />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/services/toolbox" exact component={Toolbox} />
                  ) : (
                    <Route path="/services/toolbox" exact component={Toolbox} />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/careers/:postingID"
                      exact
                      component={JobPost}
                    />
                  ) : (
                    <Route
                      path="/careers/:postingID"
                      exact
                      component={JobPost}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/careers" exact component={Careers} />
                  ) : (
                    <Route path="/careers" exact component={Careers} />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/courses" exact component={Courses} />
                  ) : (
                    <Route path="/courses" exact component={Courses} />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/partners" exact component={Clients} />
                  ) : (
                    <Route path="/partners" exact component={Clients} />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/consultations"
                      exact
                      component={Consultations}
                    />
                  ) : (
                    <Route
                      path="/consultations"
                      exact
                      component={Consultations}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/contact" exact component={Contact} />
                  ) : (
                    <Route path="/contact" exact component={ContactMob} />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/blogs" exact component={Blogs} />
                  ) : (
                    <Route path="/blogs" exact component={Blogs} />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/blogs/:blogID" exact component={Blog} />
                  ) : (
                    <Route path="/blogs/:blogID" exact component={Blog} />
                  );
                }}
              </Media>

              {this.state.isLanding ? null : (
                <Media query="(min-width: 1024px)">
                  {(matches) => {
                    return matches ? <FooterBMC /> : <FooterMob />;
                  }}
                </Media>
              )}
            </>
          ) : (
            <>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? <NavbarEwings /> : <NavbarEwingsMob />;
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings"
                      exact
                      render={() => <EwingsHomepage />}
                    />
                  ) : (
                    <Route
                      path="/ewings"
                      exact
                      render={() => <EwingsHomepage />}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/courses"
                      exact
                      component={CoursesListEwings}
                    />
                  ) : (
                    <Route
                      path="/ewings/courses"
                      exact
                      component={CoursesListEwingsMob}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/courses/:courseName"
                      exact
                      component={CoursePageEwings}
                    />
                  ) : (
                    <Route
                      path="/ewings/courses/:courseName"
                      exact
                      component={CoursePageEwingsMob}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route path="/ewings/gallery" exact component={Gallery} />
                  ) : (
                    <Route
                      path="/ewings/gallery"
                      exact
                      component={GalleryMob}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/services/digital"
                      exact
                      component={DigitalMarketing}
                    />
                  ) : (
                    <Route
                      path="/ewings/services/digital"
                      exact
                      component={DigitalMarketing}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/services/multimedia"
                      exact
                      component={MultimediaProd}
                    />
                  ) : (
                    <Route
                      path="/ewings/services/multimedia"
                      exact
                      component={MultimediaProd}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/services/social"
                      exact
                      component={SocialMediaMGMT}
                    />
                  ) : (
                    <Route
                      path="/ewings/services/social"
                      exact
                      component={SocialMediaMGMT}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/services/media"
                      exact
                      component={MediaPlanning}
                    />
                  ) : (
                    <Route
                      path="/ewings/services/media"
                      exact
                      component={MediaPlanning}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/services/web"
                      exact
                      component={WebDevelopment}
                    />
                  ) : (
                    <Route
                      path="/ewings/services/web"
                      exact
                      component={WebDevelopment}
                    />
                  );
                }}
              </Media>
              <Media query="(min-width: 1024px)">
                {(matches) => {
                  return matches ? (
                    <Route
                      path="/ewings/contact"
                      exact
                      component={ContactEwings}
                    />
                  ) : (
                    <Route
                      path="/ewings/contact"
                      exact
                      component={ContactEwings}
                    />
                  );
                }}
              </Media>

              <Media query="(min-width: 1440px)">
                {(matches) => {
                  return matches ? <FooterEwings /> : <FooterEwingsMob />;
                }}
              </Media>
            </>
          )}
        </Switch>
      </Router>
    );
  }
}
