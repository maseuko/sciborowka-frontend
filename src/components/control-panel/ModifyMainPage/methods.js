import { post_request, get_request } from "@/utils/request";

export default {
    newMainVideo(file){
        this.newConfig.mainVideo = {
            url: URL.createObjectURL(file[0]),
            file: file[0]
        }
    },
    removeNewMainVideo(){
        this.newConfig.mainVideo.url = "";
        this.newConfig.mainVideo.file = null;
    },
    newAboutImage(file){
        
        this.newConfig.aboutSection.url = URL.createObjectURL(file[0]);
        this.newConfig.aboutSection.file = file[0];
        console.log("--->", this.newConfig.aboutSection.file);
    },
    removeAboutImage(){
        this.newConfig.aboutSection.url = "";
        this.newConfig.aboutSection.file = null;
    },
    async uploadMainVideoChanges(){
        if(!this.newConfig.mainVideo.file) return;
        const fd = new FormData();
        fd.append("files", this.newConfig.mainVideo.file);
        const res = await post_request("https://server.sciborowka.pl/sciborowka-admin/update-main-movie", fd, false);
        console.log("Movie: ", res);
    },
    async uploadAboutSectionChanges(){
        if(
            !this.newConfig.aboutSection.file && 
            !(this.newConfig.aboutSection.description !== this.defaultConfig.aboutSection.description)
            ) return;
        
        if(this.newConfig.aboutSection.file){
            const fd = new FormData(); 
            fd.append("files", this.newConfig.aboutSection.file);
            const res = await post_request("https://server.sciborowka.pl/sciborowka-admin/update-about-image", fd, false);
            console.log("About-IMG: ", res);
        }
        if(this.newConfig.aboutSection.description !== this.defaultConfig.aboutSection.description) {
            const res = await post_request("https://server.sciborowka.pl/sciborowka-admin/update-about-description", 
            JSON.stringify({description: this.newConfig.aboutSection.description}), true);
            console.log("About-txt: ", res);
        }
    },
    async uploadChanges(){
        this.loading=true;
        await this.uploadMainVideoChanges();
        await this.uploadAboutSectionChanges();
        await this.fetchDefaultConfig();
        this.$store.commit("comunicate/openWindow");
        this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].MAIN_PAGE_MODIFIED);
        this.loading=false;
    },
    async fetchDefaultConfig(){
        this.initialLoading = true;
        const res = await get_request("https://server.sciborowka.pl/sciborowka-client/main-page-config");
        this.newConfig.aboutSection.description = res.data.aboutDesc;
        this.defaultConfig.aboutSection.description = res.data.aboutDesc;
        this.defaultConfig.mainVideo.url = res.data.movieUrl;
        this.defaultConfig.aboutSection.url = res.data.aboutImg;
        this.initialLoading = false;
    }
}