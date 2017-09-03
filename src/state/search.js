// Action types
const SEARCH = 'search/SEARCH'

// Action creators
export const search = () => ({
    type: SEARCH
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
                departureStop: 'work'
            }
        default:
            return state
    }
}