export const adjustTime = (departures, type, inputTime) => {
    return departures.every(
        ({ depFromEndStop, depFromStartStop }) => (
            inputTime >= (
                type === 'arrival' ?
                    depFromEndStop :
                    depFromStartStop
            )
        )
    ) ?
        departures.reduce((min, next) => min < next ? min : next, 0) :
        departures.filter(
            ({ depFromEndStop, depFromStartStop }) => (
                (
                    type === 'arrival' ?
                        depFromEndStop :
                        depFromStartStop
                ) >=  inputTime
            )
        ).reduce((min, next) => min < next ? min : next, 0)
}