import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const cityRouter = [

  {
    path: '/addresses/city',
    component: () => import('@/modules/contact/views/List.vue'),
    name: 'Citysa',
    meta: {
      title: 'Citysa',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Contacts');
      console.log('Module: contacts');
    },
  },
];

export default cityRouter;
