import React from "react";
import {connect} from "react-redux";
import Secret from "./Secret";
import {isSecretRouting, loginStatusChange} from "../../redux/loginReducer";
import {getEmail, getLoginStatus} from "../../selectors/SecretSelector";

let mapStateToProps = (state) => {
    return {
        loginStatus: getLoginStatus(state),
        email: getEmail(state),
    }
}

export const SecretContainer = connect(mapStateToProps, {loginStatusChange, isSecretRouting})(Secret);