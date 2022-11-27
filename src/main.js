import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import store from './store/index';
import router from './router/index';
import { VueMasonryPlugin } from 'vue-masonry';
createApp(App).use(router).use(store).use(Quasar, quasarUserOptions).use(VueMasonryPlugin).mount('#app')
