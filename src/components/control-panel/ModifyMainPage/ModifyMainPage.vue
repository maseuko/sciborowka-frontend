<template>
    <div class="main" v-if="!initialLoading">
        <h1>Wideo startowe</h1>
        <section class="main_main-video">
            <video autoplay loop controls muted preload="true" ref="vid" v-if="!newConfig.mainVideo.file">
                <source :src="defaultConfig.mainVideo.url" type="video/mp4" />
            </video>
            <video autoplay loop controls muted preload="true" v-if="newConfig.mainVideo.file">
                <source :src="newConfig.mainVideo.url" type="video/mp4" />
            </video>
            <q-uploader
                color="green-7"
                :disable="loading"
                flat
                bordered
                hide-upload-btn
                style="width: 100%; min-height: calc(100% - 2rem);"
                @added="newMainVideo"
                @removed="removeNewMainVideo"
            />
        </section>
        <h1>Sekcja o nas - tło</h1>
        <section class="main_main-about">
            <q-card class="img_preview">
                <div :style="{background: `url(${newConfig.aboutSection.url||defaultConfig.aboutSection.url})`, minHeight: '25rem' }"></div>
            </q-card>
            <q-uploader
                color="green-7"
                flat
                :disable="loading"
                bordered
                style="width: 100%;"
                hide-upload-btn
                @added="newAboutImage"
                @removed="removeAboutImage"
            />
        </section>
        <h1>Sekcja o nas - opis</h1>
        <q-editor v-model="newConfig.aboutSection.description" min-height="10rem" toolbar-bg="green-7" toolbar-text-color="white" :disable="loading" />
        <q-btn color="green-7" :disable="loading" type="submit" style="width: 100%; margin-top: 1.5rem" @click="uploadChanges">
        <q-inner-loading :showing="loading" label-class="text-teal" />
            {{ !loading ? "Zapisz" : "" }}
        </q-btn>
    </div>
</template>

<script>
import methods from './methods';
export default {
        data(){
            return {
                loading: false,
                initialLoading: true,
                newConfig: {
                    mainVideo: {
                        url: "",
                        file: null
                    },
                    aboutSection: {
                        url: "",
                        file: null,
                        description: ""
                    }
                },
                defaultConfig: {
                    mainVideo: {
                        url: ""
                    },
                    aboutSection: {
                        url: "",
                        description: ""
                    }
                }
            }
        },
        methods,
        created(){
            this.fetchDefaultConfig();
        }
    }
</script>

<style scoped lang="scss">
    .main{
        background: white;
        padding: 1rem;
        max-width: 80rem;
        margin: auto;
        & > h1{
                margin: 0;
                font-size: 2rem;
                color: $green-7;
                font-weight: bold;
        }
        & .main_main-about,
        & .main_main-video{
            display: grid;
            @media(min-width: 1000px){
                grid-template-columns: 1fr 1fr;
                gap: 0.75rem;
            }
        }
        & .main_main-video{
            & > video{
                width: 100%;
                padding: 0.2rem;
                border: 1px solid #ccc;
                border-radius: 0.5rem;
                box-shadow: 0px 0px 8px #ccc;
            }
        }

        & .main_main-about{
            & .img_preview{
                min-height: 25rem;
                padding: 0.2rem;
            }
        }
    }
</style>