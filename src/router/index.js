import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    //   name: 'home',
    },
    {
      path: '/recent',
      component: HomeView,
    //   name: 'home',
    },
    {
      path: '/following',
      component: HomeView,
    //   name: 'home',
    },
    {
      path: '/messages',
      component: HomeView,
    //   name: 'home',
    },
    {
      path: '/notification',
      component: HomeView,
    //   name: 'home',
    },
  ],
});

export default router;
