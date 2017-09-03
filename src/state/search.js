// Action types
const SEARCH = 'search/SEARCH'

// Action creators
export const search = (startValue,destinationValue) => ({
    type: SEARCH,
    startValue,
    destinationValue

})

// Initial state
const initialState = {
    departureStop: null,
    arrivalStop: null,
}

// Reducer
export default (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                departureStop: action.startValue,
                arrivalStop: action.destinationValue
            }
        default:
            return state
    }
}