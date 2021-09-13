import { Grid } from '@material-ui/core'
import React from 'react'
import './meetTheExperts.css'
import ExpertCard from '../../../../components/meetTheExperts/expertCard';
import endpoint from '../../../../helpers/api_service.js';

export default function meetTheExperts() {
    return (
        <div className="experts-root" style={{ backgroundImage: `url(${endpoint}/images/bg-experts.png)`, backgroundSize: 'cover' }}>
            <br></br>
            <Grid container className='experts-grid'>
                <Grid item xs={6}>
                    <ExpertCard
                        expert={{
                            img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                            name: 'Mohamed Nasr',
                            title: 'Founder & CEO',
                            motto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                            links: {
                                twitter: 'https://en.wikipedia.org/wiki/Midnight_Cowboy',
                                instagram: 'http://www.wikipedia.com/lmao',
                                facebook: 'http://www.wikipedia.com/lmao',
                                linkedIn: 'http://www.wikipedia.com/lmao',
                            }
                        }} />
                </Grid>
                <Grid item xs={6}>
                    <ExpertCard expert={{
                        img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        name: 'El Mahdy Gamal',
                        title: 'Creative Director',
                        motto: 'Quisque at pharetra nibh.',
                        links: {
                            twitter: 'https://en.wikipedia.org/wiki/Midnight_Cowboy',
                            instagram: 'http://www.wikipedia.com/lmao',
                            facebook: 'http://www.wikipedia.com/lmao',
                            linkedIn: 'http://www.wikipedia.com/lmao',
                        }
                    }} />
                </Grid>
                <Grid item xs={6}>
                    <ExpertCard expert={{
                        img: 'https://mir-s3-cdn-cf.behance.net/user/115/37a436336529819.5e30415235d23.jpg',
                        name: 'Ali Gado',
                        title: 'Graphic Designer',
                        motto: 'Morbi id urna hendrerit, placerat dui ut, convallis orci.',
                        links: {
                            twitter: 'https://en.wikipedia.org/wiki/Midnight_Cowboy',
                            instagram: 'http://www.wikipedia.com/lmao',
                            facebook: 'http://www.wikipedia.com/lmao',
                            linkedIn: 'http://www.wikipedia.com/lmao',
                        }
                    }} />
                </Grid>
                <Grid item xs={6}>
                    <ExpertCard expert={{
                        img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        name: 'Menna Mandour',
                        title: 'Social Media Specialist',
                        motto: 'Donec dui nisi, luctus quis nisl vel, efficitur ullamcorper enim.',
                        links: {
                            twitter: 'https://en.wikipedia.org/wiki/Midnight_Cowboy',
                            instagram: 'http://www.wikipedia.com/lmao',
                            facebook: 'http://www.wikipedia.com/lmao',
                            linkedIn: 'http://www.wikipedia.com/lmao',
                        }
                    }} />
                </Grid>
                <Grid item xs={6}>
                    <ExpertCard expert={{
                        img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
                        name: 'Ali Moneib',
                        title: 'Web Developer',
                        motto: 'Donec posuere cursus elit.',
                        links: {
                            twitter: 'https://en.wikipedia.org/wiki/Midnight_Cowboy',
                            instagram: 'http://www.wikipedia.com/lmao',
                            facebook: 'http://www.wikipedia.com/lmao',
                            linkedIn: 'http://www.wikipedia.com/lmao',
                        }
                    }} />
                </Grid>
                <Grid item xs={6}>

                </Grid>
            </Grid>
        </div>
    )
}
