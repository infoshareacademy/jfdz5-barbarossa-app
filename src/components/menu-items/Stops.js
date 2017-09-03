import React from 'react'
import {connect} from 'react-redux'

import {stops} from '../../state/stops'

const Stops = ({stops}) => (
    <div className="main-panel">
        <h1>Stops</h1>
        <ul>
                {
                    stops.map(
                        stop => (
                            <li>
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