import React from 'react'
import './partnersMessage.css';
import { Typography } from '@material-ui/core';
import endpoint from '../../../../helpers/api_service.js';

export default function partnersMessage() {
    return (
        <div className="partner-root" style={{backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover'}}>
            <div className='partner-text-mobile'>
                <div className="partner-text-box">
                    <h2 className='bukra-bold'>PARTNERS' MESSAGE</h2>
                </div>
                <br></br>
                <div className='partner-text-msg'>
                    <Typography align='justify' variant='h5' component='h5' className='bukra-medium'>
                        We live for our values and passion
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        Our passion is to add value to others, Impact is our main core value, Impact is a key part of our business. we are -and will be always- making an impact on someone’s life every single day.
                    </Typography>
                    <br></br>
                    <Typography align='justify' variant='h5' component='h5' className='bukra-medium'>
                        We challenge the status quo
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        In a rapidly changing environment and dynamic markets. All businesses face many challenges that need a practical application to adopt and remain dynamically changing as the economy and market dictate.
                        We have a team who adapt and change according to what we face in our business process. We Lead the change to take your business to a whole next level.
                    </Typography>
                    <br></br>
                    <Typography align='justify' variant='h5' component='h5' className='bukra-medium'>
                        We have a family philosophy
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        (our employees are our main assets, we make sure to provide them with sense of security, we also provide them all the factors of success that builds them to be the future leaders) (educational development, public awareness)
                    </Typography>
                    <br></br>
                    <Typography align='justify' variant='h5' component='h5' className='bukra-medium'>
                        Our promise
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        (BMC will be passionately tailoring and giving you the best service to help your business achieve optimal results and maximum development. We believe that money is a result, not an objective, so the value you’ll receive will always exceed our fees and your expectations.
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography align='justify' variant='h5' component='h5' className='bukra-regular'>
                        Sincerely,
                    </Typography>
                    <Typography variant='h5' component='h5' className='bukra-regular'>
                        Co-partners, Partners, and Consultants.
                    </Typography>
                    <Typography align='justify' variant='h5' component='h5' className='bukra-regular'>
                        Business Map Consultants.
                    </Typography>
                </div>
            </div>
            {/* <div className='partner-img-base'>
                <img className='partner-img' src="https://1h3gq816607j3y2yp33klufk-wpengine.netdna-ssl.com/wp-content/uploads/2019/07/Icon-Placeholder.png" alt='partner Message' />
            </div> */}
        </div>
    )
}
