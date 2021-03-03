import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import friendsReducer from '../redux/friends-reducer';
import wallReducer from '../redux/wall-reducer';


const reducers = combineReducers({
    form: formReducer,
    friendsPage: friendsReducer,
    wallPage: wallReducer,
    // dialogsPage: dialogsReducer,
    // sidebar: sidebarReducer,
    // usersPage: usersReducer,
    // musicPage: musicreducer,
    // auth: authReducer,
    // app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

// const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.__store__ = store;

export {store} 