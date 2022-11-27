<template>
    <nav-bar :visible="true"></nav-bar>
    <div>
        <h1>
            404
        </h1>
        <p>Przepraszamy ale taka strona nie istnieje!</p>
    </div>
</template>

<script>
    import NavBar from '../NavBar/NavBar.vue';
    export default {
        components: {NavBar}
    }
</script>

<style scoped lang="scss">
    div{
        min-height: 100vh;
        background: url("../../../assets/tlo-drewno-biel.jpg");
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        h1{
            background: url("../../../assets/308941827_535642128562814_7301266559103166349_n.jpg");
            background-position: bottom;
            width: fit-content;
            min-height: 30rem;
            margin: 0;
            font-weight: bold;
            font-size: 50vw;
            display: flex;
            align-items: center;
            justify-content: center;
            background-clip: text;
            color: transparent;
            @media(min-width: 768px){
                font-size: 30vw;
            }
            
            display: flex;
            flex-direction: column;
           
        } 
        p{
            background: url("../../../assets/308941827_535642128562814_7301266559103166349_n.jpg");
            background-position: bottom;
            font-size: min(4rem, 10vw);
            font-weight: bold;
            position: absolute;
            bottom: 4rem;
            text-align: center;
            background-clip: text;
            color: transparent;
        }
    }
</style>