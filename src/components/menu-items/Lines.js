import React from 'react'
import {connect} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import './Lines.css'

const Lines = ({lines}) => (
    <div className="main-panel menu-panel">
        <h1 className="lines">Lines</h1>
        <ul className="lines">
            {
                lines.map(
                    line => (
                        <LinkContainer exact to={`/lines/${line.name}`}>
                            <li key={line.id}>
                                {
                                    line.name
                                }
                            </li>
                        </LinkContainer>
                    )
                )
            }
        </ul>
    </div>
);

export default connect(
    state => ({
        lines: state.lines
    })
)(Lines)

