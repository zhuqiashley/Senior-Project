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
  <div class="container mt-4">
    <p>Chapter 3 Completion</p>
    <progress-bar :progress="chapter3"/>
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
    <p>Enrolled Events</p>
    <p>{{this.event1}}</p>
    <p>


    </p>
    <p>{{this.event2}}</p>
    <p>


    </p>
    <p>{{this.event3}}</p>
  </div>
  <div class="d-grid gap-2">
    <button class="btn btn-success" type="button" @click="login(quiz1)">Load</button>
  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import { ref, onBeforeMount } from "vue";
import axios from 'axios';
import ProgressBar from '../components/ProgressBar.vue';
//import { computed } from 'vue';

let quizDB = 'http://localhost:3001/api/quiz'
let chapterDB = 'http://localhost:3001/api/VideoCompletion'
let eventIDDB = 'http://localhost:3001/api/UserEvents'
let eventDB = 'http://localhost:3001/api/event'
let introQuizDB = 'http://localhost:3001/api/IntroQuizResult'

export default {
  components:
      {
        CustomHeader,
        ProgressBar
      },
  setup() {

    const quiz = ref('')
    const chapter = ref('')
    const eventID = ref('')
    const event = ref('')
    const introQuiz = ref('')
    const id = localStorage.getItem('ID');

    onBeforeMount(async () => {
      await axios.get(quizDB)
          .then(response => {
            quiz.value = response.data;
            console.log(quiz);

          }).catch(err => {
            console.error(err);
          });
      await axios.get(chapterDB)
          .then(response => {
            chapter.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      await axios.get(eventIDDB)
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
      await axios.get(introQuizDB)
          .then(response => {
            introQuiz.value = response.data;

          }).catch(err => {
            console.error(err);
          });
    })

    let quiz1 = 0, quiz2 = 0, quiz3 = 0;
    let chapter1 = 0, chapter2 = 0, chapter3 = 0;
    let eventID1, eventID2, eventID3, learnerType, areaOfStudy
    let event1 , event2 , event3 
    let dataCorrect, data2Correct   

    return {
      quiz, quiz1, quiz2, quiz3, chapter1, chapter2, chapter3, eventID1, eventID2, eventID3, event1, event2, event3,dataCorrect, data2Correct, id, areaOfStudy, learnerType
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