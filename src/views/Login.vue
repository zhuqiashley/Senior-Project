<!-- ======= TEMPLATE ======= -->
<template>
	<div class="login container mt-4">
		<card>
			<template #body>
				<div class="form-floating mb-3">
					<input v-model="email" type="email" ref = "getemail" class="form-control" placeholder="name@example.com">
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating mb-3">
					<input v-model="password" ref="getpassword" type="password" class="form-control" placeholder="example">
					<label for="floatingInput">Password</label>
				</div>
				<div class="d-grid gap-2">
					<button class="btn btn-success" type="button" @click="login">Login</button>
				</div>
			</template>
		</card>
    <div style="text-align: center">
          <span>
            <p>

            </p>
            <a class="text-link" @click="redirect">No Account? Sign Up</a>
          </span>
  </div>
	</div>
</template>


<!-- ======= SCRIPT ======= -->
<script>
//import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import { ref, onBeforeMount } from "vue";
import axios from 'axios';
//import VueSessionStorage from 'vue-sessionstorage';



let userDB = 'http://localhost:3001/api/userwithoutid'
let userLoginDB = 'http://localhost:3001/api/userlogin/'

export default {
  components:
  {
    Card
  },

  setup() {

    const User = ref([])
    const user = ref('')
    onBeforeMount(async () => {
      await axios.get(userDB)
          .then(response => {
            user.value = response.data;

          }).catch(err => {
            console.error(err);
          });})

	return {
		user, User
	}
  },
  methods:{
    redirect: async function () {
    await this.$router.push('/Signup');
  },
    login: async function()
    {
      const email = this.$refs.getemail.value;
      const password = this.$refs.getpassword.value;
      try{
        await axios.get(`${userLoginDB}${email}`).then(response => {
            this.User.value = response.data;
            console.log(this.User);

          }).catch(err => {
            console.error(err);
          });
        let id = this.User.value.UserID;
        if(this.User.value.password == password)
          {
            console.log("inside if");
            localStorage.setItem('reloadCheck', 1);
            localStorage.setItem('signedIn', 1)
            localStorage.setItem('ID',id);
            await this.$router.push('Profile');
          }
          else
          {
            await this.$router.push('LoginFailed');
          }

      }
      catch
      {
        await this.$router.push('LoginFailed');
        console.log(email,password);
      }
    }
  }
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.login {
	width: 30rem;
}

</style>