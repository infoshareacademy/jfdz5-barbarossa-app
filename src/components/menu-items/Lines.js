import React from 'react'
import { connect } from 'react-redux'
import './Lines.css'

import { Link } from 'react-router-dom'
import LineView from '../views/LineView'

const Lines = ({lines}) => (
        <div className="main-panel menu-panel">
            <h1 className="lines">Lines</h1>
            <ul className="lines">
                {
                    lines.map(
                        line => (
                            <li key={line.id}>
                                <Link to ={`../../state/lines/${lines.name}`}>
                                    {
                                        <LineView/>
                                    }
                                </Link>
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

