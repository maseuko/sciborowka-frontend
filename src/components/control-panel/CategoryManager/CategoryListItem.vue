<template>
    <li>
        <div class="info_part">
            {{id+1}}
            <q-separator vertical />
            {{name}}
            <div class="action">
                <q-btn icon="edit" class="bg-green-7 text-white" round @click="toggleEditMode"></q-btn>
                <q-separator vertical></q-separator>
                <q-btn icon="delete" class="bg-red-7 text-white" round @click="removeBtnAction"></q-btn>
            </div>
        </div>
        <div class="image_part" v-if="editVisible">
            <image-ctx v-for="(img, idx) of imgs" :key="idx" :id="img.id" :url="img.url" :idx="idx" @open_gallery="openGallery" @delete_image="removeImage"></image-ctx>
        </div>
    </li>
</template>

<script>
    import { delete_request, get_request } from '@/utils/request';
    import ImageCtx from './ImageCtx.vue';
    export default {
        props: ["name","id"],
        data(){
            return {
                imgs: [],
                editVisible: false,
                loading: false
            }
        },
        methods: {
            async removeCategory(){
                try{
                    await delete_request("https://server.sciborowka.pl/sciborowka-admin/remove-category/"+this.name)
                    this.$emit("category_deleted", this.id);
                    this.$store.commit("comunicate/openWindow");
                    this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].POST_DELETED);
                }catch(err){
                    this.$store.commit("comunicate/openWindow");
                    this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].ERROR);
                }
            },
            removeBtnAction(){
                this.$store.commit("dialog/setCofirmation",async () => await this.removeCategory());
                this.$store.commit("dialog/setMessage", "Czy na pewno chcesz usunąć tą kategorię?");
                this.$store.commit("dialog/toggleVisibility");
            },
            async fetchCategoryImages(){
                this.loading = true;
                const imgs = await get_request("https://server.sciborowka.pl/sciborowka-client/images?category="+this.name);
                if(imgs.statusCode==="OK")
                    this.imgs = imgs.data;
                this.loading = false;
            },
            toggleEditMode(){
                this.editVisible = !this.editVisible;
                this.fetchCategoryImages();
            },
            async removeImage(id){
                const res = await delete_request("https://server.sciborowka.pl/sciborowka-admin/remove-image/"+id);
                if(res.statusCode === "ACCEPTED"){
                    this.$store.commit("comunicate/openWindow");
                    this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].IMAGE_DELETED);
                    this.imgs = this.imgs.filter(img => img.id!==id);
                }
            },
            openGallery(){
                this.$store.commit("carousel/setImageArray", this.imgs);
                this.$store.commit("carousel/toggleVisibility");
            }
        },
        components:{ImageCtx}
    }
</script>

<style scoped lang="scss">
    li{
        border-bottom: 1px solid #ccc;
    }
    .info_part{
        padding: 1rem 2rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1rem;
        font-weight: bold;
        &:nth-child(2n){
            background: #ccc;
        }
        .action{
            align-self: flex-end;
            margin-left: auto;
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
    }

    .image_part{
        display: column;
        columns: auto 15rem;
        max-width: 80%;
        margin: auto;
        padding: 2rem 0;
    }
</style>