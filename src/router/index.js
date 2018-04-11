import Vue from "vue";
import Router from "vue-router";
import PersonDetails from "@/components/PersonDetails";
import Fellowships from "@/components/Fellowships";
import Responsibilities from "@/components/Responsibilities";
import Appointments from "@/components/Appointments";
import DetailsName from "@/components/DetailsName";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/DetailsName/:personId",
      name: "DetailsName",
      component: DetailsName
    },
    {
      path: "/PersonDetails/:personId",
      name: "Detail",
      component: PersonDetails
    },
    {
      path: "/Fellowships/:personId",
      name: "Fellowships",
      component: Fellowships
    },
    {
      path: "/Responsibilities/:personId",
      name: "Responsibilities",
      component: Responsibilities
    },
    {
      path: "/Appointments/:personId",
      name: "Appointments",
      component: Appointments
    }
  ]
});
