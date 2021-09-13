import React, { Component } from 'react'
import './courses.css';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';

export default class NewTrainer extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateTrainer = this.handleCreateTrainer.bind(this);
        this.handleAddQualifications = this.handleAddQualifications.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);

        this.state = {
            firstName: '',
            lastName: '',
            qualifications: [],
            trainerImg: null

        }
    }

    handleAddQualifications = () => {
        const qualification = {
            title: this.state.title,
            brief: this.state.brief
        }

        this.state.qualifications.push(qualification);
        this.setState({
            title: '',
            brief: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFileSelect = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    handleCreateTrainer = async () => {
        let image = null;

        const formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("image", this.state.trainerImg);

        await axios
            .post(`${endpoint}/trainers/addImage`, formData, {
                headers: { "content-type": "multipart/form-data" },
            })
            .then((res) => {
                image = res.data.filename
            })
            .catch((error) => {
                console.log(error);
            });
        const newTrainer = {
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'qualifications': this.state.qualifications,
            'photoUrl': image
        }
        await axios.post(`${endpoint}/trainers/create`, newTrainer)
            .then((res) => {
                alert('Trainer created successfully');
                this.setState({
                    firstName: '',
                    lastName: '',
                    qualifications: []
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className='trainer-create-root'>
                <div className='trainer-create-base' style={{ backgroundImage: `url(${endpoint}/images/bg-founder.png)`, backgroundSize: 'cover' }}>
                    <div className='trainer-create-form'>
                        <div className='trainer-create-form-left'>
                            <TextField variant='outlined' name='firstName' label='First Name' value={this.state.firstName} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='lastName' label='Last Name' value={this.state.lastName} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <form encType="multipart/form-data">
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    filename="trainerImg"
                                    name="trainerImg"
                                    onChange={this.handleFileSelect}
                                />
                            </form>
                            <br></br>
                            <br></br>
                            <div className='trainer-btn-base'>
                                <Button variant='danger' onClick={this.handleCreateTrainer}>Add Trainer</Button>
                            </div>

                        </div>
                        <div className='trainer-create-form-right'>
                            <TextField variant='outlined' name='title' label='Qualification Title' value={this.state.title} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='brief' label='Qualification Description' multiline rows={4} value={this.state.brief} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <Button variant='secondary' onClick={this.handleAddQualifications}>Add Qualification</Button>
                            <hr></hr>
                            <h5>Qualifications</h5>
                            {this.state.qualifications.map((qualification) => (
                                <div className='trainer-create-qualification'>
                                    <h6>
                                        Title: {qualification.title}
                                    </h6>
                                    <h6>
                                        Description: {qualification.brief}
                                    </h6>
                                </div>
                            ))}
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </div>
        )
    }
}
