<template>
    <custom-header title="Forgot Password"></custom-header>
  <div class = "login container mt-4">
        <div class = "container mt-4">
          <p v-if="question1">What is your Mother's Maiden name?</p>
          <p v-if="question2">What town where you born in?</p>
          <p v-if="question3">What is the title of your favorite book?</p>
          <p v-if="question4">What is your favorite song?</p>
        </div>
        <h3 v-if="fillTest == 1">Please enter your answer.</h3>
        <div class = "form-floating mb-3">
          <input v-model="email" ref="getpassword1" class="form-control" type="password" placeholder="password">
          <label for="floatingInput">Answer</label>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="submit">Submit</button>
        </div>
  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import { onBeforeMount, reactive } from "vue";
import axios from 'axios';
//import router from "../router"

//let editDB = 'http://localhost:3001/api/changepassword'
let userLoginDB = 'http://localhost:3001/api/userprofile/'

export default {
    components:
    {
        CustomHeader,
    },
  setup(){

    const User = reactive({});
    console.log(localStorage.getItem('ForgotID'));
    let question
    onBeforeMount(async () => {
          await axios.get(`${userLoginDB}${localStorage.getItem('ForgotID')}`).then(response => {
            Object.assign(User, response.data);
            console.log(User.SecurityQuestion);

          }).catch(err => {
            console.error(err);
          });
          })

      let userid = 100;
      userid = localStorage.getItem('ID');
      let fillTest = localStorage.getItem('fillCheck');
      let passwordTest = localStorage.getItem('passwordCheck');

      return{
        userid, User, fillTest, passwordTest, question
      }
  },

  methods:{
    submit: async function(){
        let password1 = this.$refs.getpassword1.value;
        let answer = this.User.SecurityAnswer;
        console.log(answer);
        console.log(password1);

        if(password1 == "")
        {
          localStorage.setItem('passwordCheck',0);
          localStorage.setItem('fillCheck', 1);
          window.location.reload();
          return;
        }
        if(answer == password1)
        {
            localStorage.setItem('fillCheck', 0);
            localStorage.setItem('passwordCheck', 0);
            this.$router.push('ChangePassword');
        } 
    }
  },
  computed:{
      question1(){
          let check = false;
          if(this.User.SecurityQuestion == 1)
            {
                check = true;
            }
            return check;
      },
      question2(){
          let check = false;
          if(this.User.SecurityQuestion == 2)
            {
                check = true;
            }
            return check;
      },
      question3(){
          let check = false;
          if(this.User.SecurityQuestion == 3)
            {
                check = true;
            }
            return check;
      },
      question4(){
          let check = false;
          if(this.User.SecurityQuestion == 4)
            {
                check = true;
            }
            return check;
      }
  }
}

</script>

<style scoped>

</style>