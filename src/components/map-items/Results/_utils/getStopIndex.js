const getStopIndex = ({foundLines, searchedStop}) => {
    if (foundLines) {
        foundLines.map(
            foundLine => foundLine.stops.map(
                (stop, index) => stop.id === searchedStop.id ?
                    index : null
            )
        )
    }
}

export default getStopIndex