export default {
    toggleVisibility(state){
        state.visible = !state.visible;
    },
    setImageArray(state, img){
        state.images = img;
    },
    setStartingImage(state, starter){
        state.startingIndex = starter;
    }
}