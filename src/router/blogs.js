import { defineAsyncComponent } from 'vue';
const Blogs = defineAsyncComponent(()=>import('../pages/BlogsVue.vue'));
const FullPageBlog = defineAsyncComponent(()=>import('../components/blogs-page/FullPageBlog.vue'));
const MainContent = defineAsyncComponent(()=>import('../components/blogs-page/MainContent.vue'));

export default {
    path: '/blogs',
    component: Blogs,
    children:[
        {
            path: "",
            component: MainContent
        },
        {
            path: ":id",
            component: FullPageBlog
        }
    ]
}