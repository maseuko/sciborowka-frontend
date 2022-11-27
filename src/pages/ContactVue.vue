<template>
    <nav-bar visible="true"></nav-bar>
    <div class="main">
        <div class="white-cover">
            <img src="logo.svg" style="column: span 2;"/>
            <div class="grid">
                <info-list></info-list>
                <map-div></map-div>
            </div>
            <social-media-icons></social-media-icons>
        </div>
    </div>
    <main-footer></main-footer>
</template>

<script>
    import NavBar from '@/components/UI/NavBar/NavBar.vue';
    import MainFooter from '@/components/UI/MainFooter/MainFooter.vue';
    import InfoList from '@/components/contact-page/InfoList.vue';
    import MapDiv from '@/components/UI/MapDiv/MapDiv.vue';
    import SocialMediaIcons from '@/components/contact-page/SocialMedia.vue';
    export default {
        components: {NavBar,MainFooter,InfoList,MapDiv, SocialMediaIcons}
    }
</script>

<style scoped lang="scss">
    .main{
        min-height: 100vh;
        background: url("../assets/tlo-drewno-biel.jpg");

        .white-cover{
            background: white;
            max-width: 65rem;
            margin: auto;
            min-height: 100vh;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            box-shadow: 0px 0px 20px #ccc;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            padding: 2rem;
            margin-top: 3rem;
            .grid{
                display: grid;
                width: 100%;
                gap: 1rem;
                @media(min-width: 850px){
                    grid-template-columns: 0.75fr 1.25fr;
                }
            }
            
            
        }
    }
</style>