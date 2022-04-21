<!-- ======= TEMPLATE ======= -->
<template>
	<custom-header title="Enrolled Courses"></custom-header>
	<div class="parent">
		<div v-for="(course, index) in courses" v-bind:key="index" >
			<enroll-card class= "mt-4" :image="course.image_src" >
				<template #title>
					{{course.title}}
				</template>
				<template #body>
					{{course.description}}
				</template>
				<template #end>
					<div class="d-grid gap-2 d-md-flex justify-content-md-right">
						<button class="btn btn-success" @click="viewCourse(course)"> View Course </button>
						<button class="btn btn-info" @click="rateCourse(course.title)"> Rate my Course </button>
					</div>
				</template>
			</enroll-card>
		</div>
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import EnrollCard from '../components/EnrollCard.vue'
import axios from "axios";
import { ref } from "vue";

export default {
	components:
	{
		CustomHeader,
		EnrollCard
	},
	methods: {
		async viewCourse(course) {
			

			// try {
			// 	let title = course.title;
			// 	let userId = localStorage.getItem('ID') ?? 1;

			// 	const response = await fetch("http://localhost:3001/api/getcourses/"+title);
			// 	const data = await response.json();

			// 	this.coursess = data;
			// 	const queryURL = this.coursess[0];

			// 	const courseData = await fetch("http://localhost:3001/api/getCourseData/"+queryURL.id);
			// 	const cData = await courseData.json();

			// 	const forumData = await fetch("http://localhost:3001/api/getForumData/"+queryURL.id);
			// 	const fData = await forumData.json();

			// 	const userData = await fetch("http://localhost:3001/api/getUserData");
			// 	const uData = await userData.json();

			// 	const userEnrolledData = await fetch("http://localhost:3001/api/getUserEnrolledCourses/"+userId);
			// 	const uEData = await userEnrolledData.json();

				
			// 	queryURL.course_complete = cData[0].course_completion;
			// 	queryURL.uEDdata = uEData[0];

			// 	queryURL.user = uData[0].FirstName+ " " +uData[0].LastName;	
			// 	queryURL.question = fData[0].question;
			// 	queryURL.comments = fData[0].comments;
			// 	queryURL.commentCount = fData[0].comment_count;
			// 	queryURL.likeCount = fData[0].like_count;
			// 	queryURL.viewCount = fData[0].views_count;
			// 	queryURL.postedOn = fData[0].posted_on;
			// 	queryURL.forumSrc = fData[0].forum_src;
				
			// 	this.$router.push({ path: 'UserCourses', query: queryURL});	
				
			// } catch (error) {
			// 	console.log(error);
			// }	

			try {
				let userId = localStorage.getItem('ID') ?? 1;

				const response = await axios.get("http://localhost:3001/api/getcourses/"+course.title);
				const data = await response.data;

				this.coursess = data;
				const queryURL = this.coursess[0]
				queryURL.title = this.coursess[0].title
				queryURL.id = this.coursess[0].id


				const courseData = await fetch("http://localhost:3001/api/getCourseData/"+queryURL.id);
				const cData = await courseData.json();

				//const forumData = await fetch("http://localhost:3001/api/getForumData/"+queryURL.id);
				//const fData = await forumData.json();

				const userData = await fetch("http://localhost:3001/api/getUserData");
				const uData = await userData.json();

				const userEnrolledData = await fetch("http://localhost:3001/api/getUserEnrolledCourses/"+userId);
				const uEData = await userEnrolledData.json();

				
				queryURL.course_complete = cData[0].course_completion;
				queryURL.uEDdata = uEData[0];

				queryURL.user = uData[0].FirstName+ " " +uData[0].LastName;	
				
				this.$router.push({ path: 'UserCourses', query: queryURL});	
				
			} catch (error) {
				console.log(error);
			}
				
		},
		rateCourse (title) {
			const queryUrl = {}
			queryUrl.title = title;
			
			this.$router.push({ path: 'CourseRating', query: queryUrl});	
		}
	}, 
	setup() {
		let userId = localStorage.getItem('ID') ?? 1;
		let courses = ref([]);
		axios.get("http://localhost:3001/api/getUserEnrolledCourses/"+userId).then((res) => {courses.value = res.data;});
		return {
			courses
		}
	}
	
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.card {
	width: 34rem;
}

.parent {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	flex: 1;
}

</style>
