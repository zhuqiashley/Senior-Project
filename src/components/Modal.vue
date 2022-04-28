<!-- Modal code adapted from www.digitalocean.com/ and bootstrap -->
<template>
	<!-- Modal -->
	<div :id="uid" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="label" aria-hidden="true">
		<div :class="['modal-dialog', size]">
			<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="title">
					<slot name="title">
						Default Title
					</slot>
				</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="toggle()"></button>
			</div>
			<div class="modal-body">
				<slot name="body">
				</slot>
			</div>
			<div class="modal-footer" v-if="hasSlot('footer')">
				<slot name="footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
				</slot>
			</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

export default {
	props: {
		size: {
			type: String,
		}
	},
	setup(props, { slots }) {
		const isModalVisible = ref(false);
		const uid = "Modal_" + Math.random().toString(16).slice(2)
		const modal = ref(null);

		onMounted(() => {
			modal.value = new Modal(document.getElementById(uid), {});
		});


		function toggle() {
			isModalVisible.value = !isModalVisible.value;

			if (isModalVisible.value) {
				modal.value.show();
			} else {
				modal.value.hide();
			}
		}

		function hasSlot(name) {
			return !!slots[name];
		}

		return {
			hasSlot, toggle,
			isModalVisible, uid
		}
	},
}
</script>

<style scoped>
.modal-header {
	background: rgb(12, 34, 71);
	color: white;
}
.btn-close {
	background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat
}
.modal-body {
	margin-bottom: -15px;
}
</style>
