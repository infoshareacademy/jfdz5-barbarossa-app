const SEARCH = 'search/SEARCH'
export const search = (departureStop, arrivalStop, time, typeOfTime) => ({
    type: SEARCH,
    departureStop,
    arrivalStop,
    time: time.format('Y-M'),
    typeOfTime
})

const initialState = {
    departureStop: null,
    arrivalStop: null,
    time: null,
    typeOfTime: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                departureStop: action.departureStop,
                arrivalStop: action.arrivalStop,
                time: action.time,
                typeOfTime: action.typeOfTime
            }
        default:
            return state
    }
}