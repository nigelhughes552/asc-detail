import Vue from 'vue'
import Router from 'vue-router'
import Fellowships from '@/components/Fellowships'
import Responsibilities from '@/components/Responsibilities'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fellowships',
      component: Fellowships
    },
    {
      path: '/Responsibilities',
      name: 'Responsibilities',
      component: Responsibilities
    }
  ]
})
