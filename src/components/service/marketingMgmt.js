import React from 'react'
import './marketingMgmt.css';
import { Grid, Typography } from '@material-ui/core';
import endpoint from '../../helpers/api_service';
export default function marketingMgmt() {
    return (
        <div>


            <Typography variant='h5' component='h5' style={{ fontWeight: 600 }} className='bukra-bold lspacing'>
                What is Marketing Management?

            </Typography>
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                Marketing management is the processes, activity, and set of organizations for delivering, creating, exchanging, and communicating, offerings that have worth for customers, partners, clients, and society as a whole.Furthermore, marketing management is also the organizational direction, which focuses on the real application of marketing techniques, alignment, and approaches inside companies and organizations.
                {/* <br></br> */}
            </Typography>
            <br></br>
            {/* <br></br> */}
            <Typography variant='h5' component='h5' style={{ fontWeight: 600 }} className='bukra-bold lspacing'>
                Why is marketing management important?
            </Typography>
            {/* <br></br> */}
            {/* <br></br> */}
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                Marketing management is critical to a company's success because it identifies the most effective strategies to reach out to customers and increase sales. To be competitive in their field, businesses need excellent marketing tactics to attract new consumers and retain existing ones.
            </Typography>
            <br></br>
            <Typography variant='h5' component='h5' style={{ fontWeight: 600 }} className='bukra-bold lspacing'>
                When do we need marketing management?
            </Typography>
            {/* <br></br> */}
            {/* <br></br> */}
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                Marketing management has become more important as a result of increased competition and the need for better distribution techniques to cut costs and increase revenues. Today, the most crucial function in a commercial or business firm is marketing management.
            </Typography>
            <br></br>
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                BMC provides the application, tracking and review of a company’s marketing resources and activities, Our effective marketing management aims to create demand on the client’s products and services, then ensure the targeted consumer segments. BMC focuses on creating the best strategies for product development, pricing, promotion, and distribution.
            </Typography>
            <br></br>
            <br></br>
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                Our marketing management service is designed for our clients to encounter all the basic challenges in their industry:
            </Typography>
            <br></br>
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                What is the company’s sales strategy?
            </Typography>
            <br></br>
            
            <Typography align='justify' variant='h6' component='h6' className='bukra-regular lspacing'>
                Which customers and markets to target? and the best means of reaching them?
            </Typography>

        </div>
    )
}
