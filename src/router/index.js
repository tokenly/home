import Vue from 'vue'
import Router from 'vue-router'

import NewHome from '../components/new-home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'New Home',
      component: NewHome
    }
  ]
})
