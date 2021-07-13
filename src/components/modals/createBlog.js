import React, { Component } from 'react'
import axios from 'axios'
import endpoint from '../../helpers/api_service'
import './createBlog.css'
import { Button } from 'react-bootstrap';
import { TextField, Select, MenuItem, FormControl } from '@material-ui/core'
export default class createBlog extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleCreateBlog = this.handleCreateBlog.bind(this);

        this.state = {
            blogTitle: '',
            blogPost: '',
            blogAuthor: '',
            blogCategory: ' '
            // blogImage
            // blogCategory    
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleCreateBlog = async () => {
        const blogDetails = {
            blogTitle: this.state.blogTitle,
            blogPost: this.state.blogPost,
            blogAuthor: this.state.blogAuthor
        }

        await axios.post(`${endpoint}/blogs/create`, blogDetails)
            .then((res) => {
                alert("Blog has been created successfully");
                window.location.reload();
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
                    <FormControl fullWidth >
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
                    </FormControl>
                    <br></br>
                    <br></br>
                    <div className='create-blog-btn-base'>
                        <Button className='create-blog-btn' variant='danger' onClick={this.handleCreateBlog}>Create Blog</Button>
                    </div>

                </div>

            </div>
        )
    }
}