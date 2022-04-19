<template>
  <div class = "Signup">
    <custom-header title="Profile"></custom-header>
  <div class = "login container mt-4">
    <card >
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
          <p>Email: {{User.username}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>Role: {{User.Role}}</p>
        </div>
      </template>
    </card>
    <card v-for="(user, index) in users" v-bind:key="index" >
      <div class="card-text">
                <slot name="body"></slot>
            </div>
      <template #body>
        <div class = "form-floating mb-3">
          <p>{{user.FirstName}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>{{user.LastName}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>{{user.username}}</p>
        </div>
        <div class = "form-floating mb-3">
          <p>{{user.Role}}</p>
        </div>
      </template>
    </card>
    <div class="d-grid gap-2">
      <button class="btn-btn-success" type="button" @click="edit">Edit Profile</button>
    </div>
  </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import CustomHeader from '../components/Header.vue'
import { ref, onBeforeMount, reactive } from "vue";
import axios from 'axios';
//import router from "../router"

//let userDB = 'http://localhost:3001/api/userwithoutid'
let userDB = 'http://localhost:3001/api/userprofile/'

export default {
    components:
    {
        CustomHeader,
        Card
    }, 
  setup(){

    const users = ref([])
    const User = reactive({});
    let id = localStorage.getItem('ID');
    let firstName

    //const User = reactive({});

    //const intID = id;
    onBeforeMount(async () => {
      await axios.get(`${userDB}${localStorage.getItem('ID')}`)
          .then(response => {
            Object.assign(User, response.data);
            console.log(User.FirstName);

          }).catch(err => {
            console.error(err);
          });
          })

      //let firstName
      let lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      console.log(users);


      return{
        id, firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel, users, User
      }
  },

    data() {
   return {
     red: this.User.FirstName,
     chili: 'peppers'
   }
  },

  methods:{
    edit: async function(){
      await this.$router.push('EditProfile');
    }
    }
    
  }
</script>

<style scoped>
.login {
  width: 26.5rem;
}

</style>