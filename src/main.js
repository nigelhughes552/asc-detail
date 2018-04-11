// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
//import Vuex from "vuex";
import VueRouter from "vue-router";
import App from "./App";
import router from "./router";
import Vuetify from "vuetify";
import "babel-polyfill";
//import BootstrapVue from "bootstrap-vue";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import "font-awesome/css/font-awesome.css";
import VueTreeNavigation from "vue-tree-navigation";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader
//import axios from 'axios'

//Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueTreeNavigation);
//Vue.use(Vuex);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: {
    App
  },
  template: "<App/>"
});
