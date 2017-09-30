import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

import {getConnections} from './getConnections'
import {selectTime} from "./selectTime"
import {ResultsTable} from "./ResultsTable"

import {add} from '../../../state/routeMap'
import {remove} from '../../../state/search'

const Results = ({
                     search,
                     lines,
                     saveInFavsClick,
                     showOnMapClick,
                     closeResults
                 }) => {

    let results = [];

    if (search.searchParams) {

        const {
            startStop: {id: startId},
            endStop: {id: endId},
            time
        } = search.searchParams;

        const connections = getConnections(startId, endId, lines);

        results = selectTime(connections, time);
    }

    return (
        search.searchParams ?
            (
                <ResultsTable
                    results={results}
                    showOnMapClick={showOnMapClick}
                    closeResults={closeResults}
                />
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
    showOnMapClick: stops => dispatch(add(stops)),
    closeResults: () => dispatch(remove())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)



