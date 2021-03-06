import React, { Component } from 'react';
import endpoint from '../../helpers/api_service';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class OpeningMob extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      opening: this.props.opening,
      isExpanded: false,
    };
  }

  handleChange(panel) {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    return (
      <Accordion
        className="career-opening-card-mobile"
        expanded={this.state.isExpanded}
        onChange={() => this.handleChange('panel')}
        style={{
          backgroundImage: `url(${endpoint}/images/bg-founder.png)`,
          backgroundSize: 'cover',
        }}
      >
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <h4 className="bukra-bold">
            {this.props.opening.title} ({this.props.opening.type})
          </h4>
        </AccordionSummary>
        <AccordionDetails>
          <div className="career-opening-card-reqs-mobile">
            <h5 className="bukra-regular">{this.props.opening.description}</h5>
            <hr></hr>
            <div style={{ display: 'flex' }}>
              <h5 className="bukra-regular">
                {this.props.opening.minXP} - {this.props.opening.maxXP} Years
              </h5>
              <div className="career-opening-card-btn-mobile">
                <Button
                  variant="danger"
                  href={`/careers/openings/${this.props.opening._id}`}
                >
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    );
  }
}
