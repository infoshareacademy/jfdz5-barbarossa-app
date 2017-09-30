import React from 'react'
import {Link} from 'react-router-dom'

const LineView = ({line}) => {
    return (
        <ul>
            {
                line.stops.map(stop =>
                    <li>
                        {
                            stop.name
                        }
                    </li>
                )
            }
        </ul>
    )
}

export default LineView