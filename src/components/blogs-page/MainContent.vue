<template>
    <div class="main_container">
        <!-- <skeletons-vue v-if="!fetched"></skeletons-vue> -->
        <h1>Ostatnie wydarzenia</h1>
        <div class="posts">
            <blog-mini-icon v-for="(post, idx) of posts" :key="idx" :title="post.blogPost.title" :url="post.images[0].url" :id="post.blogPost.id"></blog-mini-icon>
        </div>
        <button @click="loadPosts" class="load_more" v-if="isThereMorePages">Zobacz więcej</button>
        <p v-if="!isThereMorePages">To już wszystko!</p>
    </div>
</template>

<script>
    import { get_request } from '@/utils/request';
    import BlogMiniIcon from './BlogMiniIcon.vue';
    export default {
        components: { BlogMiniIcon },
        data(){
            return {
                fetched: false,
                postsVisible: [],
                posts: [],
                isThereMorePages: true,
                currentPage: 0
            }
        },
        methods: {
            async loadPosts() {
                if(!this.isThereMorePages) return;
                try {
                    const res = await get_request("https://server.sciborowka.pl/sciborowka-client/get-posts?page=" + this.currentPage + "&limit=20");
                    this.posts = [...this.posts,...res.data].sort((a,b)=>a.blogPost.id<b.blogPost.id);
                    this.fetched = true;
                    this.currentPage++;
                    const res2 = await get_request("https://server.sciborowka.pl/sciborowka-client/get-posts?page=" + this.currentPage + "&limit=20");
                    if(res2.statusCode === "NOT_FOUND") this.isThereMorePages=false;
                }
                catch (err) {
                    console.log(err);
                }
            }

        },
        created(){
            this.loadPosts();
        },
    }
</script>

<style lang="scss" scoped>
    .main_container{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        border: none;
        background: white;
        max-width: 80rem;
        margin: auto;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        p{
            margin-top: auto;
            font-size: 1.5rem;
            font-weight: bold;
        }

        h1{
            color: $green-7;
            font-size: 2rem;
            margin: 0;
            align-self: flex-start;
            font-weight: bold;
            border-bottom: 1px solid $green-7;
            min-width: 40%;
            margin-bottom: 1rem;
            margin-top: 1rem;
        }

        .posts{
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 90%;
            gap: 0.75rem;
            justify-content: center;
            @media(min-width: 768px){
                display: grid;
                grid-auto-flow: dense;
                grid-template-columns: repeat(auto-fill, 18rem);
            }
        }
    }

    .load_more{
        background: $green-8;
        color: white;
        padding: 1rem 4rem;
        border: none;
        font-size: 1.25rem;
        margin-top: 2rem;
    }
</style>