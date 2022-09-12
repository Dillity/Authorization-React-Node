import Registration from "./Registration";
import {connect} from "react-redux";
import {register} from "../../redux/registrationReducer";
import {getIsFetchingReg, getServerMessageReg} from "../../selectors/RegistrationSelector";


let mapStateToProps = (state) => {
    return {
        serverMessageReg: getServerMessageReg(state),
        isFetching: getIsFetchingReg(state),
        isSecretRouting: state.login.secretRouting
    }
}

export const RegistrationContainer = connect(mapStateToProps, {register})(Registration);