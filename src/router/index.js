/* routes for each view */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Achievements from '../views/Achievements.vue'
import Events from '../views/Events.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import MyCourses from '../views/UserCourses.vue'
import Quiz from '../views/Quiz.vue'
import Problem from '../views/Problem.vue'
import Introduction from '../views/Introduction.vue'

const routes = [
	{
		path: '',
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
	},
	{
		path: '/Profile',
		name: 'Profile',
		component: Profile,
		meta: {
			title: 'Master CS | Profile'
		}
	},
	{
		path: '/MyCourses',
		name: 'MyCourses',
		component: MyCourses,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
    {
        path: '/Introduction',
        name: 'Introduction',
        component: Introduction,
        meta: {
            title: 'Master CS | Introduction Quiz'
        }
    },

    {
        path: '/Quiz',
        name: 'Quiz',
        component: Quiz,
        props($route) {
            return {
                title: $route.query.title,
                id: $route.query.id,
            }
        },
        meta: {
            title: 'Master CS | Quiz'
        },
        children: [
        ]
    },
    {
        name: 'Problem',
        path: '/Problem',
        component: Problem,
        props($route) {
            return {
                index: $route.query.index,
                id: $route.query.id,
            }
        },
    },
    {
        path: '',
    },
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
