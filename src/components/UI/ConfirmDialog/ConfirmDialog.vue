<template>
    <q-dialog v-model="opened" persistent>
        <q-card style="max-width: 30rem; width: 95vw">
            <q-card-section class="row">
                <q-icon name="warning" color="red-7" size="3rem"></q-icon>
                <span class="q-ml-md text-bold" style="font-size: 2rem">Uwaga</span>
            </q-card-section>
            <q-card-section class="row">
                
                <span class="q-ml-sm text-bold">{{this.$store.getters["dialog/message"]}}</span>
            </q-card-section>
            <q-card-section class="row end gap-sm flex" style="gap: 0.5rem; justify-content: flex-end; flex-wrap: wrap;">
                <q-btn color="blue-7" @click="toggleVisibility">Nie</q-btn>
                <q-btn color="red-7" @click="$store.getters['dialog/confirmation']">Tak</q-btn>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<script>
import { mapMutations } from 'vuex';
    export default {
        computed:{
            opened(){
                return this.$store.getters['dialog/opened'];
            }
        },
        methods: {
            ...mapMutations("dialog", ['toggleVisibility'])
        }

    }
</script>