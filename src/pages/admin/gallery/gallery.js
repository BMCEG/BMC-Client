import React, { Component } from 'react'
import './gallery.css'
import NavbarAdmin from '../../../components/navbar/navbarAdmin.js';
import Albums from '../../../components/admin/gallery/albums.js';
import AlbumCreate from '../../../components/admin/gallery/newAlbum.js'
import Pictures from '../../../components/admin/gallery/pictures.js';
import PictureUpload from '../../../components/admin/gallery/newPicture.js'
import { faPlusCircle, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'
import AdminBtn from '../../../components/admin/admin-btn';
import endpoint from '../../../helpers/api_service';

export default class GalleryPanel extends Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);

        this.state = {
            context: 'Albums'
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

                <div className='admin-courses-root' style={{ backgroundImage: `url(${endpoint}/bg-experts.png)`, backgroundSize: 'cover' }}>
                    <div className='admin-courses-controls'>
                        <div className='admin-courses-controls-btns'>
                            <AdminBtn label={'Upload Media'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('PictureUpload')} />
                            {/* <br></br> */}
                            {/* <AdminBtn label={'Upload Video'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('PictureUpload')} /> */}
                            <hr></hr>
                            <AdminBtn label={'View Media'} icon={faUserGraduate} onClick={() => this.handleBtnClick('Pictures')} />
                            <hr></hr>
                            <AdminBtn label={'View Albums'} icon={faChalkboardTeacher} onClick={() => this.handleBtnClick('Albums')} />
                            <br></br>
                            <AdminBtn label={'Create New Album'} icon={faPlusCircle} onClick={() => this.handleBtnClick('AlbumCreate')} />
                            <br></br>
                        </div>
                    </div>
                    <div className='admin-courses-body'>
                        {this.state.context === 'Albums' ?
                            <Albums /> : this.state.context === 'Pictures' ?
                                <Pictures /> : this.state.context === 'AlbumCreate' ?
                                    <AlbumCreate /> : <PictureUpload />
                        }
                    </div>
                </div>
            </>
        )
    }
}
