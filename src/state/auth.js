const SET_USER = 'auth/SET_USER'

export const setUser = user => ({
    type: SET_USER,
    user
})

const initialState = {
    user: null
}

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}