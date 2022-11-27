<template>
    <div class="img_ctx">
        <img :src="url" @click="openGallery">
        <q-btn flat round icon="close" class="delete_btn" @click="removeBtnAction"></q-btn>
    </div>
</template>

<script>
    export default {
        props: ['url', 'id', 'idx'],
        methods: {
            removeBtnAction(){
                this.$store.commit("dialog/setCofirmation", () => this.$emit('delete_image', this.id));
                this.$store.commit("dialog/setMessage", "Czy na pewno chcesz usunąć to zdjęcie?");
                this.$store.commit("dialog/toggleVisibility");
            },
            openGallery(){
                this.$store.commit("carousel/setStartingImage", this.idx);
                this.$emit("open_gallery");
            }
        }
    }
</script>

<style scoped lang="scss">
    .img_ctx{
        max-width: 100%;
        padding: 0.2rem;
        border: 1px solid #ccc;
        box-shadow: 0px 0px 10px #ccc;
        border-radius: 0.5rem;
        padding-bottom: 0;
        margin-bottom: 0.5rem;
        position: relative;
        cursor: pointer;
        img{
            max-width: 100%;
            border-radius: 0.5rem;
        }
        .delete_btn{
            position: absolute;
            right: 1rem;
            top: 1rem;
            color: $red-7;
            font-weight: bold;
            background: rgba(240,240,240, 0.4);
        }
    }
</style>