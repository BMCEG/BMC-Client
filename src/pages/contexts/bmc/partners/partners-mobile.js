import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import PartnerCardMob from '../../../../components/partners/partner-mobile.js';
import endpoint from '../../../../helpers/api_service';
import './partners.css'
export default class Partners extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners1: [],
            partners2: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/partners/`)
            .then((res) => {
                const half = Math.ceil(res.data.length / 2);

                const firstHalf = res.data.slice(0, half)
                const secondHalf = res.data.slice(half, res.data.length)

                this.setState({
                    partners1: firstHalf,
                    partners2: secondHalf
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='partners-root' style={{ backgroundImage: `url(${endpoint}/bg-experts.png)`, backgroundSize: 'cover' }}>
                <div className='partners-body'>
                    <Grid container>
                        <Grid item xs={6}>
                            {this.state.partners1.map((partner) => (
                                <PartnerCardMob partner={partner} />
                            ))}

                        </Grid>
                        <Grid item xs={6}>
                            {this.state.partners2.map((partner) => (
                                <PartnerCardMob partner={partner} />
                            ))}

                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}
