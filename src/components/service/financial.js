import React from 'react'
import './financial.css';
import { Grid, Typography } from '@material-ui/core';
import endpoint from '../../helpers/api_service';
export default function marketingMgmt() {
    return (
        <div>
            <Typography align='justify' variant='h5' component='h5' className='bukra-regular lspacing'>
                BMC’s Financial Management division has the aim to provide your company a full range of past and future comprehensive high quality services with a modern and practical approach in several fields.
            </Typography>
            <br></br>
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                ·      Accounting & bookkeeping
                <br></br>
                ·      Business start-up
                <br></br>
                ·      Due diligence
                <br></br>
                ·      Cash management
                <br></br>
                ·      Internal audit function
                <br></br>
                ·      Budgeting & forecasting
                <br></br>
                ·      Internal process & Internal control system designation
                <br></br>
                ·      Financial analysis & projects evaluation
                <br></br>
            </Typography>
        </div>
    )
}
