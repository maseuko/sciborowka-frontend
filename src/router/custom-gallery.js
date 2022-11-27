import { defineAsyncComponent } from 'vue';
const CustomGallery = defineAsyncComponent(()=>import('../pages/CustomGallery.vue'));
export default {
    path: "/gallery",
    component: CustomGallery
}