import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Clothes from '../views/Clothes.vue'
import Men from '../views/Men.vue'
import Women from '../views/Women.vue'

import { Trans } from '@/lang/Translation.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:lang',
    component: {
      template: '<router-view></router-view>'
    },
    beforeEnter: Trans.routeMiddleware,
    children: [
      {
        path: '',
        name: 'home',
        component: Home
      },
      {
        path: 'about',
        name: 'about',
        component: About
      },
      {
        path: 'clothes',
        name: 'clothes',
        component: Clothes
      },
      {
        path: 'men',
        name: 'men',
        component: Men
      },
      {
        path: 'women',
        name: 'women',
        component: Women
      }
    ]
  },
  {
    path: '*',
    redirect (to) {
      return Trans.getUserSupportedLang()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
