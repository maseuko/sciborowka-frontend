<template>
    <nav-bar :visible="true"></nav-bar>
    <div class="main">
        <div class="main_ctx">
            <gallery-template v-for="(c, idx) of categories" :key="idx" :name="c.name"></gallery-template>
        </div>
        
    </div>
    <main-footer></main-footer>
</template>

<script>
import NavBar from '@/components/UI/NavBar/NavBar.vue';
import MainFooter from '@/components/UI/MainFooter/MainFooter.vue';
import { get_request } from '@/utils/request';
import GalleryTemplate from '@/components/custom-gallery/GalleryTemplate.vue';
    export default {
        data(){
            return {
                categories: []
            }
        },
        components: { NavBar,MainFooter,GalleryTemplate},
        methods: {
           async fetchCategories(){
                const cat = await get_request("https://server.sciborowka.pl/sciborowka-client/categories");
                this.categories = cat.data.filter(c=>c.name!=="blog");
            }
        },
        created(){
            this.fetchCategories();
        }
    }
</script>

<style scoped lang="scss">
    .main{
        background: url("../assets/tlo-drewno-biel.jpg");
        min-height: 100vh;

        .main_ctx{
            background: white;
            max-width: 62rem;
            min-height: 100vh;
            margin: auto;
            padding: 3.5rem 1rem;
        }
    }
</style>