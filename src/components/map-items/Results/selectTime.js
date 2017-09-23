import {transformTime} from '../../_utlis/transformTime'
import {adjustTime} from './adjustTime'

export const selectTime = (computedDepartures, time) => {

    const inputTime = time.hour * 3600 + time.minutes * 60 + time.seconds;

    return computedDepartures.map(
        departure => ({
            name: departure.name,
            selectedTime: adjustTime(
                departure.computedDepartures,
                time.type,
                inputTime
            )
        })
    ).map(
        departure => ({
            ...departure,
            timeFromEndStop: transformTime(departure.selectedTime.depFromEndStop),
            timeFromStartStop:transformTime(departure.selectedTime.depFromStartStop)
        })
    )
}

