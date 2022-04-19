<template>
  <div class = "Signup">
    <custom-header title="Profile"></custom-header>
  <div class = "login container mt-4">
    <card v-for="(user, index) in data1" v-bind:key="index" >
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
        <div class="d-grid gap-2">
          <button class="btn btn-success" type="button" @click="login">Load Profile</button>
        </div>
      </template>
    </card>
  </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import CustomHeader from '../components/Header.vue'
import { ref, onBeforeMount } from "vue";
import axios from 'axios';
//import router from "../router"

let userDB = 'http://localhost:3001/api/userwithoutid'
let userwithidDB = 'http://localhost:3001/api/user'

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
    const data1 = ref([])
    let id = localStorage.getItem('ID');
    const intID = id;
    onBeforeMount(async () => {
      await axios.get(userDB, {params:{UserID : intID}})
          .then(response => {
            users.value = response.data;

          }).catch(err => {
            console.error(err);
          });

          await axios.get(userwithidDB, {params:{UserID : intID}})
          .then(response => {
            data1.value = response.data;
          }).catch(err=>{
            console.error(err);
            console.log(err);
          });
          })

          /*async function pullProfile(id)
          {
            axios.get(userwithidDB, {params:{UserID : intID}})
          .then(response => {
            data1.value = response.data;
          }).catch(err=>{
            console.error(err);
            console.log(err);
          });
          }*/

      //const data1 = axios.get(userwithidDB, {params:{UserID : id}}).then(res => res.data);
      console.log(data1);

      let firstName = data1.value.FirstName; 
      let lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel
      let length = 100;
      length = localStorage.length;
      console.log(id);
      console.log(length);
      console.log(users);


      return{
        id, firstName, lastName, email, role, firstNameLabel, lastNameLabel, emailLabel, roleLabel, users, data1
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
            console.log(this.firstName);
            this.lastName = data[i].LastName;
            console.log(this.lastName);
            this.email = data[i].username;
            console.log(this.email);
            this.role = data[i].Role;
            console.log(this.role);
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
      await this.$router.push('EditProfile');
    }
  }
}
</script>

<style scoped>
.login {
  width: 30rem;
}

</style>