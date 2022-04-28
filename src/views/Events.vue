<!-- ======= TEMPLATE ======= -->
<template>
	<div class="Events">
		<custom-header title="Events"></custom-header>
		
        <div class="container">
			<div class="container mt-4 d-flex flex-box">
				<h2>Upcoming Events</h2>
				<template v-if="User && User.Role === 'Admin'">
					<div class="btn-group">
						<button type="button" :class="[`btn`, `btn-secondary`]" @click="filterModal.toggle()">Filter</button>
						<button type="button" :class="[`btn`, `btn-secondary`, `dropdown-toggle dropdown-toggle-split`]" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#" @click="addEditEventModal.toggle(); clearFields();">Add Event</a></li>
						</ul>
					</div>
				</template>
				<template v-else>
					<button type="button" :class="[`btn`, `btn-secondary`]"  @click="filterModal.toggle()">Filter</button>
				</template>
			</div>
	
			<div class="container mt-4 d-flex flex-box" v-if="getFilteredEvents('upcoming') && getFilteredEvents('upcoming').length === 0">
				<h4 class="no-events">No upcoming events to display...</h4>
			</div>
            <!-- Loop through upcoming events output data into card component -->
            <card class="event-module mt-4 mb-4" v-for="(event, index) in getFilteredEvents('upcoming')" v-bind:key="index" >
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
                            <p> Spots Left: {{ event.EventSpots - event.Attendees.length }} </p>
                            <p> Tags: 
								{{
									event.EventTags.map(tag => {
										return tag.Tag || tag;
									}).join(', ')
								}} 
							</p>
                        </div>
                    </div>
                </template>

				<template #end v-if="User && User.Role === 'Admin'">
					<div class="btn-group">
						<!-- Handle full events -->
						<template v-if="event.EventSpots - event.Attendees.length <= 0">
							<template v-if="checkRegistration(event.EventID)">
								<button type="button" :class="[`btn`, checkRegistration(event.EventID) ? `btn-danger` : `btn-success`]" @click="register(event.EventID)" :disabled="checkValidDate(event.EventDate)">{{ checkRegistration(event.EventID) ? 'Cancel Registration': 'Register'}}</button>
								<button type="button" :class="[`btn`, checkRegistration(event.EventID) ? `btn-danger` : `btn-success`, `dropdown-toggle dropdown-toggle-split`]" data-bs-toggle="dropdown" aria-expanded="false">
									<span class="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#" @click="editEvent(event)">Edit</a></li>
									<li><a class="dropdown-item" href="#" @click="deleteEvent(false, event)">Delete</a></li>
								</ul>
							</template>
							<template v-else>
								<button type="button" :class="[`btn`, `btn-secondary`]" disabled>Full Event</button>
								<button type="button" :class="[`btn`, `btn-secondary`, `dropdown-toggle dropdown-toggle-split`]" data-bs-toggle="dropdown" aria-expanded="false">
									<span class="visually-hidden">Toggle Dropdown</span>
								</button>
								<ul class="dropdown-menu">
									<li><a class="dropdown-item" href="#" @click="editEvent(event)">Edit</a></li>
									<li><a class="dropdown-item" href="#" @click="deleteEvent(false, event)">Delete</a></li>
								</ul>
							</template>
						</template>
						
						<!-- Handle non-full events -->
						<template v-else>
							<button type="button" :class="[`btn`, checkRegistration(event.EventID) ? `btn-danger` : `btn-success`]" @click="register(event.EventID)" :disabled="checkValidDate(event.EventDate)">{{ checkRegistration(event.EventID) ? 'Cancel Registration': 'Register'}}</button>
							<button type="button" :class="[`btn`, checkRegistration(event.EventID) ? `btn-danger` : `btn-success`, `dropdown-toggle dropdown-toggle-split`]" data-bs-toggle="dropdown" aria-expanded="false">
								<span class="visually-hidden">Toggle Dropdown</span>
							</button>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#" @click="editEvent(event)">Edit</a></li>
								<li><a class="dropdown-item" href="#" @click="deleteEvent(false, event)">Delete</a></li>
							</ul>
						</template>
					</div>
				</template>
				<template #end v-else>
					<template v-if="event.EventSpots - event.Attendees.length <= 0">
						<template v-if="checkRegistration(event.EventID)">
							<button type="button" :class="[`btn`, checkRegistration(event.EventID) ? `btn-danger` : `btn-success`]" @click="register(event.EventID)" :disabled="checkValidDate(event.EventDate)">{{ checkRegistration(event.EventID) ? 'Cancel Registration': 'Register'}}</button>
						</template>
						<template v-else>
							<button type="button" :class="[`btn`, `btn-secondary`]" disabled>Full Event</button>
						</template>
					</template>
					<template v-else>
						<button type="button" :class="[`btn`, checkRegistration(event.EventID) ? `btn-danger` : `btn-success`]" @click="register(event.EventID)" :disabled="checkValidDate(event.EventDate)">{{ checkRegistration(event.EventID) ? 'Cancel Registration': 'Register'}}</button>
					</template>
				</template>
            </card>

			<div class="container mt-4 d-flex flex-box">
				<h2>Past Events</h2>
			</div>
			<div class="container mt-4 d-flex flex-box" v-if="getFilteredEvents('past') && getFilteredEvents('past').length === 0">
				<h4 class="no-events">No past events to display...</h4>
			</div>

			<!-- Loop through past events output data into card component -->
            <card class="event-module mt-4 mb-4" v-for="(event, index) in getFilteredEvents('past')" v-bind:key="index" >
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
                            <p> Spots Left: {{ event.EventSpots - event.Attendees.length }} </p>
                            <p> Tags: 
								{{
									event.EventTags.map(tag => {
										return tag.Tag || tag;
									}).join(', ')
								}} 
							</p>
                        </div>
                    </div>
                </template>

				<template #end v-if="User && User.Role === 'Admin'">
					<div class="btn-group">
						<button type="button" class="btn btn-secondary" :disabled="checkValidDate(event.EventDate)">Passed</button>
						<button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
							<span class="visually-hidden">Toggle Dropdown</span>
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" href="#" @click="editEvent(event)">Edit</a></li>
							<li><a class="dropdown-item" href="#" @click="deleteEvent(false, event)">Delete</a></li>
						</ul>
					</div>
				</template>
				<template #end v-else>
					<button type="button" class="btn btn-secondary" :disabled="checkValidDate(event.EventDate)">Passed</button>
				</template>
            </card>

			<!-- Add Modal -->
			<Modal ref="addEditEventModal">
				<template #title> {{ SelectedEvent && SelectedEvent.edit ? 'Edit' : 'Add'}} Event </template>
				<template #body>
					<div class="form-group mb-4">
						<label for="EventTitle">Event Title</label>
						<input v-model="EventTitle" type="text" class="form-control" id="EventTitle" placeholder="Title" required>
					</div>
					<div class="form-group mb-4">
						<label for="EventDescription">Event Description</label>
						<textarea v-model="EventDescription" type="text" class="form-control" id="EventDescription" placeholder="Description" />
					</div>
					<div class="form-group mb-4">
						<label for="EventInstructor">Event Instructor</label>
						<input v-model="EventInstructor" type="text" class="form-control" id="EventInstructor" placeholder="Instructor" >
					</div>
					<div class="form-group mb-4" v-if="!SelectedEvent.edit">
						<label for="EventTime">Event Time</label>
						<input v-model="EventTime" type="datetime-local" class="form-control">
					</div>
					<div class="form-group mb-4">
						<label for="EventSpots">Maximum Attendees</label>
						<input v-model="EventSpots" type="number" class="form-control">
					</div>
					<div class="form-group mb-4">
						<label for="EventSpots">Tags</label>
						<Tags ref="addEditTags" :given-tags="EventTags"></Tags>
					</div>
				</template>

				<template #footer>
					<div class="form-group text-center">
						<button type="button" class="btn btn-secondary mr-5" data-bs-dismiss="modal" @click="addEditEventModal.toggle()">Cancel</button>&nbsp;
						<button class="btn btn-primary" @click="submitForm(!SelectedEvent.edit)">{{ SelectedEvent && SelectedEvent.edit ? 'Update' : 'Submit'}}</button>
					</div>
				</template>
			</Modal>

			<!-- Delete Modal -->
			<Modal ref="deleteEventModal">
				<template #title> Delete Event <strong>{{SelectedEvent.EventTitle}}</strong>?</template>
				<template #body>
					<p>Are you sure you want to delete this event? This Action cannot be undone. </p>
					<p v-if="SelectedEvent.Attendees && SelectedEvent.Attendees.length > 0"> <strong> Warning: </strong> The following attendees will be removed from the event: 
						<span v-for="(attendee, index) in SelectedEvent.Attendees" :key="index">
							{{ attendee.FirstName }} {{ attendee.LastName }}<span v-if="index < SelectedEvent.Attendees.length - 1">, </span>
						</span>
					</p>
				</template>
				<template #footer>
					<div class="form-group text-center">
						<button type="button" class="btn btn-secondary mr-5" data-bs-dismiss="modal" @click="deleteEventModal.toggle()">Cancel</button>&nbsp;
						<button class="btn btn-danger" @click="deleteEvent(true, SelectedEvent)">Delete</button>
					</div>
				</template>
			</Modal>	

			<!-- Filter Modal -->
			<Modal ref="filterModal">
				<template #title> Filter Events </template>
				<template #body>
					<div class="form-check" v-for="(tag, index) in filteredTags" :key="index">
						<input class="form-check-input" type="checkbox" :id="'filterTag' + index" :value="tag" @click="updateFilter(tag)" :checked="tag.selected">
						<label class="form-check-label" :for="'filterTag' + index">{{tag.tag}} ({{tag.total}})</label>
					</div>
				</template>
				<template #footer>
					<div class="form-group text-center">
						<button type="button" class="btn btn-secondary mr-5" data-bs-dismiss="modal" @click="filterModal.toggle()">Close</button>&nbsp;
					</div>
				</template>
			</Modal>

			<!-- Login Modal -->
			<Modal ref="loginModal">
				<template #title> Login Required </template>
				<template #body>
					<p> Welcome to Master CS! In order to register for events, you must be logged in. Please login or create an account. </p>
				</template>
				<template #footer>
					<div class="form-group text-center">
						<router-link to="/Signup">
							<button type="button" class="btn btn-secondary mr-5" data-bs-dismiss="modal" >Signup</button>&nbsp;
						</router-link>
						<router-link to="/Login">
							<button type="button" class="btn btn-primary mr-5" data-bs-dismiss="modal" >Login</button>&nbsp;
						</router-link>
					</div>
				</template>
			</Modal>
			
			<Notification ref="alert"></Notification>
        </div>
    </div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import { ref, reactive, onBeforeMount } from "vue"
