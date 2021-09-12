import React, { Component } from 'react'
import './Footer.css';
import endpoint from '../../../helpers/api_service';
import { Button } from 'react-bootstrap';
export default class FooterMob extends Component {
    render() {
        return (
            <div className='bmcfooterMob__root' style={{
                backgroundImage: `url(${endpoint}/Footer.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <div className='bmcfooterMob__row'>
                    <div className='bmcfooterMob__row__left'>
                        <img alt='nav'src={`${endpoint}/Logo (1).png`} className='bmcfooterMob__row__img' />
                        <br></br>
                        <div className='bmcfooter__center__social'>
                            <Button variant='link' className='bmcfooter__center__social__btn' href='https://www.facebook.com/businessmapconsultants/'>
                                <img alt='nav'src={`${endpoint}/Facebook.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn'  href='https://www.instagram.com/businessmapconsultants/'>
                                <img alt='nav'src={`${endpoint}/Instagram.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn'  href='https://www.twitter.com/businessmapconsultants/'>
                                <img alt='nav'src={`${endpoint}/Twitter.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn' href='https://www.linkedin.com/company/businessmapconsultants/'>
                                <img alt='nav'src={`${endpoint}/Linkedin.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                            <Button variant='link' className='bmcfooter__center__social__btn' href='https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q'>
                                <img alt='nav'src={`${endpoint}/Youtube.png`} className='bmcfooter__center__social__btn__img' />
                            </Button>
                        </div>
                    </div>
                    {/* <div className='bmcfooter__row__divider--base'>
                        <div className='bmcfooterMob__row__divider' />
                    </div>
                    <div className='bmcfooterMob__row__right'>
                        <Typography className='bmcfooter__right__info'>
                            <span><FontAwesomeIcon icon={faLocationArrow} className='bmcfooter__right__info__icon bmcfooter__right__info__icon--size' />

                                B103 90th Road, 5th
                                Settlement, New Cairo
                            </span>
                        </Typography>
                        <br></br>
                        <Typography className='bmcfooter__right__info'>
                            <span><FontAwesomeIcon icon={faPhone} className='bmcfooter__right__info__icon bmcfooter__right__info__icon--size' />

                                01008224224
                            </span>

                        </Typography>
                        <br></br>
                        <Typography className='bmcfooter__right__info'>
                            <span><FontAwesomeIcon icon={faEnvelope} className='bmcfooter__right__info__icon bmcfooter__right__info__icon--size' />

                                info@bmceg.com
                            </span>

                        </Typography>
                    </div> */}
                </div>
            </div>
        )
    }
}
