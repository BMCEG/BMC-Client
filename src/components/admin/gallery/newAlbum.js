import React, { Component } from 'react'
import { TextField } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import endpoint from '../../../helpers/api_service';
import './gallery.css';
import Table from 'react-bootstrap/Table';
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

export default class NewAlbum extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRemoveMedia = this.handleRemoveMedia.bind(this);
        this.handleAlbumCreate = this.handleAlbumCreate.bind(this);

        this.state = {
            name: '',
            description: '',
            media: [],
            pictures: []
        }
    }

    handleAddMedia(picture) {
        let mediaArr = this.state.media;

        mediaArr.push(picture)

        this.setState({
            media: mediaArr
        })
        console.log('add', this.state.media)
    }

    handleRemoveMedia(picture) {
        let mediaArr = this.state.media;

        const index = mediaArr.indexOf(picture);
        if (index > -1) {
            mediaArr.splice(index, 1);
        }

        this.setState({
            media: mediaArr
        })
        console.log('remove', this.state.media)
    }

    async componentDidMount() {
        await axios.get(`${endpoint}/pictures/`).then((res) => {
            this.setState({
                pictures: res.data
            })
        }).catch((err) => {
            console.log(err)
        })
    }


    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async handleAlbumCreate() {
        let newAlbum = {
            name: this.state.name,
            description: this.state.description,
            pictures: this.state.media
        }

        await axios.post(`${endpoint}/albums/create`, newAlbum)
        .then((res) => {
            alert("Album created successfully");
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className='trainer-create-root'>
                <div className='media-create-base' style={{ backgroundImage: `url(${endpoint}/imagesbg-founder.png)`, backgroundSize: 'cover' }}>
                    <div className='media-create-form'>
                        <TextField variant='outlined' name='name' label='Album Name' value={this.state.name} onChange={this.handleInputChange} fullWidth />
                        <br></br>
                        <br></br>
                        <TextField variant='outlined' name='description' label='Album Description' multiline rows={3} value={this.state.description} onChange={this.handleInputChange} fullWidth />
                        <br></br>
                        <br></br>
                        <div className='trainer-btn-base'>
                            <Button variant='danger' onClick={this.handleAlbumCreate}>Create Album</Button>
                        </div>

                    </div>
                    <div className='admin-blogs-table'>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>URL</th>
                                    {/* <th>Pictures</th> */}
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.pictures.map((picture, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td style={{ width: '10px' }}>
                                            {picture.type === 'video' ?
                                                <ReactPlayer
                                                    className="react-player"
                                                    url={`${endpoint}/${picture.src}`}
                                                    width="100%"
                                                    // height="auto"
                                                    // loop={false}
                                                    controls={true}
                                                    muted="true"
                                                    volume="0"
                                                    // autoplay
                                                    // playsinline
                                                    playing="true"
                                                />
                                                :
                                                <img className='picture-table-cell' src={`${endpoint}/images/${picture.src}`} alt='album' />
                                            }
                                        </td>
                                        <td><h5 className="inner-text">{picture.url}</h5></td>
                                        <td style={{ width: '15%' }}><div className='admin-contacts-row-btn'>
                                            {this.state.media.includes(picture) ?
                                                <Button variant='danger' onClick={() => this.handleRemoveMedia(picture)} style={{ width: '100%' }}>

                                                    <FontAwesomeIcon icon={faMinusCircle} size='sm' />
                                                    <h6>Remove from Album</h6>
                                                </Button>
                                                :
                                                <Button variant='success' onClick={() => this.handleAddMedia(picture)} style={{ width: '100%' }}>
                                                    <FontAwesomeIcon icon={faPlusCircle} size='sm' />
                                                    <h6>Add to Album</h6>
                                                </Button>
                                            }
                                        </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div >
        )
    }
}
