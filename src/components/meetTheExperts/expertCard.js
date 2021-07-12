import React, { Component } from 'react'
import './expertCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Grid, Paper, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default class ExpertCard extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            expert: this.props.expert
        }
    }

    handleClick(url) {
        window.open(url, "_blank") 
    }

    render() {
        console.log(this.state)
        return (
            <Paper className='expert-paper'>
                <img src={this.props.expert.img} alt='expert' className='expert-img' />
                <div className='expert-details'>
                    <Typography variant='h5' component='h5'>
                        {this.props.expert.name}
                    </Typography>
                    <Typography variant='h6' component='h6'>
                    {this.props.expert.title}
                    </Typography>
                    <hr className="expert-paper-hr"></hr>
                    <Typography variant='body1' component='body1'>
                    {this.props.expert.motto}
                    </Typography>
                    <div className='expert-paper-links'>
                        <Button className='expert-paper-link-btn' onClick={() => this.handleClick(this.props.expert.links.twitter)} >
                            <FontAwesomeIcon icon={faTwitter} size='2x' />
                        </Button>
                        <Button className='expert-paper-link-btn' onClick={() => this.handleClick(this.props.expert.links.facebook)} >
                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                        </Button>
                        <Button className='expert-paper-link-btn' onClick={() => this.handleClick(this.props.expert.links.instagram)} >
                            <FontAwesomeIcon icon={faInstagram} size='2x' />
                        </Button>
                        <Button className='expert-paper-link-btn' onClick={() => this.handleClick(this.props.expert.links.linkedIn)} >
                            <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        </Button>
                    </div>
                </div>
            </Paper>)
    }
}
