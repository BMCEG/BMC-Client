import React, { Component } from 'react';
import './Footer.css';
import endpoint from '../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <div
        className="bmcfooter__root"
        style={{
          backgroundImage: `url(${endpoint}/images/Footer.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: 'center',
        }}
      >
        <div className="bmcfooter__row">
          <Button className="bmcfooter__row__left" href="/" variant="link">
            <img
              alt="footer"
              src={`${endpoint}/images/Logo (1).png`}
              className="bmcfooter__row__img"
            />
          </Button>
          <div className="bmcfooter__row__divider--base">
            <div className="bmcfooter__row__divider" />
          </div>
          <div className="bmcfooter__row__center">
            <div className="bmcfooter__center__name bmcfooter__center__name--size">
              <img
                alt="footer"
                src={`${endpoint}/images/IMG.png`}
                className="bmcfooter__center__name__img"
              />
            </div>
            <br></br>
            <div className="bmcfooter__center__social">
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://www.facebook.com/businessmapconsultants/"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/Facebook.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://www.instagram.com/businessmapconsultants/"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/Instagram.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://www.twitter.com/businessmapconsultants/"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/Twitter.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://www.linkedin.com/company/businessmapconsultants/"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/Linkedin.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://www.youtube.com/channel/UCEt1Yu5e7dPdrkpk23HZN6Q"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/Youtube.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
            </div>
          </div>
          <div className="bmcfooter__row__divider--base">
            <div className="bmcfooter__row__divider" />
          </div>
          <div className="bmcfooter__row__right">
            <Typography className="bmcfooter__right__info">
              <span>
                <Button
                  variant="link"
                  className="bmcfooter__right__info__btn"
                  target="_blank"
                  href="https://www.google.com/maps/place/Business+Map+Consultants/@30.0151101,31.4275996,15z/data=!4m2!3m1!1s0x0:0xffc8e216cb0f68c6?sa=X&ved=2ahUKEwjFo_vboeDyAhXHgVwKHaiCA8QQ_BIwGXoECGAQBQ"
                >
                  <img
                    alt="footer"
                    src={`${endpoint}/images/Location.png`}
                    className="bmcfooter__center__social__btn__img"
                  />
                </Button>
                B103 90th Road, 5th Settlement, New Cairo
              </span>
            </Typography>
            <br></br>
            <Typography className="bmcfooter__right__info">
              <span>
                {' '}
                <Button
                  variant="link"
                  className="bmcfooter__right__info__btn"
                  href="tel:01008224224"
                >
                  <img
                    alt="footer"
                    src={`${endpoint}/images/Phone.png`}
                    className="bmcfooter__center__social__btn__img"
                  />
                </Button>
                01008224224
              </span>
            </Typography>
            <br></br>
            <Typography className="bmcfooter__right__info">
              <span>
                {' '}
                <Button
                  variant="link"
                  href="mailto:info@bmceg.com"
                  className="bmcfooter__right__info__btn"
                >
                  <img
                    alt="footer"
                    src={`${endpoint}/images/Email.png`}
                    className="bmcfooter__center__social__btn__img"
                  />
                </Button>
                info@bmceg.com
              </span>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
