<template>
  <q-form class="form-container q-mx-auto" @submit="modifyPost">
    <p style="font-size: 1.25rem; font-weight: bold">
      <q-btn icon="chevron_left" flat round @click="$emit('return')"></q-btn> EDYTUJ POST
    </p>
    <q-input
      standout="bg-green-7 text-white"
      label="Tytuł"
      :disable="loading"
      v-model="title"
    ></q-input>
    <div>
      <p>OPIS</p>
      <q-editor
        min-height="5rem"
        toolbar-bg="green-7"
        toolbar-text-color="white"
        :disable="loading"
        v-model="description"
      />
    </div>
    <div class="existed_images" @click="setCarouselToExistingImg">
        <ExistingImage
            v-for="(img, idx) in images"
            :key="img.id"
            :src="img.url"
            :id="img.id"
            :que="idx"
            @image_removed="imgRemoved"
        />
        <text v-if="!images.length">Brak zdjec w tym poscie.</text>
    </div>
    <FileDropzone
      :disabled="loading"
      @file_added="fileAdded($event)"
    ></FileDropzone>
    <q-btn color="green-7" :disable="loading" type="submit">
      <q-inner-loading :showing="loading" label-class="text-teal" />
      {{ !loading ? "Zapisz" : "" }}
    </q-btn>
  </q-form>
</template>

<script>
import FileDropzone from "@/components/UI/FileDropzone/FileDropzone.vue";
import {post_request} from "@/utils/request";
import ExistingImage from "./ExistingImage.vue";
export default {
  props: ["blog"],
  data() {
    return {
      id: null,
      title: "",
      description: "",
      images: [],
      loading: false,
      files: [],
    };
  },
  methods: {
    async modifyPost() {
      this.loading = true;
      try {
        const addedPost = await post_request(
          "https://server.sciborowka.pl/sciborowka-admin/modify-post",
          JSON.stringify({
            title: this.title,
            description: this.description,
            id: this.id
          }),
          true
        );
        if(!addedPost.statusCode === "OK"){
          console.log(addedPost);
          this.loading = false;
          this.$store.commit("comunicate/openWindow");
          this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].ERROR);
          return;
        }
        const FD = new FormData();
        for (const img of this.files) FD.append("files", img);
        await post_request(
          "https://server.sciborowka.pl/sciborowka-admin/upload-images/" +
            this.id,
          FD,
          false
        );
        this.loading = false;
        this.$store.commit("comunicate/openWindow");
        this.$store.commit("comunicate/setMode", this.$store.getters["comunicate/getAvailableModes"].POST_MODIFIED);
        this.$emit('return');
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    fileAdded(files) {
      this.files = files;
    },
    setCarouselToExistingImg(){
      this.$store.commit("carousel/setImageArray", this.images);
    },
    imgRemoved(id){
      this.images.splice(id, 1);
    } 
  },
  created() {
    
    this.title = this.blog.blogPost.title;
    this.description = this.blog.blogPost.description;
    this.id = this.blog.blogPost.id;
    this.images = this.blog.images;
    console.log(this.blog);
  },
  components: { FileDropzone, ExistingImage },
};
</script>

<style lang="scss" scoped>
.form-container {
  background: white;
  width: 100%;
  max-width: 80rem;
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > p,
  & > div > p {
    color: $green-7;
  }
  @media (max-width: 281) {
    padding: 0;
    gap: 0.1rem;
  }
}

.existed_images {
    display: columns;
    columns: 2;
    border: 1px solid #ccc;
    gap: 0.5rem;
    break-inside: avoid;
    grid-auto-flow: dense;
    border-radius: 0.5rem;
    padding: 1rem 1rem 0;
    text-align: center;
    @media(min-width: 768px) {
      columns: 3;
    }
  &>img{
    max-width: 100%;
    display: block;
  }
}
</style>