import React, { Component } from 'react'
import './navbarAdmin.css'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default class NavbarBMC extends Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);

        this.state = {
            isLoggedIn: this.props.isLoggedIn
        }
    }

    handleLogout = async () => {
        localStorage.clear();
        window.location.reload();
    }
    render() {
        return (
            <Navbar className="nav-admin-root" fixed="top">
                {this.props.isLoggedIn ?
                    <>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin' >
                                <h5 style={{ color: 'white' }}>Home</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/create' >
                                <h5 style={{ color: 'white' }}>New Admin</h5>
                            </Button>
                        </div>

                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/courses' >
                                <h5 style={{ color: 'white' }}>Courses</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/careers' >
                                <h5 style={{ color: 'white' }}>Careers</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/blogs' >
                                <h5 style={{ color: 'white' }}>Blogs</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/gallery' >
                                <h5 style={{ color: 'white' }}>Gallery</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/partners' >

                                <h5 style={{ color: 'white' }}>Partners</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/contacts' >

                                <h5 style={{ color: 'white' }}>Contacts</h5>
                            </Button>
                        </div>
                        {/* <div className="admin-nav-title">
                            <Button variant="link" href='/admin/newsletter' >

                                <h5 style={{ color: 'white' }}>Newsletter</h5>
                            </Button>
                        </div> */}
                        <div className="admin-nav-title">
                            <Button variant="link" href='/admin/requests' >

                                <h5 style={{ color: 'white' }}>Consultancy Requests</h5>
                            </Button>
                        </div>
                        <div className="admin-nav-title logout">
                            <Button variant='link' onClick={this.handleLogout} >
                                <h5 style={{ color: 'white' }}>Log Out</h5>
                            </Button>
                        </div>
                    </>
                    :
                    <div className="admin-nav-title-center">
                        <h5 style={{ color: 'white' }}>BMC</h5>
                    </div>
                }
            </Navbar>
        )
    }
}
