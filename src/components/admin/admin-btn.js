import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import { Modal, Paper } from '@material-ui/core';
import './admin-btn.css';

export default class AdminBtn extends Component {
    render() {
        return (
            <div className='admin-btn-base'>
                <Button variant='link' onClick={this.props.onClick} className='admin-btn'>
                    <Paper className='admin-btn-paper'>
                        <div className="admin-btn-img-base">

                            <FontAwesomeIcon size={'3x'} icon={this.props.icon} className='admin-btn-img' />
                        </div>
                        <div className="admin-btn-label">
                            <h2>{this.props.label}</h2>
                        </div>
                    </Paper>
                </Button>
            </div>

        )
    }
}
