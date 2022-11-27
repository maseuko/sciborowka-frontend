<template>
  <div class="overlay">
    <div class="blurred_bg" @click="closeOnBlur"></div>
    <q-btn
      class="close_btn"
      style="position: absolute; top: 1rem; right: 1rem; z-index: 2; color: white"
      icon="close"
      round
      flat
      @click="$store.commit('carousel/toggleVisibility')"
    >
    </q-btn>
    <div class="q-pa-lg">
      <q-carousel-control :position="slide"> </q-carousel-control>
      <q-carousel
        @click="closeOnBlur"
        swipeable
        animated
        thumbnails
        infinite
        v-model="slide"
        no-route-fullscreen-exit
        height="95vh"
        arrows
        style="background-color: transparent; z-index: 1"
      >
        <q-carousel-slide
          v-for="(img, idx) of images"
          :key="idx"
          :name="idx"
          :img-src="img.url"
        ></q-carousel-slide>
      </q-carousel>
    </div>
    <img :src="images[slide].url" class="absolute-center" ref="imgCtx"/>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  data() {
    return {
      slide: ref(this.$store.getters["carousel/startingIndex"]),
    };
  },
  computed: {
    images() {
      return this.$store.getters["carousel/images"];
    },
    starter() {
      return this.$store.getters["carousel/startingIndex"];
    },
  },
  methods:{
    closeOnBlur(ev){
        const imageLocation = this.$refs.imgCtx.getBoundingClientRect();
        if(
            ((imageLocation.x>ev.x || imageLocation.x+imageLocation.width<ev.x) ||
            (imageLocation.y>ev.y || imageLocation.y+imageLocation.height<ev.y)) &&
            (!!ev.target.getAttribute("role") && ev.target.getAttribute("role")==="tabpanel")
            ) this.$store.commit('carousel/toggleVisibility');
    }
  }
};
</script>

<style>
.blurred_bg {
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  position: absolute;
  top: 0;
  left: 0;
}
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
}
.q-carousel__slide {
  display: none;
}
.overlay > img {
  position: absolute;
  z-index: 0;
  max-width: 100%;
  max-height: 100%;
}
</style>