<template>
	<div class="login container mt-4">
		<card>
			<template #body>
				<div class="form-floating mb-3">
					<input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
					<label for="floatingInput">Email address</label>
				</div>
				<div class="form-floating mb-3">
					<input type="password" class="form-control" id="floatingInput" placeholder="example">
					<label for="floatingInput">Password</label>
				</div>
				<div class="d-grid gap-2">
					<button class="btn btn-success" type="button" @click="login">Login</button>
				</div>
			</template>
		</card>
	</div>
</template>

<script>
import Card from '../components/Card.vue'


export default {
  components:
  {
    Card
  },
  setup() {
    
  },
}
</script>


<style scoped>
.login {
	width: 30rem;
}

</style>