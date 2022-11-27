<template>
    <q-card class="q-mx-auto ovarlaping-ctx" :class="{'disabled': disabled}">
        <div class="main-box__info">
            <p>
                {{sizeToString}}
            </p>
            <q-btn flat @click="plusBtnClick($event, disabled)">
                <q-icon color="white" name="add_box" size="2rem"></q-icon>
            </q-btn>
            
        </div>
        <div 
            class="main-box-size" 
            @click="plusBtnClick($event, disabled)" 
            ref="dropzone" 
            :class="{'main-box__file-over': isFileOver, 'main-box__content-alignment': files.length}" 
            @dragover="dragOver" @dragleave="dragLeave" @drop="addFile">
                <div class="flex column flex-center" v-if="!files.length">
                    <q-icon name="image" size="15rem"></q-icon>
                    <h5>Tutaj upuść swoje zdjęcia</h5>
                </div>
                <input type="file" multiple style="display: none" @change="addFile" ref="file_input">
                <ImageItem v-for="(file, idx) in files" :key="idx" :id="idx" :file="file" :removeFile="removeFile"></ImageItem>
        </div>
        <div></div>
    </q-card>
</template>

<script>
import methods from './methods';

import ImageItem from './ImageItem.vue';
import { mapMutations } from 'vuex';

    export default {
    props: ["disabled"],
    data() {
        return {
            files: [],
            notModifiedFiles: [],
            isFileOver: false,
            availableFileTypes: ["image/png", "image/jpeg", "image/apng", "image/avif", "image/gif", "image/svg+xml", "image/webp"],
            size: 0
        };
    },
    computed: {
        sizeToString(){
            return this.sizeLabel(this.size);
        }
    },
    methods: {
        ...methods,
        ...mapMutations("carousel", ['setImageArray'])
    },
    watch:{
        disabled(){
            if(!this.disabled){ 
                this.files = [];
                this.notModifiedFiles = [];
                this.size = 0;
            }
        }
    },
    components: { ImageItem }
}
</script>

<style lang="scss" scoped>
    .ovarlaping-ctx{
        padding: 1rem; 
        width: 100%;
        @media(max-width: 281px){
            padding: 0;
        }
        &.disabled{
            box-shadow: none;
            border: 1px solid rgb(234, 234, 234);
        }
    }
    .main-box-size{
        padding: 1rem;
        border: 2px $green-7 dashed;
        color: $green-7;
        align-items: center;
        border-top: none;
        @media (max-width: 768px) {
            padding: 0.5rem;
        }
        @media(max-width: 281px){
            padding: 0.1rem;
        }
    }
    .main-box__file-over{
        background: #ccc;
        color: $green-6;
    }
    h5{
        margin-top: 0;
    }
    .main-box__content-alignment{
        columns: 3 7rem;
        gap: 0.5rem;
        overflow-y: auto;
    }
    .main-box__info{
        background-color: $green-7;
        min-height: 2rem;
        padding: 0.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &>p{
            color: white;
            font-size: 1.05rem;
        }
    }

</style>