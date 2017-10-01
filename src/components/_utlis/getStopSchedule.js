import {transformTime} from './transformTime'

export const getStopSchedule = (lines, stopId) => {

    return lines.filter(
        line => line.stops.find(
            stop => stop.id === stopId)
    ).map(
        line => ({
            ...line,
            selectedStop: line.stops.map((stop, index) => ({...stop, index})).find(stop => stop.id === stopId)
        })
    ).map(
        line => ({
            ...line,
            timeToSelectedStop: line.dTimes.slice(0,line.selectedStop.index + 1).reduce((total, next) => total + next, 0)
        })
    ).map(
        line => ({
            ...line,
            computedDepartures: line.departures.map(
                departure => (
                    departure.hour * 3600 + departure.minutes * 60 + departure.seconds + line.timeToSelectedStop
                )
            )
        })
    ).map(
        line => ({
            ...line,
            timeFromSelectedStop: line.computedDepartures.map(
                departure => transformTime(departure)
            )
        })
    )
}