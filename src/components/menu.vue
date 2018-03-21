<template>
  <div>
     <pager />
<b-list-group>
  <b-list-group-item  href="#"><router-link to="/PersonDetails">Detail</router-link></b-list-group-item>
  <b-list-group-item  href="#" ><router-link to="/Fellowships">Fellowships</router-link></b-list-group-item>
  <b-list-group-item  href="#"><router-link to="/Responsibilities">Responsibilities</router-link></b-list-group-item>

</b-list-group>
  </div>
</template>

<script>
import Pager from "../components/pager.vue";
export default {
  name: "MainMenu",
  components: {
    Pager
  }
};
</script>