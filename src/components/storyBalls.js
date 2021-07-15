import React, { Component } from "react";
import "./storyBalls.css";
import { Zoom } from "@material-ui/core";
import endpoint from '../helpers/api_service.js';

export default class storyBalls extends Component {
    constructor(props) {
        super(props);

        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);

        this.state = {
            ball1Y: 0,
            ball1text: "none",
            ball2Y: 0,
            ball2text: "none",
            ball3Y: 0,
            ball3text: "none",
            ball4Y: 0,
            ball4text: "none",
            ball5Y: 0,
            ball5text: "none",
            ball6Y: 0,
            ball6text: "none",
        };
    }

    handleMouseOver = (ball) => {
        switch (ball) {
            case "ball1":
                this.setState({
                    ball1Y: -60,
                    ball1text: "block",
                });
                break;
            case "ball2":
                this.setState({
                    ball2Y: 75,
                    ball2text: "block",
                });
                break;
            case "ball3":
                this.setState({
                    ball3Y: -50,
                    ball3text: "block",
                });
                break;
            case "ball4":
                this.setState({
                    ball4Y: 85,
                    ball4text: "block",
                });
                break;
            case "ball5":
                this.setState({
                    ball5Y: -50,
                    ball5text: "block",
                });
                break;
            case "ball6":
                this.setState({
                    ball6Y: 70,
                    ball6text: "block",
                });
                break;
        }
    };

    handleMouseLeave = (ball) => {
        switch (ball) {
            case "ball1":
                this.setState({
                    ball1Y: 0,
                    ball1text: "none",
                });
                break;
            case "ball2":
                this.setState({
                    ball2Y: 0,
                    ball2text: "none",
                });
                break;
            case "ball3":
                this.setState({
                    ball3Y: 0,
                    ball3text: "none",
                });
                break;
            case "ball4":
                this.setState({
                    ball4Y: 0,
                    ball4text: "none",
                });
                break;
            case "ball5":
                this.setState({
                    ball5Y: 0,
                    ball5text: "none",
                });
                break;
            case "ball6":
                this.setState({
                    ball6Y: 0,
                    ball6text: "none",
                });
                break;
        }
    };
    render() {
        return (
            <div className="story-board">
                <div className="story-top">
                    <div className="story-node">
                        <div
                            className="story-node-year bukra-bold"
                            style={{
                                transform: `translate(0px, ${this.state.ball1Y}px)`,
                            }}>
                            <h2 style={{ textAlign: "left", paddingLeft: "1%", paddingTop: '12%' }}>2014</h2>
                            <div
                                style={{
                                    display: `${this.state.ball1text}`,
                                    // transform: `translate(0px, ${this.state.ball1Y}px)`
                                }}>
                                <div className="story-node-text">
                                    <h3>
                                        Since inception, we have advised, planned and managed
                                        investments valued over 6.5 billion EGP specializing in
                                        real-estate development and construction and trading
                                        industries
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        <div
                            className="story-node-year bukra-bold"
                            style={{
                                transform: `translate(0px, ${this.state.ball3Y}px)`,
                            }}>
                            <h2 style={{ textAlign: "left", paddingLeft: "1%", paddingTop: '12%' }}>
                                2016-2017
                            </h2>
                            <div
                                style={{
                                    display: `${this.state.ball3text}`,
                                    // transform: `translate(0px, ${this.state.ball1Y}px)`
                                }}>
                                <div className="story-node-text">
                                    <h3>
                                        Widen our scope of services to include Financial advisory,
                                        serving new sectors like import & export, supporting
                                        startups and entrepreneurs.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        <div
                            className="story-node-year bukra-bold"
                            style={{
                                transform: `translate(0px, ${this.state.ball5Y}px)`,
                            }}>
                            <h2 style={{ textAlign: "left", paddingLeft: "1%", paddingTop: '12%' }}>2020</h2>
                            <div
                                style={{
                                    display: `${this.state.ball5text}`,
                                    // transform: `translate(0px, ${this.state.ball1Y}px)`
                                }}>
                                <div className="story-node-text">
                                    <h3>
                                        Dealing with COVID 19 Pandemic with all our business clients
                                        to pass this critical period with tailored crisis management
                                        solutions for each sector and industry.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                </div>
                <div className="story-balls">
                    <div className="story-node">
                        <img
                            src={`${endpoint}/our-story-2014.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball1")}
                            onMouseLeave={() => this.handleMouseLeave("ball1")}
                        />
                    </div>
                    <div class="line"></div>

                    <div className="story-node">
                        <img
                            src={`${endpoint}/our-story-2015.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball2")}
                            onMouseLeave={() => this.handleMouseLeave("ball2")}
                        />
                    </div>
                    <div class="line"></div>

                    <div className="story-node">
                        <img
                            src={`${endpoint}/our-story-2016.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball3")}
                            onMouseLeave={() => this.handleMouseLeave("ball3")}
                        />
                    </div>

                    <div class="line"></div>
                    <div className="story-node">
                        <img
                            src={`${endpoint}/our-story-2018.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball4")}
                            onMouseLeave={() => this.handleMouseLeave("ball4")}
                        />
                    </div>
                    <div class="line"></div>

                    <div className="story-node">
                        <img
                            src={`${endpoint}/our-story-2020.png`}
                            alt="ds"
                            className="story-ball"
                            onMouseOver={() => this.handleMouseOver("ball5")}
                            onMouseLeave={() => this.handleMouseLeave("ball5")}
                        />
                    </div>

                    <div class="line"></div>
                    <div className="story-node">
                        <img
                            src={`${endpoint}/our-story-2021.png`}
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
                        <div className="story-node-year bukra-bold">
                            <h2
                                className="story-node-year-bottom"
                                style={{
                                    textAlign: "left",
                                    paddingLeft: "1%",
                                    transform: `translate(0px, ${this.state.ball2Y}px)`, paddingTop: '3%'
                                }}>
                                2015
                            </h2>
                            <div
                                style={{
                                    display: `${this.state.ball2text}`,
                                }}>
                                <div className="story-node-text-ball2">
                                    <h3>
                                        More industries included in the manufacturing and
                                        agricultural sector ordering feasibility studies and setup for
                                        factories in cosmeceuticals, detergents, food, and packing
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-hidden"></div>
                    <div className="story-node"></div>
                    <div className="line-hidden"></div>
                    <div className="story-node">
                        <div className="story-node-year bukra-bold">
                            <h2
                                className="story-node-year-bottom"
                                style={{
                                    textAlign: "left",
                                    paddingLeft: "1%"
                                    , paddingTop: '3%',
                                    transform: `translate(0px, ${this.state.ball4Y}px)`,
                                }}>
                                2018-2019
                            </h2>
                            <div
                                style={{
                                    display: `${this.state.ball4text}`,
                                }}>
                                <div className="story-node-text-ball4">
                                    <h3>
                                        Digital transformation, introducing a new scope of digital
                                        marketing services, hiring digital experts, and blend of
                                        thinkers, creatives, and designers.
                                    </h3>
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
                            <h2
                                className="story-node-year-bottom"
                                style={{
                                    textAlign: "left", paddingLeft: "1%", transform: `translate(100px, ${this.state.ball6Y}px)`, paddingTop: '3%',
                                }}>2021</h2>
                            <div
                                style={{
                                    display: `${this.state.ball6text}`,
                                    // transform: `translate(0px, ${this.state.ball6Y}px)`,
                                }}>
                                <div className="story-node-text-end">
                                    <h3>
                                        Widen our scope to include Taxation, more industries
                                        included in the Banking and telecom sectors, providing
                                        marketing advisory for Banks, financial firms, and
                                        telecommunication companies
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
