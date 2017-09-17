const getTimeAtStop = ({foundLines, timesToStop}) => {

    const timesAtStop = [];

    if (foundLines) {
        foundLines.map(
            foundLine => foundLine.departures.map(
                departure => timesAtStop.push({
                        hour: Math.floor(
                            (departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(timesToStop[0], 10)) / 3600),
                        minutes: Math.floor(
                            (departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(timesToStop[0], 10)) % 3600 / 60),
                        seconds: Math.floor(
                            (departure.hour * 3600 + departure.minutes * 60 + departure.seconds +
                                parseInt(timesToStop, 10)) % 60)
                    }
                )
            )
        )
    }

    return timesAtStop
}

export default getTimeAtStop