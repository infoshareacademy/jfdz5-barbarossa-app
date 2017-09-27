import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

import {getConnections} from './getConnections'
import {selectTime} from "./selectTime"
import {ResultsTable} from "./ResultsTable"

import {add} from '../../../state/routeMap'
import {save} from '../../../state/favs'

const Results = ({
                     search,
                     lines,
                     saveInFavsClick,
                     showOnMapClick
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
                    saveInFavsClick={saveInFavsClick}
                    showOnMapClick={showOnMapClick}
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
    saveInFavsClick: result => dispatch(save(result)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)



