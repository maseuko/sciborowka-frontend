<template>
    <ul>
        <li v-for=" (post, idx) in blogLoadedOptions" :key="post.blogPost.id">
            <div class="title">
                <text>{{idx+1}}</text><q-separator vertical></q-separator>{{post.blogPost.title}}
            </div>
            <div class="actions">
                <q-btn icon="edit" class="bg-green-7 text-white" round @click="$emit('edti_blog', post)"></q-btn>
                <q-separator vertical></q-separator>
                <q-btn icon="delete" class="bg-red-7 text-white" round @click="removeBtnAction(idx)"></q-btn>
            </div>
        </li>
        <div class="q-mx-auto q-mt-lg" style="margin-top: auto" v-intersection="loadBlogs()">
            <q-spinner-dots size="3rem" color="green-7" v-if="isThereMorePages"></q-spinner-dots>
            <p v-if="!isThereMorePages">To już wszystkie posty.</p>
        </div>
    </ul>
</template>

<script>
import methods from './methods';

export default {
    data(){
        return {
            blogLoadedOptions: [],
            loading: true,
            page: 0,
            isThereMorePages: true,
            defaultLoaded: false
        }
    },
    methods
}
</script>

<style scoped>
    ul{
        max-width: 80rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        background: white;
        width: 100%;
        margin: 0 auto;
        border: 1px solid #ccc;
        min-height: 100%;
        padding: 0;
    }
    ul>li{
        list-style: none;
        border-bottom: 1px solid #ccc;
        padding: 1rem;
        display: flex;
        gap: 0.25rem;
        justify-content: space-between;
        width: 100%;
    }
    .title{
        display: flex;
        gap: 0.5rem;
        align-items: center;
        flex-wrap: wrap;
    }
    .title>text{
        font-weight: bold;
    }
    .actions{
        display: flex;
        gap: 1rem;
        align-self: start;
    }
</style>