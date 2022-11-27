<template>
    <section>
        <h1>Modyfikuj istniejące kategorie</h1>
        <ul>
            <category-list-item v-for="(c, idx) of categories" :key="idx" :name="c.name" :id="idx"
                @category_deleted="$emit('category_deleted',$event)"
            ></category-list-item>
        </ul>
    </section>
    
</template>

<script>
    import CategoryListItem from './CategoryListItem.vue';
    export default {
        props: ["categories"],
        components: {CategoryListItem}
    }
</script>

<style scoped lang="scss">
    section{
        h1{
            font-size: 2rem;
            font-weight: bold;
            margin: 0;
            color: $green-7;
        }
        ul{
            list-style: none;
            padding: 0;
        }
    }
</style>