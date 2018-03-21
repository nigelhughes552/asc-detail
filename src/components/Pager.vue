<template>
    <div class="row pager  text-center">
                <div class="col-md-10 col-md-offset-1">
                <div class="btn-group center-block">
                    <button id="btnPrevious" type="button" class="btn btn-default previous">&laquo; Previous</button>
                    <button id="btnNext" v-on:click="greet" type="button" class="btn btn-default next">Next &raquo;</button>
                </div>
</div>
</div>
             
</template>

<script>
export default {
  name: "Pager",
  methods: {
    greet: function(event) {
      // `this` inside methods points to the Vue instance
      this.$router.push({ path: "Fellowships" });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pager {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>

