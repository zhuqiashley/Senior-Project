<template>
    <custom-header title="Change Password"></custom-header>
  <div class = "login container mt-4">
    <card>
        <h3 v-if="passwordTest == 1">Please make sure your passwords match.</h3>
        <h3 v-if="fillTest == 1">Please fill both fields.</h3>
        <div class = "form-floating mb-3">
          <input v-model="email" ref="getpassword1" class="form-control" type="password" placeholder="password">
          <label for="floatingInput">Enter New Password</label>
        </div>
        <div class = "form-floating mb-3">
          <input v-model="email" ref="getpassword2" class="form-control" type="password" placeholder="password">
          <label for="floatingInput">Re-Enter New Password</label>
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

let editDB = 'http://localhost:3001/api/changepassword'
let userLoginDB = 'http://localhost:3001/api/userprofile/'

export default {
    components:
    {
        CustomHeader,
    },
  setup(){
      if(localStorage.getItem('ID') == 0)
      {
          localStorage.setItem('ID',localStorage.getItem('ForgotID'));
      }
    const User = reactive({});
    onBeforeMount(async () => {
          await axios.get(`${userLoginDB}${localStorage.getItem('ID')}`).then(response => {
            Object.assign(User, response.data);

          }).catch(err => {
            console.error(err);
          });
          })

      let userid = 100;
      userid = localStorage.getItem('ID');
      let fillTest = localStorage.getItem('fillCheck');
      let passwordTest = localStorage.getItem('passwordCheck');

      return{
        userid, User, fillTest, passwordTest
      }
  },

  methods:{
    edit: async function(){
        let password1 = this.$refs.getpassword1.value;
        let password2 = this.$refs.getpassword2.value;
        let idVariable = localStorage.getItem('ID');

        if(password1 == "" || password2 == "")
        {
          localStorage.setItem('passwordCheck',0);
          localStorage.setItem('fillCheck', 1);
          window.location.reload();
          return;
        }
        if(password1 != password2)
        {
          localStorage.setItem('fillCheck',0);
          localStorage.setItem('passwordCheck', 1);
          window.location.reload();
          return;
        }

        localStorage.setItem('fillCheck', 0);
        localStorage.setItem('passwordCheck', 0);
       axios.put(editDB, {Password: password1, id:idVariable}).then(response=>{
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