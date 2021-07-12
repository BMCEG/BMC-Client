import React, { Component } from 'react'
import './users.css'
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import Admins from '../../../components/admin/users/users.js'
import CreateAdmin from '../../../components/admin/users/newAdmin.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {
            context: 'CreateAdmin'
        }
    }

    handleBtnClick = (context) => {
        this.setState({
            context
        })
    }
    render() {
        return (
            <>
                <NavbarAdmin isLoggedIn={true} />

                <div className='admin-careers-root' style={{ backgroundImage: `url(${endpoint}/bg-experts.png)`, backgroundSize: 'cover' }}>
                    <div className='admin-careers-controls' style={{ backgroundImage: `url(${endpoint}/bg-four.png)`, backgroundSize: 'cover' }}>
                        <div className='admin-careers-controls-btns'>
                            <AdminBtn label={'Create Admin'} icon={faUserGraduate} onClick={() => this.handleBtnClick('CreateAdmin')} />
                            <br></br>
                            <AdminBtn label={'View Admins'} icon={faUserGraduate} onClick={() => this.handleBtnClick('ViewAdmins')} />
                            <br></br>

                        </div>
                    </div>
                    <div className='admin-careers-body'>
                        {this.state.context === 'CreateAdmin' ?
                            <CreateAdmin /> : <Admins />
                        }
                    </div>
                </div>
            </>
        )
    }
}
