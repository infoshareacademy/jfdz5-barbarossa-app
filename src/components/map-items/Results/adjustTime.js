export const adjustTime = (departures, type, inputTime) => {
    return departures.every(
        departure => type === 'arrival' ?
            departure.depFromEndStop : departure.depFromStartStop <= inputTime
    ) === false ?
        departures.filter(
            departure => type === 'arrival' ?
                departure.depFromEndStop : departure.depFromStartStop >= inputTime
        ).reduce((min, next) => min <= next ? min : next, 0)
        :
        departures.reduce((min, next) => min <= next ? min : next, 0)
}