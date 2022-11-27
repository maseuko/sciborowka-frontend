<template>
    <div class="wrapper">
        <img :src="src" @click="openBigView"/>
        <q-btn icon="close" style="position: absolute; top: 1rem; right: 1rem; background: rgba(255,255,255,0.25)" round flat @click="removeImage" v-if="!loading"></q-btn>
        <div class="remove__loading" v-if="loading">
            <q-spinner-dots size="2rem" color="green-7"></q-spinner-dots>
        </div>
    </div>
</template>

<script>
    import {delete_request} from "@/utils/request";
    export default {
        props: ['src','id','que'],
        data(){
            return {
                loading: false
            }
        },
        methods: {
            openBigView(){
                this.$store.commit("carousel/setStartingImage", this.que);
                this.$store.commit("carousel/toggleVisibility");
            },
            async ramoveImageAction(){
                this.loading = true;
                if(await delete_request('https://server.sciborowka.pl/sciborowka-admin/remove-image/'+this.id) !== null) this.$emit("image_removed", this.que);
                this.loading = false;
            },
            removeImage(){
                this.$store.commit("dialog/setMessage","Czy na pewno chcesz usunąć to zdjęcie?");
                this.$store.commit("dialog/setCofirmation", this.ramoveImageAction);
                this.$store.commit("dialog/toggleVisibility");
            }
        }
    }
</script>

<style scoped>
    .wrapper{
        position: relative;
    }
    img{
        cursor: pointer;
        margin-bottom: 0.25rem;
        max-width: 100%;
    }
    .remove__loading{
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.25);
        max-width: fit-content;
        max-height: 2rem;
        padding: 1rem;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>