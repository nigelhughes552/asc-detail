<template>
  <div class="asc-card">
              <img src="/static/img1.png" alt="Dr James Adams" data-hasqtip="119" oldtitle="Dr James Adams" title="" aria-describedby="qtip-119" />
                <div class="cardcontainer">
                    <span class="DisplayName"></span>
                    <p>DisplayPostnominals </p>
                </div>
            </div>
</template>

<script>
export default {
  name: "PersonCard"
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
