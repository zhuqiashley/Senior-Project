<template>
  <custom-header title="User Statistics"></custom-header>

  <div class="container mt-4">
    <p>Quiz 1 Score </p>
    <progress-bar :progress="this.quiz1" />
  </div>
  <div class="container mt-4">
    <p>Quiz 2 Score</p>
      <progress-bar :progress="this.quiz2"/>
  </div>
  <div class="container mt-4">
    <p>Quiz 3 Score</p>
        <progress-bar :progress="this.quiz3"/>
  </div>
  <div class="container mt-4">
    <p>Chapter 1 Completion</p>
    <progress-bar :progress="this.chapter1" />
  </div>
  <div class="container mt-4">
    <p>Chapter 2 Completion</p>
    <progress-bar :progress="chapter2"/>
  </div>
  <div class="container mt-4">
    <p>Chapter 3 Completion</p>
    <progress-bar :progress="chapter3"/>
  </div>
  <div class ="container mt-4">
    <p>Learning Type</p>
    <p>{{this.learnerType}}</p>
  </div>
  <div class ="container mt-4">
    <p>Recommended Area of Study</p>
    <p>{{this.areaOfStudy}}</p>
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
    login: async function(quiz1){
      const email = localStorage.getItem('ID');
      try{
        const data = await axios.get(quizDB, {params: {username: email}}).then(res => res.data);
        console.log(data);
        for(var i = 0; i < data.valueOf().length; i++)
        {
          let username = data[i].UserID;
          if(username == email)
          {
            //console.log("inside if");
            this.quiz1 = data[i].Quiz1Score;
            this.quiz2 = data[i].Quiz2Score;
            this.quiz3 = data[i].Quiz3Score;
            this.$forceUpdate();
          }
        }

        console.log(email);
      }
      catch
      {
        await this.$router.push('Events');
        console.log(email);
      }
      try{
        const data1 = await axios.get(chapterDB, {params: {UserID: email}}).then(res => res.data);
        console.log(data1);
        for(var j = 0; j < data1.valueOf().length; j++)
        {
          let username = data1[j].UserID;
          if(username == email)
          {
            //console.log("inside if");
            this.chapter1 = data1[j].Course1;
            this.chapter2 = data1[j].Course2;
            this.chapter3 = data1[j].Course3;
            this.$forceUpdate();
          }
        }
      }
      catch
      {
        await this.$router.push('Events');
        console.log(email);
      }
      try{
        const data2 = await axios.get(eventIDDB, {params: {UserID: email}}).then(res => res.data);
        console.log(data2);
        for(var k = 0; k < data2.valueOf().length; k++)
        {
          let username = data2[k].UserID;
          if(username == email)
          {
            //console.log("inside if");
            this.eventID1 = data2[k].EventID;
            this.eventID2 = data2[k].EventID2;
            this.eventID3 = data2[k].EventID3;
            this.$forceUpdate();
          }
        }
      }
      catch
      {
        await this.$router.push('Events');
        console.log(email);
      }
      try{
        const data3 = await axios.get(eventDB, {params: {UserID: email}}).then(res => res.data);
        console.log(data3);
        for(var l = 0; l < data3.valueOf().length; l++)
        {

          let insideId;
          insideId = data3[l].EventID;
          console.log(insideId);
          console.log(this.eventID1);

          if(insideId == this.eventID1)
            {
              const eventTitle1 = data3[l].EventTitle;
              console.log(eventTitle1);
              
              this.event1 = data3[l].EventTitle;
            }
          if(insideId == this.eventID2)
          {
            this.event2 = data3[l].EventTitle;
          }
          if(insideId == this.eventID3)
          {
            this.event3 = data3[l].EventTitle;
          }
            //console.log(this.quiz1);
            this.$forceUpdate();
          }
          //await this.$router.push('LoginFailed')
      }
      catch
      {
        await this.$router.push('Events');
        console.log(email);
      }
      try{
          const data4 = await axios.get(introQuizDB).then(res => res.data);
          console.log("intro quiz data");
          console.log(data4);
          for(var m = 0; m < data4.valueOf().length; m++)
          {
            let insideID = data4[m].UserID;
            if(email == insideID)
            {
              if(data4[m].TypeOfLearner == 0)
              {
                this.learnerType = "Visual Learner";
              }
              if(data4[m].TypeOfLearner == 1)
              {
                this.learnerType = "Auditory Learner";
              }
              if(data4[m].TypeOfLearner == 2)
              {
                this.learnerType = "Tactile/Kinesthetic Learner";
              }
              if(data4[m].CourseRecommended == 0)
              {
                this.areaOfStudy = "CyberSecurity";
              }
              if(data4[m].CourseRecommended == 1)
              {
                this.areaOfStudy = "Data Science";
              }
              if(data4[m].CourseRecommended == 2)
              {
                this.areaOfStudy = "Web Development";
              }
              if(data4[m].CourseRecommended == 3)
              {
                this.areaOfStudy = "Metaverse";
              }
            }
          }
          //console.log(this.learnerType);
          this.$forceUpdate();
      }
      catch{
        //await this.$router.push('Events');
        console.log(email);
      }
      return{
        quiz1
      }
    },
    load: async function(){
      let quiz1 = 10;
      const id =3;
      try{
        const data = axios.get(quizDB, {params: {UserID: id}}).then(res => res.data);
        //const data = axios.get(quizDB).then(res => res.data);
        console.log(data);
        console.log(data.valueOf().length);
        for(var i = 0; i < 1; i++)
        {
          console.log("insidefor");
          quiz1 = data[i].Quiz1Score;
          console.log(quiz1);
        }
        /*quiz1 = data[0].Quiz1Score;
        quiz2 = data[0].Quiz2Score;
        quiz3 = data[0].Quiz3Score;*/
        //console.log(data[0].Quiz1Score,data[0].Quiz2Score,data[0].Quiz3Score);
        /*for(var i = 0; i < data.valueOf().length; i++)
        {
          let userID = quiz[i].UserID;

          if(userID == id)
          {
            quiz1 = data[i].Quiz1Score;
            console.log(quiz1);
            quiz2 = data[i].Quiz2Score;
            console.log(quiz2);
            quiz3 = data[i].Quiz3Score;
            console.log(quiz3);
          }
        }*/

        /*const quiz1Computed = computed(() => {
          return quiz1;
        });

        const quiz2Computed = computed(() => {
          return quiz2;
        });

        const quiz3Computed = computed(() => {
          return quiz3;
        });*/

        //console.log(email,password);
      }
      catch
      {
        this.$router.push('Events');
        //console.log(email,password);
      }
    }
  }
}
</script>

<style scoped>

</style>