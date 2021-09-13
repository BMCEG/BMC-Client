import React, { Component } from 'react'
import './partners.css';
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';

export default class NewPartner extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleCreatePartner = this.handleCreatePartner.bind(this);

        this.state = {
            partnerName: '',
            partnerDescription: '',
            partnerUrl: '',
            partnerImg: null
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFileSelect = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };

    handleCreatePartner = async () => {
        let image = null;

        const formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("image", this.state.partnerImg);

        await axios
            .post(`${endpoint}/partners/addImage`, formData, {
                headers: { "content-type": "multipart/form-data" },
            })
            .then((res) => {
                image = res.data.filename
            })
            .catch((error) => {
                console.log(error);
            });

        const newPosting = {
            name: this.state.partnerName,
            description: this.state.partnerDescription,
            url: this.state.partnerUrl,
            logo: image
        }
        await axios.post(`${endpoint}/partners/create`, newPosting)
            .then((res) => {
                alert('Job Posting Created Successfully');
                this.setState({
                    partnerName: '',
                    partnerDescription: '',
                    partnerUrl: '',
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
                            <TextField variant='outlined' name='partnerName' label='Partner Name' value={this.state.partnerName} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='partnerDescription' label='Partner Description' value={this.state.partnerDescription} onChange={this.handleInputChange} fullWidth />
                            <br></br>
                            <br></br>
                            <TextField variant='outlined' name='partnerUrl' label='Partner URL' value={this.state.partnerUrl} onChange={this.handleInputChange} fullWidth />
                        </div>
                        <div className='trainer-create-form-right'>
                            <h5>Partner Logo</h5>
                            <form encType="multipart/form-data">
                                <input
                                    accept="image/*"
                                    id="contained-button-file"
                                    type="file"
                                    filename="partnerImg"
                                    name="partnerImg"
                                    onChange={this.handleFileSelect}
                                    />
                            </form>
                            <br></br>
                            <br></br>
                            <hr></hr>
                            <br></br>
                            <Button variant='secondary' onClick={this.handleCreatePartner}>Create Partner</Button>
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>

            </div>
        )
    }
}
