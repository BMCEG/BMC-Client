import React, { Component } from 'react';
import './partner.css';
import endpoint from '../../helpers/api_service';
import { Paper } from '@material-ui/core';
export default class PartnerCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      partner: this.props.partner,
    };
  }

  handleClick(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <>
        <Paper className="partner-paper-mobile">
          <img
            src={`${endpoint}/images/${this.props.partner.logo}`}
            alt="partner"
            className="partner-img"
          />
        </Paper>
        <br></br>
      </>
    );
  }
}
