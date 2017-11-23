import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import _ from 'lodash'

Vue.use(VeeValidate)

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

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
  render: h => h(App)
})
