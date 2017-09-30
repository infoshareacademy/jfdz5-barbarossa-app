import React from 'react'
import {connect} from 'react-redux'

const LineView = props => {
    const lineName = parseInt(props.match.params.lineName, 10)
    var line;
    if (props.lines) {
        line = props.lines.find(
            line => line.name === lineName
        )
    }

    return (
        <div className='main-panel'>
            <h1> {lineName} </h1>
            <ul>
                {
                    line ?
                        line.stops.map(stop =>
                            <li>
                                {
                                    stop.name
                                }
                            </li>
                        ) : null
                }
            </ul>
        </div>
    )
}

export default connect(
    state => ({
        lines: state.lines
    })
)(LineView)