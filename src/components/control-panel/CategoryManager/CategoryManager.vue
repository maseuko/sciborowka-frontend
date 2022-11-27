<template>
    <div class="main">
        <add-category :categories="categories" @category_added="fetchExistingCategories"></add-category>
        <category-list :categories="categories" @category_deleted="fetchExistingCategories"></category-list>
    </div>
</template>

<script>
import AddCategory from './AddCategory.vue';
import CategoryList from './CategoryList.vue';
import { get_request } from '@/utils/request';
    export default {
        data(){
            return {
                categories: []
            }
        },
        components: {AddCategory,CategoryList},
        methods: {
            async fetchExistingCategories(){
                const categories = await get_request("https://server.sciborowka.pl/sciborowka-client/categories");
                if(categories.statusCode==="OK") this.categories = categories.data.filter(c=>c.name!=="blog");
            }
        },
        created(){
            this.fetchExistingCategories();
        }
    }
</script>

<style scoped lang="scss">
    .main{
        width: 100%;
        max-width: 80rem;
        background: white;
        margin: auto;
        min-height: 100%;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        padding: 1rem;
    }
</style>