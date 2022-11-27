export default {
    isLogged(state){
        return state.isLogged;
    },
    isLoading(state){
        return state.isLoading;
    },
    isError(state){
        return state.isError;
    },
    authToken(state){
        return state.authToken;
    },
    refreshToken(state){
        return state.refreshToken;
    },
    getAuthData(){
        return {
            authToken: localStorage.getItem("auth_scb"),
            refreshToken: localStorage.getItem("auth_rfsh_scb")
        }
    }
}