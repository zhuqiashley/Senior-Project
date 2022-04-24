<template>
  <div class = "Signup">
    <custom-header title="Profile"></custom-header>
  <div class = "login container mt-4">
    <card>
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
        <div class = "form-floating mb-3">
          <p>First Name: {{User.FirstName}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>Last Name: {{User.LastName}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>Username: {{User.username}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>Role: {{User.Role}}</p>
        </div>
      </template>
    </card>
    <card>
      <template #body>
      <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="edit">Edit Profile</button>
        </div>
      </template>
    </card>
    <card>
      <template #body>
      <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="statistics">View Statistics</button>
        </div>
      </template>
    </card>
    <card>
      <template #body>
      <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="password">Change Password</button>
        </div>
      </template>
    </card>
  </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import CustomHeader from '../components/Header.vue'
import { ref, onBeforeMount, reactive } from "vue";
import axios from 'axios';
//import router from "../router"

let userLoginDB = 'http://localhost:3001/api/userprofile/'
let introQuizDB = 'http://localhost:3001/api/introresult/'

export default {
    components:
    {
        CustomHeader,
        Card
    },
  setup(){
      let reloadCheck = localStorage.getItem('reloadCheck');
      let zero = 0;
      console.log(reloadCheck);
    if(reloadCheck > 0)
    {
      window.location.reload();
      localStorage.setItem('reloadCheck', zero);
      console.log("inside if");
    }
    const users = ref([])
    const User = reactive({});
    const userIntro = reactive({});
    const data1 = ref([])
    let id = localStorage.getItem('ID');
    onBeforeMount(async () => {
      await axios.get(`${userLoginDB}${localStorage.getItem('ID')}`).then(response => {
            Object.assign(User, response.data);

          }).catch(err => {
            console.error(err);
          });
      await axios.get(`${introQuizDB}${localStorage.getItem('ID')}`)
          .then(response => {
            Object.assign(userIntro, response.data);
          }).catch(err => {
            console.error(err);
          });
          })

      let firstName = data1.value.FirstName; 
      let lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      let length = 100;
      length = localStorage.length;
      console.log(id);
      console.log(length);
      console.log(users);


      return{
        id, firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel, users, data1, User
      }
  },

  methods:{
    login: async function(){
      
    },
    edit: async function(){
      localStorage.setItem('fillCheck',0);
      localStorage.setItem('passwordCheck',0);
      await this.$router.push('EditProfilePasswordCheck');
    },
    statistics: async function(){
      await this.$router.push('Statistics');
    },
    password: async function(){
      localStorage.setItem('fillCheck',0);
      localStorage.setItem('passwordCheck',0);
      await this.$router.push('ChangePasswordPasswordCheck');
    }
  }
}
</script>

<style scoped>
.login {
  width: 30rem;
}

</style>