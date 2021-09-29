import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const invoiceRouter = [
  {
    path: '/sales/invoices',
    component: () => import('@/modules/sale/views/invoice/List.vue'),
    name: 'Invoice',
    meta: {
      title: 'Invoice',
      icon: 'table',
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Sales');
      console.log('BeforeEnter: sale.invoice');
    },
  },
];
export default invoiceRouter;
