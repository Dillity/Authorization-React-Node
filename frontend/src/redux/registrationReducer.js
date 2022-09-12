import {registerAPI} from "../api/api";

const SERVER_MESSAGE_REG = 'SERVER_MESSAGE_REG';
const IS_FETCHING = 'IS_FETCHING';


let initialState = {
    serverMessageReg: '',
    isFetching: false
}

const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SERVER_MESSAGE_REG:
            return {
                ...state,
                serverMessageReg: action.message
            }

        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }


        default:
            return state;
    }
}

export const serverMessageReg = (message) => ({type: SERVER_MESSAGE_REG, message});
export const isFetchingProgress = (status) => ({type: IS_FETCHING, status});

export const register = (email, password) => (dispatch) => {
    dispatch(isFetchingProgress(true));
    registerAPI.register(email, password).then(response => {
        dispatch(serverMessageReg(response.data.message));
        dispatch(isFetchingProgress(false));
    });
}

export default registrationReducer;