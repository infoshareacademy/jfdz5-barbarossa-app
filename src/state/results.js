const SHOW = 'results/SHOW'
export const show = resultName => ({
    type: SHOW,
    resultName
})

const initialState = {
    result: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SHOW:
            return {
                result: action.resultName
            }

        default:
            return state
    }
}