const UPDATE_FAVS = 'favs/UPDATE_FAVS'
export const updateFavs = favs => ({
    type: UPDATE_FAVS,
    favs
})

const initialState = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FAVS:
            return action.favs
        default:
            return state
    }
}