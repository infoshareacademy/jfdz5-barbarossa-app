import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

const Results = ({search,stops,lines}) => (
    search.searchParams ?
    <div className="main-panel">
        <h1>Results</h1>
        <ul>
            <li>
                {
                    search.searchParams.arrivalStop
                }
            </li>
            <li>
                {
                    search.searchParams.departureStop
                }
            </li>
            <li>
                {
                    search.searchParams.typeOfTime
                }
            </li>
            <li>
                {
                    search.searchParams.time
                }
            </li>
        </ul>
    </div> : null
);

const mapStateToProps = state => ({
    stops: state.stops,
    lines: state.lines,
    search: state.search
});

export default connect(
    mapStateToProps
)(Results)