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
          <input v-model="password" ref="getpassword" class="form-control" placeholder="password">
          <label for="floatingInput">Password</label>
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
//import { ref, onBeforeMount } from "vue";
import axios from 'axios';
//import {onBeforeMount, ref} from "vue";

let userDB = 'http://localhost:3001/api/user'

export default {
  components:
      {
        Card
      },
  /*setup() {
    const user = ref('')
    onBeforeMount(async () => {
      await axios.get(userDB)
          .then(response => {
            user.value = response.data;

          }).catch(err => {
            console.error(err);
          });})

    return {
      user
    }
  },*/
  methods:{
    submit: async function(){
      const postData = {firstName: this.$refs.getfirstname.value, lastName: this.$refs.getlastname.value, email: this.$refs.getemail.value, passwordInput: this.$refs.getpassword.value,
        UserIDInput: 2};

      await axios.post(userDB, postData).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      });
    }
  }
}
</script>

<style scoped>
.login {
  width: 30rem;
}
</style>