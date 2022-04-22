<template>
    <custom-header :title="titleValue"></custom-header>
    <div class="container">
		<div class="row">
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
				<h1>Discussion Forum</h1>
                <button type="button" class="btn btn-success" @click="showModal">
                    + Post
                </button>
                <AddModal v-if="isModalVisible" @close="closeModal">
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
                </AddModal>    
			</div>
        </div>

        <div class="row">
            <div class="container mt-5" v-for="(post, index) in posts" v-bind:key="index">
                <div class="d-flex justify-content-center row">
                    <div class="col-md-8">
                        <div class="d-flex flex-column comment-section">
                            <div class="bg-white p-2">
                                <div class="d-flex flex-row user-info">
                                    <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name"> {{ post.question }}</span><span class="date text-black-50">Shared publicly - {{ post.posted_on }} </span></div>
                                </div>
                                <div class="mt-2">
                                    <p class="comment-text">Posted by: {{ post.postByName }}</p>
                                </div>
                            </div>
                            <div class="bg-white">
                                <div class="d-flex flex-row fs-12">
                                    <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">Like</span></div>
                                    <div class="like p-2 cursor"><i class="fa fa-commenting-o"></i><span class="ml-1" @click="isCommentsVisible=!isCommentsVisible">Comment</span></div>
                                    <div class="like p-2 cursor"><i class="fa fa-share"></i><span class="ml-1">Share</span></div>
                                    <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Edit
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" @click="deleteForum(post.id)">Delete Forum</a></li>
                                        <li><a class="dropdown-item" href="#">Edit announcment</a></li>
                                    </ul>
                                </div>
                                
                                </div>
                            </div>
                            <div v-if="isCommentsVisible" class="bg-light p-2">
                                <div class="d-flex flex-row align-items-start"><textarea class="form-control ml-1 shadow-none textarea"></textarea></div>
                                <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button class="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button" @click="isCommentsVisible=false">Cancel</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
</template>


<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import AddModal from '../components/AddModal.vue'
import axios from 'axios'



export default{
    components:
    {
        CustomHeader,
        AddModal,

    },
    data() {
        return {
            isModalVisible: false,
            forumTime: null,
            forumDescription: null,
            forumTitle: null,
            posts: [],
            isCommentsVisible: false,
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

            axios.post('http://127.0.0.1:3001/api/forum/add', {title: this.forumTitle, description: this.forumDescription, time: this.forumTime, course_id: this.$route.query.id, user_id: localStorage.getItem('ID'), forum_src: 'img/Courses/forum-post.png' })
			.then(() => {
				// this.courses = res.data
                this.isModalVisible = false;
                this.relodeData()

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                this.isModalVisible = false;
                console.error(err)
			})
        },
        relodeData() {
            axios.get(`http://127.0.0.1:3001/api/getForumData/${this.$route.query.id}`)
			.then((res) => {
				this.posts = res.data
                // this.isModalVisible = false;

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                console.error(err)
			})
        }
    }
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.date {
    font-size: 11px
}

.comment-text {
    font-size: 12px
}

.fs-12 {
    font-size: 12px
}

.shadow-none {
    box-shadow: none
}

.name {
    color: #007bff
}

.cursor:hover {
    color: blue
}

.cursor {
    cursor: pointer
}

.textarea {
    resize: none
}

</style>