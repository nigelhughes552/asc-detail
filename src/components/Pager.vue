<template>
<div class="row pager  text-center">
  <div class="col-md-10 col-md-offset-1">
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" v-bind:class="isEnd">
      <a class="page-link"   v-on:click="previous" >&laquo; Previous</a>
    </li>
 
    <li class="page-item">
      <a class="page-link" v-bind:class="isEnd" v-on:click="next" >Next  &raquo;</a>
    </li>
  </ul>
</nav>

   <!--  <div class="btn-group  d-flex justify-content-center">
      <button id="btnPrevious" v-bind:class="isStart" v-on:click="previous" type="button" class="btn btn-default previous">&laquo; Previous</button>
      <button id="btnNext"  v-bind:class="isEnd" v-on:click="next" type="button" class="btn btn-default next">Next &raquo;</button>
      </div> 
      -->
      </div>
      </div>
</template>

<script>
export default {
  name: "Pager",
  data() {
    return {
      personIds: [1, 100, 30, 201, 32],
      index: 0
    };
  },
  computed: {
    isStart: function() {
      return {
        disabled: this.index <= 0
      };
    },
    isEnd: function() {
      return {
        disabled: this.index >= this.personIds.length - 1
      };
    }
  },
  methods: {
    next: function(event) {
      if (this.index <= this.personIds.length) {
        this.$router.push({
          name: "Detail",
          params: { personId: this.personIds[this.index] }
        });
        this.index++;
      }
    },
    previous: function(event) {
      if (this.index > 0) {
        this.index--;
        this.$router.push({
          name: "Detail",
          params: { personId: this.personIds[this.index] }
        });
      }
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

