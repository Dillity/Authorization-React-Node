import React from "react";
import {loginAPI} from "../api/api";

const EMAIL = 'EMAIL';
const SERVER_MESSAGE_LOG = 'SERVER_MESSAGE_LOG';
const LOGIN_STATUS = 'LOGIN_STATUS';
const IS_FETCHING = 'IS_FETCHING';
const SECRET_ROUTING = 'SECRET_ROUTING';

let initialState = {
    email: null,
    serverMessageLog: '',
    loginStatus: false,
    isFetching: false,
    secretRouting: false
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVER_MESSAGE_LOG:
            return {
                ...state,
                serverMessageLog: action.message
            }

        case LOGIN_STATUS:
            return {
                ...state,
                loginStatus: action.status
            }

        case EMAIL:
            return {
                ...state,
                email: action.email
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }

        case SECRET_ROUTING:
            return {
                ...state,
                secretRouting: true
            }

        default:
            return state;
    }
}

export const emailLogin = (email) => ({type: EMAIL, email});
export const serverMessageLog = (message) => ({type: SERVER_MESSAGE_LOG, message});
export const loginStatusChange = (status) => ({type: LOGIN_STATUS, status});
export const isFetchingProgress = (status) => ({type: IS_FETCHING, status});
export const isSecretRouting = (status) => ({type: SECRET_ROUTING, status});

export const logIn = (email, password) => (dispatch) => {
    dispatch(isFetchingProgress(true));
    loginAPI.login(email, password).then(response => {
        dispatch(serverMessageLog(response.data.message));
        if(response.data.foundUser) {
            dispatch(emailLogin(response.data.foundUser.email));
        }
        dispatch(isFetchingProgress(false));
        dispatch(loginStatusChange(response.data.loginStatus));
    });
}


export default loginReducer;