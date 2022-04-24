<!-- ======= TEMPLATE ======= -->
<template>
	<div class="login container mt-4">
		<card>
			<template #body>
				<div class="form-floating mb-3">
                    <h3 v-if="failed == 1">Username Not Valid</h3>
                    <p>Enter your Username</p>
					<input v-model="email" type="email" ref = "getemail" class="form-control" placeholder="name@example.com">
				</div>
				<div class="d-grid gap-2">
					<button class="btn btn-success" type="button" @click="login">Enter</button>
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
//import VueSessionStorage from 'vue-sessionstorage';



let userDB = 'http://localhost:3001/api/userwithoutid'
let userLoginDB = 'http://localhost:3001/api/userlogin/'

export default {
  components:
  {
    Card
  },

  setup() {

      let failed = localStorage.getItem('Failed');
    const User = ref([])
    const user = ref('')
    onBeforeMount(async () => {
      await axios.get(userDB)
          .then(response => {
            user.value = response.data;

          }).catch(err => {
            console.error(err);
          });
          })

	return {
		user, User, userLoginDB, failed
	}
  },
  methods:{
    login: async function()
    {
      //const email = this.$refs.getemail.value;
      await axios.get(`${this.userLoginDB}${this.$refs.getemail.value}`).then(response => {
            this.User.value = response.data;

          }).catch(err => {
            console.error(err);
          });
      const id = this.User.value.UserID;
      localStorage.setItem('ForgotID', id);
      if(id != null)
      {
          localStorage.setItem('Failed', 0);
          this.$router.push('ForgotPassword');
      }
      else{
          localStorage.setItem('Failed', 1);
          window.location.reload();
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