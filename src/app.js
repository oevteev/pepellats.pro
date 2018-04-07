import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import VueNotifications from 'vue-notifications'
import options from './system/vueNotifications'
import { routes } from './system/routes'
import { sync } from 'vuex-router-sync'
import store from './store/index'

Vue.use(VueRouter)
Vue.use(VueNotifications, options)

export const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
