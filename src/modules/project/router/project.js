import store from '@/store';
import { markRaw } from '@vue/reactivity';
import { defineAsyncComponent } from 'vue';

const listRouter = [
  {
    path: '/projects/:id',
    component: () => import('@/modules/project/views/show.vue'),
    name: 'Projects',
    meta: {
      title: 'Projects',
      icon: 'table',
      requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/project/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Projects');
      console.log('Module: projects');
    },
  },
  {
    path: '/projects',
    component: () => import('@/modules/project/views/List.vue'),
    name: 'Projectsa',
    meta: {
      title: 'Projectsa',
      icon: 'table',
    requiresAuth: true,
    },
    beforeEnter: () => {
      store.dispatch('toggleSidebar', markRaw(defineAsyncComponent(() => import('@/modules/sale/components/Navbara.vue'))));
      store.dispatch('toggleSidebarTitle', 'Projects');
      console.log('Module: projects');
    },
  },
];
export default listRouter;
