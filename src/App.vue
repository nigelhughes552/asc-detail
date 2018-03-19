<template>
 <div class="container-fluid" id="app">

    <div class="row">
       test
     
        <MainMenu />

       <div class="col-md-10" id="content">
         <router-view/>
       </div>
    </div>
</div>
</template>

<script>
import MainMenu from './components/menu.vue'

export default {
  name: 'App',
   components: {
    MainMenu
  }
}
</script>
