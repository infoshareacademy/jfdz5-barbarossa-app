import React from 'react'
import './Menu.css'
import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Menu = () => (
            <Navbar fluid inverse collapseOnSelect className="menu">
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <LinkContainer exact to="/favs">
                        <NavItem><i className="fa fa-star" aria-hidden="true"></i><span>Favs</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/stops">
                        <NavItem><i className="fa fa-bus" aria-hidden="true"></i><span>Stops</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/lines">
                        <NavItem><i className="fa fa-link" aria-hidden="true"></i><span>Lines</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/schedules">
                        <NavItem><i className="fa fa-map-o" aria-hidden="true"></i><span>Schedules</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/prices">
                        <NavItem><i className="fa fa-ticket" aria-hidden="true"></i><span>Prices</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/log">
                        <NavItem><i className="fa fa-user-circle-o" aria-hidden="true"></i><span>Log</span></NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
);

export default Menu