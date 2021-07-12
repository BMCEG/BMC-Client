import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';
import './login.css';
import axios from 'axios';
import endpoint from '../../helpers/api_service';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmitLogin = this.onSubmitLogin.bind(this);

        this.state = {
            loginUsername: '',
            loginPassword: ''
        }
    }


    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async onSubmitLogin() {
        let loginDetails = {
            username: this.state.loginUsername,
            password: this.state.loginPassword
        }

        await axios.post(`${endpoint}/courses/login`, loginDetails)
            .then((res) => {
                localStorage.setItem("jwt", res.data.token);
                localStorage.setItem("courseName", res.data.courseName);
                localStorage.setItem("username", res.data.username);
                this.props.checkApplicant(true);
            })
            .catch((err) => {
                alert("You are not signed up to this course")
                console.log(err);
                this.props.checkApplicant(false);
            })
    }

    render() {
        return (
            <div className="login-root">
                <form>
                    <TextField
                        variant="outlined"
                        label="Username"
                        name="loginUsername"
                        value={this.state.loginUsername}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>

                    <TextField
                        variant="outlined"
                        type="password"
                        label="Password"
                        name="loginPassword"
                        value={this.state.loginPassword}
                        onChange={this.handleInputChange}
                    />
                    <br></br>
                    <br></br>

                    <Button
                        onClick={this.onSubmitLogin}
                        variant="contained"
                        fullWidth={true}
                        color="primary"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        )
    }
}
