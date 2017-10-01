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
        departures[0] :
        departures.filter(
            ({ depFromEndStop, depFromStartStop }) => (
                (
                    type === 'arrival' ?
                        depFromEndStop :
                        depFromStartStop
                ) >=  inputTime
            )
        )[0]
}