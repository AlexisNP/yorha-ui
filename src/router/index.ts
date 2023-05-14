import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'
import ItemsView from '@/views/datas/ItemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
      children: [
        {
          path: 'items',
          name: 'items',
          component: ItemsView
        },
        {
          path: 'items',
          name: 'items',
          component: ItemsView
        }
      ]
    }
  ]
})

export default router
