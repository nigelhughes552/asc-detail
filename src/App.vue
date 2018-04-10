<template>
  <div class="container-fluid" id="app">
    <div class="row">
    <div class="col-md-2">
         <pager />
      <MainMenu />
    </div>
      <div class="col-md-10" id="content">

        <PersonCard ></PersonCard>
        <router-view :key="$route.fullPath"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "./components/menu.vue";
import PersonCard from "./components/PersonCard.vue";
import Pager from "./components/pager.vue";
export default {
  name: "App",
  data() {
    return {
      firstname: "Nigel Hughes",
      person: []
    };
  },
  components: {
    MainMenu,
    PersonCard,
    Pager
  }
};
</script>
<style>

</style>
