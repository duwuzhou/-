// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'RouterView',
    component: () => import('@/views/RouterView.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/Home.vue'),
        },
        {
          path: '/RouterView/index',
          name: 'Index',
          component: () => import('@/views/index.vue'),
        }
      ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;