import React from 'react'
import './Results.css';
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

import {findLine} from './findLine'
import {computeDeparture} from './computeDeparture'
import {selectTime} from "./selectTime"
import {getLocations} from "../../_utlis/getLocations"
import {
    show,
    save
} from '../../../state/results'


const Results = ({
                     search,
                     lines,
                     stops,
                     showClick,
                     saveClick
                 }) => {

    var results = [];

    if (search.searchParams) {

        const {
            startStop: {id: startId},
            endStop: {id: endId},
            time
        } = search.searchParams;

        const foundLines = findLine(startId, endId, lines);
        const connections = computeDeparture(foundLines);

        results = selectTime(connections, time);
    }

    const handleShowClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        const selectedResult = results.find(result => result.name === resultName);
        const locations = getLocations(selectedResult, stops);

        showClick(locations);
    }

    const handleSaveClick = event => {
        const resultName = event.currentTarget.getAttribute('data-result-name');
        const selectedResult = results.find(result => result.name === resultName);

        saveClick(selectedResult)
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
                                                    result.selectedTime.timeFromStartStop.hours + ':' + result.selectedTime.timeFromStartStop.minutes
                                                }
                                            </td>
                                            <td>
                                                {
                                                    result.selectedTime.timeFromEndStop.hours + ':' + result.selectedTime.timeFromEndStop.minutes
                                                }
                                            </td>
                                            <td>
                                                <Button
                                                    data-result-name={result.name}
                                                    onClick={handleSaveClick}
                                                >
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
    search: state.search,
    stops: state.stops
});

const mapDispatchToProps = dispatch => ({
    showClick: locations => dispatch(show(locations)),
    saveClick: result => dispatch(save(result))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)



