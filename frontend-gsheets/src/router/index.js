import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

// example --> component: () => import('../views/About.vue') 
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list-form',
    name: 'List Form',
    component: () => import('../views/ListForm.vue'),
    // children path
    children: [
      {
        path : 'list-form-child',
        component: () => import('../views/ListForm.vue')
      }
    ]
  },
  {
    path: '/web',
    name: 'Media Website',
    component: () => import('../views/Website.vue')
  },
  {
    path: '/form',
    name: 'Form Google Sheets',
    component: () => import('../views/FormGsheets.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '*',
    name: 'Not Found',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
