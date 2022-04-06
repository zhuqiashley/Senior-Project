<template>
    <custom-header :title="titleValue"></custom-header>
	<div class="container">
		<div class="row">
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
				<h1>Home</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4">
				<img v-bind:src="require('@/assets/'+ this.$route.query.home_image1)" class="card-img-top" alt="Cyber Security" data-v-54cdc180="">
			</div>
			<div class="col-lg-4">
				<img v-bind:src="require('@/assets/'+ this.$route.query.home_image2)" class="card-img-top" alt="Cyber Security" data-v-54cdc180="">
			</div>
			<div class="col-lg-4">
				<img v-bind:src="require('@/assets/'+ this.$route.query.home_image3)" class="card-img-top" alt="Cyber Security" data-v-54cdc180="">
			</div>
		</div>
		<div class="row" style="margin-top:30px;">
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
				<h3>Learn more about : {{this.$route.query.title}}</h3>
			</div>
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" v-html="course">
				
			</div>		
		</div>
	</div>
</template>
<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue';

export default{
    components:
    {
        CustomHeader
    },

	data: function (){
		return {
			course: ''
		}
	},

	computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
	methods: {
		getCourse() {
			let urlParams = new URLSearchParams(window.location.search);
			let urlCourse = urlParams.get('course');
			this.course = urlCourse;
		}
	},
	mounted: function() {
		this.getCourse();
	},
    setup() {
    },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>

</style>