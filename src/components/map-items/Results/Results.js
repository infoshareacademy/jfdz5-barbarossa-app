import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

import {getConnections} from './getConnections'
import {selectTime} from "./selectTime"
import {ResultsTable} from "./ResultsTable"

import {
    show,
    save
} from '../../../state/results'

const Results = ({
                     search,
                     lines,
                     saveClick,
                     showClick
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
                    saveClick={saveClick}
                    showClick={showClick}
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
    showClick: locations => dispatch(show(locations)),
    saveClick: result => dispatch(save(result))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results)



