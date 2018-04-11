<template>



  <div class="row pager  text-center">
    <div class="text-xs-center">
      <v-btn v-on:click.prevent="previous" round color="primary" dark>&laquo; Previous</v-btn>
      <v-btn v-on:click.prevent="next" round color="primary" dark>Next &raquo;</v-btn>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "Pager",
  data() {
    return {
      page: 1,
      personIds: [10, 100, 30, 201, 32],
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
        disabled: this.index >= this.personIds.length
      };
    }
  },
  methods: {
    next: function(event) {
      if (this.index <= this.personIds.length) {
        this.$router.push({
          name: "Detail",
          params: {
            personId: this.personIds[this.index]
          }
        });
        this.index++;
      }
    },
    previous: function(event) {
      if (this.index > 0) {
        this.index--;
        this.$router.push({
          name: "Detail",
          params: {
            personId: this.personIds[this.index]
          }
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
