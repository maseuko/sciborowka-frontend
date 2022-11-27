<template>
    <q-card @mouseenter="toggleOverlayVisibility" @mouseleave="toggleOverlayVisibility" :class="`${pictureMode}`" @click="$event.stopPropagation()">
        <img :src="file.__img.src" alt="">
        <div class="data-overlay" :class="{'data-overlay__showed': overlayShown}">
            <div class="data-overlay__header">
                <p>
                    {{`${file.name}(${file.__img.sizeLabel})`}}
                </p>
              <q-btn
                class="gt-xs close-button"
                size="12px"
                flat
                dense
                round
                icon="close"
                @click="removeFile($event, id)"
              />

            </div>
            <q-btn color="green-7" class="absolute-center" @click="seeFullImage">Podgląd</q-btn>
        </div>
    </q-card>
</template>

<script>
import { mapMutations } from 'vuex';
    export default {
        props: ['file', 'removeFile', 'id'],
        data(){
            return {
                overlayShown: false
            }
        },
        computed:{
            pictureMode(){
                return this.file.__img.width<1000 ? "longer" : "wider";
            }
        },
        methods: {
            toggleOverlayVisibility(){
                this.overlayShown = !this.overlayShown;
            },
            seeFullImage(){
                this.setStartingImage(this.id);
                this.toggleVisibility();
            },
            ...mapMutations("carousel", ['setStartingImage', 'toggleVisibility'])
        }
    }
</script>

<style lang="scss" scoped>
    .longer{
        max-width: 15rem;
    }
    .wider{
        max-width: 25rem;
    }
    .q-card{
        position: relative;
        overflow: hidden;
        &:nth-of-type(n+2){
            margin-top: 0.5rem
        }
    }
    .data-overlay{
        width: 100%;
        height: 100%;
        position: absolute;
        /* top: 0; */
        background: rgba(0,0,0,0.4);
        color: white;
        font-weight: bold;
        transition: all 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
    }
    .data-overlay__header{
        word-wrap: break-word;
        display: flex;
        justify-content: space-between;
        padding: 0.45rem;
        max-height: 100px;
    }
    p{
        max-width: calc(100% - 1.75rem);
        white-space: normal;
    }
    .close-button:first-of-type{
        height: 2.25rem;
        width: 3em;
    }
    .data-overlay__showed{
        transform: translateY(-100%);
    }
</style>