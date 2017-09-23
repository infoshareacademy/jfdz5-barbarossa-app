export const findLine = (startId, endId, lines) => {

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
        line => line.startStop.index < line.endStop.index
    ).map(
        line => ({
            ...line,
            routeStops: line.stops.slice(line.startStop.index + 1, line.endStop.index)
        })
    )

}