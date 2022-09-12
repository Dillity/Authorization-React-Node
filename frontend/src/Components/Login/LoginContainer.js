import {connect} from "react-redux";
import Login from "./Login";
import {logIn} from "../../redux/loginReducer";
import {getIsFetchingLog, getLoginStatus, getServerMessageLog} from "../../selectors/LoginSelector";


let mapStateToProps = (state) => {
    return {
        serverMessageLog: getServerMessageLog(state),
        loginStatus: getLoginStatus(state),
        isFetching: getIsFetchingLog(state),
        isSecretRouting: state.login.secretRouting
    }
}

export const LoginContainer = connect(mapStateToProps, {logIn})(Login);