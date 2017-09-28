import React from 'react'
import { connect } from 'react-redux'
import './Lines.css'

const Lines = ({lines}) => (
        <div className="main-panel menu-panel">
            <h1 className="lines">Lines</h1>
            <ul className="lines">
                {
                    lines.map(
                        line => (
                            <li key={line.id}>
                                {
                                    line.name
                                }
                            </li>
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

