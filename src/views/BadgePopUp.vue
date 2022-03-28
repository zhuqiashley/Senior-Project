<!-- ======= TEMPLATE ======= -->
<template>
    
</template>

<!-- ======= SCRIPT ======= -->
<script>
// import componets 
import axios from 'axios'
//import modal from '@/components/Modal.vue'

let achievementsDB = 'http://localhost:3001/api/achievements'

// send HTTP request 
// check user session

export default{
    components:
    {
        //Modal,
        //button
    },
    setup() {
        //que alerts based on requirements from achievements.vue
        
        let badgesInsert = () => {

            //Badge Values 
            let values = [
                ['Welcome to the Class', 'Earned when user makes account'],
                ['E-Learning Newbie', 'Earned when user completes first lesson']
            ];

            //Insert to Achievements table
            axios.post(achievementsDB, values).then(res=>{
                console.log(res);
            }).catch(e=>{
                console.error(e);
            });
        };

        return {
            badgesInsert,
        }
    },
}
</script>

<!-- ======= STYLE ======= -->
