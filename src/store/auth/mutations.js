import router from "@/router";

export default {
    setAuthData(state, payload){
        localStorage.setItem("auth_scb", payload.auth);
        localStorage.setItem("auth_rfsh_scb", payload.refresh);
        state.authToken = payload.auth;
        state.refreshToken = payload.refresh;
        state.isLogged = true;
    },
    removeAuthDataAndLogOut(state){
        localStorage.removeItem("auth_scb");
        localStorage.removeItem("auth_rfsh_scb");
        state.authToken = null;
        state.refreshToken = null;
        state.isLogged = false;
        router.go("/control-panel");
    },
    setError(state){
        state.isError = true;
    },
    turnOffError(state){
        state.isError = false;
    },
    toggleLoading(state){
        state.isLoading = !state.isLoading;
    }
}