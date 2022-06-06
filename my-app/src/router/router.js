import { createRouter, createWebHistory } from "vue-router";
import GnMainPage from '@/components/pages/GnMainPage';
import GnPostPage from '@/components/pages/GnPostPage';


const routes = [
  {
    path: '/',
    component: GnMainPage,
  },
  {
    path: '/post/:id',
    name: 'PostPage',
    component: GnPostPage
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URl)
})

export default router;