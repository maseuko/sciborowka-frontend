<template>
    <div class="icons">
        <a href="https://www.facebook.com/Sciborowka" target="_blank">
            <img src="../../assets/facebook.png" alt="facebook"/>
        </a>
        <a href="https://www.instagram.com/sciborowka/?hl=pl" target="_blank">
            <img src="../../assets/instagram.png" alt="instagram"/>
        </a>
        <a href="https://danusia-sciborowka.blogspot.com" target="_blank">
            <q-icon name="newspaper" color="green-7" size="75px"/>
        </a>
    </div>
</template>

<style scoped lang="scss">
    .icons{
        min-height: 6rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        a{
            img{
                align-self: flex-start;
                max-width: 4rem;
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                margin: auto;
            }
        }
    }
</style>