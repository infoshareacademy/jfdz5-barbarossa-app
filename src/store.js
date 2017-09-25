import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

import search from './state/search'
import stops, {fetchStops} from './state/stops'
import lines, {fetchLines} from './state/lines'
import map from './state/map'
import favs from './state/favs'

const reducer = combineReducers({
    search,
    stops,
    lines,
    map,
    favs
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // persistState([]),
)

const store = createStore(
    reducer,
    enhancer
)

store.dispatch(fetchStops());
store.dispatch(fetchLines());

export default store