import axios from 'axios';
import Modal from '../components/Modal.vue'
import Notification from '../components/Alert.vue'
import Tags from '../components/Tags.vue'

const eventDB = 'http://localhost:3001/api/event';
const deleteEventDB = 'http://localhost:3001/api/event/';
const userDB = 'http://localhost:3001/api/user/';

export default {
  components:
  {
    CustomHeader, Card, Modal, Notification, Tags
  },
  setup() {
	const isModalVisible = ref(false) // setup for popup add course modal
	const alert = ref(null); // setup for alert
	const addEditEventModal = ref(null); // setup for add event modal
	const deleteEventModal = ref(null); // setup for delete event modal
	const addEditTags = ref(null);
	const filterModal = ref(null);
	const loginModal = ref(null);

	//Event Data to Insert into Database
	const EventTitle = ref('')
	const EventDescription = ref('')
	const EventInstructor = ref('')
	const EventTime = ref('')
	const EventSpots = ref('')
	const EventID = ref('')
	const EventTags = ref([]);
	const filteredTags = ref([]);

	// Primary Event Array
    const events = ref([]);

	// User Data
	const User = reactive({});

	// Used for Edit/Delete
	const SelectedEvent = reactive({});

    // format date to be readable (m/dd/yyy hh:mm:ss)
	function formatDate(d){
		const date = new Date(d)
		return date.toLocaleString()
	}

    // access event database for display
    onBeforeMount(async () => {
		// Get Event Data from database
		await axios.get(eventDB)
			.then(response => {
				events.value = response.data;
			}).catch(err => {
				console.error(err);
			});

		// Get user data
		await axios.get(`${userDB}${localStorage.getItem('ID')}`)
			.then(response => {
				Object.assign(User, response.data);
			}).catch(err => {
				console.error(err);
			});
			
		updateTagsFilter();
	});

	function updateTagsFilter() {
		filteredTags.value = [];

		events.value.upcomingEvents.forEach(event => {
			event.EventTags.forEach(tag => {
				if(!filteredTags.value.some(ele => ele.tag === tag.Tag)) {
					filteredTags.value.push({
						tag: tag.Tag,
						total: events.value.upcomingEvents.filter(event => event.EventTags.includes(tag)).length,
						selected: true
					});
				} else {
					filteredTags.value.find(ele => ele.tag === tag.Tag).total++;
				}
			});
		});

		events.value.pastEvents.forEach(event => {
			event.EventTags.forEach(tag => {
				if(!filteredTags.value.some(ele => ele.tag === tag.Tag)) {
					filteredTags.value.push({
						tag: tag.Tag,
						total: events.value.upcomingEvents.filter(event => event.EventTags.includes(tag)).length + events.value.pastEvents.filter(event => event.EventTags.includes(tag)).length,
						selected: true
					});
				} else {
					filteredTags.value.find(ele => ele.tag === tag.Tag).total++;
				}
			});
		});
	}

	// pass event ID to delete course
	async function deleteEvent(confirmed, Event){
		if(confirmed) {
			axios.delete(deleteEventDB + Event.EventID)
				.then(() => {
					alert.value.addAlert('success', 'Event Deleted', 3000);
				});
			
			if(events.value.upcomingEvents.findIndex(event => event.EventID === Event.EventID) > -1){
				events.value.upcomingEvents = events.value.upcomingEvents.filter(event => event.EventID !== Event.EventID);
			} else {
				events.value.pastEvents = events.value.pastEvents.filter(event => event.EventID !== Event.EventID);
			}

			deleteEventModal.value.toggle();
		} else {
			Object.assign(SelectedEvent, Event);
			deleteEventModal.value.toggle();
		}
	}

	// pass event ID to edit course
	async function editEvent(Event){
		Event.edit = !Event.edit;
		this.EventTitle = Event.EventTitle;
		this.EventDescription = Event.EventDescription;
		this.EventInstructor = Event.EventInstructor;
		this.EventTime = Event.EventDate;
		this.EventSpots = Event.EventSpots;
		this.EventID = Event.EventID;
		this.EventTags = Event.EventTags;
		
		if(Event.edit) {
			Object.assign(SelectedEvent, Event);
		} else {
			Object.assign(SelectedEvent, {});
		}

		addEditEventModal.value.toggle();
	}

	async function register(EventID) {
		if(!localStorage.getItem('ID') || localStorage.getItem('ID') == 0) {
			loginModal.value.toggle();
			return false;
		}
		
		const eventsIndex = events.value.upcomingEvents.findIndex(event => event.EventID === EventID);
		const regObj = {
				EventID: EventID,
				UserID: localStorage.getItem('ID')
			};

		if(!checkRegistration(EventID)) {
			await axios.post(`${eventDB}/register`, regObj).then(() => {
				
				events.value.upcomingEvents[eventsIndex].Attendees.push({
					UserID: localStorage.getItem('ID'),
					EventID: EventID,
					FirstName: this.User.FirstName,
					LastName: this. User.LastName,
				});
				
				alert.value.addAlert('success', 'Event Registered', 3000);
			});
		} else {
			await axios.delete(`${eventDB}/register/${EventID}/${localStorage.getItem('ID')}`).then(() => {
				events.value.upcomingEvents[eventsIndex].Attendees.splice(events.value.upcomingEvents[eventsIndex].Attendees.findIndex(attendee => attendee.UserID === this.User.UserID), 1);
				
				alert.value.addAlert('success', 'Registration cancelled', 3000);
			});
		}
	}

	function checkRegistration(EventID) {
		if(!localStorage.getItem('ID') || localStorage.getItem('ID') == 0) return false;
		
		const eventsIndex = events.value.upcomingEvents.findIndex(event => event.EventID == EventID);
		if(events.value.upcomingEvents[eventsIndex].Attendees.findIndex(attendee => attendee.UserID == User.UserID) > -1) {
			return true;
		} else {
			return false;
		}
	}

	// Insert data into event table
	async function submitForm(newEvent) {
		this.EventTags = addEditTags.value.tags;
		
		const postTime = new Date(this.EventTime);
		postTime.setHours(postTime.getHours() - 8) // set to PST

		// A required field is not valid, don't submit
		if(!this.EventTitle || !this.EventDescription || !this.EventInstructor || !postTime || !this.EventSpots || this.EventTags.length === 0) {
			const errorArray = [];
			if(!this.EventTitle) errorArray.push('Title');
			if(!this.EventDescription) errorArray.push('Description');
			if(!this.EventInstructor) errorArray.push('Instructor');
			if(!this.EventTime) errorArray.push('Time');
			if(!this.EventSpots) errorArray.push('Maximum Attendees');
			if(this.EventTags.length === 0) errorArray.push('Tags');
			
			alert.value.addAlert('Danger', `Missing Required fields: ${errorArray.join(', ')}`, 4000);
			return;
		}
		const submitObject = {
			EventTitle: this.EventTitle,
			EventDescription: this.EventDescription,
			EventInstructor: this.EventInstructor,
			EventDate: postTime.toISOString().slice(0, 19).replace('T', ' '), // formatting found on stack overflow
			EventSpots: this.EventSpots,
			EventTags: this.EventTags,
			Attendees: this.SelectedEvent.Attendees || [],
		}

		if(newEvent) {
			// Front End error handling goes here
			await axios.post(eventDB, submitObject)
				.then((res) => {
					submitObject.EventID = res.data.insertId

					if(postTime < new Date()) {
						events.value.pastEvents.push(submitObject);
						// Sort events by date
						events.value.pastEvents.sort((a, b) => {
							return new Date(a.EventDate) - new Date(b.EventDate);
						});
					} else {
						events.value.upcomingEvents.push(submitObject);
						// Sort events by date
						events.value.upcomingEvents.sort((a, b) => {
							return new Date(a.EventDate) - new Date(b.EventDate);
						});
					}
					// Update Filters
					updateTagsFilter();

					// Close Modal
					addEditEventModal.value.toggle();

					// Reset form
					clearFields();


					// Alert success
					alert.value.addAlert('Success', 'Event has been added', 4000);
				}).catch(err => {
					console.error(err)
				});
		} else {
			await axios.put(`${eventDB}/${this.EventID}`, submitObject)
				.then(() => {
					// Update event in array
					if(postTime < new Date()) {
						events.value.pastEvents[events.value.pastEvents.findIndex(event => event.EventID === this.EventID)] = submitObject;
					} else {
						events.value.upcomingEvents[events.value.upcomingEvents.findIndex(event => event.EventID === this.EventID)] = submitObject;
					}
					// Update Filters
					updateTagsFilter();

					// Close Modal
					addEditEventModal.value.toggle();
	
					// Reset form
					clearFields();

					// Alert success
					alert.value.addAlert('Success', 'Event has been updated', 4000);
				}).catch(err => {
					console.error(err)
				});
		}
	}

	function checkValidDate (date) {
		const dateTime = new Date(date)
		const today = new Date()
		today.setHours(today.getHours() - 8) // set to PST
		return dateTime < today;
	}

	function clearFields() {
		EventTitle.value = '';
		EventDescription.value = '';
		EventInstructor.value = '';
		EventTime.value = '';
		EventSpots.value = '';
		EventTags.value = [];
		SelectedEvent.edit = false;
	}

	function updateFilter(tag) {
		const tagIndex = filteredTags.value.findIndex(e => e.tag === tag.tag)
		filteredTags.value[tagIndex].selected = !filteredTags.value[tagIndex].selected;
	}

	function getFilteredEvents(type) {
		if(type === 'upcoming') {
			if(filteredTags.value.length === 0) {
				return events.value.upcomingEvents;
			} else {
				return filter(events.value.upcomingEvents);
			}
		} else {
			if(filteredTags.value.length === 0) {
				return events.value.pastEvents;
			} else {
				return filter(events.value.pastEvents);
			}
		}
	}

	function filter(arr) {
		return arr.filter(event => {
			let tagMatch = false;
			event.EventTags.forEach(tag => {
				filteredTags.value.forEach(filteredTag => {
					if(tag.Tag === filteredTag.tag && filteredTag.selected) {
						tagMatch = true;
					}
				});
			});
			return tagMatch;
		});
	}


	return {
		formatDate, submitForm, deleteEvent, editEvent, checkValidDate,
		EventTitle, EventDescription, EventInstructor, EventTime, EventSpots, EventID, EventTags, isModalVisible, User,
		events, alert, addEditEventModal, deleteEventModal, SelectedEvent, clearFields, addEditTags, checkRegistration, loginModal,
		register, filterModal, filteredTags, updateFilter, getFilteredEvents,
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
.flex-box {
  display:flex;
  justify-content:space-between;
}

.no-events {
	font-size: 1.2rem;
	font-weight: bold;
}

.img-fluid {
	min-width: 80px !important;
}
.form-check {
	display: inline-block;
	margin: 0.75em;
}
</style>
