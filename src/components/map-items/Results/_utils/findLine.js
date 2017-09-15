const findLine = (search, lines) => {

    const foundLines = [];

    if (search.searchParams) {
        lines.map(
            line => line.stops.map(
                stop => stop.id === search.searchParams.departureStop.id ?
                    line.stops.map(
                        stop => stop.id === search.searchParams.arrivalStop.id ?
                            foundLines.push(line)
                            :
                            null
                    )
                    :
                    null
            )
        )
    }

    return foundLines
}

export default findLine