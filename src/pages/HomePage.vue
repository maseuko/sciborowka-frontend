<template>
    <InitialLoading v-if="loading"/>
    <div v-if="!loading">
        <nav-bar-vue></nav-bar-vue>
        <MovieSection v-if="!loading" :src="movieUrl"></MovieSection>
        <AboutUs v-if="!loading" :src="aboutBg" :desc="aboutDesc"></AboutUs>
        <LasRelations v-if="!loading"></LasRelations>
        <PreFooter v-if="!loading"></PreFooter>
        <MainFooter v-if="!loading"></MainFooter>
    </div>
    
</template>

<script>
    import { get_request } from '@/utils/request';
    import AboutUs from '@/components/home-page/AboutUs.vue';
    import MovieSection from '@/components/home-page/MovieSection.vue';
    import NavBarVue from '@/components/UI/NavBar/NavBar.vue';
    import LasRelations from '@/components/home-page/LasRelations.vue';
    import PreFooter from '@/components/home-page/PreFooter.vue';
    import MainFooter from '@/components/UI/MainFooter/MainFooter.vue';
    import InitialLoading from '@/components/home-page/InitialLoading.vue';
    export default {
        data(){
            return {
                loading: true,
                movieUrl: "",
                aboutBg: "",
                aboutDesc: ""
            }
        },
        components: { NavBarVue, MovieSection, AboutUs, LasRelations, PreFooter, MainFooter, InitialLoading },
        async created(){
            const res = await get_request("https://server.sciborowka.pl/sciborowka-client/main-page-config");
            this.movieUrl = res.data.movieUrl;
            this.aboutBg = res.data.aboutImg;
            this.aboutDesc = res.data.aboutDesc;
            this.loading = false;
        }
    }
</script>
