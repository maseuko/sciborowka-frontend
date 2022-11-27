import { defineAsyncComponent } from 'vue';

const ControlPanel = defineAsyncComponent(() => import('../pages/ControlPanel.vue'));
const LoginPanel = defineAsyncComponent(()=>import('../components/control-panel/Auth/LoginPanel.vue'));
const AddPostForm = defineAsyncComponent(()=>import('../components/control-panel/AddPost/AddPostForm.vue'));
const ModifyPanel = defineAsyncComponent(()=>import('../components/control-panel/Modify/ModifyPanel.vue'));
const ModifyMainPage = defineAsyncComponent(()=>import('../components/control-panel/ModifyMainPage/ModifyMainPage.vue'));
const CategoryManager = defineAsyncComponent(()=>import('../components/control-panel/CategoryManager/CategoryManager.vue'));

export default {
    path: '/control-panel',
    component: ControlPanel,
    children: [
        {
            path: 'login', component: LoginPanel, alias: "/control-panel"
        },
        {
            path: 'add-post', component: AddPostForm, meta: {needsAuth: true}
        },
        {
            path: 'modify-post', component: ModifyPanel, meta: {needsAuth: true}
        },
        {
            path: 'modify-main-page', component: ModifyMainPage, meta: {needsAuth: true}
        },
        {
            path: 'manage-categories', component: CategoryManager, meta: {needsAuth: true}
        }
    ]
}