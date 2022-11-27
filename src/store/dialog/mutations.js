import store from '../index';

export default {
    toggleVisibility(state){
        state.opened = !state.opened;
    },
    setCofirmation(state, func){
        state.confirmation = async () => {
            await func();
            store.commit("dialog/toggleVisibility");
        };
    },
    setMessage(state, payload){
        state.message = payload;
    }

}