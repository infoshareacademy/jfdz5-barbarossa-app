import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

class Results extends React.Component {

    state = {
        foundLines: [],
        matchedTime: []
    }

    x = null;

    findLine = () => {
        this.props.lines.map(
            line => line.stops.map(
                stop => stop.id === this.props.search.searchParams.departureStop[0].id ?
                    line.stops.map(
                        stop => stop.id === this.props.search.searchParams.arrivalStop[0].id ?
                            this.state.foundLines.push(line)
                            :
                            null
                    )
                    :
                    null
            )
        )
        console.log(this.state.foundLines)
    }

    matchTime = () => {
        
    }


    render() {

        return (
            this.props.search.searchParams ?
                (
                    this.findLine(), this.matchTime(),
                        <div className="main-panel">
                            <h1>Results</h1>
                            <ul>
                                {
                                    this.state.foundLines.map(
                                        (foundLine, index) =>
                                            <li key={index}>
                                                {
                                                    foundLine.name
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