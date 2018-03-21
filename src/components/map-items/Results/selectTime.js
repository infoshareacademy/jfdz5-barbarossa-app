import {transformTime} from '../../_utlis/transformTime'
import {adjustTime} from './adjustTime'

export const selectTime = (connections, time) => {

    const inputTime = time.hour * 3600 + time.minutes * 60 + time.seconds;

    return connections.map(
        line => ({
            ...line,
            selectedTime: adjustTime(
                line.computedDepartures,
                time.type,
                inputTime
            )
        })
    ).map(
        line => ({
            ...line,
            selectedTime: ({
                ...line.selectedTime,
                timeFromEndStop: transformTime(line.selectedTime.depFromEndStop),
                timeFromStartStop:transformTime(line.selectedTime.depFromStartStop)
            })
        })
    )
}

