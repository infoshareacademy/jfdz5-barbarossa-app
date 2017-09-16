import React from 'react'
import './Results.css';
import {connect} from 'react-redux'

// import findLine from './_utils/findLine'
// import getStopIndex from './_utils/getStopIndex'
// import getTimeAtStop from './_utils/getTimeAtStop'
// import getTimeToStop from './_utils/getTimeToStop'

const initialState = {
    foundLines: [],
    departureStopIndex: [],
    arrivalStopIndex: [],
    timeToDepartureStop: [],
    timeToArrivalStop: [],
    timeAtDepartureStop: [],
    timeAtArrivalStop: [],
    matchedTimeAtDepartureStop: [],
    matchedTimeAtSelectedStop: []
}

class Results extends React.Component {

    state = initialState;

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
        this.matchTimeAtStops()
    }


    getDepartureStopIndex = () => {
        this.state.foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === this.props.search.searchParams.departureStop.id ?
                    this.state.departureStopIndex.push({
                        name: foundLine.name,
                        index: index
                    }) : null
            )
        )
        console.log('DepartureStopIndex')
        console.log(this.state.departureStopIndex)
    }

    getArrivalStopIndex = () => {
        this.state.foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === this.props.search.searchParams.arrivalStop.id ?
                    this.state.arrivalStopIndex.push({
                        name: foundLine.name,
                        index: index
                    }) : null
            )
        )
        console.log('ArrivalStopIndex')
        console.log(this.state.arrivalStopIndex)
    }

    getTimeToDepartureStop = () => {
        this.state.departureStopIndex.map(
            stopIndex => this.state.foundLines.filter(
                foundLine => foundLine.name === stopIndex.name).map(
                foundLine => this.state.timeToDepartureStop.push(
                    {
                        name: foundLine.name,
                        time: foundLine.dTimes.filter(
                            (dTime, index) => index <= stopIndex.index)
                            .reduce(
                                (sum, seconds) => sum + seconds
                            )
                    })
            )
        );

        console.log('TimeToDepartureStop')
        console.log(this.state.timeToDepartureStop)
    }

    getTimeToArrivalStop = () => {
        this.state.arrivalStopIndex.map(
            stopIndex => this.state.foundLines.filter(
                foundLine => foundLine.name === stopIndex.name).map(
                foundLine => this.state.timeToArrivalStop.push(
                    {
                        name: foundLine.name,
                        time: foundLine.dTimes.filter(
                            (dTime, index) => index <= stopIndex.index)
                            .reduce(
                                (sum, seconds) => sum + seconds
                            )
                    })
            )
        );
        console.log('TimeToArrivalStop')
        console.log(this.state.timeToArrivalStop)
    }

    getTimeAtDepartureStop = () => {
        this.state.timeToDepartureStop.map(
            time => this.state.foundLines.filter(
                foundLine => foundLine.name === time.name).map(
                foundLine => foundLine.departures.map(
                    departure => this.state.timeAtDepartureStop.push({
                            name: foundLine.name,
                            hour: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)) / 3600),
                            minutes: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)) % 3600 / 60),
                            seconds: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)) % 60),
                            sum: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)))
                        }
                    )
                )
            )
        )
        console.log('TimeAtDepartureStop')
        console.log(this.state.timeAtDepartureStop)
    }

    getTimeAtArrivalStop = () => {
        this.state.timeToArrivalStop.map(
            time => this.state.foundLines.filter(
                foundLine => foundLine.name === time.name).map(
                foundLine => foundLine.departures.map(
                    departure => this.state.timeAtArrivalStop.push({
                            name: foundLine.name,
                            hour: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)) / 3600),
                            minutes: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)) % 3600 / 60),
                            seconds: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)) % 60),
                            sum: Math.floor((departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(time.time, 10)))
                        }
                    )
                )
            )
        )
        console.log('TimeAtArrivalStop')
        console.log(this.state.timeAtArrivalStop)
    }

    matchTimeAtStops = () => {

        var timeAtSelectedStop = [];
        var timeAtUnselectedStop = [];

        if (this.props.search.searchParams.typeOfTime === 'departure') {
            timeAtSelectedStop = this.state.timeAtDepartureStop
            timeAtUnselectedStop = this.state.timeAtArrivalStop
        }
        else if (this.props.search.searchParams.typeOfTime === 'arrival') {
            timeAtSelectedStop = this.state.timeAtArrivalStop
            timeAtUnselectedStop = this.state.timeAtDepartureStop
        }

        const sumTimeSelected = this.props.search.searchParams.time.hour * 3600 +
            this.props.search.searchParams.time.hour * 60;

        const possibleTimeAtSelectedStop = timeAtSelectedStop.filter(
            time => time.sum - sumTimeSelected > 0)


        this.state.matchedTimeAtSelectedStop.push(possibleTimeAtSelectedStop) // first element will be first at stop

        console.log('MatchedTimeArrival')
        console.log(this.state.matchedTimeAtSelectedStop)
    }

    render() {
        return (
            this.props.search.searchParams ?
                (
                    this.findLine(), this.getTime(),
                        <div className="main-panel">
                            <h1>Results</h1>
                            <table>
                                <tbody>
                                <tr>
                                    <th>Lines:</th>
                                    <th>Departure time:</th>
                                    <th>Arrival time:</th>
                                </tr>
                                {
                                    // this.state.foundLines.length > 0 ?
                                    // this.state.matchedTimeAtSelectedStop.map(
                                    //     (time, index) =>
                                    //         <tr key={index}>
                                    //             <td>
                                    //                 {
                                    //                     time.name
                                    //                 }
                                    //             </td>
                                    //             <td>
                                    //
                                    //             </td>
                                    //             <td>
                                    //                 {
                                    //                     time.hour + ':' + time.minutes
                                    //                 }
                                    //             </td>
                                    //         </tr>
                                    // )
                                    //     :
                                    //     <tr>
                                    //         <td colSpan={3}>
                                    //             No results found
                                    //         </td>
                                    //     </tr>
                                }
                                </tbody>
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