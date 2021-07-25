import React, { Component } from "react";
import "./ourStory.css";
import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import endpoint from "../../../../helpers/api_service";

export default class ourStory extends Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOff = this.handleMouseOff.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      panel1: false,
      panel2: false,
      panel3: false,
      panel4: false,
      panel5: false,
      panel6: false,


      showFlag: false,
      showText: "",
      ball1:
        "Our passion is to add value to others, Impact is our main core value, Impact is a key part of our business. we are -and will be always- making an impact on someone’s life every single day.",
      ball2:
        "We challenge the status quo  in a rapidly changing environment and dynamic markets. All businesses face many challenges that need a practical application to adopt and remain dynamically changing as the economy and market dictate. We have a team who adapt and change according to what we face in our business process. We Lead the change to take your business to a whole next level.",
      ball3:
        "We have a family philosophy(our employees are our main assets, we make sure to provide them with sense of security, we also provide them all the factors of success that builds them to be the future leaders) (educational development, public awareness)",
      ball4:
        "(BMC will be passionately tailoring and giving you the best service to help your business achieve optimal results and maximum development. We believe that money is a result, not an objective, so the value you’ll receive will always exceed our fees and your expectations.",
    };
  }

  handleChange(panel) {
    console.log(panel)
    if (panel === 'panel1') {
      this.setState({
        panel1: !this.state.panel1,
        panel2: false,
        panel3: false,
        panel4: false,
        panel5: false,
        panel6: false,
      })
    } else if (panel === 'panel2') {
      this.setState({
        panel1: false,
        panel2: !this.state.panel2,
        panel3: false,
        panel4: false,
        panel5: false,
        panel6: false,
      })
    } else if (panel === 'panel3') {
      
      this.setState({
        panel1: false,
        panel2: false,
        panel3: !this.state.panel3,
        panel4: false,
        panel5: false,
        panel6: false,
      })
    } else if (panel === 'panel4') {
      
      this.setState({
        panel1: false,
        panel2: false,
        panel3: false,
        panel4: !this.state.panel4,
        panel5: false,
        panel6: false,
      })
    } else if (panel === 'panel5') {
      
      this.setState({
        panel1: false,
        panel2: false,
        panel3: false,
        panel4: false,
        panel5: !this.state.panel5,
        panel6: false,
      })
    } else if (panel === 'panel6') {
      
      this.setState({
        panel1: false,
        panel2: false,
        panel3: false,
        panel4: false,
        panel5: false,
        panel6: !this.state.panel6
      })
    }
  }

  handleMouseOver = (name) => {
    let showText = "";
    if (name === "ball1") {
      showText = this.state.ball1;
    } else if (name === "ball2") {
      showText = this.state.ball2;
    } else if (name === "ball3") {
      showText = this.state.ball3;
    } else {
      showText = this.state.ball4;
    }

    this.setState({
      showFlag: true,
      showText,
    });
  };

  handleMouseOff = (name) => {
    this.setState({
      showFlag: false,
      showText: "",
    });
  };

  render() {
    return (
      <div style={{ backgroundImage: `url(${endpoint}/bg-our-story.png)`, backgroundSize: 'cover', backgroundPositionX: '-290px' }}>
        <Accordion expanded={this.state.panel1} onChange={() => this.handleChange('panel1')}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="story-node-mobile-mob">
              <img
               src={`${endpoint}/our-story-2014.png`}
                alt="ds"
                className="story-ball-mobile"
              />
              <div className='story-year-mobile'>
                <h4 className='bukra-bold'>2014</h4>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' component='h6' className='bukra-regular'>
              Since inception, we have advised, planned and managed
              investments valued over 6.5 billion EGP specializing in
              real-estate development and construction and trading
              industries
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion expanded={this.state.panel2} onChange={() => this.handleChange('panel2')}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="story-node-mobile-mob">
              <img
                src={`${endpoint}/our-story-2015.png`}
                alt="ds"
                className="story-ball-mobile"
              />
              <div className='story-year-mobile'>
                <h4 className='bukra-bold'>2015</h4>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' component='h6' className='bukra-regular'>
              More industries included in the manufacturing and
              agricultural sector ordering feasibility studies and setup for
              factories in cosmeceuticals, detergents, food, and packing
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion expanded={this.state.panel3} onChange={() => this.handleChange('panel3')}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="story-node-mobile-mob">
              <img
                src={`${endpoint}/our-story-2016.png`}
                alt="ds"
                className="story-ball-mobile"
              />
              <div className='story-year-mobile'>
                <h4 className='bukra-bold'>2016-2017</h4>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' component='h6' className='bukra-regular'>
              Widen our scope of services to include Financial advisory,
              serving new sectors like import & export, supporting
              startups and entrepreneurs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion expanded={this.state.panel4} onChange={() => this.handleChange('panel4')}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="story-node-mobile-mob">
              <img
                src={`${endpoint}/our-story-2018.png`}
                alt="ds"
                className="story-ball-mobile"
              />
              <div className='story-year-mobile'>
                <h4 className='bukra-bold'>2018-2019</h4>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' component='h6' className='bukra-regular'>
              Digital transformation, introducing a new scope of digital
              marketing services, hiring digital experts, and blend of
              thinkers, creatives, and designers.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion expanded={this.state.panel5} onChange={() => this.handleChange('panel5')}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="story-node-mobile-mob">
              <img
                src={`${endpoint}/our-story-2020.png`}
                alt="ds"
                className="story-ball-mobile"
              />
              <div className='story-year-mobile'>
                <h4 className='bukra-bold'>2020</h4>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' component='h6' className='bukra-regular'>
              Dealing with COVID 19 Pandemic with all our business clients
              to pass this critical period with tailored crisis management
              solutions for each sector and industry.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
        <Accordion expanded={this.state.panel6} onChange={() => this.handleChange('panel6')}>
          <AccordionSummary
            // expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <div className="story-node-mobile-mob">
              <img
                src={`${endpoint}/our-story-2021.png`}
                alt="ds"
                className="story-ball-mobile"
              />
              <div className='story-year-mobile'>
                <h4 className='bukra-bold'>2021</h4>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='h6' component='h6' className='bukra-regular'>
              Widen our scope to include Taxation, more industries
              included in the Banking and telecom sectors, providing
              marketing advisory for Banks, financial firms, and
              telecommunication companies
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br></br>
      </div>
    );
  }
}
