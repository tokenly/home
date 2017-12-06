import Vue from 'vue'
import VeeValidate from 'vee-validate'
import VueRouter from 'vue-router'
import router from './router'

import App from './App.vue'
import _ from 'lodash'

Vue.use(VueRouter)
Vue.use(VeeValidate)

var VueScrollTo = require('vue-scrollto');

window.onload = function() {
  Particles.init({
    selector: '.background',
    maxParticles: 20,
    color: '#29B6F6',
    connectParticles: true
  });
};

// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: -70,
     cancelable: true,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
