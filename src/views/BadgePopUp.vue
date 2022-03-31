<!-- ======= TEMPLATE ======= -->
<template>
    <!-- popup modal for adding classes - adapted from digitalocean.com -->
		<div class="container mt-4 d-flex justify-content-end">
            <button type="button" class="btn btn-success" @click="showModal">
				View Achievement
			</button>
			<Modal  v-show="isModalVisible" @close="closeModal">
                <template v-slot:header>
                    <h1>{{ Achievements.AchievementTitle }}</h1>
                </template>

                <template v-slot:body>
                    <p>{{ Achievements.AchievementDescription }}</p>
                    <img src= {{ Achievements.BadgeImage }} class="img-fluid animated" alt= "">
                    <p>You can now view your earned badge in your profile</p>
                </template>

                <template v-slot:footer>
                    <div>
                        <button @click="$refs.modalName.closeModal()">Dismiss</button>
                    </div>
                </template>
            </Modal>
		</div>
	<!-- End popup modal -->
</template>

<!-- ======= SCRIPT ======= -->
<script>
// import components 
import axios from 'axios'
//import modal from '@/components/Modal.vue'
//import achievements from '@/views/Achievements.vue'
import { ref, onBeforeMount } from "vue";

let achievementsDB = 'http://localhost:3001/api/achievements'
//let userDB = 'http://localhost:3001/api/user'

export default{

    components:
    {
        //Modal, 
    },

    setup() {

        const isModalVisible = ref(false) // setup for popup add course modal
        const Achievements = ref([])

        // access achievement database for display
        onBeforeMount(async () => {
            await axios.get(achievementsDB)
                .then(response => {
                    Achievements.value = response.data;

                }).catch(err => {
                    console.error(err);
            });
		},
	);

    // Show/Close add course modal
	function showModal() {
        isModalVisible.value = true;
    }

    function closeModal() {
        isModalVisible.value = false;
    }

    //Function for checking for Achivement Requirements 
    //If requirements are satisfied, post to user database, display modal, update achievements page

    return {
        isModalVisible, 
        showModal,
        closeModal
    }
  },
}
</script>

<!-- ======= STYLE ======= -->
