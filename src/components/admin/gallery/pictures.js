import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './gallery.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from "react-player";

export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.handleDeletePicture = this.handleDeletePicture.bind(this);

        this.state = {
            pictures: [],
        }
    }

    async handleDeletePicture(partnerID) {
        await axios.post(`${endpoint}/partners/${partnerID}/delete`)
            .then((res) => {
                alert("Partner deleted successfully");
                this.setState({
                    partners: res.data
                })

            })
            .catch((err) => {
                console.log(err);
            })
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

    render() {
        return (
            <div className='admin-applications-root'>
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
                                    <td style={{ width: '20vw' }}>
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
                                            <img className='picture-table-cell' src={`${endpoint}/${picture.src}`} alt='image' />
                                        }
                                    </td>
                                    <td><h5 className="inner-text">{picture.url}</h5></td>
                                    <td style={{ width: '15%' }}><div className='admin-contacts-row-btn'>
                                        <Button variant='danger' onClick={() => this.handleDeletePicture(picture._id)} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faTrash} size='sm' />
                                            <h6>Delete</h6>
                                        </Button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}
