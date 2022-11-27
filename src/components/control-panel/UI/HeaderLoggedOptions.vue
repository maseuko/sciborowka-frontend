<template>
    <div class="options">
        <router-link to="/control-panel/add-post">
            <q-icon flat name="article"></q-icon>
            <q-separator vertical color="white"></q-separator>
            Nowy Post
        </router-link>
        <router-link to="/control-panel/modify-post" active-class="active">
            <q-icon flat name="edit_document"></q-icon>
            <q-separator vertical color="white"></q-separator>
            Modyfikuj Post
        </router-link>
        <router-link to="/control-panel/modify-main-page" active-class="active">
            <q-icon flat name="web"></q-icon>
            <q-separator vertical color="white"></q-separator>
            Strona Główna
        </router-link>
        <router-link to="/control-panel/manage-categories" active-class="active">
            <q-icon flat name="image"></q-icon>
            <q-separator vertical color="white"></q-separator>
            Zarządzaj Kategoriami
        </router-link>
        <button @click="$store.dispatch('auth/logout')">
            <q-icon flat name="logout"></q-icon>
            <q-separator vertical color="white"></q-separator>
            Wyloguj
        </button>
    </div>
    <div class="options_mobile">
        <router-link to="/control-panel/add-post">
            <q-icon flat name="article"></q-icon>
            <q-separator vertical color="white"></q-separator>
        </router-link>
        <router-link to="/control-panel/modify-post" active-class="active">
            <q-icon flat name="edit_document"></q-icon>
            <q-separator vertical color="white"></q-separator>
        </router-link>
        <router-link to="/control-panel/modify-main-page" active-class="active">
            <q-icon flat name="web"></q-icon>
            <q-separator vertical color="white"></q-separator>
        </router-link>
        <router-link to="/control-panel/manage-categories" active-class="active">
            <q-icon flat name="image"></q-icon>
            <q-separator vertical color="white"></q-separator>
        </router-link>
        <button @click="$store.dispatch('auth/logout')">
            <q-icon flat name="logout"></q-icon>
            <q-separator vertical color="white"></q-separator>
        </button>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped lang="scss">
    .active,
    .router-link-active,
    .router-link-exact-active{
        background: $green-7;
    }
    .options{
        background: rgb(50,50,50);
        width: 100%;
        max-width: 20rem;
        min-height: 100%;
        display: none;
        flex-direction: column;
        gap: 0.5rem;
        padding: 0.5rem;
        @media(min-width: 1000px){
            padding-top: 5rem;
            display: flex;
        }
        button, a{
            text-decoration: none;
            color: white;
            font-size: 1.25rem;
            padding: 1rem;
            background: rgb(30,30,30);
            border-radius: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            &:hover, .router-link-active, .router-link-exact-active{
                background: $green-7;
            }
            
        }

        .active,
        .router-link-active,
        .router-link-exact-active{
        background: $green-7;
    }

        button{
            background: $green-7;
            border: none;
            justify-self: flex-end;
            cursor: pointer;
            margin-top: auto;
            &:hover{
                background: $green-8;
            }
        }
    }

    .options_mobile{
        display: none;
        position: fixed;
        inset: auto 0 0 0;
        background: rgb(50,50,50);
        z-index: 5;
        align-items: center;
        justify-content: center;
        @media(max-width: 1000px){
            display: flex;
            overflow: auto;
        }
        button, a{
            font-size: 1.5rem;
            color: white;
            padding: 1rem;
            width: 10rem;
            text-align: center;
        }
        button{
            background: $green-7;
            border: none;
        }
    }
</style>

