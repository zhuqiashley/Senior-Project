<!-- Modal code adapted from www.digitalocean.com/ -->
<template>
	<transition name="modal-fade">
		<div class="modal-backdrop">
			<div class="modal">
				<header class="modal-header">
					<slot name="header">
						Defualt Title
					</slot>
					<button type="button" class="btn-close" @click="close">
						x
					</button>
				</header>

				<section class="modal-body">
					<slot name="body">
						Default Body
					</slot>
				</section>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'Modal',
		methods: {
			close() {
				this.$emit('close');
			},
		},
	};
</script>


<style scoped>
.modal-backdrop {
	position: fixed;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	background: #FFFFFF;
	overflow-x: auto;
	display: flex;
	flex-direction: column;
	position:absolute;
	top:60%;
	left:50%;
	width:50%;
	height:50%;
	margin-left:-25%;
	margin-top:-25%;
}

.modal-header{
	padding: 15px;
	display: flex;
}

.modal-header {
	position: relative;
	border-bottom: 1px solid #eeeeee;
	color: white;
	justify-content: space-between;
	background: #0c3c53;
	justify-content: center;
	font-size: 1.25rem;
}

.modal-body {
	position: relative;
	padding: 20px 10px;
}

.btn-close {
	position: absolute;
	top: 0;
	right: 0;
	border: none;
	font-size: 2rem;
	padding: 10px;
	cursor: pointer;
	font-weight: bold;
	color: white;
	background: transparent;
}

.btn-green {
	color: white;
	background: #20ad85;
	border: 1px solid #20ad85;
	border-radius: 2px;
}

/* smooth fade out transition */ 
.modal-fade-enter,
.modal-fade-leave-to {
	opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity .5s ease;
}
</style>
