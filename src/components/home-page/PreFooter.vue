<template>
    <div style="position: relative;">
        <q-parallax :height="600">
        <template v-slot:media>
            <img src="313786780_843238320144239_8278330246321981762_n.jpg" alt="">
            
        </template>
        </q-parallax>
        <div class="cover">
                <h1>Czekamy na Ciebie!</h1>
                <p>Tak jest! Tylko Ciebie nam tutaj brakuje! Także póki Cię tutaj jeszcze nie ma możesz nas śledzieć na naszych social mediach!</p>
                <div class="socials">
                    <a class="media" href="https://www.facebook.com/Sciborowka" target="_blank">
                        <img src="fb_icon.svg" alt="">
                    </a>
                    <a class="media" href="https://www.instagram.com/sciborowka/?hl=pl" target="_blank">
                        <img src="icons8-instagram-old.svg" alt="">
                    </a>
                    <a class="media" href="https://danusia-sciborowka.blogspot.com" target="_blank">
                        <q-icon name="newspaper" color="white" size="50px"/>
                    </a>
                </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    .cover{
        position: absolute;
        inset: 0;
        background: rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        padding: 1rem;
        justify-content: center;
        h1{
            @media(min-width: 1000px){
                font-size: 3.5rem;
            }
            font-size: 2.5rem;
            border-bottom: 1px solid #fff;
            width: 100%;
            max-width: 50rem;
            text-align: center;
            font-weight: bold;
            
        }
        p{
            font-size: 1.25rem;
            max-width: 36rem;
            text-align: center;
            font-weight: bold;
        }

        .media{
            padding: 1.15rem 2rem 0.75rem;
            cursor: pointer;

        }
        .socials{
            margin-top: 2rem;
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>