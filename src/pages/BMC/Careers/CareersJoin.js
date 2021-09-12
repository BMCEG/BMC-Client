import React, { Component } from 'react'
import './Careers.css';
import axios from 'axios';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from 'react-bootstrap';
import { TextField, Checkbox } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import MediaQuery from 'react-responsive'
import endpoint from '../../../helpers/api_service';

export default class CareersJoin extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitApplication = this.handleSubmitApplication.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);


        this.state = {
            applicationName: "",
            applicationEmail: '',
            applicationMobile: '',
            applicationAddress: '',
            applicationAge: '',
            applicationMessage: '',
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
            age: this.state.applicationAge,
            message: this.state.applicationMessage,
            jobID: this.state.postingID,
            resume
        }

        await axios.post(`${endpoint}/jobsApplications/join`, newListing)
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

    render() {
        return (
            <div className='careers__join__root'>
                <br></br>
                <br></br>
                <div className='careers__join__heading'>

                    <p className='strategic-planning__heading strategic-planning__body--text--card--heading'>
                        Join Us or apply
                        <span className='strategic-planning__body--text strategic-planning__body--text--card'>
                            for one of many vacancies listings for our partners and clients
                            Nothing we do is more Important than developing people and hiring good talents.
                            <br></br>
                            <br></br>
                            Tell us more about your passion, academic background, and area of experience.
                        </span>
                    </p>
                </div>
                <br></br>
                <br></br>
                <div className='careers__join__form'>
                    <TextField name="applicationName" value={this.state.applicationName} label="Name" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <div className='contact-form-body-names'>
                        <TextField fullWidth name="applicationAge" value={this.state.applicationAge} label="Age" variant="outlined" className="careers__join__form__input" onChange={this.handleInputChange} />
                        <div style={{ width: '2%' }} />
                        <TextField fullWidth name="applicationMobile" value={this.state.applicationMobile} label="Mobile" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} />
                    </div>
                    <TextField name="applicationEmail" value={this.state.applicationEmail} label="E-Mail" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <TextField name="applicationAddress" value={this.state.applicationAddress} label="Address" variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                    <br></br>
                    <TextField name="applicationMessage" value={this.state.applicationMessage} label="What makes you special" rows={10} multiline variant="outlined" className="bmchome__contact__form__input" onChange={this.handleInputChange} fullWidth />
                </div>
                <br></br>
                <Typography className='careers__join__form__speciality'>
                    Speciality
                </Typography>
                <br></br>
                <MediaQuery minWidth={650}>

                    <div className='careers__join__form__checkboxes'>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Accounting"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Procurement"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Other"
                            />
                        </div>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="HR"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Finance"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Warehousing"
                            />
                        </div>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Marketing"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Supply Chain"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Administration"
                            />
                        </div>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Sales"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Logistics"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Project Management"
                            />
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={500} maxWidth={650}>

                    <div className='careers__join__form__checkboxes'>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Accounting"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Procurement"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Other"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="HR"
                            />
                        </div>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Marketing"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Supply Chain"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Administration"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Finance"
                            />
                        </div>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Sales"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Logistics"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Project Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Warehousing"
                            />
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minWidth={350} maxWidth={500}>

                    <div className='careers__join__form__checkboxes'>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Accounting"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Procurement"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Other"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="HR"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Sales"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Logistics"
                            />
                        </div>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Marketing"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Supply Chain"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Administration"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Finance"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Project Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Warehousing"
                            />
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={350}>

                    <div className='careers__join__form__checkboxes'>
                        <div className='careers__join__form__checkboxes--col'>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Accounting"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Procurement"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Other"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="HR"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Sales"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Logistics"
                            />
                            <br></br>

                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Marketing"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Supply Chain"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Administration"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Finance"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Project Management"
                            />
                            <br></br>
                            <FormControlLabel
                                control={<Checkbox name="checkedA" />}
                                label="Warehousing"
                            />
                        </div>
                    </div>
                </MediaQuery>
                <br></br>
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
            </div>
        )
    }
}
