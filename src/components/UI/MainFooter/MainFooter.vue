<template>
    <div class="footer">
        <div class="wrapper">
            <div class="info">
                <img src="logo_white.svg" alt="">
                <p>Dane kontaktowe:</p>
                <ul>
                    <li><b>Miasto:</b> Dobczyce</li>
                    <li><b>Ulica:</b> Krzyworzeka</li>
                    <li><b>Kod Pocztowy:</b> 32-410</li>
                    <li><b>E-Mail:</b> danuta.scibor@poczta.onet.pl</li>
                    <li><b>Nr. telefonu:</b> 507 425 711</li>
                </ul>
            </div>
            <map-div></map-div>
        </div>
        <p class="copyright">Wszystkie prawa zastrzeżone ©Ściborówka</p>
    </div>
        
</template>

<script>
    import MapDiv from '@/components/UI/MapDiv/MapDiv.vue';
    export default {
        components: {MapDiv}
    }
</script>

<style lang="scss" scoped>
    .copyright{
        background: rgb(100,100,100);
        width: 100%;
        padding: 1rem;
        margin: 0;
        text-align: center;
    }
    .footer{
        min-height: 20rem;
        background: rgb(60,60,60);
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
    }

    .wrapper{
        width: 95%;
        max-width: 70rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        @media(min-width: 1000px){
            display: grid;
            grid-template-columns: 0.6fr 1fr;
        }
        .info{
            // justify-self: flex-end;
            p{
                font-weight: bold;
                margin-top: 1rem;
                font-size: 1.25rem;
                border-top: 1px solid #fff;
                padding: 1rem 0;
            }
            ul{
                list-style: none;
                padding: 0;
                li{
                    font-size: 1.05rem;
                    margin-bottom: 0.5rem;
                }
            }
            img{
                max-width: 10rem;
            }
            
        }
    }
</style>