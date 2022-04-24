<template>
     <custom-header :title="$route.query.title"></custom-header>
    <div class="container">
		<div class="row">
			<div class="col-lg-12 d-flex flex-column pt-4 pt-lg-0 order-2 order-lg-1">
                <div class="container mt-4">
				<h1 style="display: inline;">Announcements 
                </h1>
                    <button type="button" class="btn btn-success" style="float: right;" @click="showModal">+ Post</button>
			</div>
                <AddModal v-if="isModalVisible" @close="closeModal">
                    <template v-slot:header> Add Announcment </template>
                    
                    <template v-slot:body>
                        <!-- Add Event Form -->
                        <form v-on:submit.prevent="submitForm">
                            <div class="form-group mb-4">
                                <label for="EventTitle">Announcment Title</label>
                                <input v-model="announcementTitle" type="text" class="form-control" id="EventTitle" placeholder="Title" >
                            </div>

                            <div class="form-group mb-4">
                                <label for="EventDescription">Announcment Description</label>
                                <input v-model="announcementDescription" type="text" class="form-control" id="EventDescription" placeholder="Description" >
                            </div>
                            <div class="form-group mb-4">
                                <label for="EventTime">Announcment Time</label>
                                <input v-model="announcementTime" type="datetime-local" class="form-control">
                            </div>
                            <div id="imageUpload" class="" style="margin-bottom:20px;">
                            <div v-if="!image">
                                <h2>Select an image</h2>
                                <input type="file" @change="onFileChange">
                            </div>
                            <div v-else>
                                <img :src="image" />
                                <button @click="removeImage">Remove image</button>
                            </div>
                            </div>
                            <div class="form-group mb-4 text-center">
                                <button class="btn btn" @click="closeModal()">close</button>
                                <button class="btn btn-primary" @click="addAnnouncment()">Submit</button>
                            </div>
                            
                        </form>
                        <!-- End Add Event Form -->
                    </template>
                </AddModal>
                
			</div>
		</div>
		<div class="row">
            <div class="col-lg-12" v-for="(announcment, index) in announcments" v-bind:key="index">
                <forum class= "mt-4" :image="announcment.img_src ? announcment.img_src : ''" >
                    <template #question>
                        {{ announcment.title }}
                    </template>
                     <template #user>
                        <br/>
                        <strong>Posted By: </strong> {{ announcment.postByName }}  &emsp; <strong>On: </strong> {{ announcment.posted_on}}

                    </template>
                    
                    <template #comment>
                        <br/>
                        {{ announcment.description}}
                    </template>
                    <template #end>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-right">
                        <div class="heart"></div>
                        </div>
                        <div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Edit
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" @click="deleteAnnouncment(announcment.id)">Delete announcment</a></li>
							<li><a class="dropdown-item" href="#">Edit announcment</a></li>
						</ul>
					</div>
                    </template>
                </forum>
			</div>
		</div>
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import AddModal from '../components/AddModal.vue'
import Forum from '../components/Forum.vue'
import { ref } from 'vue';

const userDB = 'http://localhost:3001/api/user/';




import axios from 'axios'

export default{
    components:
    {
        CustomHeader,
		Forum,
        AddModal,

    },
	data() {
		return {
            isModalVisible: false,
			announcments: [],
			AnnouncmentTitle: null,
			AnnouncmentDescription: null,
			AnnouncmentTime: null,
            image: '',
            SelectedEvent: {}
		}
	},
	async mounted(){
		await axios.get(`http://127.0.0.1:3001/api/getAnnouncments/${this.$route.query.id}`)
			.then((res) => {
				this.announcments = res.data
                // this.isModalVisible = false;

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                console.error(err)
			})

        // Get user data
		await axios.get(`${userDB}${localStorage.getItem('ID')}`)
			.then(response => {
                this.user = response.data
				// Object.assign(User, response.data);
			}).catch(err => {
				console.error(err);
			});    
		// console.log("route parameter value...", this.$route.query);
        // window.$(function() {
            window.$(".heart").on("click", function() {
                window.$(this).toggleClass("is-active");
            });
        // });
	},
    computed: {
    },
    setup() {
        const addAnnouncmentModal = ref(null);
        return {
            addAnnouncmentModal
        }
    },
	methods: {
		showModal() {
            this.isModalVisible = true;
        },
        async deleteAnnouncment(announcmentId){
            axios.delete("http://localhost:3001/api/announcment/"+ announcmentId)
            .then(() => {
                this.announcments = this.announcments.filter(item => item.id != announcmentId);
                // this.isModalVisible = false;
            })
        },
        closeModal() {
            this.isModalVisible = false;
        },

		addAnnouncment() {
            if (!localStorage.getItem('ID'))  {
                return this.$router.push({ path: 'login', query: ''});    
            }
            axios.post('http://127.0.0.1:3001/api/announcment/add', {title: this.announcementTitle, description: this.announcementDescription, course_id: this.$route.query.id, user_id: localStorage.getItem('ID'), img_src: 'img/Courses/announcment-post.png' })
			.then(() => {
				// this.courses = res.data
                this.isModalVisible = false;
                this.reloadData()

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                this.isModalVisible = false;
                console.error(err)
			})
        },
        reloadData () {
            axios.get(`http://127.0.0.1:3001/api/getAnnouncments/${this.$route.query.id}`)
			.then((res) => {
				this.announcments = res.data
                // this.isModalVisible = false;

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                console.error(err)
			})
        },

        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;
            this.image = files
        },
	},
}
</script>


<!-- ======= STYLE ======= -->
<style scoped>
img {
  width: 30%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
}
</style>
<style>
    .heart {
        width: 100px;
        height: 100px;
        display: inline-block;
        background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
        background-position: 0 0;
        cursor: pointer;
        transition: background-position 1s steps(28);
        transition-duration: 0s;
        }
    .is-active {
        transition-duration: 1s;
        background-position: -2800px 0;
    }    

</style>
