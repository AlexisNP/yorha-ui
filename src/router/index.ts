import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '../views/Home.vue'
import DataVue from '../views/Data.vue'
import ItemsVue from '@/views/datas/Items.vue'
import ConfigVue from '@/views/Config.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeVue
    },
    {
      path: '/config',
      name: 'config',
      component: ConfigVue
    },
    {
      path: '/data',
      name: 'data',
      component: DataVue,
      children: [
        {
          path: 'items',
          name: 'items',
          component: ItemsVue
        }
      ]
    }
  ]
})

export default router
