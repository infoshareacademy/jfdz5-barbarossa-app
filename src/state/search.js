const SEARCH = 'search/SEARCH'
export const search = (searchParams) => ({
    type: SEARCH,
    searchParams
})

const REMOVE = 'search/REMOVE'
export const remove = () => ({
    type: REMOVE
})

const initialState = {
    searchParams: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case REMOVE:
            return {
                searchParams: null
            }
        case SEARCH:
            return {
                searchParams: action.searchParams
            }
        default:
            return state
    }
}