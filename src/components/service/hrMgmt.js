import React from 'react'
import './hrMgmt.css';
import { Typography } from '@material-ui/core';

export default function hrManagement() {
    return (
        <div>
            <Typography align='justify' variant='h5' component='h5' className='bukra-regular lspacing'>
                BMC provides Human Resources services in support of your company’s vision, mission, and values by supporting the concept that employees are the most valuable resource we have.
            </Typography>
            <br></br>
            <Typography align='justify' variant='h5' component='h5' className='bukra-regular lspacing'>
                Our Human Resources action plan will serve as a catalyst for all workers to contribute at their best to our client's continued success. through the below functions:
            </Typography>
            <br></br>
            <Typography align='justify' variant='h5' component='h5'  className='bukra-regular lspacing'>
                ·      Recruitment
                <br></br>
                ·      Organizational Development
                <br></br>
                ·      Personnel Management
                <br></br>
                ·      Performance Management
                <br></br>
                ·      Training and Development
                <br></br>
            </Typography>
        </div>
    )
}
