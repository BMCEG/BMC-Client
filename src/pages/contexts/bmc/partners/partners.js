import { Grid } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import PartnerCard from '../../../../components/partners/partner';
import endpoint from '../../../../helpers/api_service';
import './partners.css'
export default class Partners extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners1: [],
            partners2: [],
            partners3: [],
            partners4: [],
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/partners/`)
            .then((res) => {
                const quarter = Math.ceil(res.data.length / 4);

                const firstQuarter = res.data.slice(0, quarter)
                const secondQuarter = res.data.slice(quarter, 2*quarter)
                const thirdQuarter = res.data.slice(2*quarter, 3*quarter)
                const fourQuarter = res.data.slice(3*quarter, res.data.length)

                this.setState({
                    partners1: firstQuarter,
                    partners2: secondQuarter,
                    partners3: thirdQuarter,
                    partners4: fourQuarter
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='partners-root' style={{backgroundImage: `url(${endpoint}/imagesbg-experts.png)`, backgroundSize: 'cover'}}>
                <div className='partners-body'>
                    <Grid container>
                        <Grid item xs={3}>
                            {this.state.partners1.map((partner) => (
                                <PartnerCard partner={partner} />
                            ))}

                        </Grid>
                        <Grid item xs={3}>
                            {this.state.partners2.map((partner) => (
                                <PartnerCard partner={partner} />
                            ))}

                        </Grid>
                        <Grid item xs={3}>
                            {this.state.partners3.map((partner) => (
                                <PartnerCard partner={partner} />
                            ))}

                        </Grid>
                        <Grid item xs={3}>
                            {this.state.partners4.map((partner) => (
                                <PartnerCard partner={partner} />
                            ))}

                        </Grid>
                    </Grid>
                </div>

            </div>
        )
    }
}
