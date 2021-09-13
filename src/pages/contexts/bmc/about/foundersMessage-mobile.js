import React from 'react'
import './foundersMessage.css';
import { Typography } from '@material-ui/core';
import endpoint from '../../../../helpers/api_service.js';
export default function foundersMessage() {
    return (
        <div className="founder-root-mobile" style={{backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover'}}>
            <div className='founder-img-base-mobile'>
                <img className='founder-img' src={`${endpoint}/images/landing-founder.png`} alt='Founder Message' />
            </div>
            <div className='founder-text-mobile'>
                <div className="founder-text-box">
                    <h2>FOUNDER'S MESSAGE</h2>
                    {/* <h1>MESSAGE</h1> */}

                </div>
                <br></br>
                <div className='founder-text-msg-mobile'>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        Welcome to BMC,
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        As you navigate our website I hope you end up with an inspired warm feeling, this is the same feeling that spark our existence, we are here to bring passion, motivation and inspiration.
                    </Typography>
                    <br></br>
                    {/* <br></br> */}
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        I hope you learn more about the qualities and values that make us a true business partner helping the many and proudly may help you in creating your business roadmap, achieving your objectives, guaranteeing sustainable progress and growth.
                    </Typography>
                    {/* <br></br> */}
                    <br></br>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        We have earned the trust and respect of all people along our trip and we strive hard to do the right thing based on well-known business principles and theories with the best practice for each industry. We have handled many small- and large-scale projects and have implemented solutions for numerous organizations of all sizes over the years, whether you are a potential big customer or a startup or future employee we will dedicate all the knowledge and capabilities needed to support you to achieve your goal.
                    </Typography>
                    <br></br>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        I hope you enjoy our website as we will enjoy your warm visit.
                    </Typography>
                    <br></br>
                    <br></br>
                    <img className='founder-sig-mob' src={`${endpoint}/images/signature.png`} alt='sig' />
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        Mohamed Nasr,
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        Co-founder and CEO,
                    </Typography>
                    <Typography align='justify' variant='h6' component='h6' className='bukra-regular'>
                        Business Map Consultants.
                    </Typography>
                </div>
            </div>
            
        </div>
    )
}
