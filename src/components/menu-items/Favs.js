import React from 'react'
import {connect} from 'react-redux'
const Favs = ({search}) => {
    return (
        search.searchParams ?

            <div className="main-panel">
                <h1>Favs</h1>
                <ul>
                    <li>
                        {
                            search.searchParams.startStop.name
                        }
                    </li>
                </ul>
            </div> : null
    )
};

export default connect(
    state => ({
        search :state.search
    })
) (Favs)