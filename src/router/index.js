import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemView from '../views/ItemView.vue'
import NotFound from '../components/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        title:"Home"
      }
    },
    {
      path: '/menu/:slug',
      name: 'item',
      component: ItemView,
      meta:{
        title:"Menu"
      }
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
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
