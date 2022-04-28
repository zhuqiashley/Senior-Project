<template>
  <custom-header :title="titleValue"></custom-header>
  <div class="container">
    <div class="row">
      <div class="col-lg-12 d-flex flex-column justify-content-center pt-4 order-2 order-lg-1">
        <h1>Course Chapters</h1>
        <div class="col-lg-12">
          <h4> Course process: </h4> 
          <progress-bar :progress="courseProgressBar">
            <template>
              {{this.progress}} 
            </template>
          </progress-bar>
        </div>
        <br/>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Chapter #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{this.chapterData?.chapterDetail1}}</p>
                <iframe width="420" height="315" :src="this.chapterData?.chapter1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapterOne" :disabled="this.progress > 20"> Complete </button>
              </div>
              
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                :disabled="!chapter1Progress"
              >
                Chapter #2
                <p v-if="!chapter1Progress"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{this.chapterData?.chapterDetail2}}</p>
                <iframe width="420" height="315" :src="this.chapterData?.chapter2"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapterTwo" :disabled="this.progress > 40"> Complete </button>

              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                :disabled="!chapter2Progress"
              >
                Chapter #3
                <p v-if="!chapter2Progress"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              <p>{{this.chapterData?.chapterDetail3}}</p>
              <iframe width="420" height="315" :src="this.chapterData?.chapter3"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapterThree" :disabled="this.progress > 60"> Complete </button>

              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                :disabled="!chapter3Progress"
              >
                Chapter #4
                <p v-if="!chapter3Progress"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
               <p>{{this.chapterData?.chapterDetail4}}</p>
               <iframe width="420" height="315" :src="this.chapterData?.chapter4"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapterFour" :disabled="this.progress > 80"> Complete </button>

              </div>
            </div>
          </div>


          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                :disabled="!chapter4Progress"
              >
                Chapter #5
                <p v-if="!chapter4Progress"><img src="https://img.icons8.com/material-outlined/24/000000/lock--v1.png"/></p>
              </button>
            </h2>
            <div
              id="collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>{{this.chapterData?.chapterDetail5}}</p>
                <iframe width="420" height="315"  :src="this.chapterData?.chapter5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button class="btn btn-primary" style="float:right;" @click="completeChapterFive" :disabled="this.progress > 90"> Finish </button>
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
import CustomHeader from "../components/Header.vue";
import ProgressBar from "../components/ProgressBar.vue";
import { ref, onBeforeMount } from "vue";
import axios from 'axios'

let userDB = 'http://localhost:3001/api/completechapter'
let courseDB = 'http://localhost:3001/api/coursecompletionwithid/'

