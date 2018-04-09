<template>
  <h1>Responsibilities</h1>
</template>

<script>
import axios from "axios";
export default {
  name: 'Responsibilities',
  created:function(){
    console.log("test Responsibilities")
    axios.get('http://localhost/api/PeopleApi/GetFellowshipList')
    .then(function(response){
console.log(response)
    })
  }
}
</script>
