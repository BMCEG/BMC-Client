import React, { Component } from 'react'
import './careerListing.css'
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import endpoint from '../../../../helpers/api_service.js'
import axios from 'axios';
import Moment from 'react-moment';

export default class CareerListing extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitApplication = this.handleSubmitApplication.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);

        this.state = {
            listing: {},
            listingResponsibilities: [],
            listingQualifications: [],
            postingID: props.match.params.postingID,

            applicationName: "",
            applicationEmail: '',
            applicationMobile: '',
            applicationAddress: '',
            applicatinoBirthday: '',
            applicationResume: null
        }
    }

    handleFileSelect = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };


    async handleSubmitApplication() {
        let resume = null;

        const formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("resume", this.state.applicationResume);

        await axios
            .post(`${endpoint}/jobsApplications/addResume`, formData, {
                headers: { "content-type": "multipart/form-data" },
            })
            .then((res) => {
                resume = res.data.filename
            })
            .catch((error) => {
                console.log(error);
            });
        const newListing = {
            name: this.state.applicationName,
            email: this.state.applicationEmail,
            mobile: this.state.applicationMobile,
            address: this.state.applicationAddress,
            birthday: this.state.applicatinoBirthday,
            jobID: this.state.postingID,
            resume
        }

        await axios.post(`${endpoint}/jobsApplications/create`, newListing)
            .then((res) => {
                alert("Application Submitted Successfully");
            })
            .catch((err) => {
                console.log(err);
            })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/jobs/${this.state.postingID}`)
            .then((res) => {
                this.setState({
                    listing: res.data,
                    listingResponsibilities: res.data.responsibilities,
                    listingQualifications: res.data.qualifications,

                })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <div className='career-listing-root' style={{ backgroundImage: `url(${endpoint}/bg-our-story.png)`, backgroundSize: 'cover' }}>
                {/* <div className='career-listing-title'>
                    <h1>CAREERS</h1>
                </div> */}
                <div className='career-listing-details'style={{ backgroundImage: `url(${endpoint}/bg-founder.png)`, backgroundSize: 'cover' }}>
                    <h2 className='bukra-bold'>{this.state.listing.title}</h2>
                    <hr></hr>
                    <div>

                    <h6 className='bukra-regular' style={{float:'left'}}>Department: {this.state.listing.department}</h6>
                    <h6 className='bukra-regular' style={{float: 'right'}}><Moment format='dddd DD MMMM, YYYY'>{this.state.listing.dateCreated}</Moment></h6>
                    </div>
                    <br></br>
                    <br></br>
                    <h5 className='bukra-regular'>Type: {this.state.listing.type}</h5>
                    <h5 className='bukra-regular'>Salary Range: {this.state.listing.minSalary} - {this.state.listing.maxSalary} EGP</h5>
                </div><br></br>
                <div className='career-listing-page-margins-mobile'>
                    <div className='career-listing-subtitle'>
                        <h3 className='bukra-medium'>Job Description:</h3>
                    </div>
                    <div className='career-listing-subtitle-body'>
                        <h5 className='bukra-regular'>
                            {this.state.listing.description}
                        </h5>
                    </div>
                    <br></br>
                    <div className='career-listing-subtitle'>
                        <h3 className='bukra-medium'>Job Responsibilities:</h3>
                    </div>
                    <div className='career-listing-subtitle-body'>
                        {this.state.listingResponsibilities.map((respo) => (
                            <h5 className='bukra-regular'>- {respo}</h5>
                        ))}
                    </div>
                    <br></br>

                    <div className='career-listing-subtitle'>
                        <h3 className='bukra-medium'>Job Qualifications:</h3>
                    </div>
                    <div className='career-listing-subtitle-body'>
                        {this.state.listingQualifications.map((qualification) => (
                            <h5 className='bukra-regular'>- {qualification}</h5>
                        ))}
                    </div>

                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className='career-listing-application-title'>
                        <h3 className='bukra-bold'>Job Application:</h3>
                    </div>
                    <div className='career-listing-application-form'>
                        <div className='career-listing-application-row'>
                            <div className='career-listing-application-label'>
                                <h4 className='bukra-regular'>Full Name:</h4>
                            </div>
                            <TextField onChange={this.handleInputChange} fullWidth={true} name='applicationName' value={this.state.applicationName} id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='career-listing-application-row'>
                            <div className='career-listing-application-label'>
                            <h4 className='bukra-regular'>E-Mail:</h4>
                            </div>
                            <TextField onChange={this.handleInputChange} fullWidth={true} name='applicationEmail' value={this.state.applicationEmail} id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='career-listing-application-row'>
                            <div className='career-listing-application-label'>
                            <h4 className='bukra-regular'>Phone Number:</h4>
                            </div>
                            <TextField onChange={this.handleInputChange} fullWidth={true} name='applicationMobile' value={this.state.applicationMobile} id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='career-listing-application-row'>
                            <div className='career-listing-application-label'>
                                <h4 className='bukra-regular'>Address:</h4>
                            </div>
                            <TextField onChange={this.handleInputChange} fullWidth={true} name='applicationAddress' value={this.state.applicationAddress} id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='career-listing-application-row'>
                            <div className='career-listing-application-label'>
                                <h4 className='bukra-regular'>Birthdate:</h4>
                            </div>
                            <TextField onChange={this.handleInputChange} type='date' name='applicatinoBirthday' value={this.state.applicatinoBirthday} fullWidth={true} id="outlined-basic" variant="outlined" />
                        </div>
                        <div className='career-listing-application-row'>
                            <div className='career-listing-application-label'>
                                <h4 className='bukra-regular'>Attach Resume:</h4>
                            </div>
                            <form encType="multipart/form-data">
                                <input
                                    accept="*"
                                    id="contained-button-file"
                                    type="file"
                                    filename="applicationResume"
                                    name="applicationResume"
                                    onChange={this.handleFileSelect}
                                />
                            </form>
                        </div>
                        <br></br>
                        <div className='career-listing-application-btn'>
                            <Button variant='danger' onClick={this.handleSubmitApplication}>Submit Application</Button>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            </div>
        )
    }
}
