import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './Stops.css'
const Stops = ({stops}) => (
    <div className="main-panel menu-panel">
        <h1>Stops</h1>
        <select className="stops">
                {
                    stops.sort().map(
                        stop => (
                            <option key={stop.id}>
                                {
                                    stop.name
                                }
                            </option>
                        )
                    )
                }
        </select>
        <LinkContainer exact to="/">
            <Button className="btn-exit">
                <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
        </LinkContainer>
    </div>
);

export default connect(
    state => ({
        stops: state.stops
    })
)(Stops)