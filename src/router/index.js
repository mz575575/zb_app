import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import intro from "../views/Intro.vue"
import app from "../views/Apps.vue"
import news from "../views/News.vue"
import contact from "../views/Contact.vue"
import new2 from "../views/New.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {path:"/intro",name:"intro",component:intro},
  {path:"/app",name:"app",component:app},
  {path:"/news",name:"news",component:news},
  {path:"/contact",name:"contact",component:contact},
  {path:"/new",name:"new",component:new2},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
