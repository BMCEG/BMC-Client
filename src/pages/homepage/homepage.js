import React, { Component } from 'react'
import './homepage.css';

import DefaultBMC from '../contexts/bmc/default.js';

export default class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            partners: []
        }
    }

    render() {
        return (
            <div>
                <DefaultBMC />
            </div >
        )
    }
}
