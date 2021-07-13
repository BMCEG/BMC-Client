import React, { Component } from 'react'
import './login.css';
import axios from 'axios';
import endpoint from '../../helpers/api_service.js';
import { TextField, Zoom } from '@material-ui/core';
import { Button } from 'react-bootstrap';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            email: '',
            password: '',
            isError: false
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleLogin = async () => {
        const loginDetails = {
            email: this.state.email,
            password: this.state.password
        };

        await axios.post(`${endpoint}/admins/login`, loginDetails)
            .then((res) => {
                this.props.handleLogin(res.data);
            })
            .catch((err) => {
                this.setState({
                    isError: true
                })
                console.log(err);
            })
    }

    render() {
        return (
            <>
                <div className='admin-login-root'>
                    <h2 style={{ padding: '2%' }}>Admin Login</h2>
                    <TextField variant='outlined' label='E-Mail' name='email' value={this.state.email} onChange={this.handleInputChange} fullWidth className='admin-login-input' />
                    <br></br>
                    <TextField variant='outlined' label='Password' name='password' value={this.state.password} onChange={this.handleInputChange} type='password' fullWidth className='admin-login-input' />
                    <br></br>
                    <Button variant='danger' onClick={this.handleLogin} className='admin-login-btn'> Sign In</Button>
                </div>
                <Zoom in={this.state.isError}>
                    <div className='admin-login-error'>
                        <h2 style={{backgroundColor: 'lightsalmon', padding: '1%', borderRadius: '50px' }}>An Error occured. Please try again or contact an adnimstrator</h2>
                    </div>
                </Zoom>
            </>
        )
    }
}
