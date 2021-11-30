import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const cityRouter = [
  {
    path: '/addresse/city',
    component: () => import('@/modules/contact/views/List.vue'),
    name: 'Citysa',
    meta: {
      title: 'Citysa',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'City');
      console.log('Module: City');
    },
  },
];
export default cityRouter;