export default {
  components: {
    CustomHeader,
    ProgressBar
  },
  data() {
      return {
        progress: 0,
        chapterData: null,
      }
  },
  async mounted () {
    axios.get("http://localhost:3001/api/getcourses/"+this.$route.query.title)
			.then((res) => {
				this.chapterData = res.data[0]
			}).catch(err => {
				console.error(err)
			})
      if (localStorage.getItem('ID')) {
        let id = localStorage.getItem('ID');
        let courseid = this.$route.query.id;
        console.log("UserID = " + localStorage.getItem('ID') + " courseId = " + this.$route.query.id);
        axios.get("http://localhost:3001/api/getProgress", { user_id: id, course_id: courseid})
        .then((res) => {
          console.log(res.data);
          this.progress = res.data[0].course_completion
          // this.chapterData = res.data[0]
        }).catch(err => {
          console.error(err)
        });
          // const uEData = await userEnrolledData.json();
      }
  },
  computed: {
		titleValue() {
			return  this.$route.query.title
		},
    courseProgressBar(){
      let progress = 0;
      if(this.chapter1Progress)
      {progress += 20;}
      if(this.chapter2Progress)
      {progress += 20;}
      if(this.chapter3Progress)
      {progress += 20;}
      if(this.chapter4Progress)
      {progress += 20;}
      if(this.chapter5Progress)
      {progress += 20;}
      return progress;
    },
    chapter1Progress(){
      let id = this.$route.query.id;
      if(id == 1)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 1)
          {return true;}
        }
      }
      if(id == 2)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 6)
          {return true;}
        }
      }
      if(id == 3)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 11)
          {return true;}
        }
      }
      if(id == 4)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 16)
          {return true;}
        }
      }
      if(id == 5)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 21)
          {return true;}
        }
      }
      if(id == 6)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 26)
          {return true;}
        }
      }
      return false;
    },
    chapter2Progress(){
      let id = this.$route.query.id;
      if(id == 1)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 2)
          {return true;}
        }
      }
      if(id == 2)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 7)
          {return true;}
        }
      }
      if(id == 3)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 12)
          {return true;}
        }
      }
      if(id == 4)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 17)
          {return true;}
        }
      }
      if(id == 5)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 22)
          {return true;}
        }
      }
      if(id == 6)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 27)
          {return true;}
        }
      }
      return false;
    },
    chapter3Progress(){
      let id = this.$route.query.id;
      if(id == 1)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 3)
          {return true;}
        }
      }
      if(id == 2)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 8)
          {return true;}
        }
      }
      if(id == 3)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 13)
          {return true;}
        }
      }
      if(id == 4)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 18)
          {return true;}
        }
      }
      if(id == 5)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 23)
          {return true;}
        }
      }
      if(id == 6)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 28)
          {return true;}
        }
      }
      return false;
    },
    chapter4Progress(){
      let id = this.$route.query.id;
      if(id == 1)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 4)
          {return true;}
        }
      }
      if(id == 2)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 9)
          {return true;}
        }
      }
      if(id == 3)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 14)
          {return true;}
        }
      }
      if(id == 4)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 19)
          {return true;}
        }
      }
      if(id == 5)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 24)
          {return true;}
        }
      }
      if(id == 6)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 29)
          {return true;}
        }
      }
      return false;
    },
    chapter5Progress(){
      let id = this.$route.query.id;
      if(id == 1)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 5)
          {return true;}
        }
      }
      if(id == 2)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 10)
          {return true;}
        }
      }
      if(id == 3)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 15)
          {return true;}
        }
      }
      if(id == 4)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 20)
          {return true;}
        }
      }
      if(id == 5)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 25)
          {return true;}
        }
      }
      if(id == 6)
      {
        for(let i = 0; i < this.course.length; i++)
        {
          if(this.course[i].VideoComplete == 1 && this.course[i].course_id == 30)
          {return true;}
        }
      }
      return false;
    }
	},
  methods: {
    /*async completeChapter (course_completion) {
      console.log(localStorage.getItem('ID'))
      if (localStorage.getItem('ID')) {
        axios.post("http://localhost:3001/api/updateProgress/", {user_id: localStorage.getItem('ID'), course_id: this.$route.query.id, course_completion: course_completion})
        .then(() => {
          this.relodeData()
          // this.chapterData = res.data[0]
        }).catch(err => {
          console.error(err)
        });

        if (course_completion == 100) {
          
          axios.post("http://localhost:3001/api/chapterCompletion/", {user_id: localStorage.getItem('ID'), course_id: this.$route.query.id})
          .then(() => {
            this.relodeData()
            // this.chapterData = res.data[0]
          }).catch(err => {
            console.error(err)
          });
        }
      } else {
        return this.$router.push({ path: 'login', query: ''});
      }
    },
    relodeData () {
      axios.get("http://localhost:3001/api/getcourses/"+this.$route.query.title)
			.then((res) => {
				this.chapterData = res.data[0]
			}).catch(err => {
				console.error(err)
			})
      if (localStorage.getItem('ID')) {
        axios.post("http://localhost:3001/api/getProgress/", { user_id: localStorage.getItem('ID'), course_id: this.$route.query.id})
        .then((res) => {
          console.log(res, 'deeeeet')
          this.progress = res.data[0].course_completion
          // this.chapterData = res.data[0]
        }).catch(err => {
          console.error(err)
        });
          // const uEData = await userEnrolledData.json();
      }
    },*/
  completeChapterOne()
  {
    console.log("inside chapterone");
    let id = this.$route.query.id;
    let Userid = localStorage.getItem('ID');
    let courseID = 0;
    if(id == 1)
    {courseID = 1;}
    else if(id == 2)
    {courseID = 6;}
    else if(id == 3)
    {courseID = 11;}
    else if(id == 4)
    {courseID = 16;}
    else if(id ==5)
    {courseID = 21;}
    else if(id == 6)
    {courseID = 26;}
    axios.post(userDB, {userid:Userid, courseid:courseID}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
      //window.location.reload();
  },
  completeChapterTwo()
  {
    console.log("inside chaptertwo");
    let id = this.$route.query.id;
    let Userid = localStorage.getItem('ID');
    let courseID = 0;
    if(id == 1)
    {courseID = 2;}
    else if(id == 2)
    {courseID = 7;}
    else if(id == 3)
    {courseID = 12;}
    else if(id == 4)
    {courseID = 17;}
    else if(id ==5)
    {courseID = 22;}
    else if(id == 6)
    {courseID = 27;}
    axios.post(userDB, {userid:Userid, courseid:courseID}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
      window.location.reload();
  },
  completeChapterThree()
  {
    console.log("inside chapterthree");
    let id = this.$route.query.id;
    let Userid = localStorage.getItem('ID');
    let courseID = 0;
    if(id == 1)
    {courseID = 3;}
    else if(id == 2)
    {courseID = 8;}
    else if(id == 3)
    {courseID = 13;}
    else if(id == 4)
    {courseID = 18;}
    else if(id ==5)
    {courseID = 23;}
    else if(id == 6)
    {courseID = 28;}
    axios.post(userDB, {userid:Userid, courseid:courseID}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
      window.location.reload();
  },
  completeChapterFour()
  {
    console.log("inside chapterfour");
    let id = this.$route.query.id;
    let Userid = localStorage.getItem('ID');
    let courseID = 0;
    if(id == 1)
    {courseID = 4;}
    else if(id == 2)
    {courseID = 9;}
    else if(id == 3)
    {courseID = 14;}
    else if(id == 4)
    {courseID = 19;}
    else if(id ==5)
    {courseID = 24;}
    else if(id == 6)
    {courseID = 29;}
    axios.post(userDB, {userid:Userid, courseid:courseID}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
      window.location.reload();
  },
  completeChapterFive()
  {
    console.log("inside chapterfive");
    let id = this.$route.query.id;
    let Userid = localStorage.getItem('ID');
    let courseID = 0;
    if(id == 1)
    {courseID = 5;}
    else if(id == 2)
    {courseID = 10;}
    else if(id == 3)
    {courseID = 15;}
    else if(id == 4)
    {courseID = 20;}
    else if(id ==5)
    {courseID = 25;}
    else if(id == 6)
    {courseID = 30;}
    axios.post(userDB, {userid:Userid, courseid:courseID}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
      window.location.reload();
  }
  },
  setup() {

    const course = ref([])

    onBeforeMount(async () => {
        await axios.get(`${courseDB}${localStorage.getItem('ID')}`).then(response => {
            course.value = response.data;
            console.log(course);
          }).catch(err => {
            console.error(err);
          });
    })
    return{
      course
    }
  },
};
</script>

<!-- ======= STYLE ======= -->
<style scoped>
</style>
