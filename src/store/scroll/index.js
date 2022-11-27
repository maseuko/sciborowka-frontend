export default {
    namespaced: true,
    state(){
        return {
            x: 0,
            y: 0
        }
    },
    getters: {
        x(state){ return state.x },
        y(state){ return state.y }
    },
    mutations:{
        setX(state, p){state.x = p},
        setY(state, p){state.y = p}
    }
}