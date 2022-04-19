<template>
    <custom-header title="Profile"></custom-header>
  <div class="container mt-4">
    <p>{{this.userid}}</p>
  </div>
  <div class = "container mt-4">
          <p>First Name: {{this.firstName}}</p>
  </div>
        <div class = "container mt-4">
          <p>Last Name: {{this.lastName}}</p>
        </div>
        <div class = "container mt-4">
          <p>Email: {{this.email}}</p>
        </div>
        <div class = "container mt-4">
          <p>Role: {{this.role}}</p>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="login">Load Profile</button>
        </div>
  <div class = "login container mt-4">
    <card>
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
        <div class = "form-floating mb-3">
          <input v-model="password" ref="getrole" class="form-control" placeholder="Student or Admin">
          <label for="floatingInput">Student or Admin</label>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="edit">Edit Profile</button>
        </div>
    </card>
  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import { ref, onBeforeMount } from "vue";
import axios from 'axios';
//import router from "../router"

let userDB = 'http://localhost:3001/api/user'
let editDB = 'http://localhost:3001/api/useredit'

export default {
    components:
    {
        CustomHeader,
    },
  setup(){

    const user = ref('')
    onBeforeMount(async () => {
      await axios.get(userDB)
          .then(response => {
            user.value = response.data;

          }).catch(err => {
            console.error(err);
          });})

      let firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      let userid = 100;
      let length = 100;
      userid = localStorage.getItem('ID');
      length = localStorage.length;
      console.log(userid);
      console.log(length);

      return{
        userid, firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      }
  },

  methods:{
    login: async function(){
      const email = localStorage.getItem('ID');
      try{
        const data = await axios.get(userDB, {params: {UserID: email}}).then(res => res.data);
        console.log(data);
        for(var i = 0; i < data.valueOf().length; i++)
        {
          let id = data[i].UserID;
          /*let variablecheck = data[i].FirstName;
          console.log(variablecheck);*/
          this.firstNameLabel = "First Name: ";
          this.lastNameLabel = "Last Name: "
          this.emailLabel = "Email: "
          this.roleLabel = "Role: "
          if(id == email)
          {
            this.firstName = data[i].FirstName;
            this.lastName = data[i].LastName;
            this.email = data[i].username;
            this.role = data[i].Role;
            this.$forceUpdate();
          }
        }
      }
      catch
      {
        await this.$router.push('Events');
      }
    },
    edit: async function(){
        let firstName = this.$refs.getfirstname.value;
        let lastName = this.$refs.getlastname.value;
        let email = this.$refs.getemail.value;
        let passwordInput = this.$refs.getpassword.value;
        let roleInput = this.$refs.getrole.value;

       axios.post(editDB + this.userid), {FirstName:firstName, LastName:lastName, username:email, password:passwordInput, role:roleInput}.then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      })
       this.$router.push('Profile');
    }
  }
}

</script>

<style scoped>

</style>