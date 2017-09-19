export const matchTime = (foundLines, time) => {

    const inputTime = time.hour * 3600 + time.minutes * 60 + time.seconds;

    return foundLines.map(
        foundLines => foundLines.computedDepartures.filter(
            departure =>
                (time.type === 'arrival' ?
                    departure.depFromEndStop : departure.depFromStartStop) >= inputTime
            ).reduce((min, next) => min <= next ? min : next, 0)
        ).map(
            departure => ({
                ...departure,
                timeFromEndStop: {
                    hour: Math.floor(departure.depFromEndStop / 3600) >= 24 ?
                        Math.floor(departure.depFromEndStop / 3600) - 24 : Math.floor(departure.depFromEndStop / 3600),
                    minutes: Math.floor(departure.depFromEndStop % 3600 / 60),
                    seconds: Math.floor(departure.depFromEndStop % 60)
                },
                timeFromStartStop: {
                    hour: Math.floor(departure.depFromStartStop / 3600) >= 24 ?
                        Math.floor(departure.depFromStartStop / 3600) - 24 : Math.floor(departure.depFromStartStop / 3600),
                    minutes: Math.floor(departure.depFromStartStop % 3600 / 60),
                    seconds: Math.floor(departure.depFromStartStop % 60)
                }
            })
    )

}

