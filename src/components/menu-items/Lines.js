import React from 'react'
import {connect} from 'react-redux'
import './Lines.css'

import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import LineView from '../views/LineView'

const Lines = ({lines}) => (
    <div className="main-panel menu-panel">
        <h1 className="lines">Lines</h1>
        <div className="lines">
            {
                lines.map(
                    line =>
                        <LinkContainer key={line.id} to={`/lines/${line.name}`}>
                            <Button className="btn-custom">
                                {
                                    line.name
                                }
                            </Button>
                        </LinkContainer>
                )
            }
        </div>
        <LinkContainer exact to="/">
            <Button className="btn-exit">
                <i className="fa fa-times" aria-hidden="true"></i>
            </Button>
        </LinkContainer>
    </div>
);


export default connect(
    state => ({
        lines: state.lines
    })
)(Lines)

