const SET_LINES = 'posts/SET_LINES'
export const setLines = lines => ({
    type: SET_LINES,
    lines
})

export const fetchLines = () => dispatch => {
    fetch(
        'http://localhost:3000/data/lines.json'
    ).then(
        response => response.json()
    ).then(
        lines => dispatch(setLines(lines))
    )
}

const initialState = [];

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_LINES:
            return action.lines;
        default:
            return state
    }
}