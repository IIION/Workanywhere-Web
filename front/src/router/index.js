import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '@/views/AboutView'
import HomeView from '@/views/HomeView'
import ProgramView from '@/views/ProgramView'
import AboutMindfulView from '@/views/AboutMindfulView'
import AboutRetreatView from '@/views/AboutRetreatView'
import AddView from '@/views/AddView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/program',
    name: 'program',
    component: ProgramView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/about/mindful',
    name: 'aboutmindful',
    component: AboutMindfulView
  },
  {
    path: '/about/retreat',
    name: 'aboutretreat',
    component: AboutRetreatView
  },
  { // 시트 및 이메일 발송 테스트용 페이지 입니다.
    path: '/add',
    name: 'add',
    component: AddView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
