<template>
  <div>
  


<div class="btn-group-vertical" role="group" aria-label="Vertical button group">
    <button v-on:click="navigate('Detail')" type="button" class="btn btn-primary">Detail</button>
    <button v-on:click="navigate('Fellowships')" type="button" class="btn btn-primary">Fellowships</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Responsibilities</button>
    <button v-on:click="navigate('detail')" type="button" class="btn btn-primary">Appointments</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Rooms</button>
    <button v-on:click="navigate('detail')" type="button" class="btn btn-primary">Addresses</button>
    <button type="button" class="btn btn-primary">Images</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Subjects</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Telephone</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Associated People</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Rights</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Files</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Background</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Post-nominals</button>
  <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Research Interests</button>
    <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Publication List</button>
      <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Selected Publications</button>
   
        <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Teaching &amp; Supervision</button>
             <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Other Professional Memberships &amp; Roles</button>
                  <button v-on:click="navigate('Responsibilities')" type="button" class="btn btn-primary">Teaching & Supervision</button>
  </div>

<!-- <b-list-group>
  <b-list-group-item  href="#"><router-link to="/PersonDetails/1">Detail</router-link></b-list-group-item>
  <b-list-group-item  href="#" ><router-link to="/Fellowships">Fellowships</router-link></b-list-group-item>
  <b-list-group-item  href="#"><router-link to="/Responsibilities">Responsibilities</router-link></b-list-group-item>

</b-list-group> -->
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  methods: {
    navigate: function(location) {
      this.$router.push({ name: location, params: { personId: 10 } });
    }
  }
};
</script>