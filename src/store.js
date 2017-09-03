import { createStore, combineReducers, compose } from 'redux'
import persistState from 'redux-localstorage'

import search from './state/search'

const reducer = combineReducers({
    search
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    /* [middlewares], */
    persistState([]),
)

const store = createStore(
    reducer,
    enhancer
)

export default store