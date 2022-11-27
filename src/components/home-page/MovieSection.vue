<template>
<div class="main">
    <video autoplay loop muted playsinline ref="vid" class="blured" preload="true">
            <source :src="src" type="video/mp4">
    </video>
    <video autoplay loop muted playsinline ref="vid" preload="true">
            <source :src="src" type="video/mp4">
    </video>
    
    <div class="cover">
        <img src="../../assets/logo_white.svg" alt=""><p>twoje miejsce na ziemi</p>
    </div>
</div>
            
    
</template>

<script>
    export default{
        props: ['src']
    }
</script>

<style lang="scss" scoped>
    .blured{
        display: none;
        @media(min-width: 1400px){
            display: block;
        }
        width: 100vw;
        height: 100vh;
        position:absolute;
        top: 0;
        scale: 2;
        z-index: -1;
        filter: blur(20px);
    }
    .main{
        position: relative;
        background-image: url("../../assets/waterfall.mp4");
        overflow: hidden;
        display: flex;
        justify-content: center;
        video{
            min-height: 100vh;
            @media(max-width: 1400px){
                max-height: 100vh;
            }
            @media(min-width: 1400px){
                max-width: 105%;
            }
        }
    }
    .cover{
        position: absolute;
        background: rgba(0,0,0,0.25);
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 3rem;
        flex-wrap: wrap;
        @media(max-width: 850px){
            flex-direction: column;
        }

        &>img{
            
            @media(max-width: 850px){
                max-width: min(95vw, 20rem);
            }
            @media(min-width: 850px){
                margin-bottom: 6rem;
            }
        }
        &>p{
            margin: 0;
            font-size: 2rem;
            @media(min-width: 850px){
                margin-bottom: 6rem;
            }
            
            @media(min-width: 850px){
                margin-top: 2rem; 
                margin-left: 1rem;
                font-size: 2.5rem;
            }
        }
    }
</style>