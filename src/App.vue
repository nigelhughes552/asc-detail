<template>


  <v-app>
    <v-navigation-drawer app>
      <pager></pager>
      <tree-menu/>
    </v-navigation-drawer>
  
    <v-content>
      <v-container fluid>
        <PersonCard></PersonCard>
        <router-view></router-view>
      </v-container>
    </v-content>
   
  </v-app>


</template>

<script>
import MainMenu from "./components/menu.vue";
import PersonCard from "./components/PersonCard.vue";
import Pager from "./components/pager.vue";
import TreeMenu from "./components/TreeView.vue";
export default {
  name: "App",
  data() {
    return {
      firstname: "Nigel Hughes",
      person: [],
      personId: 1
    };
  },
  components: {
    MainMenu,
    PersonCard,
    Pager,
    TreeMenu
  }
};
</script>
<style>

</style>
