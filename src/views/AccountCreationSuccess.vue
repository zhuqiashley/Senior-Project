<template>
  <custom-header title="Account Creation"></custom-header>
  <div style="text-align: center">
    <p>


    </p>
  </div>
    <div style="text-align: center">
      <p>Account Created Successfully</p>
    </div>
  <div style="text-align: center">
    <p>


    </p>
  </div>
  <div style="text-align: center">
          <span>
            <a class="text-link" @click="redirect">Login</a>
          </span>
  </div>

</template>

<script>

import { ref, onBeforeMount } from "vue";
import axios from 'axios';

let userLoginDB = 'http://localhost:3001/api/userlogin/'

export default {
  name: "AccountCreationSuccess",

  setup(){

    const User = ref([])
    let name = localStorage.getItem('Name');
    console.log(name);
    //localStorage.setItem('signedIn', 1);

    onBeforeMount(async () => {
      await axios.get(`${userLoginDB}${name}`).then(response => {
            User.value = response.data;
            console.log(User);

          }).catch(err => {
            console.error(err);
          });
    })
    return{
      User
    }
    //console.log(localStorage.getItem('ID'));

  },
  methods:{
  redirect: async function () {
    //console.log(this.User);
    //localStorage.setItem('ID', this.User.UserID);
    await this.$router.push('Login');
  },
}}
</script>

<style scoped>

</style>