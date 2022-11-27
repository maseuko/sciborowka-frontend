import router from "@/router";

export default {
    setMode(state, payload){
        state.mode = payload;
    },
    setLink(state, payload){
        state.link = payload;
    },
    openWindow(state){
        state.opened = true;
    },
    closeWindow(state){
        state.opened = false;
    },
    goTo(state){
        router.push(state.link);
    }
}