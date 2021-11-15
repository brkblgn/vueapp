import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const listRouter = [
  {
    path: '/contacts/:id',
    component: () => import('@/modules/contact/views/show.vue'),
    name: 'Contacts',
    meta: {
      title: 'Contacts',
      icon: 'table',
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Contacts');
      console.log('Module: contacts');
    },
  },
  {
    path: '/contacts',
    component: () => import('@/modules/contact/views/List.vue'),
    name: 'Contactsa',
    meta: {
      title: 'Contactsa',
      icon: 'table',
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Contacts');
      console.log('Module: contacts');
    },
  },
];

export default listRouter;
