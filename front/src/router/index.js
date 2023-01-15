import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutView from '@/views/AboutView'
import HomeView from '@/views/HomeView'
import ProgramView from '@/views/ProgramView'
import AboutMindfulView from '@/views/AboutMindfulView'
import AboutRetreatView from '@/views/AboutRetreatView'
import ProgramDetailSokchoView from '@/views/ProgramDetailSokchoView'
import ProgramDetailYeongwolView from '@/views/ProgramDetailYeongwolView'

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
  {
    path: '/program/sokcho',
    name: 'programdetailsokcho',
    component: ProgramDetailSokchoView
  },
  {
    path: '/program/yeongwol',
    name: 'programdetailyeongwol',
    component: ProgramDetailYeongwolView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
