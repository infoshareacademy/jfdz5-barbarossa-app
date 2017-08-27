import React from 'react'
import './Menu.css'
import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'


const Menu = () => (
    <div className="col-sm-6">
        <Navbar inverse>
            <Nav>
                <LinkContainer exact to="/favs">
                    <NavItem>Favs</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/stops">
                    <NavItem>Stops</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/lines">
                    <NavItem>Lines</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/schedules">
                    <NavItem>Schedules</NavItem>
                </LinkContainer>
                <LinkContainer exact to="/log">
                    <NavItem>Log</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    </div>
);

export default Menu