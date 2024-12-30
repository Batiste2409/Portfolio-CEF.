import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import ThePageNotFound from '../components/ThePageNotFound.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView, 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: ThePageNotFound, 
    },
  ],
});

export default router;
