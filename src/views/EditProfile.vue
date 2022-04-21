<template>
    <custom-header title="Edit Profile"></custom-header>
  <div class = "login container mt-4">
    <card>
      <h3 v-if="fillTest == 1">Please Fill Out All Fields</h3>
        <div class = "form-floating mb-3">
          <input v-model="firstname" ref="getfirstname" class="form-control" placeholder="firstname">
          <label for="floatingInput">First Name: {{User.FirstName}}</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="lastname" ref="getlastname" class="form-control" placeholder="lastname">
          <label for="floatingInput">Last Name: {{User.LastName}}</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="email" ref="getemail" class="form-control" placeholder="name@example.com">
          <label for="floatingInput">Username: {{User.username}}</label>
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="edit">Submit Changes</button>
        </div>
    </card>
  </div>
</template>

<script>
import CustomHeader from '../components/Header.vue'
import { onBeforeMount, reactive } from "vue";
import axios from 'axios';
//import router from "../router"

//let userDB = 'http://localhost:3001/api/user'
let editDB = 'http://localhost:3001/api/useredit'
let userLoginDB = 'http://localhost:3001/api/userprofile/'

export default {
    components:
    {
        CustomHeader,
    },
  setup(){

    //const user = ref('')
    const User = reactive({});
    onBeforeMount(async () => {
          await axios.get(`${userLoginDB}${localStorage.getItem('ID')}`).then(response => {
            Object.assign(User, response.data);

          }).catch(err => {
            console.error(err);
          });
          })

      let firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      let userid = 100;
      //let length = 100;
      userid = localStorage.getItem('ID');
      //length = localStorage.length;
      let fillTest = localStorage.getItem('fillCheck');
      let passwordTest = localStorage.getItem('passwordCheck');
      console.log(fillTest);
      console.log(passwordTest);

      return{
        userid, firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel, User, fillTest, passwordTest
      }
  },

  methods:{
    edit: async function(){
        let firstName = this.$refs.getfirstname.value;
        let lastName = this.$refs.getlastname.value;
        let email = this.$refs.getemail.value;
        console.log(firstName + " " + lastName + " " + email);
        let idVariable = localStorage.getItem('ID');
        console.log(idVariable);

        if(firstName == "" || lastName == "" || email == "")
        {
          localStorage.setItem('fillCheck', 1);
          window.location.reload();
          return;
        }

        localStorage.setItem('fillCheck', 0);
        localStorage.setItem('passwordCheck', 0);
       axios.put(editDB, {FirstName:firstName, LastName:lastName, username:email, id:idVariable}).then(response=>{
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