<template>
    <nav-bar-vue :visible="true"></nav-bar-vue>
    <div>
        <router-view/>
    </div>
    <main-footer-vue></main-footer-vue>
</template>

<script>
    import NavBarVue from '@/components/UI/NavBar/NavBar.vue';
    import MainFooterVue from '@/components/UI/MainFooter/MainFooter.vue';
    export default {
        components:{NavBarVue, MainFooterVue}
    }
</script>

<style scoped lang="scss">
    div{
        background: url("../assets/tlo-drewno-biel.jpg");
        padding-top: 2rem;
        // background-size: contain;
    }
</style>