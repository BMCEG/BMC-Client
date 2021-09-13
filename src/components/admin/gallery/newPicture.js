import React, { Component } from 'react'
import { TextField, Select, FormControl, MenuItem } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';
import './gallery.css';

export default class NewPicture extends Component {
    constructor(props) {
        super(props);
        this.handleUploadMeida = this.handleUploadMeida.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFileSelect = this.handleFileSelect.bind(this);

        this.state = {
            media: null,
            url: '',
            type: ''
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


    async handleUploadMeida() {
        let media = null;

        const formData = new FormData();
        formData.append('image', this.state.media)

        await axios.post(`${endpoint}/pictures/addImage`, formData, {
            headers: { "content-type": "multipart/form-data" },
        })
            .then((res) => {
                media = res.data.filename;
            })
            .catch((err) => {
                console.log(err);
            })

        let newMedia = {
            src: media,
            url: this.state.url,
            type: this.state.type
        }

        await axios.post(`${endpoint}/pictures/create`, newMedia)
            .then((res) => {
                alert("Media has been uploaded successfully");
            })
            .catch((err) => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className='trainer-create-root'>
                <div className='media-create-base' style={{ backgroundImage: `url(${endpoint}/images/bg-founder.png)`, backgroundSize: 'cover' }}>
                    <div className='media-create-form'>
                        <form encType="multipart/form-data">
                            <input
                                accept="image/*"
                                id="contained-button-file"
                                type="file"
                                filename="media"
                                name="media"
                                onChange={this.handleFileSelect}
                            />
                        </form>
                        <br></br>
                        <br></br>
                        <TextField variant='outlined' name='url' label='URL' value={this.state.url} onChange={this.handleInputChange} fullWidth />
                        <br></br>
                        <br></br>
                        <FormControl fullWidth >
                            <h6>Weekday</h6>
                            {/* <h6>Start Time</h6> */}
                            {/* <InputLabel id="demo-simple-select-required-label" style={{ marginLeft: 10 }}>Weekday</InputLabel> */}

                            <Select
                                variant="outlined"
                                value={this.state.type}
                                name="type"
                                // label="applicationCourse"
                                onChange={this.handleInputChange}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="video">
                                    Video
                                </MenuItem>
                                <MenuItem value="photo">
                                    Photo
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <div className='trainer-btn-base'>
                            <Button variant='danger' onClick={this.handleUploadMeida}>Add Media</Button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
