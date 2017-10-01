const ADD_LOCATIONS = 'routeMap/ADD_LOCATIONS'
export const addLocations = selectedConnection => ({
    type: ADD_LOCATIONS,
    selectedConnection
})

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATIONS:
            return action.selectedConnection
        default:
            return initialState
    }
}
