import { createRouter, createWebHistory } from "vue-router"
import { defineAsyncComponent } from 'vue';

import ControlPanelRoutes from './control-panel';
import MainPageRoutes from './main-page';
import BlogsRoutes from './blogs';
import ContactRoutes from "./contact";
import CustomGalleryRoutes from './custom-gallery';
import store from "../store/index";

const NotFoundPage = defineAsyncComponent(()=>import('../components/UI/404/NotFoundPage.vue'));
const PricingTable = defineAsyncComponent(()=>import('../pages/PricingTable.vue'));

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ControlPanelRoutes,
        MainPageRoutes,
        BlogsRoutes,
        ContactRoutes,
        CustomGalleryRoutes,
        {
            path: '/pricing',
            component: PricingTable
        },
        {
            path: '/:notFound(.*)',
            component: NotFoundPage
        }
    ]
});
router.beforeEach(async function(to, from, next){
    if(to.meta.needsAuth){
        if(await store.dispatch("auth/validateTokens")) next()
        else next("/control-panel")
    }else{
        next();
    }
});
export default router;