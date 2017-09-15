import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

// import findLine from './_utils/findLine'
// import getStopIndex from './_utils/getStopIndex'
// import getTimeAtStop from './_utils/getTimeAtStop'
// import getTimeToStop from './_utils/getTimeToStop'

class Results extends React.Component {

    state = {
        foundLines: [],
        departureStopIndex: [],
        arrivalStopIndex: [],
        timeToDepartureStop: [],
        timeToArrivalStop: [],
        timeAtDepartureStop: [],
        timeAtArrivalStop: [],
        matchedTimeAtDepartureStop: [],
        matchedTimeAtArrivalStop: []
    }

    findLine = () => {
        this.props.lines.map(
            line => line.stops.map(
                stop => stop.id === this.props.search.searchParams.departureStop.id ?
                    line.stops.map(
                        stop => stop.id === this.props.search.searchParams.arrivalStop.id ?
                            this.state.foundLines.push(line)
                            :
                            null
                    )
                    :
                    null
            )
        )
        console.log('FoundLines')
        console.log(this.state.foundLines)
    }

    getTime = () => {
        this.getDepartureStopIndex()
        this.getTimeToDepartureStop()
        this.getTimeAtDepartureStop()
        this.getArrivalStopIndex()
        this.getTimeToArrivalStop()
        this.getTimeAtArrivalStop()
    }


    getDepartureStopIndex = () => {
        this.state.foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === this.props.search.searchParams.departureStop.id ?
                    this.state.departureStopIndex.push(index) : null
            )
        )
        console.log('DepartureStopIndex')
        console.log(this.state.departureStopIndex)
    }

    getArrivalStopIndex = () => {
        this.state.foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === this.props.search.searchParams.arrivalStop.id ?
                    this.state.arrivalStopIndex.push(index) : null
            )
        )
        console.log('ArrivalStopIndex')
        console.log(this.state.arrivalStopIndex)
    }

    getTimeToDepartureStop = () => {
        this.state.timeToDepartureStop.push(
            this.state.foundLines.map(
                foundLine => foundLine.dTimes.filter(
                    (dTime, index) => index <= this.state.departureStopIndex).reduce(
                    (sum, seconds) => sum + seconds
                )
            )
        )
        console.log('TimeToDepartureStop')
        console.log(this.state.timeToDepartureStop)
    }

    getTimeToArrivalStop = () => {
        this.state.timeToArrivalStop.push(
            this.state.foundLines.map(
                foundLine => foundLine.dTimes.filter(
                    (dTime, index) => index <= this.state.arrivalStopIndex).reduce(
                    (sum, seconds) => sum + seconds
                )
            )
        )
        console.log('TimeToArrivalStop')
        console.log(this.state.timeToArrivalStop)
    }

    getTimeAtDepartureStop = () => {
        this.state.foundLines.map(
            foundLine => foundLine.departures.map(
                departure => this.state.timeAtDepartureStop.push({
                        hour: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToDepartureStop[0], 10)) / 3600),
                        minutes: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToDepartureStop[0], 10)) % 3600 / 60),
                        seconds: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToDepartureStop[0], 10)) % 60)
                    }
                )
            )
        )
        console.log('TimeAtDepartureStop')
        console.log(this.state.timeAtDepartureStop)
    }

    getTimeAtArrivalStop = () => {
        this.state.foundLines.map(
            foundLine => foundLine.departures.map(
                departure => this.state.timeAtArrivalStop.push({
                        hour: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToArrivalStop[0], 10)) / 3600),
                        minutes: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToArrivalStop[0], 10)) % 3600 / 60),
                        seconds: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                            parseInt(this.state.timeToArrivalStop[0], 10)) % 60)
                    }
                )
            )
        )
        console.log('TimeAtArrivalStop')
        console.log(this.state.timeAtArrivalStop)
    }

    matchTimeAtDepartureStop = () => {

        var timeAtStop = [];

        if (this.props.search.searchParams.typeOfTime === 'departure') {
            timeAtStop = this.state.timeAtDepartureStop
        }
        else if (this.props.search.searchParams.typeOfTime === 'arrival') {
            timeAtStop = this.state.timeAtArrivalStop
        }

        for (var i = 0; i <= 24; i++) {
            timeAtStop.map(
                time => {
                    if (Math.abs(time.hour - this.props.search.searchParams.time.hour) === i) {
                        for (var j = 0; j <= 60; j++) {
                            if (Math.abs(time.minutes - this.props.search.searchParams.time.minutes) === j) {
                                    this.state.matchedTimeAtArrivalStop.push(
                                        {
                                            hour: time.hour,
                                            minutes: time.minutes
                                        }
                                )
                                break;
                            }
                            break;
                        }
                    }
                }
            )
        }

        console.log('MatchedTimeArrival')
        console.log(this.state.matchedTimeAtArrivalStop)
    }

    render() {
        return (
            this.props.search.searchParams ?
                (
                    this.findLine(), this.getTime(), this.matchTimeAtDepartureStop(),
                        <div className="main-panel">
                            <h1>Results</h1>
                            <table>
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
                            </table>
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

// const Results = ({search,lines,stops}) => {
//
//     const foundLines = findLine(search,lines);
//
//     const foo = () => {
//         const departureIndex = getStopIndex(foundLines,search.searchParams.departureStop)
//         const arrivalIndex = getStopIndex(foundLines,search.searchParams.arrivalStop)
//
//         console.log(departureIndex)
//
//         const timeToDepartureStop = getTimeToStop(foundLines,departureIndex)
//         const timeToArrivalStop = getTimeToStop(foundLines,arrivalIndex)
//
//         console.log(timeToDepartureStop)
//
//         const timeAtDepartureStop = getTimeAtStop(foundLines, timeToDepartureStop)
//         const timeAtArrivalStop = getTimeAtStop(foundLines, timeToArrivalStop)
//
//         console.log(timeAtDepartureStop)
//         console.log(timeAtArrivalStop)
//     }
//
//
//     return (
//         search.searchParams ?
//             (
//                 foo(),
//                     <div className="main-panel">
//                         <h1>Results</h1>
//                         <ul>
//                             {
//                                 foundLines.map(
//                                     (foundLine, index) =>
//                                         <li key={index}>
//                                             {
//                                                 foundLine.name
//                                             }
//                                         </li>
//                                 )
//                             }
//                         </ul>
//                     </div>
//             )
//             : null
//     )
// }