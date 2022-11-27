<template>
    <a :style="`background: url(${url}); background-size: cover;`" :href="`blogs/${id}`" @click="goTo">
        <div class="cover">
            <p>{{title}}</p>
        </div>
    </a>
</template>

<script>
    export default {
        props: ['url', 'title', 'id'],
        methods:{
            goTo(e){
                e.preventDefault();
                this.$router.push('/blogs/'+this.id);
            }
        }
    }
</script>

<style scoped lang="scss">
    a{
        background-position: center;
        width: 100%;
        min-height: 15rem;
        transition: all 0.3s ease-in-out;
        overflow: hidden;
        border-radius: 0.25rem;
        box-shadow: 0 0 3px rgb(60,60,60);
        text-decoration: none;
        position: relative;
        &:nth-child(4n){
            grid-column: span 2;
        }
        &:nth-child(1){
            grid-column: span 2;
            grid-row: span 2;
        }
        &:hover{
            transform: scale(1.05);
        }
        .cover{
            position: absolute;
            inset: 0;
            background: linear-gradient(transparent, rgba(20,20,20,0.5));
            display: flex;
            align-items: flex-end;
            padding: 1rem;
            cursor: pointer;
            p{
                color: white;
                font-size: 1.5rem;
                font-weight: bold;
            }
        }
    }
    
</style>