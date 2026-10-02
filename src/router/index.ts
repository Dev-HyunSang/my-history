import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WorkDetailView from '../views/WorkDetailView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/:section(work)/:id(alan|army|teamgrit)',
    name: 'work-detail',
    component: WorkDetailView,
  },
  {
    path: '/:section(experience)/:id(ccdc|gdg|pycon_korea)',
    name: 'experience-detail',
    component: WorkDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition) => savedPosition || { top: 0 },
});

export default router;
