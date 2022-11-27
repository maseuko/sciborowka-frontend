<template>
    <nav :class="{'scrolled': scrolled}">
        <div class="logo" :class="{'bg': !scrolled, 'lm': scrolled}" @click="$router.push('/')">
            <img :src="'/logo_white.svg'" alt="">
        </div>
        <div class="mobile_actions">
            <q-btn round icon="menu" flat :color="'white'" @click="toggleOpoened"></q-btn>
        </div>
    </nav>
    <transition name="menu" :duration="{leave: 500}">
        <div class="menu" v-if="opened" >
            <div class="cover" @click="toggleOpoened"></div>
            <div class="slider">
                <p>Menu
                    <q-btn flat round icon="close" style="align-self: center" size="1rem" @click="toggleOpoened"></q-btn>
                </p>
                <router-link to="/">
                    <q-icon flat name="home"></q-icon>
                    <q-separator vertical></q-separator>
                    Strona Główna
                </router-link>
                <router-link to="/blogs">
                    <q-icon flat name="newspaper"></q-icon>
                    <q-separator vertical></q-separator>
                    Blog
                </router-link>
                <router-link to="/gallery">
                    <q-icon flat name="image"></q-icon>
                    <q-separator vertical></q-separator>
                    Galeria
                </router-link>
                <router-link to="/pricing">
                    <q-icon flat name="payments"></q-icon>
                    <q-separator vertical></q-separator>
                    Cennik
                </router-link>
                <router-link to="/contact">
                    <q-icon flat name="call"></q-icon>
                    <q-separator vertical></q-separator>
                    Kontakt
                </router-link>
            </div>
        </div>
    </transition>
    
</template>

<script>
import { RouterLink } from 'vue-router';
    export default {
        props:['visible'],
        data(){
            return {
                scrolled: false,
                opened: false
            }
        },
        computed:{
            y(){
                return this.$store.getters["scroll/y"];
            }
        },
        watch:{
            y(newVal){
                if(newVal>50 || this.visible) this.scrolled = true;
                else this.scrolled = false;
            }
        },
        methods:{
            toggleOpoened(){
                this.opened = !this.opened;
            }
        },
        created(){
            if(this.visible) this.scrolled = true;
        },
        components: {RouterLink}
    }
</script>

<style lang="scss" scoped>
    @import './styles.scss';
</style>