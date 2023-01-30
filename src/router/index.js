import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu/:slug',
      name: 'item',
      component: ItemView
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    const layoutId = document.getElementById('layout')
    if(layoutId){
      layoutId.scrollTop = 0
    }
  },
})

export default router
