const ADD_LOCATIONS = 'routeMap/ADD_LOCATIONS'
export const add = selectedResult => ({
    type: ADD_LOCATIONS,
    selectedResult
})

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATIONS:
            return action.selectedResult
        default:
            return initialState
    }
}
