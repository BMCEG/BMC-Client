import React, { Component } from 'react'
import { Paper, Grid } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import './careerOpenings.css';
import endpoint from '../../../../helpers/api_service.js'
import axios from 'axios';

export default class CareerOpenings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openings1: [],
            openings2: []
        }
    }

    componentDidMount = async () => {
        await axios.get(`${endpoint}/jobs/`).then((res) => {
            const half = Math.ceil(res.data.length / 2);

            const firstHalf = res.data.slice(0, half)
            const secondHalf = res.data.slice(half, res.data.length)

            this.setState({
                openings1: firstHalf,
                openings2: secondHalf,
            })
        })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='career-opening-root' style={{ backgroundImage: `url(${endpoint}/images/bg-our-story.png)`, backgroundSize: 'cover' }}>
                <div className='career-opening-margin'>
                    <Grid container>
                        <Grid item xs={6}>
                            {this.state.openings1.map((opening) => (
                                <Paper className="career-opening-card" style={{ backgroundImage: `url(${endpoint}/images/bg-founder.png)`, backgroundSize: 'cover' }}>
                                    <h4 className='bukra-bold'>{opening.title} ({opening.type})</h4>
                                    <h5 className='bukra-regular'>{opening.description}</h5>
                                    <hr></hr>
                                    <div className='career-opening-card-reqs bukra-regular'>
                                        <h5>{opening.minXP} - {opening.maxXP} Years</h5>
                                        <div className='career-opening-card-btn'>
                                        <Button variant='danger' href={`/careers/openings/${opening._id}`} className='bukra-regular'>
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </Paper>
                            ))}
                        </Grid>
                        <Grid item xs={6}>
                            {this.state.openings2.map((opening) => (
                                <Paper className="career-opening-card" style={{ backgroundImage: `url(${endpoint}/images/bg-founder.png)`, backgroundSize: 'cover' }}>
                                    <h4 className='bukra-bold'>{opening.title} ({opening.type})</h4>
                                    <h5 className='bukra-regular'>{opening.description}</h5>
                                    <hr></hr>
                                    <div className='career-opening-card-reqs bukra-regular'>
                                        <h5>{opening.minXP} - {opening.maxXP} Years</h5>
                                        <div className='career-opening-card-btn'>
                                            <Button variant='danger' href={`/careers/openings/${opening._id}`} className='bukra-regular'>
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </Paper>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
