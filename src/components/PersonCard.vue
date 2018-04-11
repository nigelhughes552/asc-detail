<template>
  <div class="asc-card">
              <img src="/static/img1.png" alt="Dr James Adams" data-hasqtip="119" oldtitle="Dr James Adams" title="" aria-describedby="qtip-119" />
                <div class="cardcontainer">
                    <span class="DisplayName">{{DisplayName}}</span>
                    <p>DisplayPostnominals </p>
                </div>
          



      <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>

  </div>

</template>

<script>
export default {
  name: "PersonCard",
  props: ["DisplayName"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.asc-card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  margin-bottom: 10px;
  max-width: 350px;
  margin-top: 20px;
}

/* Add some padding inside the card container */
.cardcontainer {
  padding: 2px 16px;
}

.asc-card img {
  border-radius: 5px 5px 0 0;
  margin-left: 10px;
  margin-top: 10px;
}

.DisplayName {
  font-weight: 700;
  font-size: 18px;
}
</style>
