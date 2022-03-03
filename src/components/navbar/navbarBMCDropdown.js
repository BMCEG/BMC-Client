import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbarBMC.css';

export default class navbarDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
      path: this.props.path,
    };
  }

  render() {
    return (
      <>
        {this.props.isEwings ? (
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <h4 className="bukra-medium" style={{ color: '#4694D6' }}>
                {this.props.title}
              </h4>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-ewings">
              {this.state.items.map((item) => (
                <Dropdown.Item
                  className="dropdown-ewings-item"
                  href={item.path}
                >
                  <h5>{item.displayTitle}</h5>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : this.props.size === 'h6' ? (
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <p className="bukra-medium">{this.props.title}</p>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.items.map((item) => (
                <Dropdown.Item href={item.path}>
                  <h5>{item.displayTitle}</h5>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : this.props.size === 'h5' ? (
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <h5 className="bukra-medium">{this.props.title}</h5>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.items.map((item) => (
                <Dropdown.Item href={item.path}>
                  <h5>{item.displayTitle}</h5>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Dropdown className="title">
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <p className="bukra-medium title-size">{this.props.title}</p>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.items.map((item) => (
                <Dropdown.Item href={item.path}>
                  <h5>{item.displayTitle}</h5>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        )}
      </>
    );
  }
}
