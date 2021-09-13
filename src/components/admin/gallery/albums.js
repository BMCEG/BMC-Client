import axios from 'axios';
import React, { Component } from 'react'
import endpoint from '../../../helpers/api_service';
import './gallery.css'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ReactPlayer from "react-player";

export default class Albums extends Component {
    constructor(props) {
        super(props);
        this.handleDeleteAlbum = this.handleDeleteAlbum.bind(this);

        this.state = {
            albums: [],
        }
    }

    async handleDeleteAlbum(albumID) {
        await axios.post(`${endpoint}/albums/${albumID}/delete`)
            .then((res) => {
                alert("Album deleted successfully");
                this.setState({
                    albums: res.data
                })

            })
            .catch((err) => {
                console.log(err);
            })
    }


    async componentDidMount() {
        await axios.get(`${endpoint}/albums/`).then((res) => {
            this.setState({
                albums: res.data
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
                                <th>Name</th>
                                <th>Description</th>
                                <th>Pictures</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.albums.map((album, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><h5>{album.name}</h5></td>
                                    <td><h5 className="inner-text">{album.description}</h5></td>
                                    <td style={{ width: '15%' }}>{album.pictures.map((pic) => (
                                        <div>
                                            {pic.type === 'video' ?
                                                <ReactPlayer
                                                    className="react-player"
                                                    url={`${endpoint}/${pic.src}`}
                                                    width="100%"
                                                    controls={true}
                                                    muted="true"
                                                    volume="0"
                                                    playing="true"
                                                />
                                                :
                                                <img className='picture-table-cell' src={`${endpoint}/images/${pic.src}`} alt='img' />
                                            }
                                            <hr></hr>
                                        </div>
                                    ))}</td>
                                    <td style={{ width: '7%' }}><div className='admin-contacts-row-btn'>
                                        {/* <Button variant='success' href={`/admin/albums/${album._id}`} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faPencilAlt} size='sm' />
                                            <h6>Edit</h6>
                                        </Button> */}
                                        <Button variant='danger' onClick={() => this.handleDeleteAlbum(album._id)} style={{ width: '100%' }}>
                                            <FontAwesomeIcon icon={faTrash} size='sm' />
                                            <h6>Delete</h6>
                                        </Button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                </div>            </div>
        )
    }
}
