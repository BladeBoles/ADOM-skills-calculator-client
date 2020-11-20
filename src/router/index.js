import Vue from 'vue'
import VueRouter from 'vue-router'
import SkillPicker from '../views/SkillPicker.vue'
import NewSkillPicker from '../views/NewSkillPicker.vue'
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SkillPicker
  },
  {
    path: '/new-skill-picker',
    name: 'NewSkillPicker',
    component: NewSkillPicker
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
