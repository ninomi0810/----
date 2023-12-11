import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Front',
      name: 'Front',
      component: () => import('../views/Front.vue'),
    },
    {
      path: '/FrontInside',
      name: 'FrontInside',
      component: () => import('../views/FrontInside.vue')
    },
    {
      path: '/FrontChack',
      name: 'FrontChack',
      component: () => import('../views/FrontChack.vue')
    },
    {
      path: '/FrontStatistics',
      name: 'FrontStatistics',
      component: () => import('../views/FrontStatistics.vue')
    },
    {
      path: '/Back',
      name: 'Back',
      component: () => import('../views/Back.vue')
    },
    {
      path: '/BackManage1',
      name: 'BackManage1',
      component: () => import('../views/BackManage1.vue')
    },
    {
      path: '/BackManage2',
      name: 'BackManage2',
      component: () => import('../views/BackManage2.vue')
    },
    {
      path: '/BackManage3',
      name: 'BackManage3',
      component: () => import('../views/BackManage3.vue')
    },
    {
      path: '/BackManage4',
      name: 'BackManage4',
      component: () => import('../views/BackManage4.vue')
    },
    {
      path: '/BackStatistics',
      name: 'BackStatistics',
      component: () => import('../views/BackStatistics.vue')
    },
  ]
})

export default router
