const ADD_FAV = 'favs/ADD_FAV'
export const save = resultName => ({
    type: ADD_FAV,
    resultName
})

const initialState = {
    favorites: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                favorites: action.resultName
            };
        default:
            return state
    }
}