<!-- ======= TEMPLATE ======= -->
<template>
	<div class="login container mt-4">
		<card>
			<template #body>
				<div class="form-floating mb-3">
					<input v-model="email" type="email" class="form-control" placeholder="name@example.com">
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating mb-3">
					<input v-model="password" type="password" class="form-control" placeholder="example">
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
import Card from '../components/Card.vue'
import { ref } from 'vue'

export default {
  components:
  {
    Card
  },
  setup() {
    const email = ref('')
	const password = ref('')
	const login = () => {
		console.log(email.value, password.value)
	}
	return {
		email,
		password,
		login
	}
  },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.login {
	width: 30rem;
}

</style>