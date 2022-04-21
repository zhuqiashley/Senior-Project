<template>
  <custom-header title="User Statistics"></custom-header>
  <div class = "login container mt-4">
  <card>
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
<div class="container mt-4">
<h1>Chapter 1</h1>
<p v-if="chapter1">No Quiz Scores for Chapter 1, visit the Courses page to take Quizzes</p>
</div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quiz" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 2"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 1">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 3"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 4">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 5">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID < 6" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class = "container mt-4">
  <h3>Chapter Completion</h3>
  <progress-bar :progress="course1completion"/>
  </div>
      </template>
  </card>
  </div>
  <div class = "login container mt-4">
  <card>
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
  <div class="container mt-4">
  <h1>Chapter 2</h1>
  <p v-if="chapter2">No Quiz Scores for Chapter 2, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quiz" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 7"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 6">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 8"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 9">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 10">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID < 11 && quizi.ChapterID > 5" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class = "container mt-4">
  <h3>Chapter Completion</h3>
  <progress-bar :progress="course2completion"/>
  </div>
      </template>
  </card>
  </div>
  <div class = "login container mt-4">
  <card>
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
  <div class="container mt-4">
  <h1>Chapter 3</h1>
  <p v-if="chapter3">No Quiz Scores for Chapter 3, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quiz" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 12"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 11">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 13"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 14">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 15">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID > 10 && quizi.ChapterID <16" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class = "container mt-4">
  <h3>Chapter Completion</h3>
  <progress-bar :progress="course3completion"/>
  </div>
      </template>
  </card>
  </div>
  <div class = "login container mt-4">
  <card>
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
  <div class="container mt-4">
  <h1>Chapter 4</h1>
  <p v-if="chapter4">No Quiz Scores for Chapter 4, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quiz" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 17"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 16">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 18"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 19">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 20">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID > 15 && quizi.ChapterID <21" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class = "container mt-4">
  <h3>Chapter Completion</h3>
  <progress-bar :progress="course4completion"/>
  </div>
      </template>
  </card>
  </div>
  <div class = "login container mt-4">
  <card>
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
  <div class="container mt-4">
  <h1>Chapter 5</h1>
  <p v-if="chapter5">No Quiz Scores for Chapter 5, visit the Courses page to take Quizzes</p>
  </div>
