import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Usuarios from '../views/Usuarios.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Productos from '../views/productos/Index.vue'
import Detalle from '../views/productos/Detalle.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  }, {
    path: '/usuarios/:id',
    name: 'Usuarios',
    component: Usuarios
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }, {
    path: '/registrarse',
    redirect: '/signup'
  }, {
    path: '/productos',
    name: 'Productos',
    component: Productos
  }, {
    path: '/producto-detalle/:id',
    name: 'producto',
    component: Detalle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
