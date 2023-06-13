// import {createStore} from "redux";
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
  
let reducers = combineReducers({
    contentPage: profileReducer,
    dialogsPage: dialogReducer,
    navbarFriends: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
});

// let store = createStore(reducers, applyMiddleware(thunkMddleware));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers((applyMiddleware(thunkMddleware))));
window.store = store;
export default store;