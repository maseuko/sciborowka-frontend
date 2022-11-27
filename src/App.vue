<template>
  <q-scroll-observer @scroll="scr"></q-scroll-observer>
  <router-view></router-view>
  <carousel-manager v-if="carouselVisible"></carousel-manager>
  <action-comunicate v-if="actionComunicateVisible"></action-comunicate>
  <ConfirmDialog/>
</template>

<script>
import ActionComunicate from './components/UI/ActionComunicate/ActionComunicate.vue';
import CarouselManager from './components/UI/CarouselManager/CarouselManager.vue';
import ConfirmDialog from './components/UI/ConfirmDialog/ConfirmDialog.vue';

export default {
  components: { CarouselManager, ActionComunicate, ConfirmDialog },
  computed: {
    carouselVisible(){
      return this.$store.getters['carousel/visible'];
    },
    actionComunicateVisible(){
      return this.$store.getters['comunicate/opened'];
    }
  },
  methods:{
    scr(ev){
      this.$store.commit("scroll/setX",ev.position.left);
      this.$store.commit("scroll/setY",ev.position.top);
    }
  }
}
</script>
