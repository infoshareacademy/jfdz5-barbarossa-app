import React from 'react'
import {connect} from 'react-redux'

import './Stops.css'

const Stops = ({stopNames}) => (
    <div className="main-panel">
        <h1>Stops</h1>
                <select className="stops">
                    {
                        stopNames.map(
                            stop => (
                                    <option>
                                        {
                                            stop
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
        stopNames: state.stopNames
    })
)(Stops)