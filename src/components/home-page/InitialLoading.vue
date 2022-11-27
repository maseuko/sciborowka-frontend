<template>
    <div>
        <img :src="'/logo.svg'" alt=""/>
        <q-spinner color="green-7" size="3rem"></q-spinner>
    </div>
</template>

<style lang="scss" scoped>
    div{
        width: 100vw;
        height: 100vh;
        background: $green-1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
    }
</style>