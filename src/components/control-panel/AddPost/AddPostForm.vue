<template>
    <q-form class="form-container" @submit="addPost">
        <p style="font-size: 1.25rem; font-weight: bold;">NOWY POST</p>
        <q-input standout="bg-green-7 text-white"  v-model="title" label="Tytuł" :disable="loading"></q-input>
        <div>
            <p>OPIS</p>
            <q-editor v-model="description" min-height="5rem" toolbar-bg="green-7" toolbar-text-color="white" :disable="loading" />
        </div>
        <FileDropzone :disabled="loading" @file_added="fileAdded($event)"></FileDropzone>
        <q-btn color="green-7" :disable="loading" type="submit" style="margin-top: auto">
                <q-inner-loading
                    :showing="loading"
                    label-class="text-teal"
                />
                {{!loading ? 'Dodaj' : ''}}
            </q-btn>
    </q-form>
</template>

<script>
import FileDropzone from '@/components/UI/FileDropzone/FileDropzone.vue';
import methods from './methods';
export default {
    data() {
        return {
            title: "",
            description: "",
            loading: false,
            files: []
        };
    },
    methods,
    components: { FileDropzone }
}
</script>

<style lang="scss" scoped>
    .form-container{
        background: white;
        width: 100%;
        max-width: 80rem;
        margin: auto;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        min-height: 100%;

        &>p, &>div>p{
            color: $green-7;
        }
        @media(max-width:281){
            padding: 0;
            gap:0.1rem
        }
    }
</style>