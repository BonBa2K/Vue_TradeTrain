import { createRouter, createWebHistory } from 'vue-router'
import TT_FP from '../components/Test_FirstPage.vue'
import TT_GL from '../components/Test_GameLounge.vue'

const routes = [
  {
    path: '/',
    name: 'FirstPage',
    component: TT_FP
  }, {
    path: '/GameLounge',
    name: 'GameLounge',
    component: TT_GL

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
