import { defineAsyncComponent } from 'vue';
const ContactVue = defineAsyncComponent(()=>import('../pages/ContactVue.vue'));

export default {
    path: "/contact",
    component: ContactVue
}