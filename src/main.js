// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import App2 from './App2'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  template: '<app/>',
  components: { App }
})

var app2 = new Vue({
  el: '#app2',
  template: '<app2/>',
  components: { App2 }

})
