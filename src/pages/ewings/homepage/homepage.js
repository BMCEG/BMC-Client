import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import endpoint from '../../../helpers/api_service';
import './homepage.css';
import Carousel from 'react-bootstrap/esm/Carousel';
import ClientsCarousel from 'react-elastic-carousel';
import '../../../styles.css';
import Button from 'react-bootstrap/Button';
import { Grid, Paper, Typography } from '@material-ui/core';
import axios from 'axios';

export default class homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      partners: [],
      breakPoints: [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 6 },
      ],
      array: [
        {
          title: 'About Us',
          post: `Ewings is a digital marketing agency that was founded in 2014, we are here to help B2B and B2C companies reach their highest marketing goals. \n\nWe rely on our hardworking team with their years of experience in marketing management to expand, and improve our client’s marketing goals. \n\nWe offer tailored services according to our client's needs and their position in the market, such as, digital marketing, multimedia production, social media and creative content, web development, and media management and buying.`,
        },
        {
          title: 'Mission:',
          post: 'Our deepest purpose is to be the leading digital marketing agency in the MENA, as an agency that is helping to support and have full control over the marketing management for your company. \n\n \n\n \n\n \n\n',
        },
        {
          title: 'Vision:',
          post: 'Being the most professional, trusted, and “go to“ digital marketing agency to a wide range of companies that provides all marketing services in the most unique, tailored, and executive ways. \n\n \n\n \n\n \n\n',
        },
        {
          title: 'Values:',
          post: 'Ewings will give you the most unexpected outcomes that will take your company’s marketing to another level. \n\nMoreover, you will be provided with the best experience in working with Ewings, because we are keen to make the client feel comfortable and satisfied with our services. \n\n \n\n \n',
        },
        {
          title: 'Our Promise:',
          post: "Ewings will personalize and provide you with the best service possible to assist your company in achieving maximum performance and expansion. \n\nThe value you'll obtain will always be above your expectations with our experts in the marketing feild. \n\n \n\n \n\n",
        },
      ],
    };
  }

  componentDidMount = async () => {
    await axios
      .get(`${endpoint}/partners`)
      .then((res) => {
        this.setState({
          partners: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="ewings-homepage-root">
        <div className="ewings-homepage-banner">
          <ReactPlayer
            className="ewings-player"
            url={`${endpoint}/ewings-homepage.mp4`}
            width="100%"
            height="100%"
            loop={true}
            controls={false}
            muted="true"
            volume="0"
            autoplay
            playsinline
            playing="true"
          />
          <div
            className="ewings-homepage-text"
            style={{ marginBottom: '-460px' }}
          >
            <Carousel>
              {this.state.array.map((el) => (
                <Carousel.Item
                  className="carousel-item"
                  indicators={false}
                  controls={false}
                  wrap={true}
                >
                  <Typography
                    className="bukra-bold"
                    variant="h3"
                    component="h3"
                    style={{ color: '#103442' }}
                  >
                    {el.title}
                  </Typography>
                  <br></br>
                  <Typography
                    className="bukra-regular"
                    variant="h6"
                    component="h6"
                    style={{ whiteSpace: 'pre-line', color: '#103442' }}
                  >
                    {el.post}
                  </Typography>
                </Carousel.Item>
              ))}
            </Carousel>
            <br></br>
          </div>

          <ClientsCarousel
            breakPoints={this.state.breakPoints}
            enableMouseSwipe={true}
            enableAutoPlay={true}
            disableArrowsOnEnd={false}
            className="home-partners-ewings"
            pagination={false}
          >
            {this.state.partners.map((partner) => (
              <div className="home-partner-ewings">
                <Button variant="link" href="/partners">
                  <img
                    alt="placeholder"
                    className="home-partner-img"
                    src={`${endpoint}/images/${partner.logo}`}
                    height="120px"
                  />
                </Button>
              </div>
            ))}
          </ClientsCarousel>

          <div className="page-margin">
            <Grid container className="home-services-grid">
              <Grid item xs={6}>
                <div className="home-service-ewings">
                  <p
                    className="bukra-bold home-service-text-ewings ewings-color"
                    style={{ textAlign: 'center' }}
                  >
                    Digital Marketing
                  </p>
                  <br></br>
                  <p className="bukra-regular ewings-home-service-text-desc ewings-color">
                    All marketing initiatives that involve an electronic device
                    or the internet are referred to as digital marketing. To
                    engage with present and potential customers, businesses use
                    digital channels such as search engines, social media,
                    email, and their websites.
                  </p>
                  <br></br>
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      className="home-service-btn home-service-ewing-btn "
                      href="/services/strategic"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="home-service-ewings">
                  <p
                    className="bukra-bold home-service-text-ewings ewings-color"
                    style={{ textAlign: 'center' }}
                  >
                    Multimedia Production
                  </p>
                  <br></br>
                  <p className="bukra-regular ewings-home-service-text-desc ewings-color">
                    Multimedia is a type of media that uses a variety of
                    information content and processing methods (for example,
                    text, audio, graphics, animation, video, and interactivity)
                    to inform or entertain the user.
                  </p>
                  <br></br>
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      className="home-service-btn home-service-ewing-btn"
                      href="/services/hr"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="home-service-ewings">
                  <p
                    className="bukra-bold home-service-text-ewings ewings-color"
                    style={{ textAlign: 'center' }}
                  >
                    Social Media and Creative Content & Management
                  </p>
                  <p className="bukra-regular ewings-home-service-text-desc ewings-color">
                    A social media platform is an online platform that users use
                    to develop social networks or relationships with others that
                    share similar personal or professional interests, hobbies,
                    backgrounds, or real-life connections. Social networks have
                    a huge impact on young people. It's becoming evident that
                    social media has become an integral component of people's
                    lives.
                  </p>
                  <br></br>
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      className="home-service-btn home-service-ewing-btn"
                      href="/services/toolbox"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className="home-service-ewings">
                  <p
                    className="bukra-bold home-service-text-ewings ewings-color"
                    style={{ textAlign: 'center' }}
                  >
                    Media Planning and Buying
                  </p>
                  <p className="bukra-regular ewings-home-service-text-desc ewings-color">
                    Any media or advertising agency's two most critical tasks
                    are media planning and buying. An advertising agency's media
                    planning and buying activities decide the combination of
                    media, frequency of the commercial, or awareness campaign
                    for an effective brand promotion at the best price.
                  </p>
                  <br></br>
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      className="home-service-btn home-service-ewing-btn"
                      href="/services/marketingMgmt"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
                <div className="home-service-ewings">
                  <p
                    className="bukra-bold home-service-text-ewings ewings-color"
                    style={{ textAlign: 'center' }}
                  >
                    Web Development
                  </p>
                  <p className="bukra-regular ewings-home-service-text-desc ewings-color">
                    Websites serve as a conduit between individuals seeking to
                    contribute information and others seeking to absorb it. If
                    you run a business, having a website to publicize your
                    products and reach out to potential clients on a global
                    scale is nearly a requirement.
                  </p>
                  <br></br>
                  <div style={{ textAlign: 'right' }}>
                    <Button
                      className="home-service-btn home-service-ewing-btn"
                      href="/services/financial"
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    );
  }
}
