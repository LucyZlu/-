import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from "./router"

Vue.use(VueRouter)
const router = new VueRouter({
  routes// （缩写）相当于 routes: routes
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
