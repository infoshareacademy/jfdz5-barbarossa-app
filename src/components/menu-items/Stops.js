import React from 'react'
import {connect} from 'react-redux'
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
    </div>
);

export default connect(
    state => ({
        stops: state.stops
    })
)(Stops)