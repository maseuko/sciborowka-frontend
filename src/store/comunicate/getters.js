export default {
    opened(state){
        return state.opened;
    },
    mode(state){
        return state.mode;
    },
    getAvailableModes(){
        return {
            POST_ADDED: "post_added",
            POST_DELETED: "post_deleted",
            ERROR: "error",
            POST_MODIFIED: "post_modified",
            MAIN_PAGE_MODIFIED: "main_page_modified",
            IMAGE_DELETED: "image_deleted"
        }
    },
    link(state){
        return state.link;
    }
}