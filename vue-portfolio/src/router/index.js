import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory('/Vue-Portfolio-Rebuild/'),
    scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'instant' }
    }
    if (from && from.path === '/' && to.path.startsWith('/projects/')) {
    return false
    }
    if (from && from.path.startsWith('/projects/') && to.path === '/') {
    return false
    }
    return { top: 0, behavior: 'instant' }
  },
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/projects/:id',
      component: ProjectView
    }
  ],
})

export default router