<template>
  <custom-header title="User Statistics"></custom-header>

  <div class="container mt-4">
    <p>Quiz 1 Score</p>
    <progress-bar :progress="this.quiz1" />
  </div>
  <div class="container mt-4">
    <p>Quiz 2 Score</p>
      <progress-bar :progress="quiz2"/>
  </div>
  <div class="container mt-4">
    <p>Quiz 3 Score</p>
        <progress-bar :progress="quiz3"/>
  </div>
  <div class="form-floating mb-3">
    <input v-model="email" type="email" ref = "getemail" class="form-control" placeholder="name@example.com">
    <label for="floatingInput">User ID</label>
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

export default {
  components:
      {
        CustomHeader,
        ProgressBar
      },
  setup() {
    const quiz = ref('')
    onBeforeMount(async () => {
      await axios.get(quizDB)
          .then(response => {
            quiz.value = response.data;

          }).catch(err => {
            console.error(err);
          });})
    //this.load();
    //const id = 3;
    let quiz1 = 0, quiz2 = 0, quiz3 = 0;

    /*try{
      const data = axios.get(quizDB, {params: {UserID: id}}).then(res => res.data);
      //const data = axios.get(quizDB).then(res => res.data);
      console.log(data);
      for(var i = 0; i < data.valueOf().length; i++)
      {
        quiz1 = data[i].Quiz1Score;
        console.log(quiz1);
      }*/
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
    /*}
    catch
    {
      this.$router.push('Events');
      //console.log(email,password);
    }*/

    return {
      quiz, quiz1, quiz2, quiz3
    }

  },
  methods:{
    login: async function(quiz1){
      const email = this.$refs.getemail.value;
      //const password = this.$refs.getpassword.value;
      try{
        const data = await axios.get(quizDB, {params: {username: email}}).then(res => res.data);
        console.log(data);
        for(var i = 0; i < data.valueOf().length; i++)
        {
          let username = data[i].UserID;
          //let passwordcheck = data[i].password;
          /*let variablecheck = data[i].FirstName;
          console.log(variablecheck);*/
          if(username == email)
          {
            console.log("inside if");
            this.quiz1 = data[i].Quiz1Score;
            this.quiz2 = data[i].Quiz2Score;
            this.quiz3 = data[i].Quiz3Score;
            //console.log(this.quiz1);
            this.$forceUpdate();
          }
          //await this.$router.push('LoginFailed');
        }

        console.log(email);
      }
      catch
      {
        await this.$router.push('Events');
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