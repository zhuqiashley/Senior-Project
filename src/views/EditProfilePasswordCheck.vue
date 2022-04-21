<!-- ======= TEMPLATE ======= -->
<template>
	<div class="login container mt-4">
		<card>
			<template #body>
                <h3>Please Enter Password</h3>
				<div class="form-floating mb-3">
					<input v-model="password" ref="getpassword" type="password" class="form-control" placeholder="example">
					<label for="floatingInput">Password</label>
				</div>
				<div class="d-grid gap-2">
					<button class="btn btn-success" type="button" @click="login">Submit</button>
				</div>
			</template>
		</card>
	</div>
</template>


<!-- ======= SCRIPT ======= -->
<script>
//import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'
import { reactive, onBeforeMount } from "vue";
import axios from 'axios';



//let userDB = 'http://localhost:3001/api/userwithoutid'
let userLoginDB = 'http://localhost:3001/api/userprofile/'

export default {
  components:
  {
    Card
  },

  setup() {
      const User = reactive({});
    //let i = localStorage.getItem('ID');
    onBeforeMount(async () => {})

	return {
		User
	}
  },
  methods:{
    login: async function()
    {
      const password = this.$refs.getpassword.value;
      try{
        await axios.get(`${userLoginDB}${localStorage.getItem('ID')}`).then(response => {
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
            await this.$router.push('EditProfile');
          }
          else
          {
            await this.$router.push('Profile');
          }

      }
      catch
      {
        await this.$router.push('LoginFailed');
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