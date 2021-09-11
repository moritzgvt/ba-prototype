import Vue from 'vue'
import VueRouter from 'vue-router'
import GetStarted from '../views/GetStarted.vue'
import Settings from '../views/Settings.vue'
import Website from '../views/Website.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GetStarted',
    component: GetStarted
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/website/:id',
    name: 'Website',
    component: Website
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
