import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ManageLaundry from '../views/ManageLaundry.vue'
import ManageProduct from '../views/ManageProduct.vue'
import ManageReview from '../views/ManageReview.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/managelaundry',
    name: 'managelaundry',
    component: ManageLaundry
  },
  {
    path: '/manageproduct',
    name: 'manageproduct',
    component: ManageProduct
  },
  {
    path: '/managereview',
    name: 'managereview',
    component: ManageReview
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
