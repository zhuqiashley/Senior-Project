/* routes for each view */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Achievements from '../views/Achievements.vue'
import Events from '../views/Events.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Master CS | Home'
    }
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses,
    meta: {
      title: 'Master CS | Courses'
    }
  },
  {
    path: '/Achievements',
    name: 'Achievements',
    component: Achievements,
    meta: {
      title: 'Master CS | Achievements'
    }
  },
  {
    path: '/Events',
    name: 'Events',
    component: Events,
    meta: {
      title: 'Master CS | Events'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Master CS | Login'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Master CS';
  next();
});

export default router
