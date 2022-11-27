import {post_request} from '@/utils/request';

export default {
    async addPost(){
        this.loading = true;
        try{
            const addedPost = await post_request(
                "https://server.sciborowka.pl/sciborowka-admin/add-post", 
                JSON.stringify({
                    title: this.title,
                    description: this.description
                }), true);
            if(!addedPost.data.id) {
                this.$store.commit("comunicate/openWindow");
                this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].ERROR);
                this.loading = false;
                return;
            }
            const FD = new FormData();
            for(const img of this.files) FD.append("files", img);
            await post_request("https://server.sciborowka.pl/sciborowka-admin/upload-images/"+addedPost.data.id, FD, false);
            this.loading = false;
            this.title = "";
            this.description = "";
            this.resetImagesInDropzone = ! this.resetImagesInDropzone;
            this.$store.commit("comunicate/openWindow");
            this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].POST_ADDED);
            this.$store.commit("comunicate/setLink", "/blogs/"+addedPost.data.id);
        }catch(error){
            console.log(error);
            this.loading = false;
        }
    },
    fileAdded(files){
        this.files = files; 
    }
}