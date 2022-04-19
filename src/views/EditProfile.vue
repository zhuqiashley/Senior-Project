<template>
    <custom-header title="Profile"></custom-header>
  <div class = "login container mt-4">
    <card>
        <div class = "form-floating mb-3">
          <input v-model="firstname" ref="getfirstname" class="form-control" placeholder="firstname">
          <label for="floatingInput">First Name: {{user.FirstName}}</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="lastname" ref="getlastname" class="form-control" placeholder="lastname">
          <label for="floatingInput">Last Name: {{user.LastName}}</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="email" ref="getemail" class="form-control" placeholder="name@example.com">
          <label for="floatingInput">Username: {{user.username}}</label>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="edit">Edit Profile</button>
        </div>
    </card>
  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import { onBeforeMount, reactive } from "vue";
import axios from 'axios';
//import router from "../router"

let userDB = 'http://localhost:3001/api/userprofile/'
let editDB = 'http://localhost:3001/api/useredit/'

export default {
    components:
    {
        CustomHeader,
    },
  setup(){

    const user = reactive({});
    onBeforeMount(async () => {
      await axios.get(`${userDB}${localStorage.getItem('ID')}`)
          .then(response => {
            Object.assign(user, response.data);

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
        userid, firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel, user
      }
  },

  methods:{
    edit: async function(){
        let firstName = this.$refs.getfirstname.value;
        let lastName = this.$refs.getlastname.value;
        let email = this.$refs.getemail.value;

       axios.put(`${editDB}${localStorage.getItem('ID')}`, {FirstName:firstName, LastName:lastName, username:email, ID:this.userid}).then(response=>{
        console.log(response);
      }).catch(e=>{
        console.error(e);
      })
       //this.$router.push('AccountCreationSuccess');
    }
  }
}

</script>

<style scoped>

</style>