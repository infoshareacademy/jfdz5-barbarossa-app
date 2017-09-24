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
        departures.reduce((min, next) => Math.min(min, next), 0) :
        departures.filter(
            ({ depFromEndStop, depFromStartStop }) => (
                (
                    type === 'arrival' ?
                        depFromEndStop :
                        depFromStartStop
                ) >=  inputTime
            )
        ).reduce((min, next) => Math.min(min, next), 0)
}