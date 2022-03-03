import React, { Component } from 'react';
import './Blogs.css';
import endpoint from '../../../helpers/api_service';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import FooterTop from '../../../components/BMC/Footer/Footer-Top.js';
import Moment from 'react-moment';

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
} from './logoBlogImages';

export default class LogoBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogID: '62208281b6d69090b74dce04',
      blog: {},
    };
  }

  async componentDidMount() {
    await axios
      .get(`${endpoint}/blogs/${this.state.blogID}`)
      .then((res) => {
        this.setState({
          blog: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="blogs__root">
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__title">
          <Typography className="strategic-planning__heading strategic-planning__title-font ">
            {this.state.blog.title}
          </Typography>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__banner">
          <img
            className="strategic-planning__banner-img"
            src={`${endpoint}/images/${this.state.blog.image}`}
            alt={this.state.blog.title}
          />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="strategic-planning__body">
          <Typography className="strategic-planning__body--text lspacing">
            What is branding? To keep my visual identity consistent and clear.
            Carrying the message of your value also the values you can have as a
            corporation.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Branding</strong> is how the public sees you. It is a great
            way to keep the audience's attention looking forward to having more
            information about you. All about how consumers feel about the
            business and your products/services. Otherwise, good branding
            promotes loyalty and long-term commitment based on a consistent
            experience.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            Many agencies explained this topic from different perspectives. It
            has details that may take hours to explain. Describe how to build a
            persistent visual that can stand out in the market. For consumers to
            recognize your colors and identity, most likely the quality you
            serve and their image buying your product, or that kind of
            appreciation the consumer feels.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            The marketing objective is generating sales from a third-person
            point of view. Build a genuine brand voice and a brand identity by
            contacting the audience. Telling the features as they are and
            building trust.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            It begins with the first impression of your potential client. Your
            logo. There are a lot of logotypes, as many as people can create new
            ones. But here are some common ones in different markets and
            industries.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Monogram logos</strong> or lettermarks consist of letters,
            usually brand initials. It is the best option if the business name
            is long, such as IBM, CNN, HP, HBO, etc.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image4} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            It is familiar to <strong>Wordmark logotype,</strong> such as
            Google, Facebook, Pinterest, FedEx, etc. It is always a good option
            if creating a brand name for long-term purposes. And you want the
            audience to memorize the name of the corporation.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Contoured words</strong> are one of the logotypes where the
            brand name is within the geometrical shape, like Samsung, BBC, Ikea,
            IMDb, etc. The reason behind geometrical shapes is their impact on
            human psychology. Different polygons convey different messages. Quad
            shapes communicate the message of stability and uniformity, while
            circular shapes depict a sense of completeness. Therefore, select
            the structure and geometrical shape carefully for its brand logo.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image5} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Abstract Mark</strong> is a shape that explains what the
            company does and represents the diversity the brand offers, such as;
            Pepsi, Adidas, Nike, Chanel, etc. This one is good if your brand
            produces multiple products, then the abstract logo is a suitable
            option, and you can use it anywhere.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image6} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Brand Mark, Pictorial Mark, and Logo Symbols</strong> are
            the icons created that represent the brand, like Twitter and Apple.
            By choosing this type of logo. We should be careful as this icon
            will present the entire organization. It should be deep and
            meaningful to evoke the right emotion in your target market.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image2} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Mascot logos</strong> are the type of logos where the logo
            includes the image of some character; it could be the portrait of
            some person or a colorful cartoon. Like KFC, Pringles, Cheetos,
            M&Ms, Energizer, etc. It is a good option if willing to create a
            global brand that offers several products. The image will convey the
            same message everywhere. It permits providing multiple products
            under the same brand.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image1} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Emblem logos</strong> are the ones that contain multiple
            things like images, artificial design, or text inside or outside the
            image. 21-century fox presentation and Starbucks are good examples
            for Emblem logos. These logos go with Government institutions,
            agencies, private schools, and organizations usually fall under this
            category. Yet some drinks and beverages often use such a logo.
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            Emblem logos require a lot of details in them. They have to be very
            careful while printing it either on paper or on clothes.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image3} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Combination Mark,</strong> merging the Lettermark logo,
            wordmark logo, pictorial image, abstract mark, and mascot logo. It
            contains text, images, unique font, and art either side by side or
            on top of one another. As Lacoste, Burger King, Doritos, etc. It
            applies to any business. You can notice the variety of the examples
            because it is convenient, simple, and flexible. It allows any
            corporation to make an iconic logo by adding images, text, unique
            font, and the logo is ready. And it doesn't need an expert.
          </Typography>{' '}
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image7} className="logo_blog_img" />
          </div>
          <Typography className="strategic-planning__body--text lspacing">
            <strong>Adaptable logo,</strong> or dynamic logo. Grants to change
            its color and name depending upon the context. For instance, the
            identity of the MIT media lab has 40,000 different types of logo
            variations of colors and shapes.
          </Typography>
          <div className="logo_blog_img_base">
            <img alt="Monogram Logos" src={image8} className="logo_blog_img" />
          </div>
        </div>

        <div className="strategic-planning__body">
          <hr></hr>
          <Typography className="strategic-planning__body--text lspacing">
            Written By: {this.state.blog.author}
          </Typography>
          <Typography className="strategic-planning__body--text lspacing">
            <Moment format="DD MMMM, YYYY">
              {this.state.blog.dateCreated}
            </Moment>
          </Typography>
        </div>

        <FooterTop />
      </div>
    );
  }
}
