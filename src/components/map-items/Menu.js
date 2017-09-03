import React from 'react'
import './Menu.css'
import {
    Nav,
    Navbar,
    NavItem,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Menu = () => (
            <Navbar fluid inverse className="menu">
                <Nav>
                    <LinkContainer exact to="/favs">
                        <NavItem><i className="fa fa-star" aria-hidden="true"></i>Favs</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/stops">
                        <NavItem><i className="fa fa-bus" aria-hidden="true"></i>Stops</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/lines">
                        <NavItem><i className="fa fa-link" aria-hidden="true"></i>Lines</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/schedules">
                        <NavItem><i className="fa fa-map-o" aria-hidden="true"></i>Schedules</NavItem>
                    </LinkContainer>
                    <LinkContainer exact to="/log">
                        <NavItem><i className="fa fa-user-circle-o" aria-hidden="true"></i>Log</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>
);

export default Menu