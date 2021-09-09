import React, { Component } from 'react'
import endpoint from '../../../../helpers/api_service'
import './MediaPlanning.css';
import { Typography } from '@material-ui/core';
export default class MediaPlanning extends Component {
    render() {
        return (
            <div className='ewings__digitalM__root'>
                <div className='ewings__digitalM__banner'>
                    <img className='ewings__digitalM__banner__img' src={`${endpoint}/MediaPlanning-H.png`} alt='banner' />
                    <div className='ewings__banner__title' style={{
                        backgroundImage: `url(${endpoint}/ewings-header.png  )`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: 'center',
                        backgroundPositionY: 'center'
                    }}>

                        <Typography className='ewings__home__title--font ewings__home__services__title__header'>
                            MEDIA PLANNING AND BUYING
                        </Typography>
                    </div>
                </div>
                <div className='ewings__digitalM__body'>
                    <img className='ewings__mediaPlanning__body__ball__img__top-right' src={`${endpoint}/Ball.png`} alt='ball' />

                    <Typography className='ewings__digitalM__subtitle ewings__home__title--font'>
                        MEDIA PLANNING AND BUYING:
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Any media or advertising agency's two most critical tasks are media planning and buying. An advertising agency's media planning and buying activities decide the combination of media, frequency of
                        the commercial, or awareness campaign for an effective brand promotion at the best price.
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Media planning relates to the choice of a venue or area for promoting a product in the open market.
                        It is concerned with determining the appropriate media mix for a product's public awareness campaign. It benefits the company by increasing client awareness of the product. Media planning entails tactics that persuade customers to use a product in a straightforward and intelligent manner.
                        As a result, becoming a client of a media planning or advertising firm is a must for any manufacturer or businessperson. To gain market share, products created as part of a business might be displayed through media planning firms. Media planning considers not only the platform to be used to
                        raise public knowledge about a product, but also the timing of the campaign. A media planning
                        agency's job is to choose the optimal combination of media to display or advertise a product to the
                        general public.
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Media Planners are a group of specialists who work in an advertising agency's Media Planning department. They make plans for the best media to use for awareness campaigns, as well as the
                        number of people who can be reached by each media, the frequency of the commercials or awareness campaigns, and the media's investment cost. The goal of Media Planners is to achieve the
                        marketing campaign's goals.
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Media buying deals with the purchase of space or media in order to promote a product at the best
                        possible price and timing. The two most crucial duties for a media agency or advertising agency to
                        do for an efficient brand promotion are media planning and buying.
                    </Typography>
                    <br></br>
                    <br></br>
                    <Typography className='ewings__digitalM__body__text bmchome__services__text--size'>
                        Media buyers aren't the same as media planners. To accomplish the objectives of their clients'
                        product or service awareness campaign, Media Buyers consider station formats, price rates, demographics, geographics, and psychographics.They address the type of medium (radio, internet, TV,
                        print), the quality of the medium (target audience, time of day for transmission, etc. ), and the
                        amount of time and space that may be obtained within the client's budget. Media buyers seek to
                        purchase various media or platforms on a regional or national level while staying within the clients'
                        budget.
                    </Typography>
                    <br></br>
                    <br></br>
                    <img className='ewings__mediaPlanning__body__ball__img__bottom-left' src={`${endpoint}/Ball.png`} alt='ball' />

                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        )
    }
}
