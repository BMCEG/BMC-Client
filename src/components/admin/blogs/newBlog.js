import React, { Component } from 'react'
import './blogs.css';
import { Button } from 'react-bootstrap';
import { TextField } from '@material-ui/core'
import axios from 'axios';
import endpoint from '../../../helpers/api_service';

export default class NewPosting extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateBlog = this.handleCreateBlog.bind(this);

        this.state = {
            blogTitle: '',
            blogPost: '',
            blogAuthor: '',
            blogCategory: '',
            blogImg: null
        }
    }

    handleFileSelect = (e) => {
        this.setState({ [e.target.name]: e.target.files[0] });
    };


    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCreateBlog = async () => {
        let image = null;

        const formData = new FormData();
        formData.append("id", this.state.id);
        formData.append("image", this.state.blogImg);

        await axios
            .post(`${endpoint}/blogs/addImage`, formData, {
                headers: { "content-type": "multipart/form-data" },
            })
            .then((res) => {
                image = res.data.filename
            })
            .catch((error) => {
                console.log(error);
            });

        const blogDetails = {
            blogTitle: this.state.blogTitle,
            blogPost: this.state.blogPost,
            blogAuthor: this.state.blogAuthor,
            blogImage: image 
        }

        await axios.post(`${endpoint}/blogs/create`, blogDetails)
            .then((res) => {
                alert("Blog has been created successfully");
                // window.location.rel
            })
            .catch((err) => {
                console.log(err);
            })
    }


    render() {
        return (
            <div className='create-blog-root'>
                <div className='create-blog-modal-post'>
                    <TextField fullWidth onChange={this.handleInputChange} value={this.state.blogTitle} name='blogTitle' variant='outlined' label='Blog Title' />
                    <br></br>
                    <br></br>
                    <TextField fullWidth multiline rows={20} onChange={this.handleInputChange} value={this.state.blogPost} name='blogPost' variant='outlined' label='Blog Post' />
                </div>
                <div className='create-blog-modal-info'>
                    <TextField fullWidth onChange={this.handleInputChange} value={this.state.blogAuthor} name='blogAuthor' variant='outlined' label='Blog Author' />
                    <br></br>
                    <br></br>
                    <form encType="multipart/form-data">
                        <input
                            accept="image/*"
                            id="contained-button-file"
                            type="file"
                            filename="blogImg"
                            name="blogImg"
                            onChange={this.handleFileSelect}
                        />
                    </form>
                    <br></br>
                    <hr></hr>
                    {/* <br></br> */}
                    {/* <FormControl fullWidth >
                        <Select
                            variant="outlined"
                            value={this.state.blogCategory}
                            name="blogCategory"
                            onChange={this.handleInputChange}
                        // label="Blog Category"
                        >
                            <MenuItem value="placeholder">
                                Training Course
                            </MenuItem>
                            <MenuItem value="placeholder">
                                Training Course
                            </MenuItem>
                        </Select>
                    </FormControl> */}
                    <br></br>
                    {/* <br></br> */}
                    <div className='create-blog-btn-base'>
                        <Button className='create-blog-btn' variant='danger' onClick={this.handleCreateBlog}>Create Blog</Button>
                    </div>

                </div>

            </div>

        )
    }
}
