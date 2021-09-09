import React, { Component } from 'react'
import './footer.css';
import endpoint from '../../../helpers/api_service';
import { Button } from 'react-bootstrap';

export default class FooterMob extends Component {
    render() {
        return (
            <div className='bmcfooterMob__root' style={{
                backgroundImage: `url(${endpoint}/Ewings-Footer.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='bmcfooterMob__row'>
                    <div className='bmcfooterMob__row__left'>
                        <img src={`${endpoint}/Logo-W.png`} className='bmcfooterMob__row__img' />
                        <br></br>
                        <div className='bmcfooter__center__social'>
                            <Button variant='link' className='bmcfooter__center__social__btn' target="_blank" href='https://www.facebook.com/businessmapconsultants/'>
                                <img src={`${endpoint}/ewings-Icons-04.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn' target="_blank" href='https://www.instagram.com/businessmapconsultants/'>
                                <img src={`${endpoint}/ewings-Icons-05.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn' target="_blank" href='https://www.twitter.com/businessmapconsultants/'>
                                <img src={`${endpoint}/ewings-Icons-06.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn' target="_blank" href='https://www.linkedin.com/company/businessmapconsultants/'>
                                <img src={`${endpoint}/ewings-Icons-07.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn' target="_blank" href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q'>
                                <img src={`${endpoint}/ewings-Icons-08.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
