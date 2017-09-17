import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

import {findLine} from './findLine'
import {matchTime} from "./matchTime";

const Results = ({search, lines}) => {

    var foundLines = [];

    if (search.searchParams) {
        const {startStop: {id: startId}, endStop: {id: endId}} = search.searchParams;

        foundLines = findLine(startId, endId, lines);

        console.log(foundLines)
    }

    return (
        search.searchParams && foundLines.length > 0 ?
            (
                <div className="main-panel">
                    <h1>Results</h1>
                    <table>
                        <tbody>
                        <tr>
                            <th>Line</th>
                            <th>Departure time</th>
                            <th>Arrival time</th>
                        </tr>
                        {
                            foundLines.length > 0 ?
                            foundLines.map(
                                (foundLine, index) =>
                                    <tr key={index}>
                                        <td>
                                            {
                                                foundLine.name
                                            }
                                        </td>
                                    </tr>
                            ) :
                                <tr>
                                    <td colSpan={3}>
                                        No results found
                                    </td>
                                </tr>
                        }
                        </tbody>

                    </table>
                </div>
            )
            : null
    )
}

const mapStateToProps = state => ({
    stops: state.stops,
    lines: state.lines,
    search: state.search
});

export default connect(
    mapStateToProps
)(Results)



