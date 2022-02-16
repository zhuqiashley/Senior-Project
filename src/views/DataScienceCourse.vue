<!-- ====== TEMPLATE ====== -->
<template>
    <custom-header title="My Courses"></custom-header>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'

export default{
    components:
    {
        CustomHeader,
    },
    setup() {
        
    },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>
.card {
	width: 34rem;
}

.parent {
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	flex: 1;
}

</style>