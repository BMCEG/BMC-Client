import React, { Component } from 'react';
import './footer.css';
import endpoint from '../../../helpers/api_service';
import { Typography } from '@material-ui/core';
import { Button } from 'react-bootstrap';
export default class Footer extends Component {
  render() {
    return (
      <div
        className="bmcfooter__root"
        style={{
          backgroundImage: `url(${endpoint}/images/Ewings-Footer.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: 'center',
        }}
      >
        <div className="bmcfooter__row">
          <Button className="bmcfooter__row__left" href="/" variant="link">
            <img
              alt="footer"
              src={`${endpoint}/images/Logo-W.png`}
              className="bmcfooter__row__img"
            />
          </Button>
          <div className="ewingsfooter__row__divider--base">
            <div className="ewingsfooter__row__divider" />
          </div>
          <div className="bmcfooter__row__center">
            <div className="bmcfooter__center__name bmcfooter__center__name--size">
              <img
                alt="footer"
                src={`${endpoint}/images/ewings-IMG.png`}
                className="bmcfooter__center__name__img"
              />
            </div>
            <br></br>
            <div className="bmcfooter__center__social">
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://www.facebook.com/Ewings-103947045332006"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/ewings-Icons-04.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
              <Button
                variant="link"
                className="bmcfooter__center__social__btn"
                target="_blank"
                href="https://instagram.com/ewings_creative?utm_medium=copy_link"
              >
                <img
                  alt="footer"
                  src={`${endpoint}/images/ewings-Icons-05.png`}
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
                  src={`${endpoint}/images/ewings-Icons-06.png`}
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
                  src={`${endpoint}/images/ewings-Icons-07.png`}
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
                  src={`${endpoint}/images/ewings-Icons-08.png`}
                  className="bmcfooter__center__social__btn__img"
                />
              </Button>
            </div>
          </div>
          <div className="ewingsfooter__row__divider--base">
            <div className="ewingsfooter__row__divider" />
          </div>
          <div className="bmcfooter__row__right">
            <Typography
              className="bmcfooter__right__info"
              style={{ color: 'white' }}
            >
              <span>
                <Button
                  variant="link"
                  className="bmcfooter__right__info__btn"
                  href="tel:01008224224"
                >
                  <img
                    alt="footer"
                    src={`${endpoint}/images/ewings-Icons-02.png`}
                    className="bmcfooter__center__social__btn__img"
                  />
                </Button>
                01008224224
              </span>
            </Typography>
            <br></br>
            <Typography
              className="bmcfooter__right__info"
              style={{ color: 'white' }}
            >
              <span>
                <Button
                  variant="link"
                  href="mailto:info@bmceg.com"
                  className="bmcfooter__right__info__btn"
                >
                  <img
                    alt="footer"
                    src={`${endpoint}/images/ewings-Icons-03.png`}
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
