import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './navbarBMC.css'

export default class navbarDropdown extends Component {
    constructor(props) {
        super(props);

        // this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            items: this.props.items,
            path: this.props.path,
        }
    }

    // handleSelect = (item) => {
    //     console.log('dropdown', item)
    //     this.props.setSelectedItem(item.title, item.nav);
    // }

    render() {
        return (
            <>
                {this.props.isEwings ?
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                            <h4 className='bukra-medium' style={{ color: '#4694D6' }}>{this.props.title}</h4>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className='dropdown-ewings'> 
                            {this.state.items.map((item) => (
                                <Dropdown.Item className='dropdown-ewings-item' href={item.path}><h5>{item.displayTitle}</h5></Dropdown.Item>
                            ))
                            }
                        </Dropdown.Menu>
                        
                    </Dropdown>

                    :
                    <Dropdown>
                        <Dropdown.Toggle variant="link" id="dropdown-basic">
                            <h4 className='bukra-medium'>{this.props.title}</h4>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {this.state.items.map((item) => (
                                <Dropdown.Item href={item.path}><h5>{item.displayTitle}</h5></Dropdown.Item>
                            ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                }

            </>

        )
    }
}
