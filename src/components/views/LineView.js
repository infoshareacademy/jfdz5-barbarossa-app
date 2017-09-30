import React from 'react'
import {Link} from 'react-router-dom'

import lines from '../../state/lines'

const LineView = props => {
    {
        props.lines.map(
            line => (
                <Link to={`/lines/${lines.id}`}>
                    {
                        line.stops
                    }
                </Link>
            )
        )
    }
}

export default LineView()