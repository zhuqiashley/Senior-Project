<template>
	<div class="card">
		<!-- <div class="pic">
			<img src="../assets/img/badges/Idea_Badge_Color.png" class="img-fluid" alt="">
		</div> -->
		<img v-if="image && !image.left" :src="getImage(`${image.src}`) " class="card-img-top" :alt="image.alt">
		<div class="card-body">
			<h5 class="card-title" v-if="hasSlot('title')">
				<slot name="title"></slot>
			</h5>
			<h6 class="card-subtitle" v-if="hasSlot('subtitle')" >
				<slot name="subtitle"></slot>
			</h6>
			<div class="card-text"  v-if="hasSlot('body')">
				<slot name="body"></slot>
			</div>
			<div class="text-end mt-4" v-if="hasSlot('end')">
				<slot name="end"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		image: {
			type: Object,
			default: null
		},
	},
    setup(props, { slots }) {
        function hasSlot(name) {
            return !!slots[name]
        }
		function getImage(image) {
			if (image) {
				return require(`@/assets/${image}`)
			}
		}

        return {
            hasSlot,
			getImage
        }
    },
}
</script>


<style scoped>
.card{
    box-shadow: 1px 2px 5px #7f94b9;
}

.card-img-top {
    height: 15rem;
    object-fit: cover;
	object-position: 50% 0%;
}
</style>
