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
                    <Navbar.Toggle style={{marginRight: '+30px'}} />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                    <LinkContainer exact to="/favs">
                        <NavItem><i className="fa fa-star"/><span>Favs</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/stops">
                        <NavItem><i className="fa fa-bus"/><span>Stops</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/lines">
                        <NavItem><i className="fa fa-link"/><span>Lines</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/schedules">
                        <NavItem><i className="fa fa-map-o"/><span>Schedules</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/prices">
                        <NavItem><i className="fa fa-ticket"/><span>Prices</span></NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/log">
                        <NavItem><i className="fa fa-user-circle-o"/><span>Log</span></NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
);

export default Menu