<template>
    <div class="category">
        <h1>{{name}}</h1>
        <div v-masonry class="image_ctx">
            <img v-masonry-tile :src="img.url" v-for="(img, idx) of images" :key="idx" @click="openGallery(idx)">
        </div>
    </div>
    
</template>

<script>
import { get_request } from '@/utils/request';
    export default {
        props: ['name'],
        data(){
            return {
                images: []
            }
        },
        methods:{
            async fetchImages(){
                const imgs = await get_request("https://server.sciborowka.pl/sciborowka-client/images?category="+this.name);
                this.images=imgs.data;
            },
            openGallery(idx){
                this.$store.commit("carousel/setImageArray", this.images);
                this.$store.commit("carousel/setStartingImage", idx);
                this.$store.commit("carousel/toggleVisibility");
            }
        },
        created(){
            this.fetchImages();
        }
    }
</script>

<style scoped lang="scss">
    .category{
        h1{
            font-size: 2rem;
            font-weight: bold;
            color: $green-7;
            border-bottom: 1px solid $green-7;
        }
        .image_ctx{
            img{
                max-width: 25%;
                padding: 0.25rem;
                border-radius: 0.5rem;
                cursor: pointer;
                @media(max-width: 450px){
                    max-width: 50%;
                }

            }
        }
    }
    
</style>