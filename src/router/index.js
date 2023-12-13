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
      path: '/Questionnaire',
      name: 'Questionnaire',
      component: () => import('../views/Questionnaire.vue')
    },
    {
      path: '/QandA',
      name: 'QandA',
      component: () => import('../views/QandA.vue')
    },
    {
      path: '/Feedback',
      name: 'Feedback',
      component: () => import('../views/Feedback.vue')
    },
    {
      path: '/FeedbackDetail',
      name: 'FeedbackDetail',
      component: () => import('../views/FeedbackDetail.vue')
    },
    {
      path: '/BackChack',
      name: 'BackChack',
      component: () => import('../views/BackChack.vue')
    },
    {
      path: '/BackStatistics',
      name: 'BackStatistics',
      component: () => import('../views/BackStatistics.vue')
    },
  ]
})

export default router
