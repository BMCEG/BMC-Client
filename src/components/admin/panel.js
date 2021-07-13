import React, { Component } from 'react'
import axios from 'axios';
import endpoint from '../../helpers/api_service';
import { getAdminID } from '../../helpers/adminID';
import './panel.css'
import { Grid, Paper } from '@material-ui/core';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faUserPlus, faPenAlt, faImages, faEnvelope, faGraduationCap, faHandshake, faRss, faUserTie, faChartLine } from '@fortawesome/free-solid-svg-icons'
// import { faPlusSquare, faUser,  } from '@fortawesome/free-regular-svg-icons'

export default class Panel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: {},
            date: ''
        }
    }

    componentDidMount = async () => {
        const adminID = getAdminID();

        // let date = moment()

        await axios.get(`${endpoint}/admins/${adminID}`)
            .then((res) => {
                this.setState({
                    admin: res.data,
                    // date
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }
    render() {
        return (
            <div className='admin-panel-root'>
                <div className='admin-panel-title'>
                    <h1>Hello {this.state.admin.firstName}</h1>
                    <hr></hr>
                    <div className='admin-panel-title-date'>
                        <h4><Moment format="dddd DD MMMM, YYYY" /></h4>
                    </div>
                </div>
                <div className='admin-panel-body'>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className="admin-panel-col">
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/create" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper '>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faUserPlus} className='admin-panel-btn-img' />
                                            </div>
                                            <div className="admin-panel-btn-label">
                                                <h2>Create New Admin</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/blogs" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faPenAlt} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Blogs</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/gallery" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faImages} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Gallery</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/contacts" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faEnvelope} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Contacts</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                {/* <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/newsletter" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faRss} className='admin-panel-btn-img' />
                                            </div>
                                            <img src="" alt="nope" className='admin-panel-btn-img' />
                                            <div className="admin-panel-btn-label">
                                                <h2>Newsletter</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>  */}
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className="admin-panel-col">
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/courses" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faGraduationCap} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Courses</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="admin/careers" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faUserTie} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Careers</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/requests" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faChartLine} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Consultancy Requests</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                                <br></br>
                                <div className="admin-panel-btn-base">
                                    <Button variant='link' href="/admin/partners" className='admin-panel-btn'>
                                        <Paper className='admin-panel-btn-paper'>
                                            <div className="admin-panel-btn-img-base">

                                                <FontAwesomeIcon icon={faHandshake} className='admin-panel-btn-img' />
                                            </div>
                                            {/* <img src="" alt="nope" className='admin-panel-btn-img' /> */}                                            <div className="admin-panel-btn-label">
                                                <h2>Partners</h2>
                                            </div>
                                        </Paper>
                                    </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
