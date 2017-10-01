import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
// import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'
import firebase from 'firebase'

import search from './state/search'
import stops, {fetchStops} from './state/stops'
import lines, {fetchLines} from './state/lines'
import routeMap from './state/routeMap'
import favs from './state/favs'
import auth, {setUser} from './state/auth'

var config = {
    apiKey: "AIzaSyBeh05N_wq-tqVAcGrNFHMyMmG2k42ffR8",
    authDomain: "barbarossa-5a077.firebaseapp.com",
    databaseURL: "https://barbarossa-5a077.firebaseio.com",
    projectId: "barbarossa-5a077",
    storageBucket: "barbarossa-5a077.appspot.com",
    messagingSenderId: "210530217848"
};
firebase.initializeApp(config);

const reducer = combineReducers({
    search,
    stops,
    lines,
    routeMap,
    favs,
    auth
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

firebase.auth().onAuthStateChanged( user => {

    store.dispatch(setUser(user))

    // if (user !== null) {
    //     const userId = firebase.auth().currentUser.uid
    //
    //     firebase.database().ref('/favorites/' + userId).on('value', snapshot => {
    //         store.dispatch(setFavs(snapshot.val()))
    //     })
    // }
})

store.dispatch(fetchStops());
store.dispatch(fetchLines());

export default store