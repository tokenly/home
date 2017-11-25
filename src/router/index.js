import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home.vue'
import NewHome from '../components/new-home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new-home',
      name: 'New Home',
      component: NewHome
    }
  ]
})
