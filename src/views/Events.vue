<!-- ======= TEMPLATE ======= -->
<template>
	<div class="Events">
		<custom-header title="Events"></custom-header>

        <!-- popup modal for adding classes - adapted from digitalocean.com -->
		<div class="container mt-4 d-flex justify-content-end">
			<button type="button" class="btn btn-success" @click="showModal">
				+ Add Course
			</button>
			<Modal v-show="isModalVisible" @close="closeModal">
				<template v-slot:header> Add Course </template>
				
				<template v-slot:body>
					<!-- Add Event Form -->
					<form v-on:submit.prevent="submitForm">
						<div class="form-group mb-4">
							<label for="EventTitle">Event Title</label>
							<input v-model="EventTitle" type="text" class="form-control" id="EventTitle" placeholder="Title" >
						</div>

						<div class="form-group mb-4">
							<label for="EventDescription">Event Description</label>
							<input v-model="EventDescription" type="text" class="form-control" id="EventDescription" placeholder="Description" >
						</div>
						<div class="form-group mb-4">
							<label for="EventInstructor">Event Instructor</label>
							<input v-model="EventInstructor" type="text" class="form-control" id="EventInstructor" placeholder="Instructor" >
						</div>
						<!-- <div class="form-group mb-4">
							<label for="EventTime">Event Time</label>
							<input v-model="EventTime" type="datetime-local" class="form-control">
						</div> -->
						<div class="form-group mb-4">
							<label for="EventSpots">Maximum Attendees</label>
							<input v-model="EventSpots" type="number" class="form-control">
						</div>
						<div class="form-group mb-4 text-center">
							<!-- <button class="btn btn-primary" @click="submitForm()">Submit</button> -->
							<button class="btn btn-primary" @click="closeModal()">Submit</button>
						</div>
					</form>
					<!-- End Add Event Form -->
				</template>
			</Modal>
		</div>
		<!-- End popup modal -->
		
        <div class="container">
            <!-- Loop through entire events table and output data into card component -->
            <card class="event-module mt-4 mb-4" v-for="(event, index) in events" v-bind:key="index" >
                <template #body>
                    <div class="d-flex align-items-start">
                        <div class="pic">
                            <img src="../assets/img/team/advisors.jpeg" class="img-fluid" alt="">
                        </div>
                        
                        <div class="info">
                            <h1> {{event.EventTitle}} </h1>
                            <p> Date: {{formatDate(event.EventDate)}} </p>
                            <p> Instructors: {{event.EventInstructor}} </p>
                            <p> Description: {{event.EventDescription}} </p>
                            <p> Spots Left: {{event.EventSpots}} </p>
                            <p><button class="btn btn-success" type="button" @click="register">Register</button></p>
                        </div>
                    </div>
                </template>

				<template #end>
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Edit
						</button>
						<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li><a class="dropdown-item" href="#">Edit Course</a></li>
							<li><a class="dropdown-item" href="#">Delete Course</a></li>
						</ul>
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
import { ref, onBeforeMount } from "vue";
import axios from 'axios';
import Modal from '../components/Modal.vue'


const eventDB = 'http://localhost:3001/api/event'
// const userDB = 'http://localhost:3001/api/user'

export default {

  components:
  {
    CustomHeader,
    Card,
    Modal,
  },

  methods: {
	// Show/Close add course modal
	showModal() {
        this.isModalVisible = true;
    },

    closeModal() {
        this.isModalVisible = false;
    },

	// Insert data into event table
	async submitForm(){
		const object = {
			EventTitle: this.EventTitle,
			EventDescription: this.EventDescription,
			EventInstructor: this.EventInstructor,
			// EventTime: this.EventTime,
			EventSpots: this.EventSpots
		}

		// Front End error handling goes here

		await axios.post(eventDB, object)
			.then((res) => {
				console.log(res)
			}).catch(err => {
				console.error(err)
			})
	},

	// // test function for inserting data
	// async submitTest(){
	// 	const object = {
	// 		TestSentence: this.TestSentence
	// 	}

	// 	console.log(this.TestSentence)

	// 	if(this.TestSentence == 't'){
	// 		console.error("t was hit")
	// 		return
	// 	}

	// 	await axios.post(testDB, object)
	// 		.then((res) => {
	// 			console.log(res)
	// 		}).catch(err => {
	// 			console.error(err)
	// 		})
	// }

  },

  data(){
    return {
		isModalVisible: false, // setup for popup add course modal
		//Event Data to Insert into Database
		EventTitle: '',
		EventDescription: '',
		EventInstructor: '',
		// EventTime: '',
		EventSpots: '',
    };
  },

  setup() {

    const events = ref([])

    // format date to be readable (m/dd/yyy hh:mm:ss)
	function formatDate(d){
		const date = new Date(d)
		date.setSeconds(0)
		return date.toLocaleString()
	}
  
    // access event database for display
    onBeforeMount(async () => {
      await axios.get(eventDB)
            .then(response => {
                events.value = response.data;

            }).catch(err => {
                console.error(err);
            });
		},
	);

	return {
		formatDate,
		events,
	}
  },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.event-manager{
	width: 100%;
	text-align: center;
	font-size: 1.5rem;
}

.divider{
    width:1.5rem;
    height:auto;
    display:inline-block;
}

.event-module {
	width: 100%;
}

.event-module .pic {
	width: 80px;
	height: 80px;
	border-radius: 50%;
}

.event-module .info {
	padding-left: 30px;
}

.event-module h1 {
	font-family: "Open Sans", sans-serif;
	font-size: 1.5rem;
	font-weight: bold;
}
.event-module p {
	font-family: "Open Sans", sans-serif;
	margin: 10px 0 0 0;
	font-size: 1rem;
}
</style>
