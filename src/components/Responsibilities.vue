<template>
  <h1>Responsibilities</h1>
</template>

<script>
export default {
  name: 'Responsibilities',
  created:function(){
    console.log("test Responsibilities")
    this.$http.get('http://localhost/api/PeopleApi/GetFellowshipList')
    .then(function(response){
console.log(response)
    })
  }
}
</script>