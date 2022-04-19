<template>
  <custom-header title="User Statistics"></custom-header>
<div class="container mt-4">
<h1>Chapter 1</h1>
<p v-if="chapter1">No Quiz Scores for Chapter 1, visit the Courses page to take Quizzes</p>
</div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quizID" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 2"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 1">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 3"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 4">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 5">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID < 6" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class="container mt-4">
  <h1>Chapter 2</h1>
  <p v-if="chapter2">No Quiz Scores for Chapter 2, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quizID" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 7"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 6">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 8"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 9">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 10">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID < 11 && quizi.ChapterID > 5" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class="container mt-4">
  <h1>Chapter 3</h1>
  <p v-if="chapter3">No Quiz Scores for Chapter 3, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quizID" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 12"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 11">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 13"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 14">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 15">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID > 10 && quizi.ChapterID <16" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class="container mt-4">
  <h1>Chapter 4</h1>
  <p v-if="chapter4">No Quiz Scores for Chapter 4, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quizID" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 17"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 16">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 18"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 19">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 20">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID > 15 && quizi.ChapterID <21" :progress="quizi.Score"/>
                        </div>
  </div>
  <div class="container mt-4">
  <h1>Chapter 5</h1>
  <p v-if="chapter5">No Quiz Scores for Chapter 5, visit the Courses page to take Quizzes</p>
  </div>
  <div class="event-module mt-4 mb-4" v-for="(quizi, index) in quizID" v-bind:key="index" >
                        <div class="container mt-4">
                        <p v-if="quizi.ChapterID === 22"> Quiz 2 Score</p>
                        <p v-if="quizi.ChapterID === 21">Quiz 1 Score</p>
                        <p v-if="quizi.ChapterID === 23"> Quiz 3 Score</p>
                        <p v-if="quizi.ChapterID === 24">Quiz 4 Score</p>
                        <p v-if="quizi.ChapterID === 25">Quiz 5 Score</p>
                        <progress-bar v-if="quizi.ChapterID > 20 && quizi.ChaperID < 26" :progress="quizi.Score"/>
                        </div>
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
      <div v-for="(eventtitle, index1) in event" v-bind:key="index1">
        <p v-if="eventi.EventID === eventtitle.EventID">{{eventtitle.EventTitle}}</p>
      </div>
    </div>
  </div>
</template>

<script>
//import Card from '../components/Card.vue'
import CustomHeader from '../components/Header.vue'
import { ref, onBeforeMount, reactive } from "vue";
import axios from 'axios';
import ProgressBar from '../components/ProgressBar.vue';
//import { computed } from 'vue';

let quizDB = 'http://localhost:3001/api/quizscoreswithid/'
//let quizDBNoID = 'http://localhost:3001/api/QuizScores'
let chapterDB = 'http://localhost:3001/api/videocompletionwithid/'
let eventIDDB = 'http://localhost:3001/api/usereventwithid/'
let eventDB = 'http://localhost:3001/api/eventwithid'
let introQuizDB = 'http://localhost:3001/api/introresult/'

export default {
  components:
      {
        CustomHeader,
        ProgressBar,
        //Card
      },
  setup() {

    const quiz = ref('')
    const quizID = ref('')
    const chapter = ref('')
    const eventID = ref('')
    const event = ref('')
    const introQuiz = ref('')
    const id = localStorage.getItem('ID');
    const User = reactive({});

    onBeforeMount(async () => {
          await axios.get(`${quizDB}${localStorage.getItem('ID')}`)
          .then(response => {
            quizID.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${chapterDB}${localStorage.getItem('ID')}`)
          .then(response => {
            chapter.value = response.data;
            console.log(chapter);

          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${eventIDDB}${localStorage.getItem('ID')}`)
          .then(response => {
            eventID.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      await axios.get(eventDB)
          .then(response => {
            event.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${introQuizDB}${localStorage.getItem('ID')}`)
          .then(response => {
            introQuiz.value = response.data;
            Object.assign(User, response.data);

          }).catch(err => {
            console.error(err);
          });
    })

    let quiz1 = 0, quiz2 = 0, quiz3 = 0;
    let eventID1, eventID2, eventID3, learnerType, areaOfStudy
    let event1 , event2 , event3 
    let dataCorrect, data2Correct   

    return {
      quiz, quiz1, quiz2, quiz3, eventID1, eventID2, eventID3, event1, event2, event3,dataCorrect, data2Correct, id, areaOfStudy, learnerType, User, quizID, chapter, event, eventID
    }
  },


  methods:{
  },
  computed:{
    chapter1(){
      let check = true;
      for(let i = 0; i < this.quizID.length; i++)
      {
        if(this.quizID[i].ChapterID < 6)
        {check = false;}
      }
      return check;
    },
    chapter2(){
      let check = true;
      for(let i = 0; i < this.quizID.length; i++)
      {
        if(this.quizID[i].ChapterID > 5 && this.quizID[i].ChapterID < 11)
        {check = false;}
      }
      return check;
    },
    chapter3(){
      let check = true;
      for(let i = 0; i < this.quizID.length; i++)
      {
        if(this.quizID[i].ChapterID > 10 && this.quizID[i].ChapterID < 16)
        {check = false;}
      }
      return check;
    },
    chapter4(){
      let check = true;
      for(let i = 0; i < this.quizID.length; i++)
      {
        if(this.quizID[i].ChapterID > 15 && this.quizID[i].ChapterID < 21)
        {check = false;}
      }
      return check;
    },
    chapter5(){
      let check = true;
      for(let i = 0; i < this.quizID.length; i++)
      {
        if(this.quizID[i].ChapterID > 20 && this.quizID[i].ChapterID < 26)
        {check = false;}
      }
      return check;
    }
  }
}
</script>

<style scoped>

</style>