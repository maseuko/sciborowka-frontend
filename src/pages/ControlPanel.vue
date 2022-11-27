<template>
  <nav-bar :visible="true"></nav-bar>
  <div class="main_ctx">
    <HeaderLoggedOptions v-if="isLogged" />
    <div class="main-content">
      <router-view />
    </div>
  </div>
  
</template>
<script>
  import NavBar from '@/components/UI/NavBar/NavBar.vue';
  import HeaderLoggedOptions from '../components/control-panel/UI/HeaderLoggedOptions.vue';
  
  export default {
    computed: {
        isLogged() {
            return this.$store.getters["auth/isLogged"];
        }
    },
    watch: {
      isLogged(newLg){
        const pathsToRedirect = ["/control-panel", "/control-panel/"]
        if(newLg && this.$route.fullPath !== "/control-panel/add-post" && pathsToRedirect.findIndex(p=>p===this.$route.fullPath)>-1) this.$router.push("/control-panel/add-post")
      }
    },
    beforeCreate(){
      this.$store.dispatch("auth/autoLogIn");
    },
    components: {HeaderLoggedOptions, NavBar},
    }
</script>

<style scoped lang="scss">
  .main_ctx{
    display: flex;
    height: 100vh;
    background: url("../assets/tlo-drewno-biel.jpg");
    .main-content{
      width: 100%;
      padding-top: 4rem;
      overflow: auto;
      @media(max-width: 1000px){
        padding-bottom: 5rem;
      }
    }
  }
</style>