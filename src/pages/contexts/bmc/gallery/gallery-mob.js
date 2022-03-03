import React, { Component } from 'react';
import './gallery.css';
import axios from 'axios';
import endpoint from '../../../../helpers/api_service.js';
import ReactPlayer from 'react-player';
import { Button } from 'react-bootstrap';
export default class gallery extends Component {
  constructor(props) {
    super(props);

    this.handlePickAlbum = this.handlePickAlbum.bind(this);
    this.handleUnpickAlbum = this.handleUnpickAlbum.bind(this);

    this.state = {
      albums: [],
      picsToShow: [],
      albumsPicked: [],
      albumsNotPicked: [],
      picsToShowY: 0,
    };
  }

  handlePickAlbum = (e) => {
    const id = e.target.value;
    let newAlbumsPicked = this.state.albumsPicked;

    let newAlbumsUnpicked = this.state.albumsNotPicked.filter((album) => {
      if (album._id !== id) {
        return album;
      }
      newAlbumsPicked.unshift(album);
      return false;
    });

    this.setState({
      albumsPicked: newAlbumsPicked,
      albumsNotPicked: newAlbumsUnpicked,
    });
  };
  handleUnpickAlbum = (e) => {
    const id = e.target.value;
    let newAlbumsUnpicked = this.state.albumsNotPicked;
    let newAlbumsPicked = this.state.albumsPicked.filter((album) => {
      if (album._id !== id) {
        return album;
      }
      newAlbumsUnpicked.push(album);
      return false;
    });

    this.setState({
      albumsPicked: newAlbumsPicked,
      albumsNotPicked: newAlbumsUnpicked,
    });
  };

  componentDidMount = async () => {
    await axios.get(`${endpoint}/albums/`).then((res) => {
      let pics = [];

      for (let i = 0; i < res.data.length; i++) {
        if (pics === []) {
          pics = res.data[i].pictures;
        } else {
          pics = pics.concat(res.data[i].pictures);
        }
      }

      this.setState({
        albums: res.data,
        albumsPicked: res.data,
      });
    });

    await axios.get(`${endpoint}/pictures/`).then((res) => {
      let y = res.data.length / 3;
      this.setState({
        picsToShow: res.data,
        picsToShowY: y,
      });
    });
  };

  render() {
    return (
      <div className="gallery-root">
        <div className="gallery-body">
          <div className="gallery-body-pictures">
            {this.state.albumsPicked.map((album) =>
              album.pictures.map((picture) => (
                <Button
                  variant="link"
                  className="gallery-picture-base-mob"
                  onClick={() => {
                    window.location.href = picture.url;
                  }}
                >
                  {picture.type === 'video' ? (
                    <ReactPlayer
                      className="gallery-picture"
                      url={`${endpoint}/${picture.src}`}
                      width="100%"
                      height="100%"
                      controls={false}
                      muted="true"
                      volume="0"
                      playing="true"
                    />
                  ) : (
                    <img
                      className="gallery-picture-mob"
                      alt="placeholder"
                      src={`${endpoint}/images/${picture.src}`}
                    />
                  )}
                </Button>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}
