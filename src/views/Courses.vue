<!-- ======= TEMPLATE ======= -->
<template>
	<custom-header title="Courses"></custom-header>
	<div class="parent">
		<div v-for="(course, index) in courses" v-bind:key="index" >
			<card class= "mt-4" :image="{'src': course.image_src, 'alt': course.image_alt}" >
				<template #title>
					{{course?.title}}
				</template>
				<template #body>
					{{course?.description}}
				</template>
				<template #end>
					<div class="d-grid gap-2 d-md-flex justify-content-md-right">
						<button class="btn btn-success" @click="viewCourse(course)"> View Course </button>
						<button class="btn btn-info" @click="rateCourse(course.title)"> Rate my Course </button>
					</div>
				</template>
			</card>
		</div>
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import axios from 'axios'

export default {
	data() {
		return {
			courses: null
		}
	},
	components:
	{
		CustomHeader,
		Card
	},
	mounted() {
		axios.get('http://127.0.0.1:3001/api/getAllcourses')
			.then((res) => {
				this.courses = res.data

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
				console.error(err)
			})
	},
	asyncData() {
        // return {
        //     project : 'bbbb'
        // }
    },
	methods: {
		async viewCourse(course) {
			
			try {
				if (localStorage.getItem('ID') == '0') {
					return this.$router.push({ path: 'login', query: ''});	 
				}
				let userId = localStorage.getItem('ID') ?? 1;

				const response = await axios.get("http://localhost:3001/api/getcourses/"+course.title);
				const data = await response.data;

				this.coursess = data;
				const queryURL = this.coursess[0]
				queryURL.title = this.coursess[0].title
				queryURL.id = this.coursess[0].id


				// const courseData = await fetch("http://localhost:3001/api/getCourseData/"+queryURL.id);
				// const cData = await courseData.json();

				//const forumData = await fetch("http://localhost:3001/api/getForumData/"+queryURL.id);
				//const fData = await forumData.json();

				const userData = await fetch("http://localhost:3001/api/getUserData");
				const uData = await userData.json();

				const userEnrolledData = await fetch("http://localhost:3001/api/getUserEnrolledCourses/"+userId);
				const uEData = await userEnrolledData.json();

				
				// queryURL.course_complete = cData[0].course_completion;
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
