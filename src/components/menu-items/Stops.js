import React from 'react'
import {connect} from 'react-redux'

const Stops = ({stops}) => (
    <div className="main-panel">
        <h1>Stops</h1>
        <ul>
                {
                    stops.sort().map(
                        stop => (
                            <li key={stop.id}>
                                {
                                    stop.name
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
        stops: state.stops
    })
)(Stops)