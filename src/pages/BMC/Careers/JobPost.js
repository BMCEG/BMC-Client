import React, { Component } from 'react'
import './Careers.css';
import FooterTop from '../../../components/BMC/Footer/Footer-Top';
import { Button } from 'react-bootstrap';
import { Typography, TextField } from '@material-ui/core';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';
import MediaQuery from 'react-responsive';

export default class JobPost extends Component {
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
            <div className='job__root'>
                <div className='strategic-planning__banner'>
                    <img className='strategic-planning__banner-img' src={`${endpoint}/SP-H.png`} alt='Marketing Mgmt' />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Typography className='strategic-planning__heading bukra-regular ' style={{ textAlign: 'center' }}>
                    {this.state.listing.level}
                </Typography>
                <div className='strategic-planning__title'>
                    <Typography className='strategic-planning__heading strategic-planning__title-font '>
                        {this.state.listing.title}
                    </Typography>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <MediaQuery minWidth={600}>
                    <div className='job__info'>
                        <Typography className='job__info__tab'>
                            Department :- {this.state.listing.department}
                        </Typography>
                        <Typography className='job__info__tab'>
                            Type :- {this.state.listing.type}
                        </Typography>
                        <Typography className='job__info__tab'>
                            Salary Range :- {this.state.listing.minSalary} - {this.state.listing.maxSalary}
                        </Typography>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={600}>
                    <div className='job__info-mob'>
                        <Typography className='job__info__tab'>
                            Department :-
                            <br></br>
                            {this.state.listing.department}
                        </Typography>
                        <br></br>
                        <Typography className='job__info__tab'>
                            Type :-
                            <br></br>
                            {this.state.listing.type}
                        </Typography>
                        <br></br>
                        <Typography className='job__info__tab'>
                            Salary Range :-
                            <br></br>
                            {this.state.listing.minSalary} - {this.state.listing.maxSalary}
                        </Typography>
                    </div>
                </MediaQuery>
                <br></br>
                <br></br>
                <br></br>
                <div className='strategic-planning__img--base'>
                    <div className='strategic-planning__body__img__border-left'></div>
                    <div className='strategic-planning__body_canvas'>
                        <Typography className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                            Job Description
                        </Typography>
                        <Typography className='strategic-planning__body--text strategic-planning__body--text--card'>
                            {this.state.listing.description}
                        </Typography>

                    </div>
                    <div className='strategic-planning__body__img__border-right'></div>
                </div>
                <div className='job__divider' />
                <div className='finance-accounting__subtitle'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                                Job Responsibilities
                            </Typography>
                            <Typography className='strategic-planning__body--text strategic-planning__body--text--card'>
                                {this.state.listingResponsibilities.map((res) => (
                                    <>
                                        - {res}
                                        <br></br>
                                    </>
                                ))}
                            </Typography>
                        </div>
                    </div>
                </div>
                {/* <br></br> */}
                <div className='job__divider' />
                {/* <br></br> */}
                <div className='finance-accounting__subtitle'>
                    <div className='finance-accounting__body--left'>
                        <div className='finance-accounting_subtitle-border'></div>
                    </div>
                    <div className='finance-accounting__body--right'>
                        <div>
                            <Typography className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                                Job Qualifications
                            </Typography>
                            <Typography className='strategic-planning__body--text strategic-planning__body--text--card'>
                                {this.state.listingQualifications.map((qual) => (
                                    <>
                                        - {qual}
                                        <br></br>
                                    </>
                                ))}
                            </Typography>
                        </div>
                    </div>
                </div>
                <div className='job__divider' />
                {/* <div className='job__divider' /> */}
                <div className='careers__join__form'>
                    <TextField name="applicationName" label="Name"  value={this.state.applicationName} variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <TextField name="applicationEmail" label="E-Mail" value={this.state.applicationEmail}  variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <TextField name="applicationMobile" label="Mobile" value={this.state.applicationMobile} variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <TextField name="applicationAddress" label="Address" value={this.state.applicationAddress}  variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <TextField type='date' name='applicatinoBirthday' value={this.state.applicatinoBirthday}  variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                </div>
                <div className='careers__join__form__speciality'>

                    <form encType="multipart/form-data">
                        <label htmlFor="contained-button-file" className='courses__join__attach__btn'>
                            {/* <Button className='courses__join__attach__btn'> */}
                            Attach Resume
                            {/* </Button> */}
                        </label>

                        <input
                            accept="*"
                            id="contained-button-file"
                            type="file"
                            style={{ display: 'none' }}
                            filename="applicationResume"
                            name="applicationResume"
                            onChange={this.handleFileSelect}
                        />
                    </form>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div className='courses__join__submit__width'>
                    <Button className='courses__join__submit--btn' onClick={this.handleSubmitApplication}>
                        Send
                    </Button>
                </div>
                <br></br>
                <br></br>
                <FooterTop />
            </div>
        )
    }
}
