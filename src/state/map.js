const ADD_LOCATIONS = 'map/ADD_LOCATIONS'
export const add = resultName => ({
    type: ADD_LOCATIONS,
    resultName
})

const initialState = {
    locations: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATIONS:
            return {
                locations: action.resultName
            };
        default:
            return state
    }
}
