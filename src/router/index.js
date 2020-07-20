import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Inicio',
      component: () =>
        import(/* webpackChunkName: "Inicio" */ '../views/InicioView.vue'),
    }
  ];

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
