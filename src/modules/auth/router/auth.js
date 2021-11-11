import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const authRouter = [

  {
    path: '/auth',
    component: () => import('@/modules/auth/views/auth.vue'),
    name: 'Authsa',
    meta: {
      title: 'Authsa',
      icon: 'table',
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Authentication');
    },
  },
  {
    path: '/register',
    component: () => import('@/modules/auth/views/register.vue'),
    name: 'Register',
    meta: {
      title: 'Register',
      icon: 'table',
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Register');
    },
  },
];

export default authRouter;
