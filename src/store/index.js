import { createStore } from "vuex";
import authModule from './auth/index'
import carouselModule from './carousel/index';
import comunicateModule from "./comunicate/index";
import dialogModule from './dialog/index';
import scrollModule from './scroll/index';

export default createStore({
    modules: {
        auth: authModule,
        carousel: carouselModule,
        comunicate: comunicateModule,
        dialog: dialogModule,
        scroll: scrollModule
    }
});