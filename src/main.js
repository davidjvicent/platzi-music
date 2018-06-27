import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'

import msToMn from '@/filters/ms-to-mn'

import routes from '@/routes'

import EventBus from '@/plugins/event-bus'

Vue.use(EventBus)

Vue.use(VueRouter)

Vue.use(msToMn)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  // router: router
  router
})
