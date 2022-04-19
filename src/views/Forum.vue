<template>
    <custom-header :title="titleValue"></custom-header>
    <div class="container">
		<div class="row">
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
				<h1>Discussion Forum</h1>
                <button type="button" class="btn btn-success" @click="showModal">
                    + Post
                </button>
                <Modal v-if="isModalVisible" @close="closeModal">
                    <template v-slot:header> Add Course </template>
                    
                    <template v-slot:body>
                        <!-- Add Event Form -->
                        <form v-on:submit.prevent="submitForm">
                            <div class="form-group mb-4">
                                <label for="EventTitle">Forum Title</label>
                                <input v-model="forumTitle" type="text" class="form-control" id="EventTitle" placeholder="Title" >
                            </div>

                            <div class="form-group mb-4">
                                <label for="EventDescription">Forum Description</label>
                                <input v-model="forumDescription" type="text" class="form-control" id="EventDescription" placeholder="Description" >
                            </div>
                            <div class="form-group mb-4">
                                <label for="EventTime">Forum Time</label>
                                <input v-model="forumTime" type="datetime-local" class="form-control">
                            </div>
                            <div class="form-group mb-4 text-center">
                                <button class="btn btn" @click="closeModal()">close</button>
                                <button class="btn btn-primary" @click="addForumPost()">Submit</button>
                            </div>
                            
                        </form>
                        <!-- End Add Event Form -->
                    </template>
                </Modal>    
			</div>
        </div>

        <div class="row">
            <div class="col-lg-12" v-for="(post, index) in posts" v-bind:key="index">
                <forum class= "mt-4" :image="post.forum_src ? post.forum_src : ''" >
                    <template #question>
                        {{ post.question }}
                    </template>
                     <template #user>
                        <br/>
                        <strong>Posted By: </strong> {{this.$route.query.user}}  &emsp; <strong>On: </strong> {{ post.posted_on}}

                    </template>
                    
                    <template #comment>
                        <br/>
                        {{ post.comments}}
                    </template>
                    <template #end>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-right">
                            <strong>Like Count: </strong> <p> {{post.like_count}}</p> &emsp;
                            <strong>View Count: </strong> <p> {{post.views_count}}</p> &emsp;
                            <strong>Comments: </strong> <p> {{post.comment_count}}</p> &emsp;
                        </div>
                        <div class="dropdown">
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Edit
						</button>
						<ul class="dropdown-menu">
							<li><a class="dropdown-item" @click="deleteForum(post.id)">Delete Post</a></li>
							<li><a class="dropdown-item" href="#">Edit post</a></li>
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
import Forum from '../components/Forum.vue'
import Modal from '../components/Modal.vue'
import axios from 'axios'



export default{
    components:
    {
        CustomHeader,
        Forum,
        Modal,

    },
    data() {
        return {
            isModalVisible: false,
            forumTime: null,
            forumDescription: null,
            forumTitle: null,
            posts: []
        }
    },
    mounted() {
        axios.get(`http://127.0.0.1:3001/api/getForumData/${this.$route.query.id}`)
			.then((res) => {
				this.posts = res.data
                // this.isModalVisible = false;

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                console.error(err)
			})
    },
    computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
    setup() {
        
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        async deleteForum(forumID){
            axios.delete("http://localhost:3001/api/forum/"+ forumID)
            .then(() => {
                this.posts = this.posts.filter(item => item.id != forumID);
            });
        },
        closeModal() {
            this.isModalVisible = false;
        },
        addForumPost() {

            axios.post('http://127.0.0.1:3001/api/forum/add', {title: this.forumTitle, description: this.forumDescription, time: this.forumTime, course_id: this.$route.query.id, user_id: 1, forum_src: 'img/Courses/Data-Science-Forum.jpg' })
			.then(() => {
				// this.courses = res.data
                this.isModalVisible = false;

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                this.isModalVisible = false;
                console.error(err)
			})
        }
    }
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>

</style>