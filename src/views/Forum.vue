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
                    <template v-slot:header> Add Forum Post </template>
                    
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
                                <button class="btn btn-primary" @click="updateForum()" v-if="editForumId">Submit</button>
                                <button class="btn btn-primary" @click="addForumPost()" v-else>Submit</button>
                            </div>
                            
                        </form>
                        <!-- End Add Event Form -->
                    </template>
                </AddModal>    
			</div>
        </div>

        <div class="row">
            <div class="container mt-5" v-for="(post, index) in posts" v-bind:key="index">
                <div class="d-flex justify-content-center row mainCard">
                    <div class="col-md-3">
                        <img v-if="post && post.forum_src" :src="getImage(`${post.forum_src}`) " class='card-img-left' alt="">
                    </div>
                    <div class="col-md-8">
                        <div class="d-flex flex-column comment-section">
                            <div class="bg-white p-2">
                                <div class="d-flex flex-row user-info">
                                    <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name forumTitle"> {{ post.question }}</span><span class="date text-black-50">Shared publicly - {{ post.posted_on }} </span></div>
                                </div>
                                <div class="mt-2">
                                    <p class="comment-text">Posted by: {{ post.postByName }}</p>
                                </div>
                                <div class="mt-2">
                                    <p class="comment-text">{{ post.comments }}</p>
                                </div>
                                <div class="mt-2">
                                    <div v-if="isLiked(post.likedArr)" class="heart is-active" @click="removelike(post.id)"></div>
                                    <div v-else class="heart" @click="likeForum(post.id)"></div>
                                </div>
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Edit
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" @click="deleteForum(post.id)">Delete announcment</a></li>
                                    <li><a class="dropdown-item"  @click="editForum(post.id)" >Edit announcment</a></li>
                                </ul>
                            </div>
                            <div class="bg-white">
                                <div class="d-flex flex-row fs-12">
                                    <div class="like p-2 cursor"><i class="fa fa-thumbs-o-up"></i><span class="ml-1">{{ post.like_count }} Likes</span></div>
                                    <div class="like p-2 cursor" data-bs-toggle="collapse" :href="'#postComment-' + post.id" role="button" aria-expanded="false" :aria-controls="'postComment-' + post.id" ><i class="fa fa-commenting-o"></i><span class="ml-1"> {{ post.commentJson ? Object.keys(JSON.parse(post.commentJson)).length : 0 }} Comment</span></div>
                                </div>
                            </div>
                            <div class="bg-light p-2 collapse" :id="'postComment-' + post.id">
                                <div class="d-flex flex-row align-items-start"><textarea class="form-control ml-1 shadow-none textarea" v-model="commentSection"></textarea></div>
                                <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="button" @click="postComment(post.id)">Post comment</button></div>

                                <div v-if="post.commentJson"> 
                                    <div v-for="comment in JSON.parse(post.commentJson)" :key="comment" class="card commentCard align-items-start mt-4 p-2">
                                        <div>  <strong>Posted By: </strong> {{ comment.userName }}  </div>
                                        <div> {{ comment.comment  }} </div>
                                    </div>
                                 </div>

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
            commentSection: null,
            editForumId: null,
        }
    },
    async mounted() {
        await axios.get(`http://127.0.0.1:3001/api/getForumData/${this.$route.query.id}`)
        .then((res) => {
            this.posts = res.data
        }).catch(err => {
            console.error(err)
        })
        window.$(".forumLikeHeart").on("click", function() {
            console.log('hereee')
            window.$(this).toggleClass("is-active");
        });
    },
    computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
    setup(props, { slots }) {
        function hasSlot(name) {
            return !!slots[name]
        }
        function getImage(image) {
            if (image) {
                return require(`@/assets/${image}`)
            }
        }

        return {
            hasSlot,
            getImage
        }
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
        isLiked(likedArr) {
            const newArr  = likedArr.split(",")
            if (newArr.includes(localStorage.getItem('ID'))) {
                console.log("true")
                return true
            } else {
                return false
            }
        },
        likeForum (id) {
            axios.post('http://127.0.0.1:3001/api/like/forum', {user_id: localStorage.getItem('ID'), id: id})
			.then(() => {
                this.reloadData()
			}).catch(err => {
                console.error(err)
			})
        },
        removelike (id) {
            axios.post('http://127.0.0.1:3001/api/removeLike/forum', {user_id: localStorage.getItem('ID'), id: id})
			.then(() => {
                this.reloadData()
			}).catch(err => {
                console.error(err)
			})
        },
        addForumPost() {

            axios.post('http://127.0.0.1:3001/api/forum/add', {title: this.forumTitle, description: this.forumDescription, time: this.forumTime, course_id: this.$route.query.id, user_id: localStorage.getItem('ID'), forum_src: 'img/Courses/forum-post.png' })
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
        reloadData() {
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
        async postComment(id) {
            if (!localStorage.getItem('ID'))  {
                return this.$router.push({ path: 'login', query: ''});    
            }
            axios.post('http://127.0.0.1:3001/api/forum/comment', {id: id, userId: localStorage.getItem('ID'), comment: this.commentSection})
			.then(() => {
				// this.courses = res.data
                this.commentSection = null
                this.reloadData()

				// submitObject.EventID = res.data.insertId
				// events.value.push(submitObject)
			}).catch(err => {
                console.error(err)
			})
        },
        editForum (id) {
            this.editForumId = id
                this.isModalVisible = true;
        },
        updateForum() {

            if (!localStorage.getItem('ID'))  {
                return this.$router.push({ path: 'login', query: ''});    
            }
            axios.post('http://127.0.0.1:3001/api/forum/update', {title: this.forumTitle, description: this.forumDescription, id: this.editForumId, postedDate: this.forumTime })
			.then(() => {
                this.isModalVisible = false;
                this.editForumId = null;
                this.reloadData()
			}).catch(err => {
                this.isModalVisible = false;
                this.editForumId = null;
                console.error(err)
			})
        },
    }
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.date {
    font-size: 11px
}

.comment-text {
    font-size: 15px
}

.fs-12 {
    font-size: 12px
}

.shadow-none {
    box-shadow: none
}

.name {
    color: #007bff;
    font-size: 25px;
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


.card-img-left {
        height: 10rem;
    width: 10rem;
    float: left;
    display: block;
    margin: 1rem;
}

.mainCard {
    background: white;
}


    .forumLikeHeart {
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
.is-active svg > path{ fill: red }

</style>
