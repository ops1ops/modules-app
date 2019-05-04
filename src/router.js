import Vue from 'vue'
import Router from 'vue-router'
import UserModule from './views/UserModule.vue'
import Todo from '../../todo-app/src/components/todo.vue'

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
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
