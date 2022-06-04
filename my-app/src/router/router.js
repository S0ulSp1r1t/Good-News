import GnMainPage from '@/components/pages/GnMainPage';
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    component: GnMainPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URl)
})

export default router;