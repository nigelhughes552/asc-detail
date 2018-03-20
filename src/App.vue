<template>
  <div class="container-fluid" id="app">
  
    <div class="row">
  
  
  
      <MainMenu />
  
      <div class="col-md-10" id="content">
  
        <PersonCard></PersonCard>
  
        <router-view/>
  
  
  
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
