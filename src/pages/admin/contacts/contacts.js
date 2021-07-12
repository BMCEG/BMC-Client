import React, { Component } from 'react'
import './contacts.css'
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import Contacts from '../../../components/admin/contacts/contacts'
// import BlogsTable from '../../../components/admin/blogs/blogs.js'
// import CreatePartner from '../../../components/admin/partners/newPartner.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';

export default class ContactsPanel extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {
            context: 'Contacts'
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
                            {/* <AdminBtn label={'Create Blog'} icon={faUserGraduate} onClick={() => this.handleBtnClick('CreateBlog')} />
                            <br></br> */}
                            <AdminBtn label={'View Contacts'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('Contacts')} />
                            <br></br>

                        </div>
                    </div>
                    <div className='admin-careers-body'>
                        {this.state.context === 'Contacts' ?
                            <Contacts /> : null
                        }
                    </div>
                </div>
            </>
        )
    }
}
