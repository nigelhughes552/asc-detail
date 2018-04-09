<template>
  <div class="container-fluid" id="app">

    <div class="row">

    <div class="col-md-2">
      <MainMenu />
    </div>



      <div class="col-md-10" id="content">

        <PersonCard></PersonCard>

        <router-view :key="$route.fullPath"></router-view>



      </div>



    </div>



  </div>
</template>

<script>
import MainMenu from "./components/menu.vue";
import PersonCard from "./components/PersonCard.vue";

export default {
  name: "App",

  components: {
    MainMenu,
    PersonCard
  }
};
</script>
<style>

</style>
