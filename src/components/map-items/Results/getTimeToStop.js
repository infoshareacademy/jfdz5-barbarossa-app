const getTimeToStop = ({foundLines, stopIndex}) => {

    const timesToStop = [];

    if (foundLines) {
        timesToStop.push(
            foundLines.map(
                foundLine => foundLine.dTimes.filter(
                    (dTime, index) => index <= stopIndex).reduce(
                    (sum, seconds) => sum + seconds
                )
            )
        )
    }

    return timesToStop
}

export default getTimeToStop