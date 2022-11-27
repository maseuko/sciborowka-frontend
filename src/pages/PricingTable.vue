<template>
    <nav-bar :visible="true"></nav-bar>
    <div class="main">
        <div class="main_ctx">
            <img src="logo.svg"/>
            <table>
                <tr>
                    <th>Usługa</th>
                    <th>
                        Osoba dorosła
                    </th>
                    <th>
                        Dzieci do lat 10
                    </th>
                </tr>
                <tr>
                    <th>Nocleg(Powyżej 1 nocy)</th>
                    <td>80 zł</td>
                    <td>50 zł</td>
                </tr>
                <tr>
                    <th>Pokój jednoosobowy(Powyżej 1 nocy)</th>
                    <td>80 zł</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th>Obiad</th>
                    <td>30 zł</td>
                    <td>30 zł</td>
                </tr>
            </table>
        </div>
    </div>
    <main-footer></main-footer>
</template>

<script>
import NavBar from '@/components/UI/NavBar/NavBar.vue';
import MainFooter from '@/components/UI/MainFooter/MainFooter.vue';

    export default {
        data(){
            return {
                categories: []
            }
        },
        components: { NavBar,MainFooter},
    }
</script>

<style scoped lang="scss">
    .main{
        background: url("../assets/tlo-drewno-biel.jpg");
        min-height: 100vh;

        .main_ctx{
            background: white;
            max-width: 62rem;
            min-height: 100vh;
            margin: auto;
            padding: 3.5rem 1rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 4rem;
            overflow: auto;

            table{
                max-width: 100%;
                overflow: auto;
                font-size: 1.25rem;                
                tr{
                    background: rgb(200,200,200);
                    td{
                        text-align: center;
                        border: none;
                        padding: 1rem;
                    }
                    th{
                        padding: 1rem;
                    }
                    &:nth-child(3n), &:first-of-type{
                    background: rgb(60,60,60);
                    color: white;
                    }
                }
            }
        }

    }
</style>