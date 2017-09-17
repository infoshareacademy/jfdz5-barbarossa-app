import React from 'react'
import {connect} from 'react-redux'
import './Stops.css'

const Stops = ({stopNames}) => (
    <div className="main-panel">
        <h1 className="lines stops">Stops</h1>
        <ul className="stops">
                {
                    stopNames.map(
                        stop => (
                            <li key={stop}>
                                {
                                    stop
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
        stopNames: state.stopNames
    })
)(Stops)