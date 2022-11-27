import getters from "./getters";
import mutations from "./mutations";

export default {
    namespaced: true,
    state(){
        return {
            opened: false,
            confirmation: () => {},
            message: ""
        }
    },
    getters,
    mutations
}