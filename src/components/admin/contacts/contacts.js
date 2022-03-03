import axios from 'axios';
import React, { Component } from 'react';
import endpoint from '../../../helpers/api_service';
import './contacts.css';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';

export default class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
    };
  }

  async componentDidMount() {
    await axios
      .get(`${endpoint}/contacts/`)
      .then((res) => {
        this.setState({
          contacts: res.data,
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
                <th>Message</th>
                <th>E-Mail</th>
                <th>Mobile</th>
                <th>Date Created</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ width: '25vw' }}>
                    <h5>
                      {contact.firstName} {contact.lastName}
                    </h5>
                  </td>
                  <td style={{ width: '50vw' }}>
                    <h5 className="inner-text">{contact.message}</h5>
                  </td>
                  <td>
                    <h5>{contact.email}</h5>
                  </td>
                  <td>
                    <h5>{contact.mobile}</h5>
                  </td>
                  <td style={{ width: '12vw' }}>
                    <h5>
                      <Moment format="dddd, DD/MM/YYYY">
                        {contact.dateCreated}
                      </Moment>
                    </h5>
                  </td>
                  <td style={{ width: '7vw' }}>
                    <div className="admin-contacts-row-btn">
                      <Button
                        variant="danger"
                        href={`/admin/contacts/${contact._id}`}
                      >
                        Go to contact
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
