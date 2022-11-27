<template>
    <q-form @submit="createCategory">
        <h1>Dodaj nową/do kategorię/ii</h1>
        <div class="actions">
            <q-select v-model="selected" outlined :options="options" :disable="!!newCategoryName || loading" />
            <q-input outlined v-model="newCategoryName" label="Nazwa kategorii" :disable="loading" />
        </div>
        <file-dropzone :disabled="loading" @file_added="fetchImages"></file-dropzone>
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
import FileDropzone from '@/components/UI/FileDropzone/FileDropzone.vue'
import { post_request } from '@/utils/request';
    export default {
        props: ["categories"],
        components: { FileDropzone },
        data(){
            return {
                newCategoryName: "",
                selected: null,
                loading: false,
                images: []
            }
        },
        computed:{
            options(){
                return this.categories.map(c=>c.name);
            }
        },
        methods: {
            fetchImages(files){
                this.images = files;
            },
            async createCategory(e){
                e.preventDefault();
                this.loading = true;
                if(!this.images.length) return;
                if(!this.selected && !this.newCategoryName) return;
                const fd = new FormData();
                for(const img of this.images){
                    fd.append("files", img);
                }
                const f = this.newCategoryName||this.selected;
                const res = await post_request("https://server.sciborowka.pl/sciborowka-admin/upload-images?category="+f, fd, false);
                if(res.statusCode === "CREATED") {
                    this.newCategoryName = "";
                    this.$emit("category_added");
                }
                this.loading = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    form{
        display: grid;
        gap: 1rem;
        &>h1{
            margin: 0;
            color: $green-7;
            font-size: 2rem;
            font-weight: bold;
        }
        .actions{
            display: grid;
            gap: 1rem;
            @media(min-width: 768px){
                grid-template-columns: 1fr 1fr;
            }
        }
    }
</style>