import React, { Component } from 'react';
import './Footer.css';
import endpoint from '../../../helpers/api_service';
import { Button } from 'react-bootstrap';
export default class FooterMob extends Component {
  render() {
    return (
      <div
        className="bmcfooterMob__root"
        style={{
          backgroundImage: `url(${endpoint}/images/Footer.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="bmcfooterMob__row">
          <div className="bmcfooterMob__row__left">
            <img
              alt="nav"
              src={`${endpoint}/images/Logo (1).png`}
              className="bmcfooterMob__row__img"
            />
            <br></br>
            <div className="bmcfooter__center__social">
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                href="https://www.facebook.com/businessmapconsultants/"
              >
                <img
                  alt="nav"
                  src={`${endpoint}/images/Facebook.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                href="https://www.instagram.com/businessmapconsultants/"
              >
                <img
                  alt="nav"
                  src={`${endpoint}/images/Instagram.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                href="https://www.twitter.com/businessmapconsultants/"
              >
                <img
                  alt="nav"
                  src={`${endpoint}/images/Twitter.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                href="https://www.linkedin.com/company/businessmapconsultants/"
              >
                <img
                  alt="nav"
                  src={`${endpoint}/images/Linkedin.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                href="https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q"
              >
                <img
                  alt="nav"
                  src={`${endpoint}/images/Youtube.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
