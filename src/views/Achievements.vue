<template>
	<custom-header title="Achievements"></custom-header>

	<div class="container">
		<card>
			<template #title>
				Achievement Title
			</template>
			<template #body>
				<p> Achievement Description </p>
			</template>

		</card>
	</div>

</template>

<script>
import CustomHeader from '../components/Header.vue'
import Card from '../components/Card.vue'

export default {
	components:
	{
		CustomHeader,
		Card,
	},
	setup() {

	},
}
</script>


<style scoped>

</style>