/* routes for each view */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Achievements from '../views/Achievements.vue'
import Events from '../views/Events.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import MyCourses from '../views/UserEnrollCourses.vue'
import UserCourses from '../views/UserCourses.vue'
import Announcement from '../views/Announcement.vue'
import Chapter from '../views/Chapter.vue'
import Forum from '../views/Forum.vue'
import HomeCourse from '../views/HomeCourse.vue'
import Syllabus from '../views/Syllabus.vue'
import Quiz from '../views/Quiz.vue'
import Problem from '../views/Problem.vue'
import Introduction from '../views/Introduction.vue'
import Signup from "../views/Signup";
import Statistics from "../views/Statistics";
import LoginFailed from "../views/LoginFailed";
import AccountCreationSuccess from "@/views/AccountCreationSuccess";
import LogoutSuccess from "../views/LogoutSuccess";
import EditProfile from "../views/EditProfile";
import Feedback from "../views/Feedback";
import Score from "../views/Score";
import EditProfilePasswordCheck from "../views/EditProfilePasswordCheck";
import ChangePassword from "../views/ChangePassword"
import ChangePasswordPasswordCheck from "../views/ChangePasswordPasswordCheck";
import ForgotPassword from "../views/ForgotPassword";
import ForgotPasswordID from "../views/ForgotPasswordID";
import CourseRating from "../views/CourseRating.vue"

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
		path: '/Admin',
		name: 'Admin',
		component: Admin,
		meta: {
			title: 'Master CS | Admin'
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
		path: '/UserCourses',
		name: 'UserCourses',
		component: UserCourses,
		meta: {
			title: 'Master CS | User Courses'
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
		path: '/homecourse',
		name: 'MyCoursesHome',
		component: HomeCourse,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/announcements',
		name: 'MyCoursesAnnouncement',
		component: Announcement,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/chapter',
		name: 'MyCoursesChapter',
		component: Chapter,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
    {
		path: '/scores',
		name: 'MyScore',
		component: Score,
		meta: {
			title: 'Master CS | My Courses'
		},
		props($route) {
			return {
				title: $route.query.title,
				id: $route.query.id,
			}
		},
	},
	{
		path: '/feedback',
		name: 'Feedback',
		component: Feedback,
		meta: {
			title: 'Master CS | My Courses'
		},
		props($route) {
			return {
				title: $route.query.title,
				id: $route.query.id,
			}
		},
	},
	// {
	// 	path: '/quizzes',
	// 	name: 'MyCoursesQuizzes',
	// 	component: Quizzes,
	// 	meta: {
	// 		title: 'Master CS | My Courses'
	// 	}
	// },
	{
		path: '/syllabus',
		name: 'MyCoursesSyllabus',
		component: Syllabus,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/forum',
		name: 'MyCoursesForum',
		component: Forum,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/Signup',
		name: 'Signup',
		component: Signup,
		meta: {
			title: 'Master CS | Sign Up'
		}
	},
	{
		path: '/Statistics',
		name: 'Statistics',
		component: Statistics,
		meta: {
			title: 'Master CS | User Statistics'
		}
	},
	{
		path: '/LoginFailed',
		name: 'LoginFailed',
		component: LoginFailed,
		meta: {
			title: 'Master CS | User Statistics'
		}
	},
	{
		path: '/AccountCreationSuccess',
		name: 'AccountCreationSuccess',
		component: AccountCreationSuccess,
		meta: {
			title: 'Master CS | Account Creation'
		}

	},
	{
		path: '/CourseRating',
		name: 'CourseRating',
		component: CourseRating,
		meta: {
			title: 'Master CS | Course rating'
		}
	},
	{
		path: '/LogoutSuccess',
		name: 'LogoutSuccess',
		component: LogoutSuccess,
		meta: {
			title: 'Master CS | Logout'
		}

	},
	{
		path: '/EditProfile',
		name: 'EditProfile',
		component: EditProfile,
		meta: {
			title: 'Master CS | Edit Profile'
		}

	},
	{
		path: '/EditProfilePasswordCheck',
		name: 'EditProfilePasswordCheck',
		component: EditProfilePasswordCheck,
		meta: {
			title: 'Master CS | Password Check'
		}

	},
	{
		path: '/ChangePassword',
		name: 'ChangePassword',
		component: ChangePassword,
		meta: {
			title: 'Master CS | ChangePassword'
		}

	},
	{
		path: '/ChangePasswordPasswordCheck',
		name: 'ChangePasswordPasswordCheck',
		component: ChangePasswordPasswordCheck,
		meta: {
			title: 'Master CS | Password Check'
		}

	},
	{
		path: '/ForgotPassword',
		name: 'ForgotPassword',
		component: ForgotPassword,
		meta: {
			title: 'Master CS | Forgot Password'
		}

	},
	{
		path: '/ForgotPasswordID',
		name: 'ForgotPasswordID',
		component: ForgotPasswordID,
		meta: {
			title: 'Master CS | Forgot Password'
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
