import { Typography } from '@material-ui/core';
import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './Clients.css'
import ResponsiveGallery from 'react-responsive-gallery';

export default class Clients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
        }
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/partners/`)
            .then((res) => {
                let clients = [];

                res.data.map((client) => (
                    clients.push({
                        src: `${endpoint}/${client.logo}`
                    })
                ))

                this.setState({
                    clients
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className='clients__root'>
                <br></br>
                <div className='clients__header'>
                    <Typography className='clients__header--font clients__header--font--size'>
                        Clients
                    </Typography>
                </div>
                <br></br>
                <div className='clients_row'>
                    <ResponsiveGallery numOfImagesPerRow={
                        { xs: 2, s: 2, m: 3, l: 3, xl: 4, xxl: 5 }
                    } colsPadding={{ xs: 20, s: 30, m: 40, l: 50, xl: 60, xxl: 65 }} imagesPaddingBottom={{ xs: 80, s: 80, m: 80, l: 80, xl: 80, xxl: 80 }} images={this.state.clients} />
                </div>
            </div>
        )
    }
}
