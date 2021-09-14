import React, { Component } from "react";
import "./storyBalls.css";
import endpoint from '../../../helpers/api_service.js';

export default class storyBalls extends Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            ball1Y: 0,
            ball1text: "none",
            ball2Y: 10,
            ball2text: "none",
            ball3Y: 0,
            ball3text: "none",
            ball4Y: 10,
            ball4text: "none",
            ball5Y: 0,
            ball5text: "none",
            ball6Y: 10,
            ball6text: "none",
            ballHoverFlag: false,
            ballHovered: ''
        };
    }

    handleMouseOver = (ball) => {
        switch (ball) {
            case "ball1":
                this.setState({
                    ball1Y: -120,
                    ball1text: "block",
                    ballHoverFlag: true,
                    ballHovered: '1'
                });
                break;
            case "ball2":
                this.setState({
                    ball2Y: 145,
                    ball2text: "block",
                    ballHoverFlag: true,
                    ballHovered: '2'
                });
                break;
            case "ball3":
                this.setState({
                    ball3Y: -88,
                    ball3text: "block",
                    ballHoverFlag: true,
                    ballHovered: '3'
                });
                break;
            case "ball4":
                this.setState({
                    ball4Y: 120,
                    ball4text: "block",
                    ballHoverFlag: true,
                    ballHovered: '4'
                });
                break;
            case "ball5":
                this.setState({
                    ball5Y: -90,
                    ball5text: "block",
                    ballHoverFlag: true,
                    ballHovered: '5'
                });
                break;
            case "ball6":
                this.setState({
                    ball6Y: 135,
                    ball6text: "block",
                    ballHoverFlag: true,
                    ballHovered: '6'
                });
                break;
            default:
                break;
        }
    };

    handleMouseLeave = (ball) => {
        switch (ball) {
            case "ball1":
                this.setState({
                    ball1Y: 0,
                    ball1text: "none",
                    ballHoverFlag: false,
                    ballHovered: ''
                });
                break;
            case "ball2":
                this.setState({
                    ball2Y: 10,
                    ball2text: "none",
                    ballHoverFlag: false,
                    ballHovered: ''
                });
                break;
            case "ball3":
                this.setState({
                    ball3Y: 0,
                    ball3text: "none",
                    ballHoverFlag: false,
                    ballHovered: ''
                });
                break;
            case "ball4":
                this.setState({
                    ball4Y: 10,
                    ball4text: "none",
                    ballHoverFlag: false,
                    ballHovered: ''
                });
                break;
            case "ball5":
                this.setState({
                    ball5Y: 0,
                    ball5text: "none",
                    ballHoverFlag: false,
                    ballHovered: ''
                });
                break;
            case "ball6":
                this.setState({
                    ball6Y: 10,
                    ball6text: "none",
                    ballHoverFlag: false,
                    ballHovered: ''
                });
                break;
            default:
                break;
        }
    };
    render() {
        return (
            <div className="story-board">
                <div className="story-top">
                    <div className="story-node">
                        {this.state.ballHoverFlag && this.state.ballHovered !== '1' ?
                            <div
                                className="story-node-year bukra-bold fadeOut"
                                style={{
                                    transform: `translate(0px, ${this.state.ball1Y}px)`,
                                }}>
                                <div style={{
                                    textAlign: "left", paddingLeft: "1%", paddingTop: '12%',
                                    transform: `translate(45px, 0px)`
                                }}>
                                    2014
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball1text}`,

                                    }}>
                                    <div className="story-node-text">

                                        Since inception, we have advised, planned and managed
                                        investments valued over 6.5 billion EGP specializing in
                                        real-estate development and construction and trading
                                        industries

                                    </div>
                                </div>
                            </div>
                            :
                            <div
                                className="story-node-year bukra-bold fadeIn"
                                style={{
                                    transform: `translate(0px, ${this.state.ball1Y}px)`,
                                }}>
                                <div style={{
                                    textAlign: "left", paddingLeft: "1%", paddingTop: '12%',
                                    transform: `translate(45px, 0px)`

                                }}>
                                    2014
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball1text}`,
                                        transform: `translate(-2%, 5px)`

                                    }}>
                                    <div className="story-node-text">

                                        Since inception, we have advised, planned and managed
                                        investments valued over 6.5 billion EGP specializing in
                                        real-estate development and construction and trading
                                        industries

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        {this.state.ballHoverFlag && this.state.ballHovered !== '3' ?
                            <div
                                className="story-node-year bukra-bold fadeOut"
                                style={{
                                    transform: `translate(0px, ${this.state.ball3Y}px)`,
                                }}>
                                <div style={{
                                    textAlign: "left", paddingLeft: "1%", paddingTop: '12%',
                                    transform: `translate(4%, 0px)`
                                }}>
                                    2016-2017
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball3text}`,
                                        // transform: `translate(0px, ${this.state.ball1Y}px)`
                                    }}>
                                    <div className="story-node-text">

                                        Widen our scope of services to include Financial advisory,
                                        serving new sectors like import & export, supporting
                                        startups and entrepreneurs.

                                    </div>
                                </div>
                            </div>
                            :
                            <div
                                className="story-node-year bukra-bold fadeIn"
                                style={{
                                    transform: `translate(0px, ${this.state.ball3Y}px)`,
                                }}>
                                <div style={{
                                    textAlign: "left", paddingLeft: "1%", paddingTop: '12%',
                                    transform: `translate(4%, 0px)`
                                }}>
                                    2016-2017
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball3text}`,
                                        // transform: `translate(0px, ${this.state.ball1Y}px)`
                                        transform: `translate(-4%, 0px)`

                                    }}>
                                    <div className="story-node-text">

                                        Widen our scope of services to include Financial advisory,
                                        serving new sectors like import & export, supporting
                                        startups and entrepreneurs.

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        {this.state.ballHoverFlag && this.state.ballHovered !== '5' ?
                            <div
                                className="story-node-year bukra-bold fadeOut"
                                style={{
                                    transform: `translate(0px, ${this.state.ball5Y}px)`,
                                }}>
                                <div style={{
                                    textAlign: "left", paddingLeft: "1%", paddingTop: '12%',
                                    transform: `translate(20px, 0px)`
                                }}>
                                    2020
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball5text}`,
                                        // transform: `translate(0px, ${this.state.ball1Y}px)`
                                    }}>
                                    <div className="story-node-text">

                                        Dealing with COVID 19 Pandemic with all our business clients
                                        to pass this critical period with tailored crisis management
                                        solutions for each sector and industry.

                                    </div>
                                </div>
                            </div>
                            :
                            <div
                                className="story-node-year bukra-bold fadeIn"
                                style={{
                                    transform: `translate(0px, ${this.state.ball5Y}px)`,
                                }}>
                                <div style={{
                                    textAlign: "left", paddingLeft: "1%", paddingTop: '12%',
                                    transform: `translate(20px, 0px)`
                                }}>
                                    2020
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball5text}`,
                                        transform: `translate(-30px, 0px)`
                                        // transform: `translate(0px, ${this.state.ball1Y}px)`
                                    }}>
                                    <div className="story-node-text">

                                        Dealing with COVID 19 Pandemic with all our business clients
                                        to pass this critical period with tailored crisis management
                                        solutions for each sector and industry.

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                </div>
                <div className="story-balls">
                    <div className="story-node">
                        <img
                            src={`${endpoint}/images/our-story-2014.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball1")}
                            onMouseLeave={() => this.handleMouseLeave("ball1")}
                        />
                    </div>
                    <div class="line"></div>

                    <div className="story-node">
                        <img
                            src={`${endpoint}/images/our-story-2015.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball2")}
                            onMouseLeave={() => this.handleMouseLeave("ball2")}
                        />
                    </div>
                    <div class="line"></div>

                    <div className="story-node">
                        <img
                            src={`${endpoint}/images/our-story-2016.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball3")}
                            onMouseLeave={() => this.handleMouseLeave("ball3")}
                        />
                    </div>

                    <div class="line"></div>
                    <div className="story-node">
                        <img
                            src={`${endpoint}/images/our-story-2018.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball4")}
                            onMouseLeave={() => this.handleMouseLeave("ball4")}
                        />
                    </div>
                    <div class="line"></div>

                    <div className="story-node">
                        <img
                            src={`${endpoint}/images/our-story-2020.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball5")}
                            onMouseLeave={() => this.handleMouseLeave("ball5")}
                        />
                    </div>

                    <div class="line"></div>
                    <div className="story-node">
                        <img
                            src={`${endpoint}/images/our-story-2021.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball6")}
                            onMouseLeave={() => this.handleMouseLeave("ball6")}
                        />
                    </div>
                </div>
                <div className="story-bottom">
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        {this.state.ballHoverFlag && this.state.ballHovered !== '2' ?
                            <div className="story-node-year bukra-bold fadeOut">
                                <div
                                    className="story-node-year-bottom"
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: "1%",
                                        transform: `translate(80px, ${this.state.ball2Y}px)`, paddingTop: '3%'
                                    }}>2015
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball2text}`,
                                    }}>
                                    <div className="story-node-text-ball2">

                                        More industries included in the manufacturing and
                                        agricultural sector ordering feasibility studies and setup for
                                        factories in cosmeceuticals, detergents, food, and packing

                                    </div>
                                </div>
                            </div>
                            : <div className="story-node-year bukra-bold fadeIn">
                                <div
                                    className="story-node-year-bottom"
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: "1%",
                                        transform: `translate(80px, ${this.state.ball2Y}px)`, paddingTop: '3%'
                                    }}>2015
                                </div>
                                <div
                                    style={{
                                        display: `${this.state.ball2text}`,
                                    }}>
                                    <div className="story-node-text-ball2">

                                        More industries included in the manufacturing and
                                        agricultural sector ordering feasibility studies and setup for
                                        factories in cosmeceuticals, detergents, food, and packing

                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        <div className="story-node-year bukra-bold">
                            {this.state.ballHoverFlag && this.state.ballHovered !== '4' ?
                                <div
                                    className="story-node-year-bottom fadeOut"
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: "1%"
                                        , paddingTop: '3%',
                                        transform: `translate(45%, ${this.state.ball4Y}px)`,
                                    }}>
                                    2018-2019
                                </div>
                                :
                                <div
                                    className="story-node-year-bottom fadeIn"
                                    style={{
                                        textAlign: "left",
                                        paddingLeft: "1%"
                                        , paddingTop: '3%',
                                        transform: `translate(45%, ${this.state.ball4Y}px)`,
                                    }}>
                                    2018-2019
                                </div>
                            }
                            <div
                                style={{
                                    display: `${this.state.ball4text}`,
                                }}>
                                <div className="story-node-text-ball4">

                                    Digital transformation, introducing a new scope of digital
                                    marketing services, hiring digital experts, and blend of
                                    thinkers, creatives, and designers.

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        <div
                            className="story-node-year bukra-bold">
                            {this.state.ballHoverFlag && this.state.ballHovered !== '6' ?
                                <div
                                    className="story-node-year-bottom fadeOut"
                                    style={{
                                        textAlign: "left", paddingLeft: "1%", transform: `translate(60px, ${this.state.ball6Y}px)`, paddingTop: '3%',
                                    }}>
                                    2021
                                </div>
                                :
                                <div
                                    className="story-node-year-bottom fadeIn"
                                    style={{
                                        textAlign: "left", paddingLeft: "1%", transform: `translate(60px, ${this.state.ball6Y}px)`, paddingTop: '3%',
                                    }}> 2021
                                </div>

                            }
                            <div
                                style={{
                                    display: `${this.state.ball6text}`,
                                    // transform: `translate(0px, ${this.state.ball6Y}px)`,
                                }}>
                                <div className="story-node-text-end">

                                    Widen our scope to include Taxation, more industries
                                    included in the Banking and telecom sectors, providing
                                    marketing advisory for Banks, financial firms, and
                                    telecommunication companies

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
