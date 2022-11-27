<template>
    <div class="main" :style="`background: url('${src}');`">
        <div><p><b>Kim jesteśmy?</b> <text v-html="desc"></text></p></div>
    </div>
</template>

<script>
    export default{
        props: ['src','desc']
    }
</script>

<style lang="scss" scoped>
    .main{
        padding: 2rem 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        background-size: contain;
        max-height: 30rem;
        overflow: hidden;
        img{
            width: 100%;
        }
        div{
            width: 100%;
            min-height: 100%;
            font-size: 1.25rem;
            padding: 2rem;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            height: fit-content;
            position: absolute;
            top: 0;
            color: white;
            align-items: center;
            text-align: center;
            p{
                background: white;
                margin: 0;
                max-width: 40rem;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                gap: 2rem;
                border: 1px solid #ccc;
                box-shadow: 1px 1px 10px $indigo-10;
                padding: 2rem;
                color: black;
                b{
                    font-size: 2rem;
                }
            }
        }
    }
</style>