import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

class Results extends React.Component {

    state = {
        foundLines: [],
        matchedTime: []
    }

    findLine = () => {
        this.props.lines.map(
            line => line.stops.map(
                stop => stop.name === this.props.search.searchParams.departureStop ?
                    line.stops.map(
                        stop => stop.name === this.props.search.searchParams.arrivalStop ?
                            this.state.foundLines.push(line.name)
                            :
                            null
                    )
                    :
                    null
            )
        )
    }

    matchTime = () => {
        this.props.lines.map(
            line => this.state.foundLines.map(
                foundLine => line.name === foundLine ?
                    this.state.matchedTime.push(line.departure)
                    :
                    null
            )
        )
        console.log(this.state.matchedTime)
    }

    render() {

        return (
            this.props.search.searchParams ?
                (
                    this.findLine(),
                        this.matchTime(),
                        <div className="main-panel">
                            <h1>Results</h1>
                            <ul>
                                {
                                    this.state.foundLines.map(
                                        line =>
                                            <li key={line}>
                                                {
                                                    line
                                                }
                                            </li>
                                    )
                                }
                            </ul>
                        </div>
                )
                : null
        )
    }

};


const mapStateToProps = state => ({
    stops: state.stops,
    lines: state.lines,
    search: state.search
});

export default connect(
    mapStateToProps
)(Results)