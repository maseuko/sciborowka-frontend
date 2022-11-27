import getters from "./getters";
import mutations from "./mutations";

export default {
    namespaced: true,
    state(){
        return {
            images: [],
            visible: false,
            startingIndex: 0
        }
    },
    getters,
    mutations
}