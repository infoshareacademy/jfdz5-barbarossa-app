
const getStopIndex = (foundLines, searchedStop) => {

    const stopIndex = [];

    foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === searchedStop.id ?
                    stopIndex.push({
                        name: foundLine.name,
                        index: index
                    }) : null
            )
        )

    return stopIndex
}

export default getStopIndex