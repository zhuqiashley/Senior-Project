<template>
  <div class = "Signup">
    <custom-header title="Create Account"></custom-header>
  <div class = "login container mt-4">
    <card>
      <template #body>
        <div class = "form-floating mb-3">
          <input v-model="firstname" ref="getfirstname" class="form-control" placeholder="firstname">
          <label for="floatingInput">First Name</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="lastname" ref="getlastname" class="form-control" placeholder="lastname">
          <label for="floatingInput">Last Name</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="email" ref="getemail" class="form-control" placeholder="name@example.com">
          <label for="floatingInput">Email Address</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="password" ref="getpassword" type="password" class="form-control" placeholder="password">
          <label for="floatingInput">Password</label>
        </div>
        <div class = "form-floating mb-3">
          <select ref="getroledropdown">
            <option>Role</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div class = "form-floating mb-3">
          <p>Security Question</p>
        </div>
        <div class = "form-floating mb-3">
          <select ref="getsecurityquestion">
            <option>Select a Quesion</option>
            <option value="1">What is your Mother's Maiden name?</option>
            <option value="2">What town where you born in?</option>
            <option value = "3">What is the title of your favorite book?</option>
            <option value = "4">What is your favorite song?</option>
          </select>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="answer" ref="getanswer" type="answer" class="form-control" placeholder="password">
          <label for="floatingInput">Answer</label>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="submit">Sign Up</button>
        </div>
      </template>
    </card>
  </div>
  </div>
</template>

<script>

import Card from '../components/Card.vue'
import CustomHeader from '../components/Header.vue'
import { ref } from "vue";
import axios from 'axios';
//import {onBeforeMount, ref} from "vue";
//import bcrypt from 'bcrypt'

let userDB = 'http://localhost:3001/api/userpost'
//let userLoginDB = 'http://localhost:3001/api/userlogin/'

export default {
  components:
      {
        Card,
        CustomHeader
      },
  setup() {
    const User = ref([])
    return{
      User
    }
  },
  methods:{
    submit(){
      let firstName = this.$refs.getfirstname.value;
      let lastName = this.$refs.getlastname.value;
      let email = this.$refs.getemail.value;
      let passwordInput = this.$refs.getpassword.value;
      let roleInput = this.$refs.getroledropdown.value;
      let securityquestion = this.$refs.getsecurityquestion.value;
      let securityanswer = this.$refs.getanswer.value;
      //let answer = this.$refs.answer.value;
      //let rounds = 10;

      /*bcrypt.hash(passwordInput, rounds, (err, hash) => {
      if (err) {
      console.error(err)
      return
      }
      console.log(hash)
      })*/

       axios.post(userDB, {FirstName:firstName, LastName:lastName, username:email, password:passwordInput, role:roleInput, SecurityQuestion:securityquestion, SecurityAnswer:securityanswer}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
      localStorage.setItem('Name', email);
      localStorage.setItem('signedIn', 1);
       this.$router.push('AccountCreationSuccess');
    }
  }
}
</script>

<style scoped>
.login {
  width: 30rem;
}
</style>