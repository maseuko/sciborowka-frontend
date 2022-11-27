import {get_request, delete_request} from '@/utils/request';
import store from '@/store';

export default {
    async loadBlogs(){
        if(!this.isThereMorePages) return;
        this.loading = true;
            try{
                const result = await get_request("https://server.sciborowka.pl/sciborowka-client/get-posts?page="+this.page+"&limit=10");
                this.blogLoadedOptions = [...this.blogLoadedOptions, ...result.data].sort((a,b) => a.blogPost.id<b.blogPost.id);
                this.page += 1;
            }catch(err){
                this.loading = false;
                this.isThereMorePages = false;
            }
        },
    async removePost(id){
        const postToRemove = this.blogLoadedOptions[id];
        try{
            await delete_request("https://server.sciborowka.pl/sciborowka-admin/remove-post/"+postToRemove.blogPost.id)
            this.blogLoadedOptions = this.blogLoadedOptions.filter(b=>b.blogPost.id !== postToRemove.blogPost.id);
            store.commit("comunicate/openWindow");
            store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].POST_DELETED);
        }catch(err){
            store.commit("comunicate/openWindow");
            store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].ERROR);
        }
    },
    removeBtnAction(id){
        this.$store.commit("dialog/setCofirmation",async () => await this.removePost(id));
        this.$store.commit("dialog/setMessage", "Czy na pewno chcesz usunąć ten post?");
        this.$store.commit("dialog/toggleVisibility");
    }
}