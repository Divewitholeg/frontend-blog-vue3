import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useContentStore } from '@/stores/content'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: async () => {
        const contentStore = useContentStore()
        const lang = localStorage.getItem('lang') || navigator.language.slice(0, 2)
        localStorage.setItem('lang', lang)
        await contentStore.setContent(lang)
      }
    },
    {
      path: '/:link',
      component: () => import('../views/RedirectView.vue')
    }
  ]
})

export default router
