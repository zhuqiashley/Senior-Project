<template>
  <custom-header title="User Statistics"></custom-header>

  <div class="container mt-4">
    <progress-bar :progress="quiz1" />
  </div>
  <div class="container mt-4">
      <progress-bar :progress="quiz2"/>
  </div>
  <div class="container mt-4">
        <progress-bar :progress="quiz3"/>
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
    const id = 3;
    let quiz1, quiz2, quiz3;

    try{
      const data = axios.get(quizDB, {params: {UserID: id, Quiz1Score: quiz1, Quiz2Score: quiz2, Quiz3Score: quiz3}}).then(res => res.data);
      console.log(data);
      for(var i = 0; i < quiz.value.length; i++)
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
      }

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

    return {
      quiz, quiz1, quiz2, quiz3
    }

  },
}
</script>

<style scoped>

</style>