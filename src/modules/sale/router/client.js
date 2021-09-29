import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const clientRouter = [
  {
    path: '/sales/clients',
    component: () => import('@/modules/sale/views/client/List.vue'),
    name: 'Client',
    meta: {
      title: 'Client',
      icon: 'table',
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Sales');
      console.log('Module: sale.clients');
    },
  },
];
export default clientRouter;
