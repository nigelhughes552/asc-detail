import Vue from "vue";
import Router from "vue-router";
import PersonDetails from "@/components/PersonDetails";
import Fellowships from "@/components/Fellowships";
import Responsibilities from "@/components/Responsibilities";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/PersonDetails/:personId",
      name: "Detail",
      component: PersonDetails
    },
    {
      path: "/Responsibilities",
      name: "Responsibilities",
      component: Responsibilities
    },
    {
      path: "/Fellowships",
      name: "Fellowships",
      component: Fellowships
    }
  ]
});
