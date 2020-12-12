import Vue from 'vue'
import VueRouter from 'vue-router'
import SkillPicker from '../views/SkillPicker.vue'
import SkillCalculator from '../views/SkillCalculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/skill-calculator',
    name: 'SkillCalculator',
    component: SkillCalculator,
    alias: '/'
  },
  {
    path: '/skill-picker',
    name: 'SkillPicker',
    component: SkillPicker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
