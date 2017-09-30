import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button } from 'react-bootstrap'

import './Schedules.css'


const Schedules = () => (
    <div className="main-panel schedules menu-panel">
        <h1>Schedules</h1>
        <LinkContainer exact to="/">
            <Button>
                X
            </Button>
        </LinkContainer>
    </div>
);

export default Schedules