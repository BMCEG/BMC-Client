import React, { Component } from 'react'
import './requests.css'
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import Requests from '../../../components/admin/requests/requests.js'
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';

export default class RequestsPanel extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {
            context: 'Requests'
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

                <div className='admin-careers-root' style={{ backgroundImage: `url(${endpoint}/images/bg-experts.png)`, backgroundSize: 'cover' }}>
                    <div className='admin-careers-controls' >
                        <div className='admin-careers-controls-btns'>
                            {/* <AdminBtn label={'Create Blog'} icon={faUserGraduate} onClick={() => this.handleBtnClick('CreateBlog')} />
                            <br></br> */}
                            <AdminBtn label={'View Requests'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('Requests')} />
                            <br></br>

                        </div>
                    </div>
                    <div className='admin-careers-body'>
                        {this.state.context === 'Requests' ?
                            <Requests /> : null
                        }
                    </div>
                </div>
            </>
        )
    }
}
