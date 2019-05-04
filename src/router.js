import Vue from 'vue'
import Router from 'vue-router'
import UserModule from './views/UserModule.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'modules'
    },
    {
      path: '/users',
      name: 'users',
      component: UserModule
    }
  ]
})
