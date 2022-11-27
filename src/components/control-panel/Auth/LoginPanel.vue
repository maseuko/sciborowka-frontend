<template>
    <q-card class="column absolute-center login-ctx text-green-7 q-pa-md ">
        <div class="row justify-center center">
            <q-avatar icon="account_circle" size="9rem"></q-avatar>
        </div>
        <q-form class="q-gutter-md column" @submit="signIn({login,password})">
            <div>
                <q-input standout="bg-green-7 text-white" v-model="login" label="Login" /> 
            </div>
            <div>
                <q-input standout="bg-green-7 text-white" type="password" v-model="password" label="Hasło" />
            </div>
            <p class="text-red-5" v-if="isError">Niepoprawne dane logowania.</p>
            <q-btn color="green-7" :disable="isLoading" type="submit">
                <q-inner-loading
                    :showing="isLoading"
                    label-class="text-teal"
                />
                {{!isLoading ? 'Zaloguj' : ''}}
            </q-btn>
        </q-form>
    </q-card>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
    export default {
        data(){
            return {
                login: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters("auth", ['isLoading','isError'])
        },
        methods:{
            ...mapActions("auth",['signIn'])
        }
    }
</script>

<style scoped>
    .login-ctx{
        max-width: 35rem;
        min-width: 20rem;
    }
</style>