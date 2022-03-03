import axios from 'axios';
import React, { Component } from 'react';
import endpoint from '../../../helpers/api_service';
import './requests.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
    };
  }

  async componentDidMount() {
    await axios
      .get(`${endpoint}/requests/`)
      .then((res) => {
        this.setState({
          requests: res.data,
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
                <th>Date Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.requests.map((request, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <h5>{request.name}</h5>
                  </td>
                  <td>
                    <h5>{request.email}</h5>
                  </td>
                  <td>
                    <h5>{request.mobile}</h5>
                  </td>
                  <td style={{ width: '12vw' }}>
                    <h5>
                      <Moment format="dddd, DD/MM/YYYY">
                        {request.dateCreated}
                      </Moment>
                    </h5>
                  </td>
                  <td style={{ width: '7vw' }}>
                    <div className="admin-contacts-row-btn">
                      <Button
                        variant="danger"
                        href={`/admin/contacts/${request._id}`}
                      >
                        Go to request
                      </Button>
                    </div>
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
