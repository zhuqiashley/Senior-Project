<!-- ======= TEMPLATE ======= -->
<template>
    
</template>

<!-- ======= SCRIPT ======= -->
<script>
import { ref, onBeforeMount } from "vue";
import axios from 'axios';

const achievementsDB = 'http://localhost:3001/api/achievements'
const userDB = 'http://localhost:3001/api/userpost'

export default {
    components:
    {

    },
    setup() {
        //get user id
        //const id = localStorage.getItem('ID'); 

        //get achievement
        //check achievement requirements
        //award achievement & update user profile - event triggered  w/ pop-up of badge icon

        //Achievement Data to insert to database 
        //const BadgeID = ref('')
        //const AchievementTitle = ref('')
        //const AchievementDescription = ref('')
        //const AchievementRequirements = ref('')
        //const giveBadge = ref('')
        //const removeBadge = ref('')

        // access achievement database for display 
        /*
        onBeforeMount(async () => {
            await axios.get(achievementsDB)
                .then(response => {
                    achievements.value = response.data;

                }).catch(err => {
                    console.error(err);
                });
            },
        );
        */
       /*
       // Insert data into achievement table
	    async function postBadge(){

		    const submitObject = {
			    AchievementTitle: this.AchievementTitle,
			    AchievementDescription: this.AchievementDescription,
		    }

		    // Front End error handling goes here
		
		    await axios.post(AchievementsDB, submitObject)
			    .then((res) => {
				    submitObject.BadgeID = res.data.insertId
				    achievements.value.push(submitObject)
			    }).catch(err => {
				    console.error(err)
			    })
	    }
        */
    },
}
</script>

<!-- ======= STYLE ======= -->

