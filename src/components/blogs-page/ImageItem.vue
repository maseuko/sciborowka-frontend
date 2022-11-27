<template>
    <div ref="imgCtx" @resize="loaded">
        <img :src="url" style="z-index: -1;" ref="img" @click="openGallery"/>
    </div>
</template>

<script>
    export default {
        props: ['url', 'idx'],
        methods:{
            openGallery(){
                this.$store.commit("carousel/setStartingImage", this.idx);
                this.$store.commit("carousel/toggleVisibility");
            }
        },
    }
</script>

<style scoped lang="scss">
    div{
        width: 50%;
        height: fit-content;
        cursor: pointer;
        @media(min-width: 768px){
            max-width: 20rem;
        }
        
        padding: 0 0.25rem;
        img{
            max-width: 100%;
            border-radius: 0.5rem;
        }
    }
</style>