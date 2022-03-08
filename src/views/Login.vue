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
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
//import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import { ref, onBeforeMount } from "vue";
import axios from 'axios';

let userDB = 'http://localhost:3001/api/user'

export default {
  components:
  {
    Card
  },

  setup() {
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
  },
  methods:{
    login: async function(){
      const email = this.$refs.getemail.value;
      const password = this.$refs.getpassword.value;
      try{
        const data = await axios.get(userDB, {params: {username: email, password: password}}).then(res => res.data);
        console.log(data);
        for(var i = 0; i < data.length; i++)
        {
          let username = data[i].username;
          let passwordcheck = data[i].password;
          if(username == email && passwordcheck == password)
          {
            await this.$router.push('Profile');
          }
          else
          {
            await this.$router.push('LoginFailed');
          }
        }

        console.log(email,password);
      }
      catch
      {
        await this.$router.push('Events');
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