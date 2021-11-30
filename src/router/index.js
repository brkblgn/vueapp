import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import functions from '../utils/functions';

const t = functions.getToken()
console.log(t)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    name: 'Home',
    meta: {
      title: 'Home',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('../components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Apps');
      console.log('sale.products');

      // console.log(localStorage.getItem("token"))
    },
  },
];
// Import all of the resource routes files.
function loadRoutes() {
  const context = require.context('@/modules', true, /routes.js$/i);
  return context.keys()
    .map(context) // import module
    .map((m) => (m).default); // get `default` export from each resolved module
}
const resourceRoutes = loadRoutes();
resourceRoutes.forEach((route) => {
  route.forEach((rout) => {
    routes.push(rout);
  });
});

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, form, next) => {
  const loggedIn = localStorage.getItem('token')
  if (to.matched.some((record) => record.meta.requiresAuth) && loggedIn == null) {
  //  console.log('auth')
  //  console.log(loggedIn)
    next('/auth')
  } else {
    console.log(loggedIn)
   console.log('next')
    next()
  }
})
export default router;
