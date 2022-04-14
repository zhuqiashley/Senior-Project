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
          <input v-model="password" ref="getrole" class="form-control" placeholder="Student or Admin">
          <label for="floatingInput">Student or Admin</label>
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
//import { ref, onBeforeMount } from "vue";
import axios from 'axios';
//import {onBeforeMount, ref} from "vue";

let userDB = 'http://localhost:3001/api/userpost'

export default {
  components:
      {
        Card,
        CustomHeader
      },
  setup() {
    /*const user = ref('')
    onBeforeMount(async () => {
      await axios.get(userDB)
          .then(response => {
            user.value = response.data;

          }).catch(err => {
            console.error(err);
          });})

    return {
      user
    }*/
  },
  methods:{
    submit(){
      let firstName = this.$refs.getfirstname.value;
      let lastName = this.$refs.getlastname.value;
      let email = this.$refs.getemail.value;
      let passwordInput = this.$refs.getpassword.value;
      let roleInput = this.$refs.getrole.value;

       axios.post(userDB, {FirstName:firstName, LastName:lastName, username:email, password:passwordInput, role:roleInput}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
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