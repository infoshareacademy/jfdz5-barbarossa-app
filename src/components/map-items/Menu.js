import React from 'react'
import './Menu.css'
import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap'


const Menu = () => (
            <div className="col-sm-6">
                <div>
                    <Navbar inverse>
                        <Nav>
                            <NavItem eventKey={1} href="#">Favs</NavItem>
                            <NavItem eventKey={2} href="#">Stops</NavItem>
                            <NavItem eventKey={3} href="#">Lines</NavItem>
                            <NavItem eventKey={4} href="#">Schedules</NavItem>
                            <NavItem eventKey={5} href="#">Log</NavItem>
                        </Nav>
                    </Navbar>
                </div>
            </div>
);

export default Menu