<div class="event-module mt-4 mb-4" v-for="(quizi, index) in quiz" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 22"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 21">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 23"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 24">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 25">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID > 20 && quizi.ChapterID <26" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class = "container mt-4">
  <h3>Chapter Completion</h3>
  <progress-bar :progress="course5completion"/>
  </div>
      </template>
  </card>
  </div>
  <div class ="container mt-4">
    <h1>Learning Type</h1>
    <p v-if="!User.TypeOfLearner">Introductory Quiz has not been completed, please take the Introductory Quiz to receive your learning style.</p>
    <p v-if="User.TypeOfLearner === 0">Visual</p>
    <p v-if="User.TypeOfLearner === 1">Auditory</p>
    <p v-if="User.TypeOfLearner === 2">Tactile/Kinesthetic</p>
  </div>
  <div class ="container mt-4">
    <h1>Recommended Area of Study</h1>
    <p v-if="!User.CourseRecommended">Introductory Quiz has not been completed, please take the Introductory Quiz to receive your recommended course.</p>
    <p v-if="User.CourseRecommended === 0">Cybersecurity</p>
    <p v-if="User.CourseRecommended === 1">Data Science / Big Data / Machine Learning (AI)</p>
    <p v-if="User.CourseRecommended === 2">Web Development</p>
    <p v-if="User.CourseRecommended === 3">Metaverse</p>
  </div>
  <div class="container mt-4">
    <h1>Enrolled Events</h1>
    <div v-for="(eventi, index) in eventID" v-bind:key="index">
      <div v-for="(eventj, index) in event.pastEvents" v-bind:key="index">
        <p v-if="eventi.EventID === eventj.EventID">{{eventj.EventTitle}}</p>
      </div>
      <div v-for="(eventk, index) in event.upcomingEvents" v-bind:key="index">
        <p v-if="eventi.EventID == eventk.EventID">{{eventk.EventTitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import { ref, onBeforeMount, reactive } from "vue";
import axios from 'axios';
import ProgressBar from '../components/ProgressBar.vue';

let quizIDDB = 'http://localhost:3001/api/quizscoreswithid/'
let chapterDB = 'http://localhost:3001/api/VideoCompletion'
let eventIDDB = 'http://localhost:3001/api/usereventwithid/'
let courseDB = 'http://localhost:3001/api/coursecompletionwithid/'
let eventDB = 'http://localhost:3001/api/event'
let introQuizDB = 'http://localhost:3001/api/introresult/'

export default {
  components:
      {
        CustomHeader,
        ProgressBar,
        Card
      },
  setup() {

    const quiz = ref([])
    const course = ref([])
    const chapter = ref('')
    const eventID = ref('')
    const event = ref('')
    const id = localStorage.getItem('ID');
    const User = reactive({});

    onBeforeMount(async () => {
      await axios.get(`${quizIDDB}${localStorage.getItem('ID')}`).then(response => {
            quiz.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${courseDB}${localStorage.getItem('ID')}`).then(response => {
            course.value = response.data;
            console.log(course);
          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${introQuizDB}${localStorage.getItem('ID')}`)
          .then(response => {
            Object.assign(User, response.data);
          }).catch(err => {
            console.error(err);
          });
      await axios.get(chapterDB)
          .then(response => {
            chapter.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${eventIDDB}${localStorage.getItem('ID')}`)
          .then(response => {
            eventID.value = response.data;
            //console.log(eventID);
          }).catch(err => {
            console.error(err);
          });
      await axios.get(eventDB)
          .then(response => {
            event.value = response.data;
            //console.log(event);
          }).catch(err => {
            console.error(err);
          });


    })

    let quiz1 = 0, quiz2 = 0, quiz3 = 0;
    let eventID1, eventID2, eventID3, learnerType, areaOfStudy
    let event1 , event2 , event3 
    let dataCorrect, data2Correct
    let trigger = true;
    

    return {
      quiz1, quiz2, quiz3, eventID1, eventID2, eventID3, event1, event2, event3,dataCorrect, data2Correct, id, areaOfStudy, learnerType, quiz, User, trigger, eventID, event, course
    }
  },


  methods:{
  },
  computed:{
    quizlength(){
      let quizlength = this.quiz.length;
      return quizlength;
    },
    chapter1(){
      let check = true;
      for(let i = 0; i < this.quiz.length; i++)
      {
        if(this.quiz[i].ChapterID < 6)
        {check = false;}
      }
      return check;
    },
    chapter2(){
      let check = true;
      for(let i = 0; i < this.quiz.length; i++)
      {
        if(this.quiz[i].ChapterID > 5 && this.quiz[i].ChapterID < 11)
        {check = false;}
      }
      return check;
    },
    chapter3(){
      let check = true;
      for(let i = 0; i < this.quiz.length; i++)
      {
        if(this.quiz[i].ChapterID > 10 && this.quiz[i].ChapterID < 16)
        {check = false;}
      }
      return check;
    },
    chapter4(){
      let check = true;
      for(let i = 0; i < this.quiz.length; i++)
      {
        if(this.quiz[i].ChapterID > 15 && this.quiz[i].ChapterID < 21)
        {check = false;}
      }
      return check;
    },
    chapter5(){
      let check = true;
      for(let i = 0; i < this.quiz.length; i++)
      {
        if(this.quiz[i].ChapterID > 20 && this.quiz[i].ChapterID < 26)
        {check = false;}
      }
      return check;
    },
    course1completion(){
      let completion = 0;
      for(let i = 0; i < this.course.length; i++)
      {
        if(this.course[i].course_id < 6)
        {
          console.log("inside course 1");
          if(this.course[i].VideoComplete == 1)
          {
            completion += 10;
          }
          if(this.course[i].QuizComplete == 1)
          {
            completion += 10;
          }
        }
      }
      console.log
      return completion;
    },
    course2completion(){
      let completion = 0;
      for(let i = 0; i < this.course.length; i++)
      {
        if(this.course[i].course_id > 5 && this.course[i].course_id < 11)
        {
          if(this.course[i].VideoComplete == 1)
          {
            completion += 10;
          }
          if(this.course[i].QuizComplete == 1)
          {
            completion += 10;
          }
        }
      }
      return completion;
    },
    course3completion(){
      let completion = 0;
      for(let i = 0; i < this.course.length; i++)
      {
        if(this.course[i].course_id > 10 && this.course[i].course_id < 16)
        {
          if(this.course[i].VideoComplete == 1)
          {
            completion += 10;
          }
          if(this.course[i].QuizComplete == 1)
          {
            completion += 10;
          }
        }
      }
      return completion;
    },
    course4completion(){
      let completion = 0;
      for(let i = 0; i < this.course.length; i++)
      {
        if(this.course[i].course_id > 15 && this.course[i].course_id < 21)
        {
          if(this.course[i].VideoComplete == 1)
          {
            completion += 10;
          }
          if(this.course[i].QuizComplete == 1)
          {
            completion += 10;
          }
        }
      }
      return completion;
    },
    course5completion(){
      let completion = 0;
      for(let i = 0; i < this.course.length; i++)
      {
        if(this.course[i].course_id > 20 && this.course[i].course_id < 26)
        {
          if(this.course[i].VideoComplete == 1)
          {
            completion += 10;
          }
          if(this.course[i].QuizComplete == 1)
          {
            completion += 10;
          }
        }
      }
      console.log(completion);
      return completion;
    }
  }
}
</script>

<style scoped>

</style>