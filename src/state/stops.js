const SET_STOPS = 'posts/SET_STOPS'
export const setStops = stops => ({
    type: SET_STOPS,
    stops
})

export const fetchStops = () => dispatch => {
    fetch(
        'http://localhost:3000/data/stops.json'
    ).then(
        response => response.json()
    ).then(
        stops => dispatch(setStops(stops))
    )
}

const initialState = [];

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_STOPS:
            return action.stops;
        default:
            return state
    }
}