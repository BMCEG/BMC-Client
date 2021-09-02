import React, { Component } from "react";
import "./ourStory.css";
import '../../../BMC/services/StrategicPlanning/StrategicPlanning.css'
import StoryBalls from "../../../../components/storyBalls";
import endpoint from "../../../../helpers/api_service";
import { Typography } from "@material-ui/core";
export default class ourStory extends Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOff = this.handleMouseOff.bind(this);

    this.state = {
      showFlag: false,
      showText: "",
      ball1:
        "Our passion is to add value to others, Impact is our main core value, Impact is a key part of our business. we are -and will be always- making an impact on someone’s life every single day.",
      ball2:
        "We challenge the status quo  in a rapidly changing environment and dynamic markets. All businesses face many challenges that need a practical application to adopt and remain dynamically changing as the economy and market dictate. We have a team who adapt and change according to what we face in our business process. We Lead the change to take your business to a whole next level.",
      ball3:
        "We have a family philosophy(our employees are our main assets, we make sure to provide them with sense of security, we also provide them all the factors of success that builds them to be the future leaders) (educational development, public awareness)",
      ball4:
        "(BMC will be passionately tailoring and giving you the best service to help your business achieve optimal results and maximum development. We believe that money is a result, not an objective, so the value you’ll receive will always exceed our fees and your expectations.",
    };
  }

  handleMouseOver = (name) => {
    let showText = "";
    if (name === "ball1") {
      showText = this.state.ball1;
    } else if (name === "ball2") {
      showText = this.state.ball2;
    } else if (name === "ball3") {
      showText = this.state.ball3;
    } else {
      showText = this.state.ball4;
    }

    this.setState({
      showFlag: true,
      showText,
    });
  };

  handleMouseOff = (name) => {
    this.setState({
      showFlag: false,
      showText: "",
    });
  };

  render() {
    return (
      <div className="ourStory-root">
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        OUR STORY
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
        <div className="ourStory-balls">
          <StoryBalls />
        </div>
      </div>
    );
  }
}
