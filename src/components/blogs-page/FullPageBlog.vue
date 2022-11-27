<template>
    <div class="main">
        <div class="post">
            <h1>{{post.title}}</h1>
            <p v-html="post.description"></p>
            <h1>Galeria</h1>
            <div class="gallery" v-masonry ref="galleryCtx">
                <image-item v-masonry-tile v-for="(img, idx) of images" :key="idx" :url="img.url" :idx="idx"/>
            </div>
        </div>
    </div>
</template>

<script>
import { get_request } from '@/utils/request';
import ImageItem from './ImageItem.vue';
    export default {
  components: { ImageItem },
        data(){
            return {
                post: {},
                images: [],
                loading: true
            }
        },
        methods: {
            async fetchBlog(){
                const id = this.$route.params.id;
                try{
                    const data = await get_request("https://server.sciborowka.pl/sciborowka-client/get-post/"+id);
                    console.log(data);
                    if(data.statusCode === "OK"){ 
                        this.post = data.data.blogPost;
                        this.images = data.data.images;
                        this.$store.commit("carousel/setImageArray", data.data.images);
                    }
                    else this.$router.push("/not-found");

                    this.loading = false;
                }catch(err){
                    this.err = err;
                    this.loading = false;
                    this.$router.push("/not-found");
                }
            }
        },
        created(){
            this.fetchBlog();
        }
    }
</script>

<style lang="scss" scoped>
p,ul,li{
    font-size: 1.25rem;
}
    .main{
        min-height: 100vh;
        background: url("../../assets/tlo-drewno-biel.jpg");

        .post{
            background: white;
            max-width: 63rem;
            margin: auto;
            min-height: 100vh;
            box-shadow: 0px -15px 20px #ccc;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            padding: 1rem 1rem 3rem;
            position: relative;
            h1{
                font-size: 2rem;
                font-weight: bold;
                color: $green-7;
                margin: 0;
            }
            .gallery{
                justify-content: center;
            }
        }
    }
</style>