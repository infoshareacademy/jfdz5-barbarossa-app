const ADD_FAV = 'favs/ADD_FAV'
export const save = selectedResult => ({
    type: ADD_FAV,
    selectedResult
})

const initialState = {
    favorites: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                favorites: action.selectedResult
            };
        default:
            return state
    }
}