const SHOW = 'results/SHOW'
export const show = locations => ({
    type: SHOW,
    locations
})

const SAVE = 'results/SAVE'
export const save = connectionsToSave => ({
    type: SAVE,
    connectionsToSave
})

const initialState = {
    locations: null,
    connectionsToSave: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case SAVE:
            return {
                ...state,
                connectionsToSave: action.connectionsToSave
            }
        case SHOW:
            return {
                ...state,
                locations: action.locations
            }
        default:
            return state
    }
}