import React from 'react'
import {connect} from 'react-redux'

const Lines = ({lines}) => (
        <div className="main-panel">
            <h1>Lines</h1>
            <ul>
                {
                    lines.map(
                        line => (
                            <li>
                                {
                                    line.line
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

