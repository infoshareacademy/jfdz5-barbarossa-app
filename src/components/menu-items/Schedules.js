import React from 'react'

import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './Schedules.css'


const Schedules = () => (
    <div className="main-panel schedules menu-panel">
        <h1>Schedules</h1>
        <LinkContainer exact to="/">
            <Button className="btn-exit">
                <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
        </LinkContainer>
    </div>
);

export default Schedules