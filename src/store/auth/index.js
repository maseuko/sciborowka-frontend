import getters from "./getters"
import actions from "./actions"
import mutations from "./mutations"

export default {
    namespaced: true,
    state(){
        return {
            isLogged: false,
            authToken: null,
            refreshToken: null,
            isError: false,
            isLoading: false
        }
    },
    getters,
    actions,
    mutations
}