import React from 'react'
import './Results.css';
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import {findLine} from './findLine'
import {computeDeparture} from './computeDeparture'
import {selectTime} from "./selectTime"
import {
    show
} from '../../../state/results'


const Results = ({search, lines, showClick}) => {

    var results = [];

    if (search.searchParams) {

        const {
            startStop: {id: startId},
            endStop: {id: endId},
            time
        } = search.searchParams;

        const foundLines = findLine(startId, endId, lines);
        const computedDepartures = computeDeparture(foundLines);


        results = selectTime(computedDepartures, time)
        console.log(results)
    }

    const handleShowClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name')
        showClick(resultName);
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
                            results.length > 0 ?
                                results.map(
                                    (result, index) =>
                                        <tr key={index}>
                                            <td>
                                                {
                                                    result.name
                                                }
                                            </td>
                                            <td>
                                                {
                                                    result.timeFromStartStop.hours + ':' + result.timeFromStartStop.minutes
                                                }
                                            </td>
                                            <td>
                                                {
                                                    result.timeFromEndStop.hours + ':' + result.timeFromEndStop.minutes
                                                }
                                            </td>
                                            <td>
                                                <Button>
                                                    <i className="fa fa-star-o"/>
                                                </Button>
                                            </td>
                                            <td>
                                                <Button
                                                    data-result-name={result.name}
                                                    onClick={handleShowClick}
                                                >
                                                    <i className="fa fa-car"/>
                                                </Button>
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
    lines: state.lines,
    search: state.search
});

const mapDispatchToProps = dispatch => ({
    showClick: (resultName) => dispatch(show(resultName))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)



