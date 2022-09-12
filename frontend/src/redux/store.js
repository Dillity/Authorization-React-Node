import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import registrationReducer from "./registrationReducer";
import loginReducer from "./loginReducer";

let reducers = combineReducers({
    registration: registrationReducer,
    login: loginReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
