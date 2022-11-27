<template>
    <q-card style="width: 100%; max-width: 18rem; min-height: 23rem; background-color: #fff;">
        <img :src="images[0].url" alt="">
        <div class="text">
            <p class="title">{{title}}</p>
            <p v-html="description" class="description"></p> 
        </div>
        <a :href="`/blogs/${id}`" @click="goTo">Zobacz więcej</a>   
    </q-card>
</template>

<script>
    export default {
        props: ['id','title','description','images'],
        methods:{
            goTo(e){
                e.preventDefault();
                this.$router.push("/blogs/"+this.id)
            }
            
        }
        
    }
</script>
<style lang="scss" scoped>
    a{
        background: transparent;
        border: 1px solid $green-7;
        color: $green-7;
        padding: 0.2rem 1rem;
        text-decoration: none;
        cursor: pointer;
        position: absolute;
        bottom: 1rem;
        left: 1rem;
        &:hover{
            background: rgba($green-7, $alpha: 0.2);
        }
    }
    .text{
        padding: 1rem;
    }
    img{
        aspect-ratio: 16/9;
    }
    .title{
        font-size: 1rem;
        color: black;
        font-weight: bold;
        text-decoration: none;
    }

    .description{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        font-size: 0.8rem;
        margin-bottom: 1rem;
        color: black;
        margin-top: 0.5rem;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
</style>