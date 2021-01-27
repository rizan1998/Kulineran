import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/User/Home.vue')
  },
  {
    path: '/Foods',
    name: 'Foods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/User/Foods.vue')
  },
  {
    path: '/Foods/:id',
    name: 'FoodDetail',
    component: () => import('../views/User/FoodDetail.vue')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
