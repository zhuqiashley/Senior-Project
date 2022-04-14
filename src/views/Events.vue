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
						<div class="form-group mb-4">
							<label for="EventTime">Event Time</label>
							<input v-model="EventTime" type="datetime-local" class="form-control">
						</div>
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
                            <!-- <p><button class="btn btn-success" type="button" @click="register">Register</button></p> -->
                        </div>
                    </div>
                </template>

				<template #end>
					<div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Edit
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" @click="deleteEvent(event.EventID)">Delete Event</a></li>
							<li><a class="dropdown-item" href="#">Edit Event</a></li>
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
const deleteEventDB = 'http://localhost:3001/api/event/'

export default {

  components:
  {
    CustomHeader,
    Card,
    Modal,
  },

  setup() {

	const isModalVisible = ref(false) // setup for popup add course modal
	//Event Data to Insert into Database
	const EventTitle = ref('')
	const EventDescription = ref('')
	const EventInstructor = ref('')
	const EventTime = ref('')
	const EventSpots = ref('')
	const EventID = ref('')
    const events = ref([])

    // format date to be readable (m/dd/yyy hh:mm:ss)
	function formatDate(d){
		const date = new Date(d)
		return date.toLocaleString()
	}
  
    // access event database for display
    onBeforeMount(async () => {
      await axios.get(eventDB)
            .then(response => {
                events.value = response.data;
				console.log(events);

            }).catch(err => {
                console.error(err);
            });
		},
	);

		// Show/Close add course modal
	function showModal() {
        isModalVisible.value = true;
    }

    function closeModal() {
        isModalVisible.value = false;
    }

	// pass event ID to delete course
	async function deleteEvent(EventID){
		axios.delete(deleteEventDB + EventID)

		.then(res => {
			events.value.splice(events.value.indexOf(EventID), 1);
			console.log(res);
		});
	}

	// Insert data into event table
	async function submitForm(){

		const postTime = new Date(this.EventTime)
		postTime.setHours(postTime.getHours() - 8 ) // set to PST

		const submitObject = {
			EventTitle: this.EventTitle,
			EventDescription: this.EventDescription,
			EventInstructor: this.EventInstructor,
			EventDate: postTime.toISOString().slice(0, 19).replace('T', ' '), // formatting found on stack overflow
			EventSpots: this.EventSpots
		}

		// Front End error handling goes here
		
		await axios.post(eventDB, submitObject)
			.then((res) => {
				submitObject.EventID = res.data.insertId
				events.value.push(submitObject)
			}).catch(err => {
				console.error(err)
			})
	}

	return {
		formatDate,
		events,
		submitForm,
		deleteEvent,
		closeModal,
		showModal,
		EventTitle, 
		EventDescription,
		EventInstructor,
		EventTime,
		EventSpots,
		EventID,
		isModalVisible
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
