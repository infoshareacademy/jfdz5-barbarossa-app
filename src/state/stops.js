const SET_STOPS = 'stops/SET_STOPS'
export const setStops = stops => ({
    type: SET_STOPS,
    stops
})

export const fetchStops = () => dispatch => {
    fetch(
        'https://frozen-garden-78232.herokuapp.com/transport/stops.json'
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