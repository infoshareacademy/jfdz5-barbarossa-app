import React from 'react'
import {connect} from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import './Lines.css'
import {Button} from 'react-bootstrap'

const Lines = ({lines}) => (
    <div className="main-panel menu-panel">
        <LinkContainer exact to="/">
            <Button className="btn-exit">
                <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
        </LinkContainer>
        <h1 className="lines">Lines</h1>
        <ul className="lines">
            {
                lines.map(
                    line => (
                        <LinkContainer key={line.id} exact to={`/lines/${line.name}`}>
                            <li>
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

