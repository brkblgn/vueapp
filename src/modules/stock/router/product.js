import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const productRouter = [
  {
    path: '/stock/products',
    component: () => import('@/modules/stock/views/product/List.vue'),
    name: 'products',
    meta: {
      title: 'products',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/stock/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Stock');
      console.log('stock.products');
    },
  },
  {
    path: '/stock/products/add',
    component: () => import('@/modules/stock/views/product/Create.vue'),
    name: 'productscreate',
    meta: {
      title: 'productscreate',
      icon: 'table',
      requiresAuth: true,
    },
  },
];
export default productRouter;
