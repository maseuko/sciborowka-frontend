<template>
    <div class="main">
        <h1>Ostatnie wydarzenia</h1>
        <div class="posts">
            <PostTemplate
                v-for="post in posts"
                :key="post.blogPost.id"
                :id="post.blogPost.id"
                :title="post.blogPost.title"
                :description="post.blogPost.description"
                :images="post.images"
            ></PostTemplate>
            <SkeletonsVue v-if="!fetched"></SkeletonsVue>
        </div>
        <div style="display: flex; justify-content: center">
            <button class="more" v-if="fetched" @click="$router.push('/blogs')">ZOBACZ WSZYSTKIE</button>
        </div>
        
    </div>
    
</template>

<script>
    import { get_request } from '@/utils/request';
    import PostTemplate from './PostTemplate.vue';
    import SkeletonsVue from './SkeletonsVue.vue';
    export default {
    data() {
        return {
            posts: [],
            fetched: false,

        };
    },
    methods: {
        async loadPosts() {
            try {
                const res = await get_request("https://server.sciborowka.pl/sciborowka-client/get-posts?page=0&limit=3");
                this.posts = res.data;
                this.fetched = true;
            }
            catch (err) {console.log(err)}
        }
    },
    created() {
        this.loadPosts();
    },
    components: { PostTemplate, SkeletonsVue }
}
</script>

<style lang="scss" scoped>
    .main{
        margin: auto;
        padding-bottom: 2rem;
        background: url("../../assets/tlo-drewno-biel.jpg");
        background-size: cover;
        background-position: right;
        display: grid;
        gap: 1rem;
        overflow: auto;
        padding: 2rem 0;
        min-height: 100vh;
        .posts{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
        }
        h1{
            font-size: 2rem;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid black;
            max-width: 35rem;
            // color: $green-7;
            margin: auto;
            @media(min-width: 1000px){
                font-size: 2.5rem;
            }
        }

        .more{
            background: $green-8;
            padding: 1rem 2rem;
            border: none;
            color: white;
            margin: auto;
            cursor: pointer;
            margin-top: 2rem;
        }
    }
</style>