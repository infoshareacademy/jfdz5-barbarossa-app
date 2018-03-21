export const getConnections = (startId, endId, lines) => {

    return lines.filter(
        line => line.stops.map(
            stop => stop.id
        ).filter(
            stopId => [startId, endId].includes(stopId)
        ).length === 2
    ).map(
        line => ({
            ...line,
            startStop: line.stops.map((stop, index) => ({ ...stop, index })).find(stop => stop.id === startId),
            endStop: line.stops.map((stop, index) => ({ ...stop, index })).find(stop => stop.id === endId)
        })
    ).filter(
        line => line.startStop !== undefined && line.endStop !== undefined
    ).filter(
        line => line.startStop.index < line.endStop.index
    ).map(
        line => ({
            ...line,
            routeStops: line.stops.slice(line.startStop.index + 1, line.endStop.index)
        })
    ).map(
        line => ({
            ...line,
            startStop: {
                ...line.startStop,
                timeToArrival: line.dTimes.slice(0,line.startStop.index + 1).reduce((total, next) => total + next, 0)
            },
            endStop: {
                ...line.endStop,
                timeToArrival: line.dTimes.slice(0,line.endStop.index + 1).reduce((total, next) => total + next, 0)
            }
        })
    ).map(
        line => ({
            ...line,
            computedDepartures: line.departures.map(
                departure => ({
                    depFromStartStop: departure.hour * 3600 + departure.minutes * 60 + departure.seconds + line.startStop.timeToArrival,
                    depFromEndStop: departure.hour * 3600 + departure.minutes * 60 + departure.seconds + line.endStop.timeToArrival
                })
            )
        })
    )

}