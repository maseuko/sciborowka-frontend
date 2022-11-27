import getters from "./getters"
import mutations from "./mutations"

export default {
    namespaced: true,
    state(){
        return {
            opened: false,
            mode: getters.getAvailableModes().POST_ADDED,
            link: ""
        }
    },
    getters,
    mutations
}