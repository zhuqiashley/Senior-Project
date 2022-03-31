<!-- ======= TEMPLATE ======= -->
<template>
    <!-- popup modal for adding classes - adapted from digitalocean.com -->
		<div class="container mt-4 d-flex justify-content-end">
			<Modal  v-show="isModalVisible" @close="closeModal">
                <template v-slot:header>
                    <h1>{{ achievements.title }}</h1>
                </template>

                <template v-slot:body>
                    <p>{{ achievements.description }}</p>
                    <img src= {{ achivements.img }} class="img-fluid animated" alt= {{ achievements.alt}}>
                    <p>You can view your earned badge in your profile</p>
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
import modal from '@/components/Modal.vue'
import achievements from '@/views/Achievements.vue'

let achievementsDB = 'http://localhost:3001/api/achievements'

// send HTTP request 
// check user session

export default{
    components:
    {
        Modal, 
        achievements
    },
    setup() {

        const isModalVisible = ref(false) // setup for popup add course modal

         // access event database for display
        onBeforeMount(async () => {
            await axios.get(achievementsDB)
                .then(response => {
                    achievements.value = response.data;

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

        // Insert data into event table
	    async function badgesInsert(){

		const submitObjects = {
			AchievementTitle: this.achievements.title,
			AchievementDescription: this.achievements.description,
			AchievementImage: this.achievements.img,
		}

		// Front End error handling goes here
		
		await axios.post(achievementsDB, submitObjects)
			.then((res) => {
				submitObjects.BadgeID = res.data.insertId
				achievements.value.push(submitObjects)
			}).catch(err => {
				console.error(err)
			})
	}


        return {
            badgesInsert, 
            isModalVisible, 
            showModal,
            closeModal
        }
    },
}
</script>

<!-- ======= STYLE ======= -->
