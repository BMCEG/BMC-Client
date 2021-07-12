import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../helpers/api_service';
import { Button } from '@material-ui/core';

export default class Coursepage extends Component {
    constructor(props) {
        super(props);

        this.handleProjectDownload = this.handleProjectDownload.bind(this);

        this.state = {
            applicantUsername: this.props.applicantUsername,
            courseName: this.props.courseName,
            application: {},
            course: {},
            courseProjects: []
        }
    }

    async handleProjectDownload(url) {
        window.open(url, '_blank');
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/courses?courseName=${this.state.courseName}`)
            .then((res) => {
                this.setState({
                    course: res.data,
                    courseProjects: res.data.projects
                })
            })
            .catch((err) => {
                console.log(err);
            })

        await axios.get(`${endpoint}/applications?applicantUsername=${this.state.applicantUsername}&&courseName=${this.state.courseName}`)
            .then((res) => {
                this.setState({
                    application: res.data
                })
            })
            .catch((err) => {
                
                console.log(err);
            })
    }


    render() {
        return (
            <div>
                <h2>Hello {this.state.application.firstName} {this.state.application.lastName}</h2>
                <h1>{this.state.course.displayName}</h1>
                <h3>{this.state.course.description}</h3>
                <h5>Course given by {this.state.course.tutor}</h5>
                <h5>Price: EGP  {this.state.course.price}</h5>
                {/* <iframe
                    width="853"
                    height="480"
                    src="https://www.youtube.com/embed/TLV4_xaYynY?playlist=PLvCvQKDJNRNY8rTuYvAEnereF4AGQf9hs&loop=1"
                    // src={this.state.course.video}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                /> */}
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/videoseries?list=PLvCvQKDJNRNY8rTuYvAEnereF4AGQf9hs"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
                <br></br>
                {this.state.courseProjects.map((project, index) => (
                    <Button key={index} onClick={() => this.handleProjectDownload(project.url)}>
                        Download Project {index + 1}
                    </Button>
                ))}
            </div>
        )
    }
}
