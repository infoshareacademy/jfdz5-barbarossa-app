import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

import {findLine} from './findLine'
import {matchTime} from "./matchTime";

const Results = ({search, lines}) => {

    var foundLines = [];
    var matchedTime = [];

    if (search.searchParams) {

        const {
            startStop: {id: startId},
            endStop: {id: endId},
            time
        } = search.searchParams;

        foundLines = findLine(startId, endId, lines);
        console.log(foundLines)

        matchedTime = matchTime(foundLines, time)
        console.log(matchedTime)

    }

    return (
        search.searchParams ?
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
                            matchedTime.length > 0 ?
                                matchedTime.map(
                                    (time, index) =>
                                        <tr key={index}>
                                            <td>
                                                {
                                                    time.name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    time.timeFromStartStop.hour + ':' +
                                                    time.timeFromStartStop.minutes < 9 ?
                                                        '0' + time.timeFromStartStop : time.timeFromStartStop
                                                }
                                            </td>
                                            <td>
                                                {
                                                    time.timeFromEndStop.hour + ':' +
                                                    time.timeFromEndStop.minutes < 9 ?
                                                        '0' + time.timeFromEndStop : time.timeFromEndStop
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



