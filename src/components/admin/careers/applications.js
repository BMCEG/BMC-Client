import axios from 'axios';
import React, { Component } from 'react';
import endpoint from '../../../helpers/api_service';
import './careers.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';

export default class Applications extends Component {
  constructor(props) {
    super(props);

    this.state = {
      applications: [],
    };
  }

  async componentDidMount() {
    await axios
      .get(`${endpoint}/jobsApplications/`)
      .then((res) => {
        this.setState({
          applications: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="admin-applications-root">
        <div className="admin-blogs-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>E-Mail</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Age</th>
                <th>Job Title</th>
                <th>Resume</th>
                <th>Date Applied</th>
              </tr>
            </thead>
            <tbody>
              {this.state.applications.map((application, index) => (
                <tr className="admin-table-row" key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <h5>{application.name}</h5>
                  </td>
                  <td>
                    <h5>{application.email}</h5>
                  </td>
                  <td>
                    <h5>{application.mobile}</h5>
                  </td>
                  <td>
                    <h5>{application.address}</h5>
                  </td>
                  <td>
                    <h5>{application.age}</h5>
                  </td>
                  <td>
                    <h5>{application.job.title}</h5>
                  </td>
                  <td>
                    <h5>
                      <Button
                        variant="danger"
                        href={`${endpoint}/${application.resume}`}
                        target="_blank"
                      >
                        Download Resume
                      </Button>{' '}
                    </h5>
                  </td>
                  <td style={{ width: '12vw' }}>
                    <h5>
                      <Moment format="dddd, DD/MM/YYYY">
                        {application.dateCreated}
                      </Moment>
                    </h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>{' '}
      </div>
    );
  }
}
