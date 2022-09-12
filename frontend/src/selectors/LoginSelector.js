export const getServerMessageLog = (state) => {
    return state.login.serverMessageLog
}
export const getLoginStatus = (state) => {
    return state.login.loginStatus
}
export const getIsFetchingLog = (state) => {
    return state.login.isFetching
}