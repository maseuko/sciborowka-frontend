<template>
  <blogs-list-vue
    v-if="!isSelected"
    @edti_blog="setBlogToEdit"
  ></blogs-list-vue>
  <edit-form
    v-if="isSelected"
    :blog="blogToEdit"
    @return="returnToList"
  ></edit-form>
</template>

<script>
import BlogsListVue from "./BlogList/BlogsList.vue";
import EditForm from "./EditForm/EditForm.vue";
export default {
  data() {
    return {
        isSelected: false,
        blogToEdit: null,
    };
  },
  methods: {
    setBlogToEdit(post) {
        this.blogToEdit = post;
        this.isSelected = true;
    },
    returnToList(){
      this.isSelected = false;
      this.blogToEdit = null;
    }
  },
  components: { BlogsListVue, EditForm },
};
</script>
