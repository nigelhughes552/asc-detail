<template>
  <div>
  
<b-list-group>
  <b-list-group-item  href="#"><router-link to="/PersonDetails/1">Detail</router-link></b-list-group-item>
  <b-list-group-item  href="#" ><router-link to="/Fellowships">Fellowships</router-link></b-list-group-item>
  <b-list-group-item  href="#"><router-link to="/Responsibilities">Responsibilities</router-link></b-list-group-item>

</b-list-group>
  </div>
</template>

<script>
export default {
  name: "MainMenu"
};
</script>