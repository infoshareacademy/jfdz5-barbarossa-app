export const matchTime = (foundLines, time) => {

    const inputTime = time.hour * 3600 + time.minutes * 60 + time.seconds;

    return foundLines.map(
        foundLine => ({
            name: foundLine.name,
            matchedTime: foundLine.computedDepartures.every(
                departure => (time.type === 'arrival' ? departure.depFromEndStop : departure.depFromStartStop) <= inputTime
            ) === false ?
                foundLine.computedDepartures.filter(
                    departure => (time.type === 'arrival' ? departure.depFromEndStop : departure.depFromStartStop) >= inputTime
                ).reduce((min, next) => min <= next ? min : next, 0)
                :
                foundLine.computedDepartures.reduce((min, next) => min <= next ? min : next, 0)
        })
    ).map(
        departure => ({
            ...departure,
            timeFromEndStop: {
                hour: Math.floor(departure.matchedTime.depFromEndStop / 3600) >= 24 ?
                    Math.floor(departure.matchedTime.depFromEndStop / 3600) - 24 : Math.floor(departure.matchedTime.depFromEndStop / 3600),
                minutes: Math.floor(departure.matchedTime.depFromEndStop % 3600 / 60) < 9 ?
                    '0' + Math.floor(departure.matchedTime.depFromEndStop % 3600 / 60) : Math.floor(departure.matchedTime.depFromEndStop % 3600 / 60),
                seconds: Math.floor(departure.matchedTime.depFromEndStop % 60)
            },
            timeFromStartStop: {
                hour: Math.floor(departure.matchedTime.depFromStartStop / 3600) >= 24 ?
                    Math.floor(departure.matchedTime.depFromStartStop / 3600) - 24 : Math.floor(departure.matchedTime.depFromStartStop / 3600),
                minutes: Math.floor(departure.matchedTime.depFromStartStop % 3600 / 60) < 9 ?
                    '0' + Math.floor(departure.matchedTime.depFromStartStop % 3600 / 60) : Math.floor(departure.matchedTime.depFromStartStop % 3600 / 60),
                seconds: Math.floor(departure.matchedTime.depFromStartStop % 60)
            }
        })
    )

}

