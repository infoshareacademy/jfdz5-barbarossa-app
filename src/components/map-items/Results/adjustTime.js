export const adjustTime = (departures, type, inputTime) => {

    const depType = (type === 'arrival') ? 'depFromEndStop' : 'depFromStartStop'

    return (departures.every(
        ({ depFromEndStop, depFromStartStop }) => (
            inputTime >= (
                type === 'arrival' ?
                    depFromEndStop :
                    depFromStartStop
            )
        )
    ) ?
        departures :
        departures.filter(
            ({ depFromEndStop, depFromStartStop }) => (
                (
                    type === 'arrival' ?
                        depFromEndStop :
                        depFromStartStop
                ) >=  inputTime
            )
        )).reduce((min, next) =>
            min[depType] < next[depType] ? min : next,
            { [depType]: Infinity} )
}
