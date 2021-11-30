import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const orderRouter = [
  {
    path: '/sale/orders',
    component: () => import('@/modules/sale/views/order/List.vue'),
    name: 'orders',
    meta: {
      title: 'orders',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Sales');
      console.log('BeforeEnter: sale.order');
    },
  },
  {
    path: '/sale/orders/:id',
    component: () => import('@/modules/sale/views/show.vue'),
    name: 'Order',
    meta: {
      title: 'Order',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Sales');
      console.log('Module: Order');
    },
  },
];
export default orderRouter;
